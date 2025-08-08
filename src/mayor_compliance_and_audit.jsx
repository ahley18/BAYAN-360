import React, { useState } from 'react';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';
import { GlobalStyle } from './mayor_office_styles.ts';
import { mayorOfficePages } from './mayor_office_constants.ts';

const MayorComplianceAndAudit = () => {
    const [activeIndex, setActiveIndex] = useState(9); // Default to Compliance

    const currentPage = mayorOfficePages[activeIndex];

    return (
        <>
            <GlobalStyle />
            <div className="mayor-page" style={{ display: 'flex', minHeight: '100vh' }}>
                <MayorOfficeNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <MayorOfficeHeader
                        iconText={currentPage.iconText}
                        badgeIcon={currentPage.badgeIcon}
                        badgeText={currentPage.badgeText}
                    />

                    <div className="mayor-body" style={{ padding: '16px' }}>
                        <div className="alert-banner">
                            <strong>{currentPage.badgeIcon} {currentPage.badgeText}</strong>
                            <p>
                                Sample dynamic page content for <strong>{currentPage.label}</strong>.
                                Customize as needed per section.
                            </p>
                            <button className="action-btn">TAKE ACTION</button>
                        </div>

                        <div className="audit-tabs">
                            <span className="tab active">Main</span>
                            <span className="tab">Details</span>
                            <span className="tab">Reports</span>
                        </div>

                        <div className="content-placeholder">
                            <p>[Dynamic content goes here for {currentPage.label}]</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MayorComplianceAndAudit;
