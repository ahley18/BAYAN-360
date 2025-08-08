import React, { useEffect, useMemo, useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() { return null; }

export default function ProjectMonitoringGeotracker() {
    const [activeNavIndex, setActiveNavIndex] = useState(1); // Project Monitoring & GeoTracker
    const [filter, setFilter] = useState('All Projects');
    const [viewMode, setViewMode] = useState('Satellite + Projects');
    const [layers, setLayers] = useState({ projects: true, drone: true, photos: true, barangay: false, road: false });
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('Filter applied:', filter);
    }, [filter]);

    const stats = useMemo(() => ([
        ['🏗️', '47', 'Total Projects'],
        ['⚡', '28', 'Ongoing'],
        ['✅', '12', 'Completed'],
        ['⚠️', '5', 'Delayed'],
        ['📋', '2', 'Planned'],
    ]), []);

    const filters = ['All Projects', 'Infrastructure', 'Social Services', 'Health Facilities', 'Education', 'Environment', 'Economic Dev', 'AIP 2025'];

    const onBtn = (text) => {
        if (text.includes('Drone View')) {
            alert('🛰️ Drone View Mode\n\nAvailable surveys:\n• Flood control area (2 days ago)\n• Market construction (1 week ago)\n• School site (Today)\n\nLoading high-resolution imagery...');
        } else if (text.includes('Photos')) {
            alert('📸 Photo Gallery\n\n47 projects documented\n312 total photos\n15 drone surveys\n\nFilter by: Date | Project | Status');
        } else if (text.includes('Export')) {
            alert('📄 Export Options:\n\n• PDF Report with maps\n• Excel project list\n• KML for Google Earth\n• Shape files for GIS\n• Photo archive (ZIP)');
        }
    };

    const onLegendClick = (label) => alert(`Legend: ${label}`);

    const recentUpdates = useMemo(() => ([
        ['🏥 Central Health Facility', 'MILESTONE REACHED', 'status-ongoing', ['📅 Today', '📍 Poblacion', '✅ Structural work 100% complete', '📸 5 new photos']],
        ['🌊 Flood Control System', 'DELAY FLAGGED', 'status-delayed', ['📅 Yesterday', '📍 Riverside', '⚠️ Material delivery delayed by 2 weeks', 'Mayor review pending']],
        ['🏪 Public Market', 'PROGRESS UPDATE', 'status-ongoing', ['📅 2 days ago', '📍 Centro', '📊 78% complete (+5%)', '🛰️ Drone survey completed']],
        ['🛣️ Farm-to-Market Road', 'COMPLETED', 'status-completed', ['📅 3 days ago', '📍 Agricultural Zone', '✅ Final inspection passed', 'Ready for inauguration']],
        ['🏫 School Building', 'PHOTO UPLOAD', 'status-ongoing', ['📅 5 days ago', '📍 West District', '📸 12 progress photos added', 'Foundation work in progress']],
    ]), []);

    return (
        <div className="project-monitoring-root">
            <GlobalStyleMayor />
            <MayorOfficeHeader iconText="🗺️ GEO TRACKER" badgeIcon="✅" badgeText="TRACK PROJECTS" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Project Monitoring & GeoTracker</h1>
                        <p className="page-subtitle">Real-time visualization of infrastructure and social projects with drone imagery, photo documentation, and GIS layers linked to AIP</p>
                    </div>

                    <div className="stats-grid">
                        {stats.map(([icon, value, label]) => (
                            <div key={label} className="stat-card">
                                <div className="stat-icon">{icon}</div>
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="filter-tags">
                        {filters.map((f) => (
                            <div key={f} className={`filter-tag ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</div>
                        ))}
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">GEO-TAGGED PROJECT HEATMAP</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    {['🛰️ Drone View', '📸 Photos', '📄 Export'].map((t) => (
                                        <button key={t} className="btn btn-secondary" onClick={() => onBtn(t)}>{t}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="map-container">
                                <div className="map-controls">
                                    <div className="control-group">
                                        <div className="control-label">View Mode</div>
                                        <select className="form-select" style={{ fontSize: 12, padding: '4px 8px' }} value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                                            {['Satellite + Projects', 'Terrain View', 'Heat Density', 'Timeline View'].map(v => <option key={v}>{v}</option>)}
                                        </select>
                                    </div>
                                    <div className="control-group">
                                        <div className="control-label">Layers</div>
                                        {[
                                            ['Projects', 'projects'],
                                            ['Drone Imagery', 'drone'],
                                            ['Progress Photos', 'photos'],
                                            ['Barangay Bounds', 'barangay'],
                                            ['Road Network', 'road'],
                                        ].map(([label, key]) => (
                                            <label key={String(key)} className="layer-toggle">
                                                <input type="checkbox" className="layer-checkbox" checked={layers[key]} onChange={(e) => setLayers({ ...layers, [String(key)]: e.target.checked })} />
                                                <span>{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="control-group">
                                        <div className="control-label">Filter Status</div>
                                        <select className="form-select" style={{ fontSize: 12, padding: '4px 8px' }} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                                            {['All Status', 'Ongoing Only', 'Delayed Only', 'Completed'].map(s => <option key={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Clusters */}
                                <div className="project-cluster" style={{ left: '25%', top: '20%', width: 80, height: 80 }}><span style={{ fontSize: 18 }}>5</span></div>
                                <div className="project-cluster" style={{ left: '60%', top: '35%', width: 60, height: 60 }}><span style={{ fontSize: 16 }}>3</span></div>

                                {/* Markers */}
                                {[
                                    ['15%', '40%', '🏥', 'marker-ongoing', 'Health Center Construction'],
                                    ['35%', '25%', '🛣️', 'marker-completed', 'Road Improvement'],
                                    ['45%', '50%', '🌊', 'marker-delayed', 'Flood Control'],
                                    ['70%', '30%', '🏫', 'marker-ongoing', 'School Building'],
                                    ['55%', '60%', '🏪', 'marker-ongoing', 'Market Development'],
                                    ['80%', '45%', '🏟️', 'marker-planned', 'Sports Complex'],
                                    ['25%', '65%', '💧', 'marker-completed', 'Water System'],
                                    ['65%', '70%', '🌉', 'marker-ongoing', 'Bridge Construction'],
                                    ['40%', '75%', '🚿', 'marker-delayed', 'Drainage System'],
                                    ['50%', '15%', '👶', 'marker-ongoing', 'Day Care Center'],
                                ].map(([left, top, icon, cls, title]) => (
                                    <div key={`${left}-${top}`} className={`project-marker ${cls}`} style={{ left, top }} title={String(title)} onClick={() => {
                                        const projectInfo = {
                                            '🏥': 'Health Center Construction\nStatus: Ongoing (65%)\nBudget: ₱125M\nContractor: MediBuild Corp.',
                                            '🛣️': 'Road Improvement Project\nStatus: Completed (100%)\nBudget: ₱45M\nContractor: RoadWorks Inc.',
                                            '🌊': 'Flood Control System\nStatus: Delayed (55%)\nBudget: ₱145M\nContractor: HydroTech Solutions',
                                            '🏫': 'School Building Construction\nStatus: Ongoing (40%)\nBudget: ₱85M\nContractor: EduBuild Partners',
                                            '🏪': 'Market Development\nStatus: Ongoing (78%)\nBudget: ₱123M\nContractor: MarketDev Group',
                                            '🏟️': 'Sports Complex\nStatus: Planned\nBudget: ₱200M\nContractor: TBD',
                                            '💧': 'Water System Upgrade\nStatus: Completed (100%)\nBudget: ₱92M\nContractor: AquaTech Systems',
                                            '🌉': 'Bridge Construction\nStatus: Ongoing (35%)\nBudget: ₱67M\nContractor: BridgeWorks Corp.',
                                            '🚿': 'Drainage System\nStatus: Delayed (45%)\nBudget: ₱56M\nContractor: DrainTech Solutions',
                                            '👶': 'Day Care Center\nStatus: Ongoing (30%)\nBudget: ₱15M\nContractor: ChildCare Builders',
                                        };
                                        alert(projectInfo[String(icon)] || 'Project Details');
                                    }}>
                                        {icon}
                                    </div>
                                ))}

                                {/* Photo Markers */}
                                {[
                                    ['35%', '22%'], ['45%', '48%'], ['70%', '28%']
                                ].map(([left, top]) => (
                                    <div key={`${left}-${top}`} style={{ position: 'absolute', left, top, width: 20, height: 20, backgroundColor: '#fbbf24', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, cursor: 'pointer', zIndex: 16 }} onClick={(e) => { e.stopPropagation(); alert('Progress Photos Available:\n\n📸 Site preparation (Week 1)\n📸 Foundation work (Week 4)\n📸 Current progress (Today)\n🛰️ Drone aerial view\n\nClick to view full gallery...'); }}>📸</div>
                                ))}
                            </div>

                            <div className="legend">
                                {[
                                    ['#3b82f6', 'Ongoing (28)'],
                                    ['#10b981', 'Completed (12)'],
                                    ['#ef4444', 'Delayed (5)'],
                                    ['#6b7280', 'Planned (2)'],
                                    ['#fbbf24', '📸 Photo Available'],
                                ].map(([color, label]) => (
                                    <div key={String(label)} className="legend-item" onClick={() => onLegendClick(String(label))}>
                                        <div className="legend-color" style={{ backgroundColor: String(color) }}></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">PROJECT ENTRY & TRACKING</h2>
                            </div>
                            <div className="process-flow">
                                <span className="flow-step">Engineering Input</span>
                                <span className="flow-arrow">→</span>
                                <span className="flow-step flow-active">Auto-Sync</span>
                                <span className="flow-arrow">→</span>
                                <span className="flow-step">Map Display</span>
                                <span className="flow-arrow">→</span>
                                <span className="flow-step">Mayor Review</span>
                            </div>
                            <form id="project-form" onSubmit={(e) => { e.preventDefault(); alert('Project saved and geo-tagged successfully!\n\n✅ Data synced with Engineering/Planning\n📍 Location mapped on GeoTracker\n📊 Added to project timeline\n🔔 Mayor notified for review'); }}>
                                <div className="form-group">
                                    <label className="form-label">Project Name *</label>
                                    <input type="text" className="form-input" placeholder="e.g., Barangay Health Center Phase 2" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Location *</label>
                                        <select className="form-select" required defaultValue="">
                                            <option value="">Select Barangay...</option>
                                            {['Barangay Poblacion', 'Barangay Riverside', 'Barangay Hillside', 'Barangay Centro', 'Barangay West'].map(b => <option key={b}>{b}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">GPS Coordinates</label>
                                        <input type="text" className="form-input" placeholder="14.5995° N, 120.9842° E" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Contractor *</label>
                                    <input type="text" className="form-input" placeholder="e.g., ABC Construction Corp." required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Start Date *</label>
                                        <input type="date" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Target Completion *</label>
                                        <input type="date" className="form-input" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Budget (₱)</label>
                                        <input type="number" className="form-input" placeholder="0.00" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">AIP Reference</label>
                                        <input type="text" className="form-input" placeholder="AIP-2025-INF-001" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Project Status *</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select Status...</option>
                                        {['Planning', 'Procurement', 'Ongoing', 'Delayed', 'On Hold', 'Completed'].map(s => <option key={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Progress (%)</label>
                                    <input type="range" className="form-input" min="0" max="100" value={progress} onChange={(e) => setProgress(parseInt(e.target.value, 10))} />
                                    <div style={{ textAlign: 'center', marginTop: 4, fontSize: 14, fontWeight: 600 }}>
                                        <span>{progress}</span>%
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Attachments</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => alert('📸 Photo Upload\n\nAccepted formats: JPG, PNG\nMax size: 10MB\nGeo-tagging: Automatic\n\nDrag files or click to browse...')}>📸 Add Photos</button>
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => alert('🛰️ Drone Integration\n\nConnecting to:\n• DJI FlightHub\n• Pix4D Cloud\n• Custom drone feeds\n\nReal-time streaming available')}>🛰️ Link Drone</button>
                                    </div>
                                </div>
                                <div className="photo-grid">
                                    {['📸 Site Photo 1', '📸 Progress Photo', '🛰️ Drone View', '+ Add More'].map((p) => (
                                        <div key={p} className="photo-item" onClick={() => {
                                            if (p.includes('Add More')) {
                                                alert('📸 Add More Photos\n\nDrag and drop or click to browse\nAuto geo-tagging enabled\nProgress documentation required');
                                            } else {
                                                alert(`Viewing: ${p}\n\nDate: ${new Date().toLocaleDateString()}\nLocation: Geo-tagged\nResolution: 4K\nClick to enlarge...`);
                                            }
                                        }}>{p}</div>
                                    ))}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Notes / Issues</label>
                                    <textarea className="form-textarea" placeholder="Enter any project notes, issues, or delays..."></textarea>
                                </div>
                                <div className="approval-section">
                                    <div className="approval-header">🔐 Mayor's Approval Actions</div>
                                    <div className="approval-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                        <button type="button" className="btn btn-success" onClick={() => alert('✅ Milestone Validated!\n\nProject: Central Health Facility\nMilestone: Structural Completion\nProgress: 65%\nNext Review: End of month\n\nNotification sent to Engineering Department')}>✅ Validate Milestone</button>
                                        <button type="button" className="btn btn-warning" onClick={() => alert('🚩 Delay Flagged!\n\nProject: Flood Control System\nIssue: Material delivery delay\nImpact: 2-week schedule slip\nAction Required: Budget reallocation\n\nEscalation notice sent to contractors')}>🚩 Flag Delay</button>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-primary">SAVE & GEO-TAG PROJECT</button>
                                </div>
                            </form>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">ACTIVE PROJECT TIMELINE & STATUS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📊 Opening Gantt Chart View\n\nShowing:\n• Project dependencies\n• Critical path analysis\n• Resource allocation\n• Milestone tracking')}>View Gantt Chart</button>
                            </div>
                            <div className="timeline-container">
                                <div className="timeline-header">
                                    {['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'].map(q => <span key={q}>{q}</span>)}
                                </div>
                                {[
                                    ['🌊 Flood Control System - Barangay Riverside', 'DELAYED • ₱145M', '#ef4444', 10, 35, '55% Complete'],
                                    ['🏥 Central Health Facility - Poblacion', 'ON TRACK • ₱125M', '#10b981', 5, 45, '65% Complete'],
                                    ['🏫 Elementary School Building - West District', 'ONGOING • ₱85M', '#3b82f6', 15, 35, '40% Complete'],
                                    ['🛣️ Farm-to-Market Road - Agricultural Zone', 'COMPLETED • ₱45M', '#10b981', 0, 50, '100% Complete ✓'],
                                    ['🏪 Public Market Modernization - Centro', 'ONGOING • ₱123M', '#f59e0b', 0, 55, '78% Complete'],
                                    ['🌉 River Crossing Bridge - North Sector', 'ONGOING • ₱67M', '#3b82f6', 20, 25, '35% Complete'],
                                    ['💧 Water Distribution Network - Phase 3', 'COMPLETED • ₱92M', '#10b981', 0, 45, '100% Complete ✓'],
                                ].map(([title, status, color, left, width, label]) => (
                                    <div key={String(title)} style={{ marginTop: 12 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                            <span style={{ fontSize: 12, fontWeight: 600 }}>{title}</span>
                                            <span style={{ fontSize: 11, color }}>{status}</span>
                                        </div>
                                        <div className="timeline-bar">
                                            <div className="timeline-progress" style={{ left: `${left}%`, width: `${width}%`, backgroundColor: color }}>
                                                {label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 16, backgroundColor: '#f9fafb', borderRadius: 6, marginTop: 16 }}>
                                {[
                                    ['₱789.5M', 'Total Budget', '#374151'],
                                    ['62%', 'Avg Completion', '#10b981'],
                                    ['28', 'Active Projects', '#3b82f6'],
                                    ['5', 'Need Attention', '#ef4444'],
                                ].map(([v, l, c]) => (
                                    <div key={String(l)} style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 'bold', color: c }}>{v}</div>
                                        <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">RECENT PROJECT UPDATES</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📋 All Project Updates\n\nShowing 156 total updates\nFiltered by: Last 30 days\n\nExport options available')}>View All</button>
                            </div>
                            <div className="project-list">
                                {recentUpdates.map(([name, status, statusClass, details]) => (
                                    <div key={name} className="project-item" onClick={() => alert(`Opening Project Details:\n\n${name}\n\nView:\n• Complete timeline\n• Financial breakdown\n• Contractor performance\n• Photo documentation\n• Inspection reports`)}>
                                        <div className="project-header">
                                            <span className="project-name">{name}</span>
                                            <span className={`project-status ${statusClass}`}>{status}</span>
                                        </div>
                                        <div className="project-details">
                                            {Array.isArray(details) && details.map((d, idx) => (<span key={idx}>{d}</span>))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


