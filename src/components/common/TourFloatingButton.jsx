import React, { useState } from 'react';
import { startTour } from '../../hooks/useTour';

/**
 * TourFloatingButton
 * 
 * A small floating "?" button fixed in the bottom-right corner of any view.
 * On click it triggers a driver.js tour showing only the steps whose target
 * elements exist in the current DOM.
 */
const TourFloatingButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            id="tour-floating-button"
            onClick={startTour}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title="Start Feature Tour"
            aria-label="Start Feature Tour"
            style={{
                position: 'fixed',
                bottom: '70px',     // sits above the footer
                right: '18px',
                zIndex: 9000,
                width: hovered ? 'auto' : '38px',
                height: '38px',
                borderRadius: '19px',
                background: hovered ? '#0052cc' : '#1a1a1a',
                border: '1px solid #2684ff',
                color: '#2684ff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: hovered ? '0 14px' : '0',
                boxShadow: hovered
                    ? '0 4px 18px rgba(0,82,204,0.5)'
                    : '0 2px 8px rgba(0,0,0,0.4)',
                transition: 'all 0.2s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '0.82em',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
            }}
        >
            {/* Question-mark icon */}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            {hovered && <span>Tour</span>}
        </button>
    );
};

export default TourFloatingButton;
