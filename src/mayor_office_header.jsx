import React from 'react';

const MayorOfficeHeader = ({ iconText, badgeIcon, badgeText }) => {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-icon">{iconText.split(" ")[0]}</span>
                {iconText.split(" ").slice(1).join(" ")}
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search compliance items, audit findings, cases..."
                    className="search-input"
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="header-right">
                <span className="office-title">OFFICE OF THE MAYOR</span>
                <div className="status-badge warning">
                    <span className="status-icon">{badgeIcon}</span>
                    {badgeText}
                </div>
            </div>
        </header>
    );
};

export default MayorOfficeHeader;
