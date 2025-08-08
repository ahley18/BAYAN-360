import React, { useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeNav from './mayor_office_nav';

const ComplianceAndAuditFlagsDashboard = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(9); // Compliance nav active
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const tableRows = [
    { priority: 'critical', item: 'COA AOM No. 2025-03', sub: 'Procurement procedure violation', dept: 'GSO', due: 'Feb 12, 2025', dueColor: '#ef4444', status: 'OVERDUE', statusClass: 'badge-critical', actionId: 'COA-2025-03' },
    { priority: 'critical', item: 'SALN Submission', sub: '23 personnel pending', dept: 'Multiple', due: 'Jan 31, 2025', dueColor: '#ef4444', status: '7 DAYS LATE', statusClass: 'badge-critical', actionId: 'SALN-2025' },
    { priority: 'high', item: 'PhilGEPS Posting', sub: 'Infrastructure project ABC > 5M', dept: 'Engineering', due: 'Feb 15, 2025', dueColor: '#f59e0b', status: 'DUE SOON', statusClass: 'badge-warning', actionId: 'PGEPS-001' },
    { priority: 'high', item: 'Liquidation Report', sub: 'Q4 2024 Cash Advances', dept: 'Accounting', due: 'Feb 20, 2025', dueColor: '#f59e0b', status: 'PENDING', statusClass: 'badge-warning', actionId: 'LIQ-Q4-2024' },
    { priority: 'medium', item: 'Gender & Development Report', sub: 'Annual GAD accomplishment', dept: 'HRMO', due: 'Mar 15, 2025', dueColor: undefined, status: 'IN PROGRESS', statusClass: 'badge-pending', actionId: 'GAD-2025' },
    { priority: 'low', item: 'Transparency Seal Update', sub: 'Website compliance check', dept: 'MIS', due: 'Mar 31, 2025', dueColor: undefined, status: 'ON TRACK', statusClass: 'badge-compliant', actionId: 'TRANS-2025' },
  ];

  const filteredRows = !searchTerm
    ? tableRows
    : tableRows.filter((r) => `${r.item} ${r.sub} ${r.dept} ${r.status}`.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleImmediateAction = () => {
    alert(
      'IMMEDIATE ACTION REQUIRED\n\nCOA Finding: AOM No. 2025-03\n\nViolation: Procurement procedures not followed for emergency purchases\nAmount Involved: ₱3.2M\nDepartment: GSO\n\nRequired Actions:\n1. Submit written explanation within 5 days\n2. Provide supporting documents\n3. Implement corrective measures\n4. Prevent recurrence\n\nLegal Office has been notified for assistance.'
    );
  };

  const reviewCompliance = (id) => {
    alert(
      `Opening compliance review for ${id}...\n\nDetails Available:\n• Complete audit trail\n• Supporting documents\n• Response history\n• Corrective action plan\n• Responsible parties\n• Timeline & deadlines`
    );
  };

  const endorseToLegal = () => {
    alert(
      'Endorsing to Legal Office...\n\nSelected findings will be forwarded to:\n• Legal Office for review\n• Assessment of legal implications\n• Recommended course of action\n\nYou will be notified once legal review is complete.'
    );
  };

  const requestAudit = () => {
    alert(
      'Requesting Internal Audit...\n\nInternal Audit Team will:\n• Conduct detailed investigation\n• Review supporting documents\n• Interview involved personnel\n• Prepare audit report\n\nEstimated completion: 5-7 working days'
    );
  };

  const generateReport = () => {
    alert(
      'Generating Risk Report...\n\nReport Contents:\n• Executive Summary\n• Critical Findings (3)\n• High Priority Items (7)\n• Risk Matrix Analysis\n• Compliance Timeline\n• Recommended Actions\n\nReport will be sent to your email.'
    );
  };

  const scheduleReview = () => {
    alert(
      'Schedule Compliance Review Meeting\n\nProposed Attendees:\n• Mayor\n• Administrator\n• Legal Officer\n• Internal Auditor\n• Department Heads\n\nSuggested Date: February 15, 2025\nVenue: Executive Conference Room'
    );
  };

  const handleSubmitFinding = (e) => {
    e.preventDefault();
    alert(
      'Compliance Finding Submitted!\n\nFinding has been logged and flagged for:\n• Executive review\n• Risk assessment\n• Legal evaluation\n• Audit tracking\n\nTracking Number: CF-2025-0847\n\nYou will receive updates on actions taken.'
    );
  };

  const flagUrgent = () => {
    alert(
      "Finding Flagged as URGENT!\n\nImmediate notifications sent to:\n• Mayor's Office\n• Legal Office\n• Department Head\n• Internal Audit Team\n\nResponse required within 24 hours."
    );
  };

  const saveDraft = () => {
    alert('Draft saved successfully!\n\nYour draft will be available for 30 days.\nYou can continue editing from the drafts section.');
  };

  return (
    <div className="compliance-page">
      <GlobalStyleMayor />

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">📁 COMPLIANCE & AUDIT</div>
          <div className="search-container">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search compliance items, audit findings, or departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <span>OFFICE OF THE MAYOR</span>
          <div className="status-badge">⚠️ 12 FLAGS ACTIVE</div>
        </div>
      </header>

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
            <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }} onClick={handleImmediateAction}>IMMEDIATE ACTION</button>
          </div>

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

          {/* Tab Navigation */}
          <div className="tab-nav">
            <div className={`tab-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Compliance Dashboard</div>
            <div className={`tab-item ${activeTab === 'coa' ? 'active' : ''}`} onClick={() => setActiveTab('coa')}>COA Findings</div>
            <div className={`tab-item ${activeTab === 'saln' ? 'active' : ''}`} onClick={() => setActiveTab('saln')}>SALN Status</div>
            <div className={`tab-item ${activeTab === 'procurement' ? 'active' : ''}`} onClick={() => setActiveTab('procurement')}>Procurement Logs</div>
            <div className={`tab-item ${activeTab === 'report' ? 'active' : ''}`} onClick={() => setActiveTab('report')}>Submit Finding</div>
          </div>

          {activeTab === 'dashboard' && (
            <div id="dashboard-tab" className="tab-content">
              <div className="grid">
                {/* Overdue Dashboard */}
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">OVERDUE SUBMISSIONS & COMPLIANCE FLAGS</h2>
                    <button className="btn btn-warning" style={{ padding: '6px 12px', fontSize: 12 }}>EXPORT REPORT</button>
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
                      {filteredRows.map((row, idx) => (
                        <tr key={idx}>
                          <td><span className={`priority-dot priority-${row.priority}`}></span></td>
                          <td>
                            <strong>{row.item}</strong>
                            <br />
                            <small>{row.sub}</small>
                          </td>
                          <td>{row.dept}</td>
                          <td style={{ color: row.dueColor || '#374151' }}>{row.due}</td>
                          <td><span className={`badge ${row.statusClass}`}>{row.status}</span></td>
                          <td><button className="btn-review" onClick={() => reviewCompliance(row.actionId)}>✅ Review</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Compliance Checklist */}
                  <div style={{ marginTop: 24 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>IMMEDIATE ACTION ITEMS</h3>
                    <div className="checklist-item checklist-overdue">
                      <input type="checkbox" className="checklist-checkbox" />
                      <div className="checklist-content">
                        <strong>Submit COA response on procurement findings</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Prepare justification and corrective action plan</div>
                      </div>
                      <span className="checklist-deadline">5 days overdue</span>
                    </div>
                    <div className="checklist-item checklist-pending">
                      <input type="checkbox" className="checklist-checkbox" />
                      <div className="checklist-content">
                        <strong>Complete SALN collection from department heads</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>23 officials pending submission</div>
                      </div>
                      <span className="checklist-deadline">Due in 2 days</span>
                    </div>
                    <div className="checklist-item checklist-pending">
                      <input type="checkbox" className="checklist-checkbox" />
                      <div className="checklist-content">
                        <strong>Upload procurement documents to PhilGEPS</strong>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>Road rehabilitation project Phase 2</div>
                      </div>
                      <span className="checklist-deadline">Due in 7 days</span>
                    </div>
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
                      ].map(([label, val]) => (
                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 }}>
                          <span>{label}</span>
                          <strong>{val}</strong>
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
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 12 }}>VIEW ALL</button>
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

          {activeTab === 'report' && (
            <div id="report-tab" className="tab-content">
              <div className="card full-width">
                <div className="card-header">
                  <h2 className="card-title">SUBMIT COMPLIANCE FINDING OR AUDIT OBSERVATION</h2>
                </div>

                <form id="compliance-form" onSubmit={handleSubmitFinding}>
                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Finding Details</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Finding Type <span className="form-required">*</span></label>
                        <select className="form-select" required>
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
                        <select className="form-select" required>
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
                        <select className="form-select" required>
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
                        <select className="form-select">
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
                        <select className="form-select">
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
                        <select className="form-select">
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
                        <select className="form-select">
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
                        <select className="form-select">
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

          {activeTab === 'procurement' && (
            <div id="procurement-tab" className="tab-content">
              <div className="card full-width">
                <div className="card-header">
                  <h2 className="card-title">PENDING PROCUREMENT COMPLIANCE</h2>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 12 }}>GENERATE REPORT</button>
                </div>

                <div className="procurement-card">
                  <div className="procurement-header">
                    <span className="procurement-title">Road Rehabilitation Phase 2</span>
                    <span className="procurement-amount">₱45.8M</span>
                  </div>
                  <div className="procurement-details">
                    <div><strong>Status:</strong> <span className="badge badge-warning">PHILGEPS POSTING PENDING</span></div>
                    <div><strong>Mode:</strong> Public Bidding | <strong>ABC:</strong> ₱45,800,000</div>
                    <div><strong>Timeline:</strong> Pre-bid Conference: Feb 20 | Submission: Mar 5 | Opening: Mar 5</div>
                    <div><strong>Compliance Issues:</strong> Missing technical specifications, incomplete GPPB forms</div>
                  </div>
                </div>

                <div className="procurement-card">
                  <div className="procurement-header">
                    <span className="procurement-title">Medical Supplies & Equipment</span>
                    <span className="procurement-amount">₱12.3M</span>
                  </div>
                  <div className="procurement-details">
                    <div><strong>Status:</strong> <span className="badge badge-critical">DELAYED - BAC RESOLUTION MISSING</span></div>
                    <div><strong>Mode:</strong> Public Bidding | <strong>ABC:</strong> ₱12,300,000</div>
                    <div><strong>Timeline:</strong> Originally scheduled Jan 2025 - Now delayed to March 2025</div>
                    <div><strong>Compliance Issues:</strong> No end-user specifications, pending APP amendment</div>
                  </div>
                </div>

                <div className="procurement-card">
                  <div className="procurement-header">
                    <span className="procurement-title">IT Equipment & Software Licenses</span>
                    <span className="procurement-amount">₱5.6M</span>
                  </div>
                  <div className="procurement-details">
                    <div><strong>Status:</strong> <span className="badge badge-compliant">ON TRACK</span></div>
                    <div><strong>Mode:</strong> Shopping | <strong>ABC:</strong> ₱5,600,000</div>
                    <div><strong>Timeline:</strong> RFQ Issued: Feb 10 | Award: Feb 25</div>
                    <div><strong>Compliance Issues:</strong> None - All documents complete</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'coa' || activeTab === 'saln') && (
            <div className="card full-width" style={{ padding: 24 }}>
              <div className="card-title">Content for this tab will be provided in the next update.</div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ComplianceAndAuditFlagsDashboard;


