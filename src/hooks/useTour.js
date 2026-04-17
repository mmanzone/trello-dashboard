import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

/**
 * startTour(callbacks)
 *
 * Drives the user through a contextual tour of Trellops using driver.js.
 *
 * The tour is split into three phases that mirror the app's views:
 *   Phase 1 – Dashboard (steps that live on the main dashboard / landing)
 *   Phase 2 – Map View  (steps that require the map to be visible)
 *   Phase 3 – Settings  (steps that require the settings panel to be open)
 *
 * Cross-view transitions use driver.js's per-step onNextClick to trigger React
 * state changes via the provided callbacks, then wait for the new DOM to settle
 * before calling driverObj.moveNext().
 *
 * @param {Object} callbacks
 *   navigateToMap   – () => void  – switches the app to the Map view
 *   openSettings    – () => void  – opens the Settings panel
 */
export const startTour = ({ navigateToMap, openSettings } = {}) => {

    // ─────────────────────────────────────────────────────────────────────────
    // Step definitions
    // ─────────────────────────────────────────────────────────────────────────

    // Phase 1: Steps visible on the landing page or Dashboard
    const dashboardSteps = [
        {
            element: '#login-button',
            popover: {
                title: 'Welcome & Login',
                description: 'Authorise Trellops with your Trello account to securely access your boards using a local-first approach.',
            },
        },
        {
            element: '#board-selection-container',
            popover: {
                title: 'Connect Your Board',
                description: 'Select a board to start transforming your Trello data into a visual dashboard.',
            },
        },
        {
            element: '#footer-settings-button',
            popover: {
                title: 'Configure Your View',
                description: 'Open Settings to define how your lists are grouped and customized.',
            },
        },
        {
            element: '.add-block-button',
            popover: {
                title: 'Create Logical Blocks',
                description: "Group related lists into Blocks like 'Active' or 'Done' to see high-level progress at a glance.",
            },
        },
        {
            element: '.unassigned-lists-container',
            popover: {
                title: 'Organise Your Tiles',
                description: 'Drag Trello lists into your Blocks to assign them a dashboard position and custom colour.',
            },
        },
        {
            element: '#nav-stats-button',
            popover: {
                title: 'Explore Statistics & AI',
                description: "View charts of your team's activity or generate a plain-English AI summary of board progress.",
            },
        },
    ];

    // Transition step: shown on Dashboard, triggers navigation to Map
    const transitionToMapStep = {
        element: '#nav-map-button',
        popover: {
            title: 'Switch to Map View',
            description: 'Click the Map View button to see your cards plotted on a map. The tour will continue once the map loads.',
            // Hide driver.js "Next" so the user clicks the real button OR we handle it via onNextClick
        },
        onNextClick: () => {
            if (typeof navigateToMap === 'function') {
                navigateToMap();
                // Phase 2 will be started after navigation by startMapPhase()
                // Destroy the current driver — Phase 2 driver will be created fresh
                driverObj.destroy();
                setTimeout(() => startMapPhase(), 800);
            } else {
                // No callback — just proceed as normal
                driverObj.moveNext();
            }
        },
    };

    // Phase 2: Steps visible only in the Map view
    const mapSteps = [
        {
            element: '#basemap-selector',
            popover: {
                title: 'Change Your Basemap',
                description: 'Switch between Roadmap, Satellite, Terrain, or Dark Mode to best visualise your data.',
            },
        },
        {
            element: '#map-filter-panel',
            popover: {
                title: 'Filter Map Pins',
                description: 'Narrow down visible pins by Trello label or Block to focus on specific work.',
            },
        },
    ];

    // Transition step: shown in Map, triggers navigation to Settings
    const transitionToSettingsStep = {
        element: '#footer-settings-button',
        popover: {
            title: 'Refine Your Configuration',
            description: 'Click Settings to access advanced configuration — we will explore the Map and General settings tabs next.',
        },
        onNextClick: () => {
            if (typeof openSettings === 'function') {
                openSettings();
                mapDriverObj.destroy();
                setTimeout(() => startSettingsPhase(), 600);
            } else {
                mapDriverObj.moveNext();
            }
        },
    };

    // Phase 3: Steps visible only when Settings is open
    const settingsSteps = [
        {
            element: '#settings-tab-map',
            popover: {
                title: 'Map Settings',
                description: 'Assign custom icons to your Blocks so you can distinguish job types geographically, and configure Street View and geocoding options.',
            },
        },
        {
            element: '#settings-tab-other',
            popover: {
                title: 'General Settings',
                description: "Customise terminology, enable Slideshow Mode, configure AI prompts, or prevent your screen from sleeping — all from the Other Board Settings tab.",
            },
        },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // Helper: filter a step list to only elements present in the DOM
    // ─────────────────────────────────────────────────────────────────────────
    const filterByDOM = (steps) =>
        steps.filter(step =>
            !step.element || !!document.querySelector(step.element)
        );

    // ─────────────────────────────────────────────────────────────────────────
    // Phase 1 – Dashboard driver
    // ─────────────────────────────────────────────────────────────────────────
    let driverObj;
    let mapDriverObj;
    let settingsDriverObj;

    const startDashboardPhase = () => {
        const availableSteps = filterByDOM(dashboardSteps);
        const mapTransition = filterByDOM([transitionToMapStep]);

        // If the map button isn't visible either, skip the transition entirely
        const steps = [...availableSteps, ...mapTransition];

        if (steps.length === 0) {
            console.warn('[Tour] No dashboard elements found.');
            return;
        }

        driverObj = driver({
            showProgress: true,
            animate: true,
            overlayOpacity: 0.6,
            smoothScroll: true,
            allowClose: true,
            showButtons: ['next', 'previous', 'close'],
            nextBtnText: 'Next →',
            prevBtnText: '← Back',
            doneBtnText: 'Done',
            steps,
            onDestroyStarted: () => driverObj.destroy(),
        });

        driverObj.drive();
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Phase 2 – Map driver
    // ─────────────────────────────────────────────────────────────────────────
    const startMapPhase = () => {
        const availableMapSteps = filterByDOM(mapSteps);
        const settingsTransition = filterByDOM([transitionToSettingsStep]);
        const steps = [...availableMapSteps, ...settingsTransition];

        if (steps.length === 0) {
            console.warn('[Tour] No map elements found — skipping to settings phase.');
            if (typeof openSettings === 'function') {
                openSettings();
                setTimeout(() => startSettingsPhase(), 600);
            }
            return;
        }

        mapDriverObj = driver({
            showProgress: true,
            animate: true,
            overlayOpacity: 0.6,
            smoothScroll: true,
            allowClose: true,
            showButtons: ['next', 'previous', 'close'],
            nextBtnText: 'Next →',
            prevBtnText: '← Back',
            doneBtnText: 'Done',
            steps,
            onDestroyStarted: () => mapDriverObj.destroy(),
        });

        mapDriverObj.drive();
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Phase 3 – Settings driver
    // ─────────────────────────────────────────────────────────────────────────
    const startSettingsPhase = () => {
        const steps = filterByDOM(settingsSteps);

        if (steps.length === 0) {
            console.warn('[Tour] No settings elements found.');
            return;
        }

        settingsDriverObj = driver({
            showProgress: true,
            animate: true,
            overlayOpacity: 0.6,
            smoothScroll: true,
            allowClose: true,
            showButtons: ['next', 'previous', 'close'],
            nextBtnText: 'Next →',
            prevBtnText: '← Back',
            doneBtnText: '🎉 Done',
            steps,
            onDestroyStarted: () => settingsDriverObj.destroy(),
        });

        settingsDriverObj.drive();
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Decide where to start based on what's in the DOM right now
    // ─────────────────────────────────────────────────────────────────────────
    const inMapView   = !!document.querySelector('#basemap-selector') || !!document.querySelector('#map-filter-panel');
    const inSettings  = !!document.querySelector('#settings-tab-map') || !!document.querySelector('#settings-tab-other');

    if (inSettings) {
        startSettingsPhase();
    } else if (inMapView) {
        startMapPhase();
    } else {
        startDashboardPhase();
    }
};

export default startTour;
