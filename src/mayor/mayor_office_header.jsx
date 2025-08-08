import React from 'react';

export default function MayorOfficeHeader({ iconText = '🏛️ OFFICE OF THE MAYOR', badgeIcon = '✅', badgeText = 'EXECUTIVE CONSOLE', alertBadgeText, officeTitle = 'OFFICE OF THE MAYOR' }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">{iconText}</div>
        <div className="search-container">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input type="text" className="search-input" placeholder="Search alerts, teams, or resources..." />
        </div>
      </div>
      <div className="header-right">
        {alertBadgeText ? (<div className="alert-badge">{alertBadgeText}</div>) : null}
        <span className="office-title">{officeTitle}</span>
        <div className="status-badge"><span className="status-icon">{badgeIcon}</span> {badgeText}</div>
      </div>
    </header>
  );
}


