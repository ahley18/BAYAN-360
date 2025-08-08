import React, { useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() {
    return null; // No longer needed, styles are global
}

export default function MayorEmergencyAndDisaster() {
    const [activeNavIndex, setActiveNavIndex] = useState(5); // Emergency & Disaster Alert Console
    const [filter, setFilter] = useState('All Alerts');

    const onActivateResponse = () => {
        alert('🚨 EMERGENCY RESPONSE ACTIVATED\n\nProtocol initiated:\n• DRRMO teams dispatched\n• Evacuation centers prepared\n• Medical teams on standby\n• PNP traffic management\n• Public warnings issued\n\nAll units responding!');
    };

    const onMapIconClick = (title) => {
        alert(`Alert Details: ${title}\n\nLocation: GPS coordinates captured\nTime: ${new Date().toLocaleTimeString()}\nStatus: Active monitoring\nResponse: Teams deployed\n\nClick for full incident report...`);
    };

    const onZoneClick = (zoneType) => {
        alert(`Risk Zone Analysis\n\nLevel: ${zoneType}\nPopulation at risk: 2,500\nEvacuation centers: 3 available\nResources needed: Medical, shelter, food\n\nView detailed risk assessment...`);
    };

    const onIncidentSubmit = (e) => {
        e.preventDefault();
        alert('🚨 ALERT SUBMITTED\n\n✅ Incident logged in system\n📱 Response teams notified\n🔔 Mayor alerted\n📊 GIS layer updated\n📢 Public advisory prepared\n\nResponse protocol activated!');
    };

    const onCommand = (cmd) => {
        if (cmd === 'CODE RED') {
            alert('🚨 CODE RED ACTIVATED\n\nImmediate actions:\n• All emergency teams mobilized\n• Evacuation centers opened\n• Public warning system activated\n• Council emergency session called\n• Media briefing in 30 minutes\n\nAll departments on high alert!');
        } else if (cmd === 'CODE YELLOW') {
            alert('⚠️ CODE YELLOW ACTIVATED\n\nPrecautionary measures:\n• Response teams on standby\n• Monitoring intensified\n• Resources pre-positioned\n• Barangays alerted\n• Regular updates every hour\n\nSituation being closely monitored');
        } else if (cmd === 'ALL CLEAR') {
            alert('✅ ALL CLEAR SIGNAL\n\nStanding down:\n• Emergency status lifted\n• Teams returning to base\n• Normal operations resuming\n• Final assessment ongoing\n• Public advisory to be issued\n\nThank you to all responders!');
        } else if (cmd === 'PUBLIC ALERT') {
            alert('📢 PUBLIC ALERT SYSTEM\n\nBroadcasting on:\n• SMS blast to all residents\n• Social media channels\n• Radio announcements\n• TV crawlers\n• Barangay PA systems\n• Mobile patrol announcements\n\nMessage: Stay alert, follow evacuation orders');
        }
    };

    const onTeamCard = (teamName, status) => {
        alert(`${teamName} Details\n\nStatus: ${status}\nPersonnel: 12 members\nEquipment: Fully equipped\nVehicles: 3 units ready\nLast deployment: 2 hours ago\n\nContact team leader?`);
    };

    const onAlertItem = (title) => {
        alert(`Incident Report: ${title}\n\nDetailed information:\n• Incident commander on scene\n• Resources deployed\n• Timeline of events\n• Affected areas map\n• Response effectiveness\n• Next steps\n\nOpening full incident dashboard...`);
    };

    return (
        <div className="mayor-emergency-root">
            <GlobalStyleMayor />
            <MayorOfficeHeader iconText="🚨 EMERGENCY & DISASTER" badgeIcon="✅" badgeText="ACTIVATE COMMAND" alertBadgeText="🚨 3 ACTIVE ALERTS" officeTitle="EMERGENCY CONSOLE" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <div>
                            <h1 className="page-title">Emergency & Disaster Alert Console</h1>
                            <p className="page-subtitle">Notification center for disaster, health, and safety alerts linked to DRRMO, Health, PNP, BFP, and GIS risk layers</p>
                        </div>
                        
                    </div>

                    <div className="critical-alert">
                        <div className="critical-icon">⚠️</div>
                        <div className="critical-content">
                            <div className="critical-title">CRITICAL: Flood Warning - Riverside Barangay</div>
                            <div className="critical-description">Heavy rainfall detected • River level at 7.2m (critical: 8m) • 2,500 residents at risk • Evacuation protocol on standby</div>
                        </div>
                        <button className="btn btn-emergency" style={{ padding: '8px 16px' }} onClick={onActivateResponse}>ACTIVATE RESPONSE</button>
                    </div>

                    {/* Status Overview */}
                    <div className="alert-status-grid">
                        {[{ icon: '🌊', value: 3, label: 'Flood Alerts', cls: 'status-critical' },
                        { icon: '🔥', value: 1, label: 'Fire Incidents', cls: 'status-warning' },
                        { icon: '🏥', value: 2, label: 'Health Alerts', cls: 'status-monitoring' },
                        { icon: '🚔', value: 5, label: 'PNP Units Ready', cls: 'status-safe' },
                        { icon: '🚒', value: 3, label: 'BFP Units Ready', cls: 'status-safe' },
                        { icon: '🚑', value: 8, label: 'Ambulances', cls: 'status-monitoring' }].map((s, i) => (
                            <div key={i} className={`status-card ${s.cls}`}>
                                <div className="status-icon">{s.icon}</div>
                                <div className="status-value">{s.value}</div>
                                <div className="status-label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Process Flow */}
                    <div className="process-flow">
                        <span className="flow-step">Alert Triggered</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step flow-active">Notification Sent</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Response Teams Alerted</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Mayor Review</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Protocol Activated</span>
                    </div>

                    <div className="grid">
                        {/* Alert Map and Response */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">REAL-TIME ALERT MAP & GIS RISK LAYERS</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <select className="form-select" style={{ width: 120, padding: 6 }} value={filter} onChange={(e) => setFilter(e.target.value)}>
                                        <option>All Alerts</option>
                                        <option>Flood Risk</option>
                                        <option>Fire Incidents</option>
                                        <option>Health Emergency</option>
                                    </select>
                                    <button className="btn btn-secondary" onClick={() => alert('🗺️ Full Screen Mode\n\nEnhanced view showing:\n• Real-time incident locations\n• Response unit positions\n• Risk layer overlays\n• Weather radar\n• Traffic conditions\n\nCommand center view activated')}>Full Screen</button>
                                </div>
                            </div>
                            <div className="alert-map">
                                {/* Risk Zones */}
                                <div className="alert-zone zone-critical" style={{ left: '25%', top: '30%', width: 150, height: 150 }} onClick={() => onZoneClick('Critical')}></div>
                                <div className="alert-zone zone-warning" style={{ left: '60%', top: '50%', width: 100, height: 100 }} onClick={() => onZoneClick('Warning')}></div>
                                <div className="alert-zone zone-monitoring" style={{ left: '45%', top: '20%', width: 80, height: 80 }} onClick={() => onZoneClick('Monitoring')}></div>

                                {/* Alert Icons */}
                                <div className="alert-icon-map icon-critical" style={{ left: '25%', top: '30%' }} title="Flood Alert - Critical" onClick={() => onMapIconClick('Flood Alert - Critical')}>🌊</div>
                                <div className="alert-icon-map icon-warning" style={{ left: '60%', top: '50%' }} title="Fire Incident" onClick={() => onMapIconClick('Fire Incident')}>🔥</div>
                                <div className="alert-icon-map icon-monitoring" style={{ left: '45%', top: '20%' }} title="Health Alert" onClick={() => onMapIconClick('Health Alert')}>🏥</div>
                                <div className="alert-icon-map icon-critical" style={{ left: '35%', top: '60%' }} title="Flood Risk Area" onClick={() => onMapIconClick('Flood Risk Area')}>⚠️</div>
                                <div className="alert-icon-map icon-monitoring" style={{ left: '70%', top: '35%' }} title="Medical Emergency" onClick={() => onMapIconClick('Medical Emergency')}>🚑</div>

                                {/* Response Units */}
                                <div style={{ position: 'absolute', left: '20%', top: '50%', color: 'white', fontSize: 11, textAlign: 'center' }}>
                                    <div style={{ backgroundColor: '#10b981', padding: '4px 8px', borderRadius: 4 }}>🚔 PNP-01<br />Responding</div>
                                </div>
                                <div style={{ position: 'absolute', left: '55%', top: '60%', color: 'white', fontSize: 11, textAlign: 'center' }}>
                                    <div style={{ backgroundColor: '#10b981', padding: '4px 8px', borderRadius: 4 }}>🚒 BFP-02<br />En Route</div>
                                </div>
                                <div style={{ position: 'absolute', left: '40%', top: '40%', color: 'white', fontSize: 11, textAlign: 'center' }}>
                                    <div style={{ backgroundColor: '#f59e0b', padding: '4px 8px', borderRadius: 4 }}>🚑 EMS-03<br />Standby</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12, padding: 8, backgroundColor: '#f9fafb', borderRadius: 4 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#ef4444', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Critical</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#f59e0b', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Warning</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#3b82f6', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Monitoring</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#10b981', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Safe</span></div>
                            </div>
                        </div>

                        {/* Incident Report & Command */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">INCIDENT REPORT ENTRY</h2>
                            </div>
                            <div className="weather-widget" onClick={() => alert('🌦️ Weather Details\n\nCurrent Conditions:\n• Heavy rainfall warning\n• Accumulated: 125mm (6 hours)\n• Wind: 25 km/h NE\n• Visibility: 3km\n• Forecast: Rain continuing\n\nPAGASA Bulletin #12\nFlood-prone areas on alert')}>
                                <div className="weather-header">
                                    <div>
                                        <div className="weather-temp">28°C</div>
                                        <div className="weather-condition">Heavy Rainfall</div>
                                    </div>
                                    <div style={{ fontSize: 24 }}>🌧️</div>
                                </div>
                                <div style={{ fontSize: 11, marginTop: 4 }}>Wind: 25 km/h • Humidity: 85% • Visibility: 3km</div>
                            </div>
                            <form id="incident-form" onSubmit={onIncidentSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Incident Type *</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select Type...</option>
                                        <option>Flood/Inundation</option>
                                        <option>Fire Incident</option>
                                        <option>Landslide</option>
                                        <option>Medical Emergency</option>
                                        <option>Traffic Accident</option>
                                        <option>Crime/Security</option>
                                        <option>Epidemic/Health</option>
                                        <option>Earthquake</option>
                                        <option>Typhoon/Storm</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Location *</label>
                                    <input type="text" className="form-input" placeholder="Specific location or barangay" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Severity Level *</label>
                                        <select className="form-select" required defaultValue="">
                                            <option value="">Select...</option>
                                            <option>Critical</option>
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Affected Count</label>
                                        <input type="number" className="form-input" placeholder="0" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Reporting Source</label>
                                    <select className="form-select" defaultValue="DRRMO">
                                        <option>DRRMO</option>
                                        <option>Barangay Report</option>
                                        <option>PNP</option>
                                        <option>BFP</option>
                                        <option>Health Office</option>
                                        <option>Citizen Report</option>
                                        <option>Weather Station</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Response Required</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                        {['DRRMO Team', 'PNP Units', 'BFP Units', 'Medical Team', 'Rescue Team', 'Evacuation'].map(opt => (
                                            <label key={opt} style={{ fontSize: 12 }}><input type="checkbox" /> {opt}</label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Incident Details</label>
                                    <textarea className="form-textarea" placeholder="Describe the incident, immediate needs, and current situation..."></textarea>
                                </div>
                                <div className="command-center">
                                    <div className="command-header">🎯 Mayor's Rapid Response Protocol</div>
                                    <div className="command-buttons">
                                        <button type="button" className="btn btn-emergency" onClick={() => onCommand('CODE RED')}>🚨 CODE RED</button>
                                        <button type="button" className="btn btn-warning" onClick={() => onCommand('CODE YELLOW')}>⚠️ CODE YELLOW</button>
                                        <button type="button" className="btn btn-success" onClick={() => onCommand('ALL CLEAR')}>✅ ALL CLEAR</button>
                                        <button type="button" className="btn btn-primary" onClick={() => onCommand('PUBLIC ALERT')}>📢 PUBLIC ALERT</button>
                                    </div>
                                    <div style={{ marginTop: 8 }}>
                                        <textarea className="form-textarea" placeholder="Mayor's emergency directive..." style={{ minHeight: 40 }}></textarea>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-emergency">SUBMIT ALERT</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => alert('📝 Draft Saved\n\nIncident report saved as draft\nDraft ID: INC-2025-001\n\nYou can complete and submit later')}>Save as Draft</button>
                                </div>
                            </form>
                            <div style={{ marginTop: 16, padding: 12, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>Available Resources</h3>
                                <div className="resource-grid">
                                    {[
                                        ['Rescue Teams', '15'], ['Ambulances', '8'], ['Evacuation Cap.', '250'], ['Relief Packs', '500']
                                    ].map(([label, count]) => (
                                        <div key={label} className="resource-item" onClick={() => alert(`Resource Details: ${label}\n\nAvailable: ${count}\nDeployed: Calculating...\nReserve: Checking...\nMaintenance: 2 units\n\nView resource allocation map?`)}>
                                            <div className="resource-number">{count}</div>
                                            <div className="resource-label">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Active Alerts List */}
                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">ACTIVE ALERTS & INCIDENT LOG</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📄 Export Incident Log\n\nGenerating report with:\n• All active alerts\n• Response timeline\n• Resource deployment\n• Decision points\n• Outcomes\n\nFormat: PDF/Excel\nPeriod: Last 24 hours')}>Export Log</button>
                            </div>
                            <div className="alert-list">
                                {[
                                    ['🌊 Flood Warning - Riverside Barangay', 'CRITICAL', 'priority-critical', ['📍 Riverside Areas', '⏰ 2 hours ago', '👥 2,500 at risk', '🚨 DRRMO responding', '📊 River: 7.2m']],
                                    ['🔥 Fire Incident - Commercial District', 'HIGH', 'priority-high', ['📍 Market Area', '⏰ 45 mins ago', '👥 50 evacuated', '🚒 BFP on scene', '📊 Under control']],
                                    ['🏥 Health Alert - Dengue Cases Rise', 'MEDIUM', 'priority-medium', ['📍 Multiple barangays', '⏰ This week', '👥 23 cases', '🏥 DOH coordinating', '📊 Monitoring']],
                                    ['🌧️ Weather Advisory - Heavy Rainfall Expected', 'MEDIUM', 'priority-medium', ['📍 Municipality-wide', '⏰ Next 24 hours', '👥 All residents', '🌦️ PAGASA bulletin', '📊 Monitoring']],
                                    ['🚗 Traffic Accident - Main Highway', 'LOW', 'priority-low', ['📍 National Road', '⏰ 1 hour ago', '👥 3 injured', '🚔 PNP responded', '📊 Cleared']],
                                    ['💧 Water Supply Interruption', 'LOW', 'priority-low', ['📍 Barangay Centro', '⏰ Scheduled', '👥 500 households', '💧 Maintenance work', '📊 6 hours']],
                                ].map(([title, priority, cls, details], i) => (
                                    <div key={i} className="alert-item" onClick={() => onAlertItem(String(title))}>
                                        <div className="alert-header">
                                            <div className="alert-title">{title}</div>
                                            <div className={`alert-priority ${cls}`}>{priority}</div>
                                        </div>
                                        <div className="alert-details">
                                            {Array.isArray(details) && details.map((d, idx) => (<span key={idx}>{d}</span>))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Response Teams Status */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">RESPONSE TEAMS STATUS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('🚨 FULL MOBILIZATION\n\nActivating all units:\n• DRRMO: 5 teams\n• PNP: 8 units\n• BFP: 3 stations\n• Medical: 6 teams\n• Rescue: 4 squads\n\nEstimated response time: 10 minutes\n\nConfirm mobilization order?')}>Mobilize All</button>
                            </div>
                            <div className="response-teams">
                                {[
                                    ['🚨', 'DRRMO Alpha Team', 'DEPLOYED', 'status-deployed'],
                                    ['🚔', 'PNP Unit 1', 'READY', 'status-ready'],
                                    ['🚒', 'BFP Station 2', 'DEPLOYED', 'status-deployed'],
                                    ['🚑', 'EMS Team 1', 'STANDBY', 'status-standby'],
                                    ['🏥', 'Medical Response', 'READY', 'status-ready'],
                                    ['🛡️', 'Rescue Squad', 'STANDBY', 'status-standby'],
                                ].map(([icon, name, state, cls]) => (
                                    <div key={String(name)} className="team-card" onClick={() => onTeamCard(String(name), String(state))}>
                                        <div className="team-info"><span style={{ fontSize: 16 }}>{icon}</span><span className="team-name">{name}</span></div>
                                        <span className={`team-status ${cls}`}>{state}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Response Timeline */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">RESPONSE TIMELINE</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📜 Complete Response Log\n\nShowing:\n• 156 events today\n• 23 incidents resolved\n• 3 ongoing situations\n• Response time average: 8 minutes\n\nExport full log?')}>Full Log</button>
                            </div>
                            <div className="timeline">
                                {[
                                    { time: '14:30', title: 'Flood Alert Triggered', desc: 'River level reached 7.0m threshold', critical: true },
                                    { time: '14:32', title: 'DRRMO Notified', desc: 'Alpha team dispatched to Riverside' },
                                    { time: '14:35', title: 'Mayor Briefed', desc: 'Evacuation protocol on standby' },
                                    { time: '14:45', title: 'Fire Incident Reported', desc: 'Commercial district, BFP responding', critical: true },
                                    { time: '14:48', title: 'BFP On Scene', desc: 'Fire suppression ongoing' },
                                    { time: '15:10', title: 'Fire Under Control', desc: 'No casualties, damage assessment ongoing' },
                                    { time: '15:30', title: 'Weather Update', desc: 'Heavy rainfall expected to continue' },
                                    { time: '16:00', title: 'Public Advisory Issued', desc: 'Flood preparedness reminder sent' },
                                ].map((ev) => (
                                    <div
                                        key={ev.time + ev.title}
                                        className={`timeline-item ${ev.critical ? 'critical' : ''}`}
                                        onClick={() => alert(`Event Details\n\nTime: ${ev.time}\nEvent: ${ev.title}\n\nView:\n• Response details\n• Personnel involved\n• Decisions made\n• Outcomes\n• Follow-up actions`)}
                                    >
                                        <div className="timeline-time">{ev.time}</div>
                                        <div className="timeline-content">
                                            <strong>{ev.title}</strong><br />
                                            {ev.desc}
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