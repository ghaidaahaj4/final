import React, { useState, useEffect, useRef } from 'react';

const LogoutTooltip = ({ displaystatus, logout }) => {
    const [visible, setVisible] = useState(displaystatus);
    const tooltipRef = useRef(null);

    // Function to hide the tooltip
    const hideTooltip = () => {
        setVisible(false);
    };

    // Timer for auto-hiding the tooltip
    const resetTimer = () => {
        setTimeout(() => {
            hideTooltip();
        }, 15000000); // 15 seconds
    };

    // Handle click outside the tooltip
    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            hideTooltip();
        }
    };

    // Set up the event listener for click outside
    useEffect(() => {
        if (visible) {
            document.addEventListener('click', handleClickOutside);
            resetTimer();
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [visible]);

    useEffect(() => {
        setVisible(displaystatus);
    }, [displaystatus]);

    return (
        <div className="relative inline-block">
            {visible && (
                <div
                    ref={tooltipRef}
                    className="absolute top-5 right-0 mt-2 z-50"
                >
                    <button
                        onClick={() => {
                            logout();
                            hideTooltip();
                        }}
                        className="flex items-center justify-center min-w-[100px] shadow-lg gap-3 px-4 py-2 rounded bg-amber-200 text-black"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default LogoutTooltip;
