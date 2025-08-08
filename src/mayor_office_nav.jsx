import React from 'react';
import {
    FaTachometerAlt, FaChartBar, FaCommentDots, FaMoneyBillWave,
    FaExclamationTriangle, FaFileAlt, FaBalanceScale, FaHome, FaClipboardList
} from 'react-icons/fa';
import { mayorOfficePages } from './mayor_office_constants.ts';

const icons = [
    <FaTachometerAlt />, <FaChartBar />, <FaChartBar />, <FaCommentDots />, <FaMoneyBillWave />,
    <FaExclamationTriangle />, <FaFileAlt />, <FaBalanceScale />, <FaHome />, <FaClipboardList />
];

const MayorOfficeNav = ({ activeIndex, setActiveIndex }) => {
    return (
        <nav className="sidebar">
            {mayorOfficePages.map((item, index) => (
                <div
                    key={index}
                    className={`sidebar-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {icons[index]} {item.label}
                </div>
            ))}
        </nav>
    );
};

export default MayorOfficeNav;
