import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaTachometerAlt, FaChartBar, FaCommentDots, FaMoneyBillWave,
    FaExclamationTriangle, FaFileAlt, FaBalanceScale, FaHome, FaClipboardList
} from 'react-icons/fa';
import { mayorOfficePages } from './mayor_office_constants.ts';

const iconSize = 16;
const icons = [
    <FaTachometerAlt size={iconSize} className="sidebar-icon" />,
    <FaChartBar size={iconSize} className="sidebar-icon" />,
    <FaChartBar size={iconSize} className="sidebar-icon" />,
    <FaCommentDots size={iconSize} className="sidebar-icon" />,
    <FaMoneyBillWave size={iconSize} className="sidebar-icon" />,
    <FaExclamationTriangle size={iconSize} className="sidebar-icon" />,
    <FaFileAlt size={iconSize} className="sidebar-icon" />,
    <FaBalanceScale size={iconSize} className="sidebar-icon" />,
    <FaHome size={iconSize} className="sidebar-icon" />,
    <FaClipboardList size={iconSize} className="sidebar-icon" />
];

const MayorOfficeNav = ({ activeIndex, setActiveIndex }) => {
    const location = useLocation();
    return (
        <nav className="sidebar">
            {mayorOfficePages.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className={`sidebar-item ${location.pathname === item.path || activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {icons[index]} {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default MayorOfficeNav;
