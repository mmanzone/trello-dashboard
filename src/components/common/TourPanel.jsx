import React, { useEffect, useRef } from 'react';
import { setTourStatus } from '../../hooks/useTourStatus';

/**
 * TourPanel
 * 
 * A slide-in side panel that renders tour.html in an iframe.
 * The panel is semi-transparent and overlays the right side of the screen
 * so users can still interact with the app behind it.
 * 
 * Props:
 *   onClose  → called when user closes or skips the tour
 */
const TourPanel = ({ onClose }) => {
    const panelRef = useRef(null);

    // Animate in on mount
    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;
        // Force a reflow before starting the transition
        el.style.transform = 'translateX(100%)';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.transform = 'translateX(0)';
            });
        });
    }, []);

    const handleSkip = () => {
        setTourStatus('skipped');
        if (panelRef.current) {
            panelRef.current.style.transform = 'translateX(100%)';
        }
        setTimeout(onClose, 300);
    };

    const handleComplete = () => {
        setTourStatus('completed');
        if (panelRef.current) {
            panelRef.current.style.transform = 'translateX(100%)';
        }
        setTimeout(onClose, 300);
    };

    return (
        <>
            {/* Semi-transparent backdrop — clickable to close */}
            <div
                onClick={handleComplete}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.45)',
                    zIndex: 9998,
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                }}
                aria-label="Close tour"
            />

            {/* Slide-in Panel */}
            <div
                ref={panelRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: 'min(480px, 92vw)',
                    height: '100vh',
                    background: '#121212',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '-8px 0 32px rgba(0,0,0,0.6)',
                    transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: 'translateX(100%)',
                    borderLeft: '1px solid #2a2a2a',
                }}
            >
                {/* Panel Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderBottom: '1px solid #2a2a2a',
                    background: '#1a1a1a',
                    flexShrink: 0,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.05em', fontWeight: 700, color: '#fff' }}>
                            ✨ Trellops Feature Tour
                        </span>
                        <span style={{
                            fontSize: '0.65em',
                            background: '#0052cc',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                        }}>
                            GUIDE
                        </span>
                    </div>

                    <div style={{ display: 'flex', align: 'center', gap: '8px' }}>
                        <button
                            onClick={handleSkip}
                            style={{
                                background: 'transparent',
                                border: '1px solid #444',
                                color: '#999',
                                padding: '5px 12px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.83em',
                                fontWeight: 600,
                            }}
                            title="Skip the tour and don't show again"
                        >
                            Skip Tour
                        </button>
                        <button
                            onClick={handleComplete}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#888',
                                fontSize: '1.3em',
                                cursor: 'pointer',
                                lineHeight: 1,
                                padding: '0 4px',
                                marginLeft: '4px',
                            }}
                            title="Close"
                            aria-label="Close tour panel"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* iframe — loads tour.html */}
                <iframe
                    src="/tour.html"
                    title="Trellops Feature Tour"
                    style={{
                        flex: 1,
                        border: 'none',
                        width: '100%',
                        background: '#121212',
                    }}
                />
            </div>
        </>
    );
};

export default TourPanel;
