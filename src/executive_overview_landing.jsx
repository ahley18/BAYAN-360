import React, { useEffect, useMemo, useRef, useState } from 'react';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';
import { executiveOverviewLandingCss } from './executive_overview_landing.ts';

function InlineStyle() { return <style>{executiveOverviewLandingCss}</style>; }

export default function ExecutiveOverviewLanding() {
    const [activeNavIndex, setActiveNavIndex] = useState(0); // Executive Dashboard
    const [layers, setLayers] = useState({ infra: true, revenue: true, hazard: true, zoning: false, service: false });
    const tooltipRef = useRef(null);

    useEffect(() => () => { if (tooltipRef.current && tooltipRef.current.parentElement) tooltipRef.current.parentElement.removeChild(tooltipRef.current); }, []);

    const kpis = useMemo(() => ([
        ['Revenue Collection', '💰', '₱285.4M', '↑ 12.5% vs last year', 'kpi-green', 'trend-up'],
        ['Active Projects', '🏗️', '47', '↑ 8 new this month', 'kpi-blue', 'trend-up'],
        ['At-Risk Areas', '⚠️', '12', '↓ 3 mitigated', 'kpi-yellow', 'trend-down'],
        ['Critical Issues', '🚨', '5', '→ Requires attention', 'kpi-red', ''],
    ]), []);

    const recentPriorityItems = useMemo(() => ([
        ['CRITICAL - Immediate Action Required', '#ef4444', 'Flood Control Project Delay: Phase 2 of flood control in Barangay Riverside is 45% behind schedule. Risk of flooding before completion. Budget reallocation needed: ₱15.2M', 'priority-critical'],
        ['HIGH PRIORITY', '#f59e0b', 'Revenue Collection Gap: Commercial zone shows 23% collection deficit. Recommend intensified collection drive and business permit compliance check.', 'priority-high'],
        ['HIGH PRIORITY', '#f59e0b', 'Health Center Construction: New health center 65% complete. On track for Q3 opening. Community impact: 15,000 residents.', 'priority-high'],
        ['MEDIUM PRIORITY', '#3b82f6', 'Road Network Expansion: Secondary roads project in agricultural zone progressing well. Economic impact assessment shows potential 12% increase in farm-to-market efficiency.', 'priority-medium'],
    ]), []);

    const onKpiClick = (title) => alert(`Opening detailed ${title} dashboard...`);
    const onButtonAction = (text) => {
        if (text === 'REVIEW NOW') {
            alert('Critical Review:\n\n3 Projects at Risk:\n1. Flood Control Phase 2 - 45% delayed\n2. Market Development - Budget overrun\n3. Road Project A - Land acquisition issue\n\nRecommended actions prepared.');
        } else if (text === 'Schedule Presentation') {
            alert('Scheduling Options:\n• Monday Staff Meeting\n• Department Heads Conference\n• Council Session\n• Public Presentation');
        } else if (text === 'Export Map') {
            alert('Exporting strategic map...\nFormat: High-resolution PDF\nIncluding: All active layers and legends');
        } else if (text === 'Full Screen') {
            alert('Entering full-screen presentation mode...\nPress ESC to exit');
        } else if (text === 'Export Actions') {
            alert('Exporting priority actions...\nFormat: Executive memo\nDistribution: Department heads');
        }
    };

    const projectTypes = {
        '🏗️': 'Road Rehabilitation - ₱45M (65%)',
        '🏥': 'Health Center - ₱125M (40%)',
        '🏫': 'School Building - ₱85M (100%)',
        '🌉': 'Bridge Construction - ₱67M (70%)',
        '🚰': 'Water System - ₱92M (80%)',
    };

    const showTooltip = (e, symbol) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'project-tooltip';
        tooltip.textContent = projectTypes[symbol] || 'Infrastructure Project';
        tooltip.style.top = `${e.currentTarget.offsetTop - 35}px`;
        tooltip.style.left = `${e.currentTarget.offsetLeft - 30}px`;
        e.currentTarget.parentElement.appendChild(tooltip);
        tooltipRef.current = tooltip;
    };

    const hideTooltip = () => {
        const t = tooltipRef.current;
        if (t && t.parentElement) t.parentElement.removeChild(t);
        tooltipRef.current = null;
    };

    const handleExecFormSubmit = (e) => {
        e.preventDefault();
        alert("Executive Brief Generated!\n\nContents:\n• Comprehensive overview map\n• KPI dashboard\n• Priority actions\n• Strategic recommendations\n• Financial summary\n\nReady for Mayor's review");
    };

    return (
        <div className="exec-overview-root">
            <InlineStyle />
            <MayorOfficeHeader iconText="🧭 EXEC DASHBOARD" badgeIcon="✅" badgeText="VIEW" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Executive Dashboard</h1>
                        <p className="page-subtitle">Centralized visual summary of all LGU operations for data-driven leadership and governance oversight</p>
                    </div>

                    <div className="alert-banner">
                        <div className="alert-icon">⚠️</div>
                        <div className="alert-content">
                            <div className="alert-title">Critical Alert: Flood Risk Zone Update</div>
                            <div className="alert-description">3 infrastructure projects in high-risk areas require immediate review. Revenue impact: ₱12.5M</div>
                        </div>
                        <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }} onClick={() => onButtonAction('REVIEW NOW')}>REVIEW NOW</button>
                    </div>

                    <div className="kpi-grid">
                        {kpis.map(([title, icon, value, trend, colorClass, trendClass]) => (
                            <div key={String(title)} className={`kpi-card ${colorClass}`} onClick={() => onKpiClick(String(title))}>
                                <div className="kpi-header">
                                    <div className="kpi-title">{title}</div>
                                    <div className="kpi-icon">{icon}</div>
                                </div>
                                <div className="kpi-value">{value}</div>
                                <div className={`kpi-trend ${trendClass || ''}`}>
                                    <span>{trend.startsWith('↑') ? '↑' : trend.startsWith('↓') ? '↓' : '→'}</span>
                                    <span>{trend.replace(/^.[\s]*/, '')}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">INTEGRATED STRATEGIC MAP</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <button className="btn btn-secondary" onClick={() => onButtonAction('Export Map')}>Export Map</button>
                                    <button className="btn btn-secondary" onClick={() => onButtonAction('Full Screen')}>Full Screen</button>
                                </div>
                            </div>

                            <div className="map-container">
                                <div className="layer-controls">
                                    <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 8 }}>Active Layers</div>
                                    {[
                                        ['Infrastructure Projects', 'infra'],
                                        ['Revenue Zones (AV)', 'revenue'],
                                        ['Hazard Overlays', 'hazard'],
                                        ['Zoning Classes', 'zoning'],
                                        ['Service Coverage', 'service'],
                                    ].map(([label, key]) => (
                                        <label key={String(key)} className="layer-toggle">
                                            <input type="checkbox" className="layer-checkbox" checked={layers[key]} onChange={(e) => setLayers({ ...layers, [String(key)]: e.target.checked })} />
                                            <span>{label}</span>
                                        </label>
                                    ))}
                                </div>

                                {/* Project markers */}
                                {[
                                    ['25%', '30%', '🏗️'],
                                    ['50%', '25%', '🏥'],
                                    ['70%', '45%', '🏫'],
                                    ['35%', '60%', '🌉'],
                                    ['60%', '70%', '🚰'],
                                ].map(([left, top, sym]) => (
                                    <div
                                        key={`${left}-${top}`}
                                        className="project-marker"
                                        style={{ left, top }}
                                        onMouseEnter={(e) => showTooltip(e, String(sym))}
                                        onMouseLeave={hideTooltip}
                                        onClick={() => alert('Opening detailed project view...\nProject analytics, timeline, and financial details available.')}
                                    >
                                        {sym}
                                    </div>
                                ))}

                                {/* Revenue heat zones */}
                                <div className="heat-zone av-high" style={{ left: '20%', top: '20%', width: 150, height: 120, display: layers.revenue ? 'block' : 'none' }} />
                                <div className="heat-zone av-medium" style={{ left: '45%', top: '35%', width: 180, height: 140, display: layers.revenue ? 'block' : 'none' }} />
                                <div className="heat-zone av-low" style={{ left: '65%', top: '50%', width: 120, height: 100, display: layers.revenue ? 'block' : 'none' }} />

                                {/* Hazard overlays */}
                                <div className="map-overlay hazard-overlay" style={{ left: '15%', top: '55%', width: 200, height: 150, borderRadius: '50%', display: layers.hazard ? 'block' : 'none' }} />
                                <div className="map-overlay hazard-overlay" style={{ left: '60%', top: '65%', width: 160, height: 120, borderRadius: '50%', display: layers.hazard ? 'block' : 'none' }} />

                                {/* Infrastructure overlays */}
                                <div className="map-overlay infra-overlay" style={{ left: '30%', top: '25%', width: 100, height: 80, display: layers.infra ? 'block' : 'none' }} />
                                <div className="map-overlay infra-overlay" style={{ left: '55%', top: '40%', width: 120, height: 90, display: layers.infra ? 'block' : 'none' }} />
                            </div>

                            <div className="quick-stats">
                                {[['₱1.2B', 'Project Value'], ['87%', 'Coverage'], ['15,420', 'Affected Pop']].map(([v, l]) => (
                                    <div key={String(l)} className="quick-stat">
                                        <div className="quick-stat-value">{v}</div>
                                        <div className="quick-stat-label">{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">EXECUTIVE CONTROL PANEL</h2>
                            </div>
                            <div className="info-box">🎯 Strategic brief compilation for executive decision-making</div>
                            <form id="executive-form" onSubmit={handleExecFormSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Report Type</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select report type...</option>
                                        <option value="comprehensive">Comprehensive Overview</option>
                                        <option value="infrastructure">Infrastructure Focus</option>
                                        <option value="revenue">Revenue Analysis</option>
                                        <option value="hazard">Risk Assessment</option>
                                        <option value="performance">Performance Review</option>
                                        <option value="strategic">Strategic Planning</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Time Period</label>
                                    <select className="form-select" required defaultValue="weekly">
                                        <option value="weekly">Weekly Summary</option>
                                        <option value="monthly">Monthly Report</option>
                                        <option value="quarterly">Quarterly Review</option>
                                        <option value="annual">Annual Assessment</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Priority Areas</label>
                                    {(() => {
                                        const items = [
                                            ['Infrastructure Development', true],
                                            ['Revenue Generation', true],
                                            ['Risk Mitigation', true],
                                            ['Service Delivery', false],
                                            ['Economic Growth', false],
                                            ['Environmental Impact', false],
                                        ];
                                        const left = items.slice(0, 3);
                                        const right = items.slice(3);
                                        return (
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
                                                <div style={{ display: 'grid', gap: 8 }}>
                                                    {left.map(([label, checked]) => (
                                                        <label key={String(label)} style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                                                            <input type="checkbox" defaultChecked={Boolean(checked)} style={{ margin: 0 }} />
                                                            <span>{label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                <div style={{ display: 'grid', gap: 8 }}>
                                                    {right.map(([label, checked]) => (
                                                        <label key={String(label)} style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                                                            <input type="checkbox" defaultChecked={Boolean(checked)} style={{ margin: 0 }} />
                                                            <span>{label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>

                                <div className="executive-summary">
                                    <div className="summary-header">CURRENT STATUS SUMMARY</div>
                                    {[['Project Completion Rate:', '73%'], ['Revenue Target Achievement:', '89%'], ['Risk Areas Addressed:', '67%'], ['Citizen Satisfaction:', '82%']].map(([l, v]) => (
                                        <div key={String(l)} className="summary-item"><span className="summary-label">{l}</span><span className="summary-value">{v}</span></div>
                                    ))}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Executive Notes</label>
                                    <textarea className="form-textarea" placeholder="Add strategic observations or directives..."></textarea>
                                </div>

                                <div className="workflow-status">
                                    <span className="workflow-step step-completed">Compile Data</span>
                                    <span className="workflow-arrow">→</span>
                                    <span className="workflow-step step-active">Render Dashboard</span>
                                    <span className="workflow-arrow">→</span>
                                    <span className="workflow-step step-pending">Mayor Review</span>
                                </div>

                                <div className="decision-matrix">
                                    {[
                                        ['📊', 'View Analytics'],
                                        ['📈', 'Performance Metrics'],
                                        ['🎯', 'Set Priorities'],
                                        ['📋', 'Generate Brief'],
                                    ].map(([icon, label]) => (
                                        <div key={String(label)} className="decision-card" onClick={() => {
                                            if (label === 'View Analytics') {
                                                alert('Opening comprehensive analytics dashboard...\n• Revenue trends\n• Project timelines\n• Risk assessments\n• Performance indicators');
                                            } else if (label === 'Performance Metrics') {
                                                alert('Performance Metrics:\n• Project completion: 73%\n• Budget utilization: 82%\n• Timeline adherence: 68%\n• Quality score: 91%');
                                            } else if (label === 'Set Priorities') {
                                                alert('Priority Setting Interface:\n1. Infrastructure completion\n2. Revenue enhancement\n3. Risk mitigation\n4. Service improvement');
                                            } else if (label === 'Generate Brief') {
                                                alert('Generating executive brief...\nCompiling data from all departments\nPreparing strategic recommendations');
                                            }
                                        }}>
                                            <div className="decision-icon">{icon}</div>
                                            <div className="decision-label">{label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-primary">GENERATE EXECUTIVE BRIEF</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => onButtonAction('Schedule Presentation')}>Schedule Presentation</button>
                                </div>
                            </form>
                        </div>

                        <div className="charts-grid full-width">
                            <div className="chart-card">
                                <h3 style={{ fontSize: 14, marginBottom: 12, color: '#374151' }}>Infrastructure Progress</h3>
                                <div style={{ padding: 10 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, fontSize: 12, color: '#6b7280' }}>
                                        {['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'].map(q => <span key={q}>{q}</span>)}
                                    </div>
                                    <div>
                                        {[
                                            ['Flood Control Phase 2', 'DELAYED', '#ef4444', 55, '₱145M • Due: Aug 30', 10, 45],
                                            ['Central Health Facility', 'ON TRACK', '#10b981', 65, '₱125M • Due: Sep 15', 5, 60],
                                            ['Public Market Development', 'OVER BUDGET', '#f59e0b', 78, '₱123.5M (+18%) • Due: Aug 15', 0, 50],
                                            ['Road Network Expansion', 'ON TRACK', '#10b981', 92, '₱89M • Due: Jul 31', 0, 50],
                                        ].map(([name, status, color, pct, sub, start, width]) => (
                                            <div key={String(name)} style={{ marginBottom: 15 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                                    <span style={{ fontSize: 11, fontWeight: 600 }}>{name}</span>
                                                    <span style={{ fontSize: 10, color }}>{status}</span>
                                                </div>
                                                <div style={{ position: 'relative', height: 20, backgroundColor: '#f3f4f6', borderRadius: 10, overflow: 'hidden' }}>
                                                    <div style={{ position: 'absolute', left: `${start}%`, width: `${width}%`, height: '100%', backgroundColor: color, opacity: 0.3 }}></div>
                                                    <div style={{ position: 'absolute', left: `${start}%`, width: `${Math.min(width, pct)}%`, height: '100%', backgroundColor: color }}></div>
                                                    <div style={{ position: 'absolute', left: `${start + Math.min(width, pct) - 10}%`, top: '50%', transform: 'translateY(-50%)', fontSize: 10, fontWeight: 600, color: 'white' }}>{pct}%</div>
                                                </div>
                                                <div style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>{sub}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10, backgroundColor: '#f9fafb', borderRadius: 6, marginTop: 10 }}>
                                        {[
                                            ['73%', 'AVG COMPLETION', '#374151'],
                                            ['3', 'ON TRACK', '#10b981'],
                                            ['2', 'AT RISK', '#ef4444'],
                                        ].map(([v, l, c]) => (
                                            <div key={String(l)} style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: 16, fontWeight: 'bold', color: c }}>{v}</div>
                                                <div style={{ fontSize: 10, color: '#6b7280' }}>{l}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="chart-card">
                                <h3 style={{ fontSize: 14, marginBottom: 12, color: '#374151' }}>Revenue Trends</h3>
                                <div style={{ padding: 10 }}>
                                    <div style={{ position: 'relative', height: 120, marginBottom: 10 }}>
                                        <div style={{ position: 'absolute', left: 0, top: 0, fontSize: 10, color: '#6b7280' }}>₱300M</div>
                                        <div style={{ position: 'absolute', left: 0, top: 40, fontSize: 10, color: '#6b7280' }}>₱200M</div>
                                        <div style={{ position: 'absolute', left: 0, top: 80, fontSize: 10, color: '#6b7280' }}>₱100M</div>
                                        <div style={{ position: 'absolute', left: 45, bottom: 0, right: 0, height: 100, display: 'flex', alignItems: 'flex-end', gap: 8 }}>
                                            {['₱23.5M', '₱25.8M', '₱27.6M', '₱26.7M', '₱28.2M', '₱29.8M', '₱28.9M'].map((label, idx) => (
                                                <div key={label} style={{ flex: 1, backgroundColor: idx < 5 ? '#3b82f6' : '#10b981', height: `${75 + idx * 3}%`, position: 'relative', borderRadius: '4px 4px 0 0' }}>
                                                    <span style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', fontSize: 9, fontWeight: 600 }}>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ position: 'absolute', bottom: -20, left: 45, right: 0, display: 'flex', fontSize: 9, color: '#6b7280' }}>
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(m => <div key={m} style={{ flex: 1, textAlign: 'center' }}>{m}</div>)}
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 30, padding: 10, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                                        <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Revenue Sources Breakdown</div>
                                        {[
                                            ['#3b82f6', 'Business Permits', '₱125.8M (44%)'],
                                            ['#10b981', 'Real Property Tax', '₱89.4M (31%)'],
                                            ['#f59e0b', 'Market & Fees', '₱42.7M (15%)'],
                                            ['#8b5cf6', 'Other Sources', '₱27.5M (10%)'],
                                        ].map(([color, label, value]) => (
                                            <div key={String(label)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                                    <div style={{ width: 12, height: 12, backgroundColor: color, borderRadius: 2 }}></div>
                                                    <span style={{ fontSize: 10 }}>{label}</span>
                                                </div>
                                                <span style={{ fontSize: 10, fontWeight: 600 }}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10, marginTop: 10 }}>
                                        {[
                                            ['↑12.5%', 'YoY GROWTH', '#10b981'],
                                            ['89.2%', 'OF TARGET', '#374151'],
                                            ['₱34.6M', 'TO TARGET', '#3b82f6'],
                                        ].map(([v, l, c]) => (
                                            <div key={String(l)} style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: 16, fontWeight: 'bold', color: c }}>{v}</div>
                                                <div style={{ fontSize: 10, color: '#6b7280' }}>{l}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">PRIORITY ACTIONS & RECOMMENDATIONS</h2>
                                <button className="btn btn-secondary" onClick={() => onButtonAction('Export Actions')}>Export Actions</button>
                            </div>
                            <ul className="priority-list">
                                {recentPriorityItems.map(([label, color, desc, cls]) => (
                                    <li key={String(label)} className={`priority-item ${cls}`}>
                                        <div className="priority-label" style={{ color }}>{label}</div>
                                        <div><strong>{desc.split(':')[0]}:</strong> {desc.split(':').slice(1).join(':').trim()}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


