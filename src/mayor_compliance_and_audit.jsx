import React, { useState } from 'react';
import { mayorComplianceAndAuditCss } from './mayor_compliance_and_audit_styles.ts';
import MayorOfficeNav from './mayor_office_nav';
import MayorOfficeHeader from './mayor_office_header';

function InlineStyle() {
    return <style>{mayorComplianceAndAuditCss}</style>;
}

const overdueRows = [
    { priority: 'critical', item: 'COA AOM No. 2025-03', sub: 'Procurement procedure violation', dept: 'GSO', due: 'Feb 12, 2025', dueColor: '#ef4444', statusClass: 'badge-critical', status: 'OVERDUE', id: 'COA-2025-03' },
    { priority: 'critical', item: 'SALN Submission', sub: '23 personnel pending', dept: 'Multiple', due: 'Jan 31, 2025', dueColor: '#ef4444', statusClass: 'badge-critical', status: '7 DAYS LATE', id: 'SALN-2025' },
    { priority: 'high', item: 'PhilGEPS Posting', sub: 'Infrastructure project ABC > 5M', dept: 'Engineering', due: 'Feb 15, 2025', dueColor: '#f59e0b', statusClass: 'badge-warning', status: 'DUE SOON', id: 'PGEPS-001' },
    { priority: 'high', item: 'Liquidation Report', sub: 'Q4 2024 Cash Advances', dept: 'Accounting', due: 'Feb 20, 2025', dueColor: '#f59e0b', statusClass: 'badge-warning', status: 'PENDING', id: 'LIQ-Q4-2024' },
    { priority: 'medium', item: 'Gender & Development Report', sub: 'Annual GAD accomplishment', dept: 'HRMO', due: 'Mar 15, 2025', dueColor: '', statusClass: 'badge-pending', status: 'IN PROGRESS', id: 'GAD-2025' },
    { priority: 'low', item: 'Transparency Seal Update', sub: 'Website compliance check', dept: 'MIS', due: 'Mar 31, 2025', dueColor: '', statusClass: 'badge-compliant', status: 'ON TRACK', id: 'TRANS-2025' },
];

const procurementCards = [
    {
        title: 'Road Rehabilitation Phase 2',
        amount: '₱45.8M',
        details: [
            { label: 'Status:', value: <span className="badge badge-warning">PHILGEPS POSTING PENDING</span> },
            { label: 'Mode:', value: 'Public Bidding', extra: ' | ', bold: 'ABC:', boldValue: '₱45,800,000' },
            { label: 'Timeline:', value: 'Pre-bid Conference: Feb 20 | Submission: Mar 5 | Opening: Mar 5' },
            { label: 'Compliance Issues:', value: 'Missing technical specifications, incomplete GPPB forms' },
        ],
    },
    {
        title: 'Medical Supplies & Equipment',
        amount: '₱12.3M',
        details: [
            { label: 'Status:', value: <span className="badge badge-critical">DELAYED - BAC RESOLUTION MISSING</span> },
            { label: 'Mode:', value: 'Public Bidding', extra: ' | ', bold: 'ABC:', boldValue: '₱12,300,000' },
            { label: 'Timeline:', value: 'Originally scheduled Jan 2025 - Now delayed to March 2025' },
            { label: 'Compliance Issues:', value: 'No end-user specifications, pending APP amendment' },
        ],
    },
    {
        title: 'IT Equipment & Software Licenses',
        amount: '₱5.6M',
        details: [
            { label: 'Status:', value: <span className="badge badge-compliant">ON TRACK</span> },
            { label: 'Mode:', value: 'Shopping', extra: ' | ', bold: 'ABC:', boldValue: '₱5,600,000' },
            { label: 'Timeline:', value: 'RFQ Issued: Feb 10 | Award: Feb 25' },
            { label: 'Compliance Issues:', value: 'None - All documents complete' },
        ],
    },
];

export default function MayorComplianceAndAudit() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [activeNavIndex, setActiveNavIndex] = useState(9); // Compliance & Audit Flags Monitor
    const [checklist, setChecklist] = useState({ 0: false, 1: false, 2: false });

    const handleReview = (id) => {
        alert(`Opening compliance review for ${id}...\n\nDetails Available:\n• Complete audit trail\n• Supporting documents\n• Response history\n• Corrective action plan\n• Responsible parties\n• Timeline & deadlines`);
    };

    const endorseToLegal = () => {
        alert('Endorsing to Legal Office...\n\nSelected findings will be forwarded to:\n• Legal Office for review\n• Assessment of legal implications\n• Recommended course of action\n\nYou will be notified once legal review is complete.');
    };
    const requestAudit = () => {
        alert('Requesting Internal Audit...\n\nInternal Audit Team will:\n• Conduct detailed investigation\n• Review supporting documents\n• Interview involved personnel\n• Prepare audit report\n\nEstimated completion: 5-7 working days');
    };
    const generateReport = () => {
        alert('Generating Risk Report...\n\nReport Contents:\n• Executive Summary\n• Critical Findings (3)\n• High Priority Items (7)\n• Risk Matrix Analysis\n• Compliance Timeline\n• Recommended Actions\n\nReport will be sent to your email.');
    };
    const scheduleReview = () => {
        alert('Schedule Compliance Review Meeting\n\nProposed Attendees:\n• Mayor\n• Administrator\n• Legal Officer\n• Internal Auditor\n• Department Heads\n\nSuggested Date: February 15, 2025\nVenue: Executive Conference Room');
    };

    const submitFinding = (e) => {
        e.preventDefault();
        alert('Compliance Finding Submitted!\n\nFinding has been logged and flagged for:\n• Executive review\n• Risk assessment\n• Legal evaluation\n• Audit tracking\n\nTracking Number: CF-2025-0847\n\nYou will receive updates on actions taken.');
    };
    const flagUrgent = () => {
        alert('Finding Flagged as URGENT!\n\nImmediate notifications sent to:\n• Mayor\'s Office\n• Legal Office\n• Department Head\n• Internal Audit Team\n\nResponse required within 24 hours.');
    };
    const saveDraft = () => {
        alert('Draft saved successfully!\n\nYour draft will be available for 30 days.\nYou can continue editing from the drafts section.');
    };

    const immediateAction = () => {
        alert('IMMEDIATE ACTION REQUIRED\n\nCOA Finding: AOM No. 2025-03\n\nViolation: Procurement procedures not followed for emergency purchases\nAmount Involved: ₱3.2M\nDepartment: GSO\n\nRequired Actions:\n1. Submit written explanation within 5 days\n2. Provide supporting documents\n3. Implement corrective measures\n4. Prevent recurrence\n\nLegal Office has been notified for assistance.');
    };

    return (
        <div className="mayor-compliance-root">
            <InlineStyle />
            <MayorOfficeHeader iconText="📁 COMPLIANCE & AUDIT" badgeIcon="⚠️" badgeText="12 FLAGS ACTIVE" />

            <div className="container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Compliance & Audit Flags Monitor</h1>
                        <p className="page-subtitle">Early detection of risks, audit findings, and overdue submissions for COA and good governance compliance</p>
                    </div>

                    {/* Critical Alert Banner */}
                    <div className="alert-banner">
                        <div className="alert-icon">🚨</div>
                        <div className="alert-content">
                            <div className="alert-title">Critical COA Finding Requires Immediate Action</div>
                            <div className="alert-description">Unresolved audit observation memorandum on procurement procedures. Response deadline: 5 days remaining. Legal review recommended.</div>
                        </div>
                        <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={immediateAction}>IMMEDIATE ACTION</button>
                    </div>

                    {/* Tab Navigation */}
                    <div className="tab-nav">
                        <div className={`tab-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Compliance Dashboard</div>
                        <div className={`tab-item ${activeTab === 'coa' ? 'active' : ''}`} onClick={() => setActiveTab('coa')}>COA Findings</div>
                        <div className={`tab-item ${activeTab === 'saln' ? 'active' : ''}`} onClick={() => setActiveTab('saln')}>SALN Status</div>
                        <div className={`tab-item ${activeTab === 'procurement' ? 'active' : ''}`} onClick={() => setActiveTab('procurement')}>Procurement Logs</div>
                        <div className={`tab-item ${activeTab === 'report' ? 'active' : ''}`} onClick={() => setActiveTab('report')}>Submit Finding</div>
                    </div>

                    {/* Dashboard Tab */}
                    {activeTab === 'dashboard' && (
                        <div id="dashboard-tab" className="tab-content">
                            {/* Risk Level Summary */}
                            <div className="risk-grid">
                                <div className="risk-card risk-critical">
                                    <div className="risk-header">
                                        <div className="risk-title">Critical Risks</div>
                                        <div className="risk-icon">🔴</div>
                                    </div>
                                    <div className="risk-value" style={{ color: '#ef4444' }}>3</div>
                                    <div className="risk-subtitle">Immediate action required</div>
                                </div>

                                <div className="risk-card risk-high">
                                    <div className="risk-header">
                                        <div className="risk-title">High Priority</div>
                                        <div className="risk-icon">🟠</div>
                                    </div>
                                    <div className="risk-value" style={{ color: '#f59e0b' }}>7</div>
                                    <div className="risk-subtitle">Review within 48 hours</div>
                                </div>

                                <div className="risk-card risk-medium">
                                    <div className="risk-header">
                                        <div className="risk-title">Pending Items</div>
                                        <div className="risk-icon">🟡</div>
                                    </div>
                                    <div className="risk-value" style={{ color: '#3b82f6' }}>15</div>
                                    <div className="risk-subtitle">Scheduled for review</div>
                                </div>

                                <div className="risk-card risk-low">
                                    <div className="risk-header">
                                        <div className="risk-title">Compliant</div>
                                        <div className="risk-icon">🟢</div>
                                    </div>
                                    <div className="risk-value" style={{ color: '#10b981' }}>84%</div>
                                    <div className="risk-subtitle">Overall compliance rate</div>
                                </div>
                            </div>

                            <div className="grid">
                                {/* Overdue Dashboard */}
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="card-title">OVERDUE SUBMISSIONS & COMPLIANCE FLAGS</h2>
                                        <button className="btn btn-warning" style={{ padding: '6px 12px', fontSize: '12px' }}>EXPORT REPORT</button>
                                    </div>

                                    <table className="compliance-table">
                                        <thead>
                                            <tr>
                                                <th>Priority</th>
                                                <th>Item/Finding</th>
                                                <th>Department</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {overdueRows.map((r) => (
                                                <tr key={r.id}>
                                                    <td><span className={`priority-dot priority-${r.priority}`}></span></td>
                                                    <td><strong>{r.item}</strong><br /><small>{r.sub}</small></td>
                                                    <td>{r.dept}</td>
                                                    <td style={{ color: r.dueColor || undefined }}>{r.due}</td>
                                                    <td><span className={`badge ${r.statusClass}`}>{r.status}</span></td>
                                                    <td><button className="btn-review" onClick={() => handleReview(r.id)}>✅ Review</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Compliance Checklist */}
                                    <div style={{ marginTop: 24 }}>
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>IMMEDIATE ACTION ITEMS</h3>
                                        {[
                                            {
                                                cls: 'checklist-item checklist-overdue',
                                                title: 'Submit COA response on procurement findings',
                                                sub: 'Prepare justification and corrective action plan',
                                                deadline: '5 days overdue',
                                            },
                                            {
                                                cls: 'checklist-item checklist-pending',
                                                title: 'Complete SALN collection from department heads',
                                                sub: '23 officials pending submission',
                                                deadline: 'Due in 2 days',
                                            },
                                            {
                                                cls: 'checklist-item checklist-pending',
                                                title: 'Upload procurement documents to PhilGEPS',
                                                sub: 'Road rehabilitation project Phase 2',
                                                deadline: 'Due in 7 days',
                                            },
                                        ].map((item, idx) => (
                                            <div
                                                className={item.cls}
                                                key={idx}
                                                style={checklist[idx] ? { opacity: 0.6, textDecoration: 'line-through' } : undefined}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="checklist-checkbox"
                                                    checked={!!checklist[idx]}
                                                    onChange={(e) => setChecklist((c) => ({ ...c, [idx]: e.target.checked }))}
                                                />
                                                <div className="checklist-content">
                                                    <strong>{item.title}</strong>
                                                    <div style={{ fontSize: 11, color: '#6b7280' }}>{item.sub}</div>
                                                </div>
                                                <span className="checklist-deadline">{item.deadline}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div>
                                    {/* Good Governance Score */}
                                    <div className="card" style={{ marginBottom: 24 }}>
                                        <div className="card-header">
                                            <h2 className="card-title">GOVERNANCE SCORECARD</h2>
                                        </div>
                                        <div className="score-container">
                                            <div className="score-circle score-good">84%</div>
                                            <div className="score-label">Good Governance Index</div>
                                            <div className="score-subtitle">DILG Seal of Good Local Governance</div>
                                        </div>

                                        <div style={{ padding: '0 20px' }}>
                                            {[
                                                ['Financial Admin', '92%'],
                                                ['Disaster Preparedness', '88%'],
                                                ['Social Protection', '85%'],
                                                ['Peace & Order', '87%'],
                                                ['Business Friendliness', '79%'],
                                                ['Environmental Mgmt', '76%'],
                                            ].map(([label, value]) => (
                                                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 }}>
                                                    <span>{label}</span>
                                                    <strong>{value}</strong>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="card-title">EXECUTIVE ACTIONS</h2>
                                        </div>
                                        <div className="actions-grid">
                                            <div className="action-card" onClick={endorseToLegal}>
                                                <div className="action-icon">⚖️</div>
                                                <div className="action-label">Endorse to Legal</div>
                                            </div>
                                            <div className="action-card" onClick={requestAudit}>
                                                <div className="action-icon">🔍</div>
                                                <div className="action-label">Internal Audit</div>
                                            </div>
                                            <div className="action-card" onClick={generateReport}>
                                                <div className="action-icon">📊</div>
                                                <div className="action-label">Risk Report</div>
                                            </div>
                                            <div className="action-card" onClick={scheduleReview}>
                                                <div className="action-icon">📅</div>
                                                <div className="action-label">Schedule Review</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Audit Timeline */}
                            <div className="card full-width">
                                <div className="card-header">
                                    <h2 className="card-title">RECENT AUDIT ACTIVITIES & FINDINGS</h2>
                                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>VIEW ALL</button>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker" style={{ backgroundColor: '#ef4444' }}>🔴</div>
                                    <div className="timeline-content">
                                        <div className="timeline-title">COA Audit Observation Memorandum</div>
                                        <div className="timeline-description">Non-compliance with procurement law on emergency purchases exceeding threshold</div>
                                        <div className="timeline-date">February 7, 2025 - GSO Department</div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker" style={{ backgroundColor: '#f59e0b' }}>⚠️</div>
                                    <div className="timeline-content">
                                        <div className="timeline-title">DILG Compliance Notice</div>
                                        <div className="timeline-description">Incomplete posting of procurement opportunities in PhilGEPS portal</div>
                                        <div className="timeline-date">February 5, 2025 - BAC Secretariat</div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker" style={{ backgroundColor: '#3b82f6' }}>📋</div>
                                    <div className="timeline-content">
                                        <div className="timeline-title">Internal Audit Finding</div>
                                        <div className="timeline-description">Delayed liquidation of cash advances for official travel</div>
                                        <div className="timeline-date">February 3, 2025 - Multiple Departments</div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker" style={{ backgroundColor: '#10b981' }}>✅</div>
                                    <div className="timeline-content">
                                        <div className="timeline-title">Resolved: Ombudsman Clearance</div>
                                        <div className="timeline-description">Successfully addressed all pending administrative cases</div>
                                        <div className="timeline-date">January 30, 2025 - Legal Office</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Finding Tab */}
                    {activeTab === 'report' && (
                        <div id="report-tab" className="tab-content">
                            <div className="card full-width">
                                <div className="card-header">
                                    <h2 className="card-title">SUBMIT COMPLIANCE FINDING OR AUDIT OBSERVATION</h2>
                                </div>

                                <form id="compliance-form" onSubmit={submitFinding}>
                                    <div className="form-section">
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Finding Details</h3>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Finding Type <span className="form-required">*</span></label>
                                                <select className="form-select" required defaultValue="">
                                                    <option value="">Select type...</option>
                                                    <option>COA Audit Finding</option>
                                                    <option>DILG Compliance Issue</option>
                                                    <option>Internal Audit Observation</option>
                                                    <option>Ombudsman Directive</option>
                                                    <option>CSC Requirement</option>
                                                    <option>BIR Compliance</option>
                                                    <option>PhilGEPS Violation</option>
                                                    <option>Other Regulatory</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Priority Level <span className="form-required">*</span></label>
                                                <select className="form-select" required defaultValue="">
                                                    <option value="">Select priority...</option>
                                                    <option>Critical - Immediate Action</option>
                                                    <option>High - Within 48 Hours</option>
                                                    <option>Medium - Within 1 Week</option>
                                                    <option>Low - Routine</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Reference Number</label>
                                                <input type="text" className="form-input" placeholder="e.g., AOM-2025-001" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Department & Personnel</h3>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Department/Office <span className="form-required">*</span></label>
                                                <select className="form-select" required defaultValue="">
                                                    <option value="">Select department...</option>
                                                    <option>Mayor's Office</option>
                                                    <option>Administrator's Office</option>
                                                    <option>Accounting</option>
                                                    <option>Budget Office</option>
                                                    <option>Treasurer's Office</option>
                                                    <option>Assessor's Office</option>
                                                    <option>GSO</option>
                                                    <option>Engineering</option>
                                                    <option>HRMO</option>
                                                    <option>Legal Office</option>
                                                    <option>Multiple Departments</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Responsible Officer</label>
                                                <input type="text" className="form-input" placeholder="Name of accountable officer" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Date Discovered <span className="form-required">*</span></label>
                                                <input type="date" className="form-input" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Compliance Details</h3>
                                        <div className="form-group">
                                            <label className="form-label">Finding Description <span className="form-required">*</span></label>
                                            <textarea className="form-textarea" placeholder="Describe the compliance issue or audit finding in detail..." required></textarea>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Legal Basis/Regulation</label>
                                                <input type="text" className="form-input" placeholder="e.g., RA 9184, COA Circular 2020-006" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Financial Impact</label>
                                                <input type="text" className="form-input" placeholder="₱ Amount if applicable" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Response Deadline <span className="form-required">*</span></label>
                                                <input type="date" className="form-input" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Risk Assessment</h3>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Risk Category</label>
                                                <select className="form-select" defaultValue="">
                                                    <option value="">Select category...</option>
                                                    <option>Financial Risk</option>
                                                    <option>Legal/Regulatory Risk</option>
                                                    <option>Operational Risk</option>
                                                    <option>Reputational Risk</option>
                                                    <option>Criminal Liability</option>
                                                    <option>Administrative Sanction</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Potential Consequences</label>
                                                <select className="form-select" defaultValue="">
                                                    <option value="">Select consequences...</option>
                                                    <option>COA Disallowance</option>
                                                    <option>Suspension of Authority</option>
                                                    <option>Criminal Charges</option>
                                                    <option>Administrative Case</option>
                                                    <option>Fund Withholding</option>
                                                    <option>Loss of Certification</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Likelihood</label>
                                                <select className="form-select" defaultValue="">
                                                    <option value="">Select likelihood...</option>
                                                    <option>Almost Certain</option>
                                                    <option>Likely</option>
                                                    <option>Possible</option>
                                                    <option>Unlikely</option>
                                                    <option>Rare</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Recommended Actions</h3>
                                        <div className="form-group">
                                            <label className="form-label">Immediate Actions Required</label>
                                            <textarea className="form-textarea" placeholder="List immediate steps to address the finding..."></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Long-term Corrective Measures</label>
                                            <textarea className="form-textarea" placeholder="Describe systemic changes needed to prevent recurrence..."></textarea>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Endorsement Required</label>
                                                <select className="form-select" defaultValue="">
                                                    <option value="">Select office...</option>
                                                    <option>Legal Office Review</option>
                                                    <option>Internal Audit Team</option>
                                                    <option>Mayor's Direct Action</option>
                                                    <option>Department Head Meeting</option>
                                                    <option>External Legal Counsel</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Documentation Status</label>
                                                <select className="form-select" defaultValue="">
                                                    <option value="">Select status...</option>
                                                    <option>Complete Documentation</option>
                                                    <option>Partial Documentation</option>
                                                    <option>Documentation Pending</option>
                                                    <option>No Documentation</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Follow-up Schedule</label>
                                                <input type="date" className="form-input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
                                        <button type="submit" className="btn btn-primary">SUBMIT FINDING</button>
                                        <button type="button" className="btn btn-warning" onClick={flagUrgent}>FLAG AS URGENT</button>
                                        <button type="button" className="btn btn-secondary" onClick={saveDraft}>SAVE DRAFT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Procurement Tab */}
                    {activeTab === 'procurement' && (
                        <div id="procurement-tab" className="tab-content">
                            <div className="card full-width">
                                <div className="card-header">
                                    <h2 className="card-title">PENDING PROCUREMENT COMPLIANCE</h2>
                                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>GENERATE REPORT</button>
                                </div>

                                {procurementCards.map((card) => (
                                    <div className="procurement-card" key={card.title}>
                                        <div className="procurement-header">
                                            <span className="procurement-title">{card.title}</span>
                                            <span className="procurement-amount">{card.amount}</span>
                                        </div>
                                        <div className="procurement-details">
                                            {card.details.map((d, i) => (
                                                <div key={i}>
                                                    <strong>{d.label}</strong> {d.value}
                                                    {d.extra}
                                                    {d.bold && (<><strong>{d.bold}</strong> {d.boldValue}</>)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}


