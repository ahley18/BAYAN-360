import React, { useState } from 'react';
import { mayorBudgetUtilizationCss } from './mayor_budget_utilization_and_fund_tracking_style.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() {
    return <style>{mayorBudgetUtilizationCss}</style>;
}

const heatmapData = [
    { dept: 'Engineering', percent: 92, range: 'excellent', amount: '₱450M/₱489M' },
    { dept: 'Health', percent: 85, range: 'good', amount: '₱255M/₱300M' },
    { dept: 'Education', percent: 78, range: 'good', amount: '₱156M/₱200M' },
    { dept: 'Social Welfare', percent: 72, range: 'fair', amount: '₱108M/₱150M' },
    { dept: 'Agriculture', percent: 68, range: 'fair', amount: '₱68M/₱100M' },
    { dept: 'Environment', percent: 55, range: 'warning', amount: '₱44M/₱80M' },
    { dept: 'Tourism', percent: 42, range: 'critical', amount: '₱21M/₱50M' },
    { dept: 'Youth & Sports', percent: 38, range: 'critical', amount: '₱15M/₱40M' },
    { dept: 'Admin', percent: 82, range: 'good', amount: '₱123M/₱150M' },
    { dept: 'Treasury', percent: 88, range: 'excellent', amount: '₱44M/₱50M' },
    { dept: 'Planning', percent: 75, range: 'fair', amount: '₱30M/₱40M' },
    { dept: 'Legal', percent: 52, range: 'warning', amount: '₱13M/₱25M' },
];

const tableRows = [
    { dept: 'Engineering', item: 'Infrastructure Projects', aip: 'AIP-2025-INF-001', approved: '₱350,000,000', disbursed: '₱322,000,000', balance: '₱28,000,000', percent: 92, fill: 'excellent', status: '✅ On Track', statusClass: 'proc-completed', action: 'View' },
    { dept: 'Health', item: 'Medical Supplies & Equipment', aip: 'AIP-2025-HLT-003', approved: '₱150,000,000', disbursed: '₱127,500,000', balance: '₱22,500,000', percent: 85, fill: 'good', status: '⚡ Ongoing', statusClass: 'proc-ongoing', action: 'View' },
    { dept: 'Education', item: 'School Building Program', aip: 'AIP-2025-EDU-002', approved: '₱120,000,000', disbursed: '₱93,600,000', balance: '₱26,400,000', percent: 78, fill: 'good', status: '⚡ Ongoing', statusClass: 'proc-ongoing', action: 'View' },
    { dept: 'Tourism', item: 'Tourism Development', aip: 'AIP-2025-TOU-001', approved: '₱50,000,000', disbursed: '₱21,000,000', balance: '₱29,000,000', percent: 42, fill: 'critical', status: '⏳ Delayed', statusClass: 'proc-pending', action: 'Action' },
    { dept: 'Youth & Sports', item: 'Sports Complex Development', aip: 'AIP-2025-YTH-001', approved: '₱40,000,000', disbursed: '₱15,200,000', balance: '₱24,800,000', percent: 38, fill: 'critical', status: '⏳ Pre-Proc', statusClass: 'proc-pending', action: 'Urgent' },
    { dept: 'Agriculture', item: 'Farm-to-Market Roads', aip: 'AIP-2025-AGR-002', approved: '₱80,000,000', disbursed: '₱54,400,000', balance: '₱25,600,000', percent: 68, fill: 'warning', status: '⚡ Ongoing', statusClass: 'proc-ongoing', action: 'View' },
];

export default function MayorBudgetUtilizationAndFundTracking() {
    const [activeNavIndex, setActiveNavIndex] = useState(4); // Budget Utilization & Fund Tracking
    const [quarter, setQuarter] = useState('Q4 2025');

    const onVarianceReview = () => {
        alert('📊 Variance Analysis\n\nCritical Issues:\n• Tourism: -58% (₱29M unutilized)\n• Youth & Sports: -62% (₱24.8M)\n• Legal: -48% (₱12M)\n\nRecommendations:\n• Immediate intervention required\n• Consider Q4 realignment\n• Accelerate procurement');
    };

    const onHeatmapClick = (dept, percent) => {
        alert(`${dept} Budget Details\n\nUtilization: ${percent}%\n\nView:\n• Line item breakdown\n• Monthly spending trend\n• Procurement status\n• Variance analysis\n• Projected year-end\n• Recommendations`);
    };

    const onBudgetSubmit = (e) => {
        e.preventDefault();
        alert('Budget Entry Saved!\n\n✅ Data synced with Treasury\n📊 Accounting system updated\n🔄 AIP reference linked\n📋 Procurement milestone tracked\n🔔 Mayor notified for review');
    };

    const onIntervention = (type) => {
        if (type === 'approve') {
            alert('✅ Budget Approved\n\nApproval logged:\n• Department notified\n• Treasury updated\n• Disbursement authorized\n• Timeline confirmed\n\nProceeding with implementation...');
        } else if (type === 'realign') {
            alert('🔄 Budget Realignment\n\nInitiating realignment:\n• Source: Under-utilized departments\n• Target: Priority projects\n• Amount: ₱50M available\n• Approval: Council required\n\nPreparing realignment proposal...');
        } else if (type === 'suspend') {
            alert('⏸️ Budget Suspension\n\nSuspension order:\n• Reason: Low utilization\n• Duration: Pending review\n• Action: Performance audit\n• Review date: Within 15 days\n\nDepartment heads notified...');
        }
    };

    const onTableAction = (label) => {
        if (label === 'View') {
            alert('📋 Line Item Details\n\nOpening detailed view:\n• Transaction history\n• Supporting documents\n• Approval trail\n• Disbursement schedule\n• Related AIP projects');
        } else if (label === 'Action') {
            alert('⚠️ Action Required\n\nDepartment: Tourism\nIssue: 58% under-utilization\n\nRecommended actions:\n• Expedite procurement\n• Review project timeline\n• Consider reallocation\n• Schedule urgent meeting');
        } else if (label === 'Urgent') {
            alert('🚨 Urgent Intervention\n\nDepartment: Youth & Sports\nUtilization: 38% only\n\nImmediate actions:\n• Emergency meeting scheduled\n• Procurement fast-track\n• Budget review tomorrow\n• Mayor briefing at 2PM');
        }
    };

    return (
        <div className="mayor-budget-root">
            <InlineStyle />
            <MayorOfficeHeader iconText="📊 BUDGET UTILIZATION" badgeIcon="✅" badgeText="MONITOR SPENDING" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <div>
                            <h1 className="page-title">Budget Utilization & Fund Tracking</h1>
                            <p className="page-subtitle">Executive view of fund usage vs. plans with real-time sync to Treasury, Budget, and Accounting linked to AIP and procurement milestones</p>
                        </div>
                        <div className="header-right">
                            <div className="sync-badge">🔄 Treasury + Accounting Sync</div>
                        </div>
                    </div>

                    <div className="variance-alert">
                        <div className="variance-icon">⚠️</div>
                        <div className="variance-content">
                            <div className="variance-title">Budget Variance Alert</div>
                            <div className="variance-description">5 departments show low utilization (below 50%) • 2 departments nearing budget ceiling • Q4 realignment recommended</div>
                        </div>
                        <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={onVarianceReview}>REVIEW VARIANCE</button>
                    </div>

                    {/* Overview */}
                    <div className="budget-overview">
                        <div className="budget-card budget-excellent">
                            <div className="budget-icon">💰</div>
                            <div className="budget-value">₱1.85B</div>
                            <div className="budget-label">Total Budget 2025</div>
                            <div className="budget-change" style={{ color: '#10b981' }}>Approved</div>
                        </div>
                        <div className="budget-card budget-good">
                            <div className="budget-icon">📊</div>
                            <div className="budget-value">68.5%</div>
                            <div className="budget-label">Overall Utilization</div>
                            <div className="budget-change" style={{ color: '#3b82f6' }}>On Track</div>
                        </div>
                        <div className="budget-card budget-excellent">
                            <div className="budget-icon">✅</div>
                            <div className="budget-value">₱1.27B</div>
                            <div className="budget-label">Disbursed</div>
                            <div className="budget-change" style={{ color: '#10b981' }}>↑ ₱45M this month</div>
                        </div>
                        <div className="budget-card budget-warning">
                            <div className="budget-icon">⏳</div>
                            <div className="budget-value">₱580M</div>
                            <div className="budget-label">Remaining</div>
                            <div className="budget-change" style={{ color: '#f59e0b' }}>31.5% Available</div>
                        </div>
                        <div className="budget-card budget-critical">
                            <div className="budget-icon">🚨</div>
                            <div className="budget-value">5</div>
                            <div className="budget-label">Low Utilization</div>
                            <div className="budget-change" style={{ color: '#ef4444' }}>Need Intervention</div>
                        </div>
                    </div>

                    {/* Process Flow */}
                    <div className="process-flow">
                        <span className="flow-step">Treasury Input</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Budget Office</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step flow-active">Real-time Sync</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Accounting Validation</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Mayor Review</span>
                    </div>

                    <div className="grid">
                        {/* Heatmap */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">BUDGET UTILIZATION HEATMAP</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <select className="form-select" style={{ width: 100, padding: 6 }} value={quarter} onChange={(e) => setQuarter(e.target.value)}>
                                        <option>Q4 2025</option>
                                        <option>Q3 2025</option>
                                        <option>Annual</option>
                                    </select>
                                    <button className="btn btn-secondary" onClick={() => alert('📄 Export Options:\n\n• Budget Heatmap (PDF)\n• Utilization Report (Excel)\n• Variance Analysis\n• Department Breakdown\n• AIP Linkage Report')}>Export</button>
                                </div>
                            </div>
                            <div className="heatmap-grid">
                                {heatmapData.map((d) => (
                                    <div key={d.dept} className={`heatmap-cell heat-${d.range}`} onClick={() => onHeatmapClick(d.dept, d.percent)}>
                                        <div className="heatmap-dept">{d.dept}</div>
                                        <div className="heatmap-percent">{d.percent}%</div>
                                        <div style={{ fontSize: 9 }}>{d.amount}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12, padding: 8, backgroundColor: '#f9fafb', borderRadius: 4 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#10b981', borderRadius: 2 }}></div><span style={{ fontSize: 11 }}>80-100%</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#3b82f6', borderRadius: 2 }}></div><span style={{ fontSize: 11 }}>70-79%</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#fbbf24', borderRadius: 2 }}></div><span style={{ fontSize: 11 }}>60-69%</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#f59e0b', borderRadius: 2 }}></div><span style={{ fontSize: 11 }}>50-59%</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#ef4444', borderRadius: 2 }}></div><span style={{ fontSize: 11 }}>&lt;50%</span></div>
                            </div>
                        </div>

                        {/* Budget Entry Form */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">BUDGET ENTRY & TRACKING</h2>
                            </div>
                            <div className="disbursement-widget">
                                <div className="disbursement-value">₱45.2M</div>
                                <div className="disbursement-label">This Month's Disbursement</div>
                                <div style={{ textAlign: 'center', marginTop: 4, fontSize: 11, color: '#065f46' }}>↑ 12% vs last month</div>
                            </div>
                            <form id="budget-form" onSubmit={onBudgetSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Department/Office</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select Department...</option>
                                        <option>Engineering</option>
                                        <option>Health Services</option>
                                        <option>Education</option>
                                        <option>Social Welfare</option>
                                        <option>Agriculture</option>
                                        <option>Environment</option>
                                        <option>Tourism</option>
                                        <option>Youth & Sports</option>
                                        <option>Administrative</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Budget Line Item</label>
                                    <input type="text" className="form-input" placeholder="e.g., Personal Services, MOOE, Capital Outlay" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Approved Budget</label>
                                        <input type="number" className="form-input" placeholder="₱0.00" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Current Disbursement</label>
                                        <input type="number" className="form-input" placeholder="₱0.00" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">AIP Reference Code</label>
                                    <input type="text" className="form-input" placeholder="AIP-2025-XXX-000" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Fund Source</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select Fund Source...</option>
                                        <option>General Fund</option>
                                        <option>IRA/NTA</option>
                                        <option>SEF</option>
                                        <option>Trust Fund</option>
                                        <option>Development Fund</option>
                                        <option>Calamity Fund</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Procurement Status</label>
                                    <select className="form-select" defaultValue="Pre-Procurement">
                                        <option>Pre-Procurement</option>
                                        <option>Posted/Published</option>
                                        <option>Bidding</option>
                                        <option>Awarded</option>
                                        <option>Contract Signed</option>
                                        <option>Delivery/Implementation</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Utilization %</label>
                                        <input type="number" className="form-input" placeholder="0-100" min={0} max={100} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Target %</label>
                                        <input type="number" className="form-input" placeholder="0-100" min={0} max={100} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Remarks/Notes</label>
                                    <textarea className="form-textarea" placeholder="Enter any notes on delays, issues, or adjustments..."></textarea>
                                </div>
                                <div className="intervention-section">
                                    <div className="intervention-header">🔐 Mayor's Budget Intervention</div>
                                    <div className="intervention-buttons">
                                        <button type="button" className="btn btn-success" onClick={() => onIntervention('approve')}>✅ Approve</button>
                                        <button type="button" className="btn btn-warning" onClick={() => onIntervention('realign')}>🔄 Realign</button>
                                        <button type="button" className="btn btn-danger" onClick={() => onIntervention('suspend')}>⏸️ Suspend</button>
                                    </div>
                                    <div style={{ marginTop: 8 }}>
                                        <textarea className="form-textarea" placeholder="Mayor's directive on budget utilization..." style={{ minHeight: 40 }}></textarea>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-primary">SAVE BUDGET ENTRY</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => alert('📈 Generating Budget Report\n\nContents:\n• Executive summary\n• Department utilization\n• Fund source analysis\n• Variance report\n• Recommendations\n• Q4 projections\n\nReport ready in 5 seconds...')}>Generate Report</button>
                                </div>
                            </form>
                        </div>

                        {/* Detailed Budget Table */}
                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">DETAILED BUDGET LINE ITEMS & DISBURSEMENT LOG</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📁 Exporting to Excel\n\nIncluding:\n• All budget line items\n• Disbursement history\n• Utilization percentages\n• Variance calculations\n• Procurement status\n\nFile: Budget_Tracking_Q4_2025.xlsx')}>Export to Excel</button>
                            </div>
                            <table className="budget-table">
                                <thead>
                                    <tr>
                                        <th>Department</th>
                                        <th>Line Item</th>
                                        <th>AIP Code</th>
                                        <th>Approved</th>
                                        <th>Disbursed</th>
                                        <th>Balance</th>
                                        <th>Utilization</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map((r) => (
                                        <tr key={r.aip}>
                                            <td><strong>{r.dept}</strong></td>
                                            <td>{r.item}</td>
                                            <td><span className="aip-badge" onClick={() => alert(`AIP Project Details\n\nCode: ${r.aip}\n\nLinked to:\n• Annual Investment Program 2025\n• Development objectives\n• Performance indicators\n• Implementation timeline\n• Expected outcomes`)}>{r.aip}</span></td>
                                            <td>{r.approved}</td>
                                            <td>{r.disbursed}</td>
                                            <td>{r.balance}</td>
                                            <td>
                                                <div className="progress-bar" onClick={() => alert(`Utilization Timeline\n\nCurrent: ${r.percent}%\n\nMonthly breakdown:\n• Q1: 22%\n• Q2: 45%\n• Q3: 68%\n• Q4 Target: 100%\n\nView detailed spending pattern...`)}>
                                                    <div className={`progress-fill fill-${r.fill}`} style={{ width: `${r.percent}%` }}></div>
                                                </div>
                                                <span style={{ fontSize: 11, fontWeight: 600, color: r.fill === 'critical' ? '#ef4444' : undefined }}>{r.percent}%</span>
                                            </td>
                                            <td><span className={`procurement-status ${r.statusClass}`} onClick={() => alert(`Procurement Status\n\n${r.status}\n\nView:\n• Procurement timeline\n• Bidding documents\n• Supplier information\n• Contract details\n• Delivery schedule`)}>{r.status}</span></td>
                                            <td><button className={`btn ${r.action === 'View' ? 'btn-secondary' : r.action === 'Action' ? 'btn-warning' : 'btn-danger'}`} style={{ padding: '4px 8px', fontSize: '11px' }} onClick={() => onTableAction(r.action)}>{r.action}</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Fund Sources & Variance */}
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">FUND SOURCES BREAKDOWN</h2>
                                <button className="btn btn-secondary" onClick={() => alert('💰 Fund Sources Details\n\nGeneral Fund: ₱850M (75% utilized)\nIRA/NTA: ₱650M (82% utilized)\nSEF: ₱250M (68% utilized)\nTrust Fund: ₱100M (45% utilized)\n\nTotal: ₱1.85B approved budget')}>Details</button>
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <div className="fund-pills">
                                    <span className="fund-pill pill-gf" onClick={() => alert('General Fund Details\n\nView:\n• Allocation breakdown\n• Department distribution\n• Utilization timeline\n• Remaining balance\n• Projected needs')}>General Fund: ₱850M</span>
                                    <span className="fund-pill pill-ira" onClick={() => alert('IRA/NTA Details\n\nView:\n• Allocation breakdown\n• Department distribution\n• Utilization timeline\n• Remaining balance\n• Projected needs')}>IRA/NTA: ₱650M</span>
                                    <span className="fund-pill pill-sef" onClick={() => alert('SEF Details\n\nView:\n• Allocation breakdown\n• Department distribution\n• Utilization timeline\n• Remaining balance\n• Projected needs')}>SEF: ₱250M</span>
                                    <span className="fund-pill pill-trust" onClick={() => alert('Trust Fund Details\n\nView:\n• Allocation breakdown\n• Department distribution\n• Utilization timeline\n• Remaining balance\n• Projected needs')}>Trust Fund: ₱100M</span>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gap: 12 }}>
                                {[
                                    { label: 'General Fund', percent: 75, fill: 'good' },
                                    { label: 'IRA/NTA', percent: 82, fill: 'excellent' },
                                    { label: 'SEF', percent: 68, fill: 'warning' },
                                    { label: 'Trust Fund', percent: 45, fill: 'critical' },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                            <span style={{ fontSize: 12, fontWeight: 600 }}>{s.label}</span>
                                            <span style={{ fontSize: 12 }}>{s.percent}% utilized</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className={`progress-fill fill-${s.fill}`} style={{ width: `${s.percent}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Monthly Trend */}
                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">MONTHLY DISBURSEMENT TREND & PROJECTIONS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📈 Downloading Chart\n\nFormat options:\n• PNG image\n• PDF document\n• Excel data\n• PowerPoint slide\n\nIncluding trend analysis and projections')}>Download Chart</button>
                            </div>
                            <div style={{ height: 200, backgroundColor: '#f9fafb', borderRadius: 6, padding: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 11, color: '#6b7280' }}>
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-end', height: 140, gap: 8 }}>
                                    {[60, 65, 70, 68, 72, 75, 78, 80, 85, 88].map((h, i) => (
                                        <div key={i} style={{ flex: 1, backgroundColor: i === 9 ? '#10b981' : '#3b82f6', height: `${h}%`, borderRadius: '4px 4px 0 0', position: i === 9 ? 'relative' : 'static' }}>
                                            {i === 9 && <span style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 600 }}>Current</span>}
                                        </div>
                                    ))}
                                    <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '90%', borderRadius: '4px 4px 0 0', border: '2px dashed #6b7280' }}></div>
                                    <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '95%', borderRadius: '4px 4px 0 0', border: '2px dashed #6b7280' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12 }}>
                                    <span style={{ fontSize: 11 }}><span style={{ color: '#3b82f6' }}>●</span> Actual: ₱1.27B</span>
                                    <span style={{ fontSize: 11 }}><span style={{ color: '#6b7280' }}>●</span> Projected: ₱1.85B</span>
                                    <span style={{ fontSize: 11 }}><span style={{ color: '#10b981' }}>●</span> Target: 100% by Dec</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 16, backgroundColor: '#f9fafb', borderRadius: 6, marginTop: 16 }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', color: '#374151' }}>₱154M</div>
                                    <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Monthly Average</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', color: '#10b981' }}>82%</div>
                                    <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Q4 Target</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', color: '#3b82f6' }}>15</div>
                                    <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Active Projects</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', color: '#f59e0b' }}>₱193M</div>
                                    <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Q4 Required</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ef4444' }}>5</div>
                                    <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Under-utilized</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


