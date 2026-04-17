import React from 'react';
import { setTourStatus } from '../../hooks/useTourStatus';

/**
 * TourWelcomeModal
 * 
 * Shown once to first-time users immediately after login.
 * Asks if they want to take the guided tour.
 * 
 * Props:
 *   onStartTour  → user clicked "Start Tour"
 *   onSkip       → user clicked "Skip for now"
 */
const TourWelcomeModal = ({ onStartTour, onSkip }) => {
    const handleSkip = () => {
        setTourStatus('skipped');
        onSkip();
    };

    const handleStart = () => {
        setTourStatus('pending');
        onStartTour();
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
        }}>
            <div style={{
                background: '#1e1e1e',
                borderRadius: '16px',
                padding: '40px',
                maxWidth: '460px',
                width: '90%',
                boxShadow: '0 16px 60px rgba(0,0,0,0.7)',
                border: '1px solid #2a2a2a',
                textAlign: 'center',
                animation: 'tourModalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
                <style>{`
                    @keyframes tourModalIn {
                        from { opacity: 0; transform: scale(0.85) translateY(20px); }
                        to   { opacity: 1; transform: scale(1) translateY(0); }
                    }
                `}</style>

                {/* Icon */}
                <div style={{ fontSize: '2.8em', marginBottom: '16px' }}>✨</div>

                {/* Title */}
                <h2 style={{
                    margin: '0 0 12px',
                    color: '#ffffff',
                    fontSize: '1.4em',
                    fontWeight: 700,
                }}>
                    Welcome to Trellops!
                </h2>

                {/* Body */}
                <p style={{
                    color: '#aaaaaa',
                    fontSize: '0.95em',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                }}>
                    Looks like it's your first time here. Would you like a quick guided tour through the key features — dashboards, statistics, AI summaries, and the map view?
                </p>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button
                        onClick={handleSkip}
                        style={{
                            background: 'transparent',
                            border: '1px solid #444',
                            color: '#999',
                            padding: '10px 22px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.9em',
                            fontWeight: 600,
                        }}
                    >
                        Skip for now
                    </button>
                    <button
                        onClick={handleStart}
                        style={{
                            background: '#0052cc',
                            border: 'none',
                            color: 'white',
                            padding: '10px 26px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.9em',
                            fontWeight: 700,
                            boxShadow: '0 4px 14px rgba(0,82,204,0.45)',
                        }}
                    >
                        Start Tour →
                    </button>
                </div>

                {/* Fine print */}
                <p style={{ marginTop: '18px', fontSize: '0.78em', color: '#666' }}>
                    You can always open the tour from the footer of the Settings page.
                </p>
            </div>
        </div>
    );
};

export default TourWelcomeModal;
