/**
 * useTourStatus
 * 
 * Manages the local storage key TRELLOPS_TOUR_STATUS which tracks
 * whether the current user has seen, skipped, or completed the feature tour.
 * 
 * Possible values:
 *   undefined / null  → first-time user, never prompted
 *   'pending'         → prompted, hasn't acted yet
 *   'skipped'         → user dismissed or clicked Skip
 *   'completed'       → user opened and finished / closed the tour
 */

const TOUR_KEY = 'TRELLOPS_TOUR_STATUS';

export const getTourStatus = () => {
    try {
        return localStorage.getItem(TOUR_KEY) || null;
    } catch {
        return null;
    }
};

export const setTourStatus = (status) => {
    try {
        localStorage.setItem(TOUR_KEY, status);
    } catch {
        // ignore storage errors
    }
};

export const isFirstTimeUser = () => getTourStatus() === null;
