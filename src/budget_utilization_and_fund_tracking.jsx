import React, { useMemo, useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import { FaTachometerAlt, FaChartBar, FaCommentDots, FaMoneyBillWave, FaExclamationTriangle, FaFileAlt, FaBalanceScale, FaHome, FaClipboardList } from 'react-icons/fa';

const BudgetUtilizationAndFundTracking = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(4); // Budget nav active
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = useMemo(
    () => [
      { label: 'EXECUTIVE DASHBOARD', Icon: FaTachometerAlt },
      { label: 'PROJECT MONITORING & GEOTRACKER', Icon: FaChartBar },
      { label: 'DEPARTMENT PERFORMANCE SCORECARDS', Icon: FaChartBar },
      { label: 'CITIZEN FEEDBACK & PUBLIC SENTIMENT', Icon: FaCommentDots },
      { label: 'BUDGET UTILIZATION & FUND TRACKING', Icon: FaMoneyBillWave },
      { label: 'EMERGENCY & DISASTER ALERT CONSOLE', Icon: FaExclamationTriangle },
      { label: 'EXECUTIVE ORDERS & MEMO GENERATOR', Icon: FaFileAlt },
      { label: 'POLICY REVIEW & LEGISLATIVE COORDINATION', Icon: FaBalanceScale },
      { label: 'BARANGAY AGGREGATED REPORTS', Icon: FaHome },
      { label: 'COMPLIANCE & AUDIT FLAGS MONITOR', Icon: FaClipboardList },
    ],
    []
  );

  const handleBudgetFormSubmit = (e) => {
    e.preventDefault();
    alert(
      "Budget Entry Saved!\n\n✅ Data synced with Treasury\n📊 Accounting system updated\n🔄 AIP reference linked\n📋 Procurement milestone tracked\n🔔 Mayor notified for review"
    );
  };

  const handleAlertButton = (label) => {
    switch (label) {
      case 'REVIEW VARIANCE':
        alert(
          '📊 Variance Analysis\n\nCritical Issues:\n• Tourism: -58% (₱29M unutilized)\n• Youth & Sports: -62% (₱24.8M)\n• Legal: -48% (₱12M)\n\nRecommendations:\n• Immediate intervention required\n• Consider Q4 realignment\n• Accelerate procurement'
        );
        break;
      case 'Export':
        alert(
          '📄 Export Options:\n\n• Budget Heatmap (PDF)\n• Utilization Report (Excel)\n• Variance Analysis\n• Department Breakdown\n• AIP Linkage Report'
        );
        break;
      case 'Export to Excel':
        alert(
          "📁 Exporting to Excel\n\nIncluding:\n• All budget line items\n• Disbursement history\n• Utilization percentages\n• Variance calculations\n• Procurement status\n\nFile: Budget_Tracking_Q4_2025.xlsx"
        );
        break;
      case 'Generate Report':
        alert(
          '📈 Generating Budget Report\n\nContents:\n• Executive summary\n• Department utilization\n• Fund source analysis\n• Variance report\n• Recommendations\n• Q4 projections\n\nReport ready in 5 seconds...'
        );
        break;
      case 'Details':
        alert(
          '💰 Fund Sources Details\n\nGeneral Fund: ₱850M (75% utilized)\nIRA/NTA: ₱650M (82% utilized)\nSEF: ₱250M (68% utilized)\nTrust Fund: ₱100M (45% utilized)\n\nTotal: ₱1.85B approved budget'
        );
        break;
      case 'Full Report':
        alert(
          '📊 Complete Variance Report\n\nGenerating:\n• Department-by-department analysis\n• Root cause identification\n• Timeline impact assessment\n• Corrective action plan\n• Q4 catch-up strategy'
        );
        break;
      case 'Download Chart':
        alert(
          '📈 Downloading Chart\n\nFormat options:\n• PNG image\n• PDF document\n• Excel data\n• PowerPoint slide\n\nIncluding trend analysis and projections'
        );
        break;
      case 'View':
        alert(
          '📋 Line Item Details\n\nOpening detailed view:\n• Transaction history\n• Supporting documents\n• Approval trail\n• Disbursement schedule\n• Related AIP projects'
        );
        break;
      case 'Action':
        alert(
          '⚠️ Action Required\n\nDepartment: Tourism\nIssue: 58% under-utilization\n\nRecommended actions:\n• Expedite procurement\n• Review project timeline\n• Consider reallocation\n• Schedule urgent meeting'
        );
        break;
      case 'Urgent':
        alert(
          '🚨 Urgent Intervention\n\nDepartment: Youth & Sports\nUtilization: 38% only\n\nImmediate actions:\n• Emergency meeting scheduled\n• Procurement fast-track\n• Budget review tomorrow\n• Mayor briefing at 2PM'
        );
        break;
      default:
        break;
    }
  };

  const heatmapCells = [
    ['Engineering', '92%', '₱450M/₱489M', 'heat-excellent'],
    ['Health', '85%', '₱255M/₱300M', 'heat-good'],
    ['Education', '78%', '₱156M/₱200M', 'heat-good'],
    ['Social Welfare', '72%', '₱108M/₱150M', 'heat-fair'],
    ['Agriculture', '68%', '₱68M/₱100M', 'heat-fair'],
    ['Environment', '55%', '₱44M/₱80M', 'heat-warning'],
    ['Tourism', '42%', '₱21M/₱50M', 'heat-critical'],
    ['Youth & Sports', '38%', '₱15M/₱40M', 'heat-critical'],
    ['Admin', '82%', '₱123M/₱150M', 'heat-good'],
    ['Treasury', '88%', '₱44M/₱50M', 'heat-excellent'],
    ['Planning', '75%', '₱30M/₱40M', 'heat-fair'],
    ['Legal', '52%', '₱13M/₱25M', 'heat-warning'],
  ];

  const handleHeatClick = (dept, percent) => {
    alert(
      `${dept} Budget Details\n\nUtilization: ${percent}\n\nView:\n• Line item breakdown\n• Monthly spending trend\n• Procurement status\n• Variance analysis\n• Projected year-end\n• Recommendations`
    );
  };

  const handleFundPill = (label) => {
    const fundType = label.split(':')[0];
    alert(
      `${fundType} Details\n\nView:\n• Allocation breakdown\n• Department distribution\n• Utilization timeline\n• Remaining balance\n• Projected needs`
    );
  };

  const handleProcStatus = (text) => {
    alert(
      `Procurement Status\n\n${text}\n\nView:\n• Procurement timeline\n• Bidding documents\n• Supplier information\n• Contract details\n• Delivery schedule`
    );
  };

  return (
    <div className="budget-page">
      <GlobalStyleMayor />
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">🏛️ OFFICE OF THE MAYOR</div>
          <div className="search-container">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search budget items, departments, or AIP codes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <div className="sync-badge">🔄 Treasury + Accounting Sync</div>
          <span>BUDGET TRACKING</span>
          <div className="status-badge">✅ MONITOR SPENDING</div>
        </div>
      </header>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            {navItems.map(({ label, Icon }, idx) => (
              <div key={label} className={`nav-item ${activeNavIndex === idx ? 'active' : ''}`} onClick={() => setActiveNavIndex(idx)}>
                <span className="nav-icon"><Icon size={18} /></span>
                <span>{label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Budget Utilization & Fund Tracking</h1>
            <p className="page-subtitle">
              Executive view of fund usage vs. plans with real-time sync to Treasury, Budget, and Accounting linked to AIP and procurement milestones
            </p>
          </div>

          {/* Variance Alert */}
          <div className="variance-alert">
            <div className="variance-icon">⚠️</div>
            <div className="variance-content">
              <div className="variance-title">Budget Variance Alert</div>
              <div className="variance-description">
                5 departments show low utilization (below 50%) • 2 departments nearing budget ceiling • Q4 realignment recommended
              </div>
            </div>
            <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }} onClick={() => handleAlertButton('REVIEW VARIANCE')}>
              REVIEW VARIANCE
            </button>
          </div>

          {/* Budget Overview */}
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
                  <select className="form-select" style={{ width: 100, padding: 6 }}>
                    <option>Q4 2025</option>
                    <option>Q3 2025</option>
                    <option>Annual</option>
                  </select>
                  <button className="btn btn-secondary" onClick={() => handleAlertButton('Export')}>Export</button>
                </div>
              </div>

              <div className="heatmap-grid">
                {heatmapCells.map(([dept, percent, ratio, tone]) => (
                  <div key={dept} className={`heatmap-cell ${tone}`} onClick={() => handleHeatClick(dept, percent)}>
                    <div className="heatmap-dept">{dept}</div>
                    <div className="heatmap-percent">{percent}</div>
                    <div style={{ fontSize: 9 }}>{ratio}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12, padding: 8, backgroundColor: '#f9fafb', borderRadius: 4 }}>
                {[
                  ['#10b981', '80-100%'],
                  ['#3b82f6', '70-79%'],
                  ['#fbbf24', '60-69%'],
                  ['#f59e0b', '50-59%'],
                  ['#ef4444', '<50%'],
                ].map(([bg, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 12, height: 12, backgroundColor: bg, borderRadius: 2 }} />
                    <span style={{ fontSize: 11 }}>{label}</span>
                  </div>
                ))}
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

              <form id="budget-form" onSubmit={handleBudgetFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Department/Office</label>
                  <select className="form-select" required>
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
                  <select className="form-select" required>
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
                  <select className="form-select">
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
                    <input type="number" className="form-input" placeholder="0-100" min="0" max="100" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Target %</label>
                    <input type="number" className="form-input" placeholder="0-100" min="0" max="100" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Remarks/Notes</label>
                  <textarea className="form-textarea" placeholder="Enter any notes on delays, issues, or adjustments..."></textarea>
                </div>

                <div className="intervention-section">
                  <div className="intervention-header">🔐 Mayor's Budget Intervention</div>
                  <div className="intervention-buttons">
                    <button type="button" className="btn btn-success" onClick={() => alert('✅ Budget Approved\n\nApproval logged:\n• Department notified\n• Treasury updated\n• Disbursement authorized\n• Timeline confirmed\n\nProceeding with implementation...')}>✅ Approve</button>
                    <button type="button" className="btn btn-warning" onClick={() => alert('🔄 Budget Realignment\n\nInitiating realignment:\n• Source: Under-utilized departments\n• Target: Priority projects\n• Amount: ₱50M available\n• Approval: Council required\n\nPreparing realignment proposal...')}>🔄 Realign</button>
                    <button type="button" className="btn btn-danger" onClick={() => alert('⏸️ Budget Suspension\n\nSuspension order:\n• Reason: Low utilization\n• Duration: Pending review\n• Action: Performance audit\n• Review date: Within 15 days\n\nDepartment heads notified...')}>⏸️ Suspend</button>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <textarea className="form-textarea" placeholder="Mayor's directive on budget utilization..." style={{ minHeight: 40 }}></textarea>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                  <button type="submit" className="btn btn-primary">SAVE BUDGET ENTRY</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleAlertButton('Generate Report')}>Generate Report</button>
                </div>
              </form>
            </div>
          </div>

          {/* Detailed Budget Table */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">DETAILED BUDGET LINE ITEMS & DISBURSEMENT LOG</h2>
              <button className="btn btn-secondary" onClick={() => handleAlertButton('Export to Excel')}>Export to Excel</button>
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
                <tr>
                  <td><strong>Engineering</strong></td>
                  <td>Infrastructure Projects</td>
                  <td><span className="aip-badge">AIP-2025-INF-001</span></td>
                  <td>₱350,000,000</td>
                  <td>₱322,000,000</td>
                  <td>₱28,000,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-excellent" style={{ width: '92%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600 }}>92%</span>
                  </td>
                  <td><span className="procurement-status proc-completed" onClick={() => handleProcStatus('✅ On Track')}>✅ On Track</span></td>
                  <td><button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('View')}>View</button></td>
                </tr>
                <tr>
                  <td><strong>Health</strong></td>
                  <td>Medical Supplies & Equipment</td>
                  <td><span className="aip-badge">AIP-2025-HLT-003</span></td>
                  <td>₱150,000,000</td>
                  <td>₱127,500,000</td>
                  <td>₱22,500,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '85%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600 }}>85%</span>
                  </td>
                  <td><span className="procurement-status proc-ongoing" onClick={() => handleProcStatus('⚡ Ongoing')}>⚡ Ongoing</span></td>
                  <td><button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('View')}>View</button></td>
                </tr>
                <tr>
                  <td><strong>Education</strong></td>
                  <td>School Building Program</td>
                  <td><span className="aip-badge">AIP-2025-EDU-002</span></td>
                  <td>₱120,000,000</td>
                  <td>₱93,600,000</td>
                  <td>₱26,400,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '78%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600 }}>78%</span>
                  </td>
                  <td><span className="procurement-status proc-ongoing" onClick={() => handleProcStatus('⚡ Ongoing')}>⚡ Ongoing</span></td>
                  <td><button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('View')}>View</button></td>
                </tr>
                <tr>
                  <td><strong>Tourism</strong></td>
                  <td>Tourism Development</td>
                  <td><span className="aip-badge">AIP-2025-TOU-001</span></td>
                  <td>₱50,000,000</td>
                  <td>₱21,000,000</td>
                  <td>₱29,000,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-critical" style={{ width: '42%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#ef4444' }}>42%</span>
                  </td>
                  <td><span className="procurement-status proc-pending" onClick={() => handleProcStatus('⏳ Delayed')}>⏳ Delayed</span></td>
                  <td><button className="btn btn-warning" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('Action')}>Action</button></td>
                </tr>
                <tr>
                  <td><strong>Youth & Sports</strong></td>
                  <td>Sports Complex Development</td>
                  <td><span className="aip-badge">AIP-2025-YTH-001</span></td>
                  <td>₱40,000,000</td>
                  <td>₱15,200,000</td>
                  <td>₱24,800,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-critical" style={{ width: '38%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#ef4444' }}>38%</span>
                  </td>
                  <td><span className="procurement-status proc-pending" onClick={() => handleProcStatus('⏳ Pre-Proc')}>⏳ Pre-Proc</span></td>
                  <td><button className="btn btn-danger" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('Urgent')}>Urgent</button></td>
                </tr>
                <tr>
                  <td><strong>Agriculture</strong></td>
                  <td>Farm-to-Market Roads</td>
                  <td><span className="aip-badge">AIP-2025-AGR-002</span></td>
                  <td>₱80,000,000</td>
                  <td>₱54,400,000</td>
                  <td>₱25,600,000</td>
                  <td>
                    <div className="progress-bar"><div className="progress-fill fill-warning" style={{ width: '68%' }}></div></div>
                    <span style={{ fontSize: 11, fontWeight: 600 }}>68%</span>
                  </td>
                  <td><span className="procurement-status proc-ongoing" onClick={() => handleProcStatus('⚡ Ongoing')}>⚡ Ongoing</span></td>
                  <td><button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlertButton('View')}>View</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fund Sources & Variance */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">FUND SOURCES BREAKDOWN</h2>
              <button className="btn btn-secondary" onClick={() => handleAlertButton('Details')}>Details</button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div className="fund-pills">
                {['General Fund: ₱850M','IRA/NTA: ₱650M','SEF: ₱250M','Trust Fund: ₱100M'].map((pill) => (
                  <span key={pill} className={`fund-pill ${pill.startsWith('General') ? 'pill-gf' : pill.startsWith('IRA') ? 'pill-ira' : pill.startsWith('SEF') ? 'pill-sef' : 'pill-trust'}`} onClick={() => handleFundPill(pill)}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              {[
                ['General Fund', 75, 'fill-good'],
                ['IRA/NTA', 82, 'fill-excellent'],
                ['SEF', 68, 'fill-warning'],
                ['Trust Fund', 45, 'fill-critical'],
              ].map(([label, pct, cls]) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
                    <span style={{ fontSize: 12 }}>{pct}% utilized</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-fill ${cls}`} style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Variance Report */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">VARIANCE REPORT</h2>
              <button className="btn btn-secondary" onClick={() => handleAlertButton('Full Report')}>Full Report</button>
            </div>

            <div style={{ padding: 12, backgroundColor: '#fee2e2', borderRadius: 6, marginBottom: 12 }}>
              <h3 style={{ fontSize: 12, fontWeight: 600, color: '#991b1b', marginBottom: 8 }}>CRITICAL VARIANCES</h3>
              <div style={{ display: 'grid', gap: 6, fontSize: 11 }}>
                <div>• Tourism: -58% below target</div>
                <div>• Youth & Sports: -62% below target</div>
                <div>• Legal: -48% below target</div>
              </div>
            </div>

            <div style={{ padding: 12, backgroundColor: '#fef3c7', borderRadius: 6, marginBottom: 12 }}>
              <h3 style={{ fontSize: 12, fontWeight: 600, color: '#92400e', marginBottom: 8 }}>WARNING</h3>
              <div style={{ display: 'grid', gap: 6, fontSize: 11 }}>
                <div>• Environment: -15% variance</div>
                <div>• Q4 spending rate concern</div>
              </div>
            </div>

            <div style={{ padding: 12, backgroundColor: '#d1fae5', borderRadius: 6 }}>
              <h3 style={{ fontSize: 12, fontWeight: 600, color: '#065f46', marginBottom: 8 }}>ON TRACK</h3>
              <div style={{ display: 'grid', gap: 6, fontSize: 11 }}>
                <div>• Engineering: +2% above target</div>
                <div>• Health: Meeting milestones</div>
                <div>• Admin: Efficient spending</div>
              </div>
            </div>
          </div>

          {/* Monthly Trend (static visual placeholder) */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">MONTHLY DISBURSEMENT TREND & PROJECTIONS</h2>
              <button className="btn btn-secondary" onClick={() => handleAlertButton('Download Chart')}>Download Chart</button>
            </div>

            <div style={{ height: 200, backgroundColor: '#f9fafb', borderRadius: 6, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 11, color: '#6b7280' }}>
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', height: 140, gap: 8 }}>
                {[60,65,70,68,72,75,78,80,85].map((h, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: '#3b82f6', height: `${h}%`, borderRadius: '4px 4px 0 0' }} />
                ))}
                <div style={{ flex: 1, backgroundColor: '#10b981', height: '88%', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 600 }}>Current</span>
                </div>
                <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '90%', borderRadius: '4px 4px 0 0', border: '2px dashed #6b7280' }} />
                <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '95%', borderRadius: '4px 4px 0 0', border: '2px dashed #6b7280' }} />
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
        </main>
      </div>
    </div>
  );
};

export default BudgetUtilizationAndFundTracking;


