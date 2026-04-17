import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

/**
 * Tour step definitions.
 * Each step targets an element that may or may not be in the DOM depending on
 * which view is currently active. Steps whose elements are absent are skipped
 * automatically by `startTour()`.
 */
const TOUR_STEPS = [
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
    {
        element: '#nav-map-button',
        popover: {
            title: 'Visualise Geographically',
            description: 'Switch to Map View to see your cards plotted based on addresses found in their descriptions.',
        },
    },
];

/**
 * startTour()
 * 
 * Filters TOUR_STEPS to those whose target elements currently exist in the DOM
 * and drives the user through them using driver.js.
 * 
 * Call this from any view — it will always show only the steps relevant to
 * what is currently rendered on screen.
 */
export const startTour = () => {
    const availableSteps = TOUR_STEPS.filter(step => {
        if (!step.element) return true; // text-only steps are always shown
        return !!document.querySelector(step.element);
    });

    if (availableSteps.length === 0) {
        console.warn('[Tour] No tour elements found in current view.');
        return;
    }

    const driverObj = driver({
        showProgress: true,
        animate: true,
        overlayOpacity: 0.6,
        smoothScroll: true,
        allowClose: true,
        showButtons: ['next', 'previous', 'close'],
        nextBtnText: 'Next →',
        prevBtnText: '← Back',
        doneBtnText: 'Done',
        steps: availableSteps,
        onDestroyStarted: () => {
            driverObj.destroy();
        },
    });

    driverObj.drive();
};

export default startTour;
