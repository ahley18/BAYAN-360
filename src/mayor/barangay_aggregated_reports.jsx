import React, { useEffect, useRef, useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeNav from './mayor_office_nav';

const BarangayAggregatedReports = () => {
  const formRef = useRef(null);
  const [activeTab, setActiveTab] = useState('comparative');
  const [activeNavIndex, setActiveNavIndex] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');


  const handleTabSwitch = (tab) => setActiveTab(tab);
  const handleDrillDown = (barangay) => {
    alert(`Opening detailed view for ${barangay}...\n\nShowing:\n• Complete service delivery records\n• Detailed peace & order statistics\n• Budget breakdown\n• Historical performance trends\n• Citizen feedback summary`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Report submitted successfully!\n\nReport has been forwarded to:\n• Mayor's Office for review\n• Budget Office for resource allocation\n• Planning Office for strategic assessment\n\nYou will receive confirmation within 24 hours.");
  };
  const handleSaveDraft = () => {
    alert('Draft saved successfully!\n\nYour draft will be available for 7 days.\nYou can continue editing from the drafts section.');
  };
  const handleClearForm = () => {
    if (window.confirm('Are you sure you want to clear all form data?')) {
      formRef.current?.reset();
    }
  };

  const filteredRows = (rows) => (!searchTerm ? rows : rows.filter((r) => r.name.toLowerCase().includes(searchTerm.toLowerCase())));

  const tableRows = [
    { name: 'San Isidro Centro', population: '12,458', sd: 92, po: 88, hi: 85, budget: '₱2.4M (87%)', score: 88.0, scoreColor: '#10b981' },
    { name: 'Poblacion', population: '18,234', sd: 89, po: 82, hi: 90, budget: '₱3.8M (92%)', score: 88.3, scoreColor: '#10b981' },
    { name: 'Maliwanag', population: '9,876', sd: 75, po: 70, hi: 78, budget: '₱1.9M (73%)', score: 74.0, scoreColor: '#f59e0b' },
    { name: 'Bagong Silang', population: '7,234', sd: 62, po: 58, hi: 65, budget: '₱1.5M (68%)', score: 63.3, scoreColor: '#ef4444' },
    { name: 'San Rafael', population: '11,543', sd: 86, po: 91, hi: 83, budget: '₱2.2M (88%)', score: 87.0, scoreColor: '#10b981' },
    { name: 'Riverside', population: '8,967', sd: 72, po: 68, hi: 70, budget: '₱1.7M (71%)', score: 70.3, scoreColor: '#f59e0b' },
  ];

  useEffect(() => { setActiveTab('comparative'); }, []);

  return (
    <div>
      <GlobalStyleMayor />
      <header className="header">
        <div className="header-left">
          <div className="logo">🏘️ BARANGAY REPORTS</div>
          <div className="search-container">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" className="search-input" placeholder="Search barangay, services, or reports..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="header-right">
          <span>OFFICE OF THE MAYOR</span>
          <div className="status-badge">📊 AGGREGATE VIEW</div>
        </div>
      </header>

      <div className="container">
        <aside className="sidebar">
          <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
        </aside>

        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Barangay Aggregated Reports</h1>
            <p className="page-subtitle">Consolidated barangay-level data for executive review and resource allocation</p>
          </div>

          <div className="alert-box">
            <div className="alert-icon">⚠️</div>
            <div className="alert-content">
              <div className="alert-title">Critical Service Gap Alert</div>
              <div className="alert-description">3 barangays reporting below-threshold service delivery. Immediate intervention recommended for health and peace & order services.</div>
            </div>
            <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => {
              alert('Critical Service Gaps:\n\n1. Bagong Silang - Health Services\n   • 38% below threshold\n   • Immediate medical team deployment needed\n\n2. Riverside - Peace & Order\n   • Response time exceeding standards\n   • Additional patrol units required\n\n3. Maliwanag - Social Services\n   • Senior care program understaffed\n   • Budget reallocation recommended');
            }}>VIEW DETAILS</button>
          </div>

          <div className="stats-grid">
            {[
              { color: 'stat-blue', title: 'Total Barangays', icon: '🏘️', value: '23', subtitle: 'Active reporting units' },
              { color: 'stat-green', title: 'Population Served', icon: '👥', value: '158.4K', subtitle: 'Total residents' },
              { color: 'stat-yellow', title: 'Services Delivered', icon: '🎯', value: '12,847', subtitle: 'This month' },
              { color: 'stat-purple', title: 'Peace & Order Index', icon: '🛡️', value: '87.3%', subtitle: 'Overall safety rating' },
              { color: 'stat-red', title: 'Urgent Cases', icon: '🚨', value: '47', subtitle: 'Pending resolution' },
            ].map((s) => (
              <div className={`stat-card ${s.color}`} key={s.title}>
                <div className="stat-header">
                  <div className="stat-title">{s.title}</div>
                  <div className="stat-icon">{s.icon}</div>
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-subtitle">{s.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="tab-nav">
            <div className={`tab-item ${activeTab === 'comparative' ? 'active' : ''}`} onClick={() => handleTabSwitch('comparative')}>Comparative Dashboard</div>
            <div className={`tab-item ${activeTab === 'services' ? 'active' : ''}`} onClick={() => handleTabSwitch('services')}>Service Delivery</div>
            <div className={`tab-item ${activeTab === 'peace-order' ? 'active' : ''}`} onClick={() => handleTabSwitch('peace-order')}>Peace & Order</div>
            <div className={`tab-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => handleTabSwitch('reports')}>Submit Report</div>
            <div className={`tab-item ${activeTab === 'allocation' ? 'active' : ''}`} onClick={() => handleTabSwitch('allocation')}>Resource Allocation</div>
          </div>

          {activeTab === 'comparative' && (
            <div id="comparative-tab" className="tab-content">
              <div className="card full-width">
                <div className="card-header">
                  <h2 className="card-title">BARANGAY COMPARATIVE PERFORMANCE MATRIX</h2>
                  <div className="quick-actions">
                    <button className="action-btn" onClick={() => alert('Exporting barangay data...\nFormat: Excel spreadsheet\nIncluding all comparative metrics and performance indicators')}>📊 Export Data</button>
                    <button className="action-btn" onClick={() => alert('Generating comprehensive report...\nIncluding:\n• Executive summary\n• Performance analysis\n• Resource recommendations\n• Action items')}>📈 Generate Report</button>
                    <button className="action-btn" onClick={() => alert('Preparing print summary...\nOptimized for executive presentation')}>🖨️ Print Summary</button>
                  </div>
                </div>

                <table className="barangay-table">
                  <thead>
                    <tr>
                      <th>Barangay</th>
                      <th>Population</th>
                      <th>Service Delivery</th>
                      <th>Peace & Order</th>
                      <th>Health Index</th>
                      <th>Budget Utilization</th>
                      <th>Overall Score</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows(tableRows).map((row) => (
                      <tr key={row.name}>
                        <td>
                          <span className={`status-indicator ${row.scoreColor === '#10b981' ? 'status-good' : row.scoreColor === '#f59e0b' ? 'status-warning' : row.scoreColor === '#ef4444' ? 'status-critical' : ''}`}></span>
                          <span className="barangay-name">{row.name}</span>
                        </td>
                        <td>{row.population}</td>
                        <td>
                          <div className="performance-bar">
                            <div className="performance-fill fill-excellent" style={{ width: `${row.sd}%` }}>{row.sd}%</div>
                          </div>
                        </td>
                        <td>
                          <div className="performance-bar">
                            <div className="performance-fill fill-excellent" style={{ width: `${row.po}%` }}>{row.po}%</div>
                          </div>
                        </td>
                        <td>
                          <div className="performance-bar">
                            <div className="performance-fill fill-good" style={{ width: `${row.hi}%` }}>{row.hi}%</div>
                          </div>
                        </td>
                        <td>{row.budget}</td>
                        <td><strong style={{ color: row.scoreColor }}>{row.score.toFixed(1)}</strong></td>
                        <td><button className="btn-drill" onClick={() => handleDrillDown(row.name)}>✅ Drill Down</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">SOCIAL SERVICES DELIVERY SUMMARY</h2>
                  </div>
                  <div className="service-matrix">
                    {[
                      ['🏥','Health Services','3,847'],
                      ['🎓','Education Support','2,156'],
                      ['🏠','Housing Assistance','892'],
                      ['👴','Senior Care','1,534'],
                      ['👶','Child Welfare','1,892'],
                      ['♿','PWD Support','645'],
                      ['🍲','Feeding Program','1,234'],
                      ['💼','Livelihood Aid','647'],
                    ].map(([icon, name, count]) => (
                      <div className="service-card" key={name}>
                        <div className="service-icon">{icon}</div>
                        <div className="service-name">{name}</div>
                        <div className="service-count">{count}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">PEACE & ORDER STATUS</h2>
                  </div>
                  <div className="po-grid">
                    <div className="po-card"><div className="po-value" style={{ color: '#ef4444' }}>124</div><div className="po-label">Incidents</div><div className="po-trend trend-up">↑ 12% vs last month</div></div>
                    <div className="po-card"><div className="po-value" style={{ color: '#10b981' }}>89</div><div className="po-label">Resolved</div><div className="po-trend" style={{ color: '#10b981' }}>72% resolution rate</div></div>
                    <div className="po-card"><div className="po-value" style={{ color: '#f59e0b' }}>35</div><div className="po-label">Pending</div><div className="po-trend">Average: 3.2 days</div></div>
                    <div className="po-card"><div className="po-value" style={{ color: '#3b82f6' }}>456</div><div className="po-label">Patrols</div><div className="po-trend" style={{ color: '#10b981' }}>↑ 8% coverage</div></div>
                  </div>
                  <div style={{ marginTop: 16, padding: 12, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                    <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Top Concerns by Barangay</h3>
                    <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.6 }}>
                      <div>• <strong>Bagong Silang:</strong> Street crimes (18 incidents)</div>
                      <div>• <strong>Riverside:</strong> Drug-related cases (12 incidents)</div>
                      <div>• <strong>Maliwanag:</strong> Domestic disputes (9 incidents)</div>
                      <div>• <strong>San Rafael:</strong> Traffic violations (7 incidents)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div id="reports-tab" className="tab-content">
              <div className="card full-width">
                <div className="card-header"><h2 className="card-title">SUBMIT BARANGAY REPORT</h2></div>
                <form id="barangay-report-form" ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Basic Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Barangay Name <span className="form-required">*</span></label>
                        <select className="form-select" required defaultValue="">
                          <option value="">Select Barangay...</option>
                          <option>San Isidro Centro</option>
                          <option>Poblacion</option>
                          <option>Maliwanag</option>
                          <option>Bagong Silang</option>
                          <option>San Rafael</option>
                          <option>Riverside</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Report Period <span className="form-required">*</span></label>
                        <select className="form-select" required defaultValue="">
                          <option value="">Select Period...</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Quarterly</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Report Date <span className="form-required">*</span></label>
                        <input type="date" className="form-input" required />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Social Services Delivery</h3>
                    <div className="form-row">
                      <div className="form-group"><label className="form-label">Health Services Provided</label><input type="number" className="form-input" placeholder="Number of beneficiaries" /></div>
                      <div className="form-group"><label className="form-label">Education Support</label><input type="number" className="form-input" placeholder="Number of students assisted" /></div>
                      <div className="form-group"><label className="form-label">Senior Citizen Services</label><input type="number" className="form-input" placeholder="Number of seniors served" /></div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label className="form-label">PWD Assistance</label><input type="number" className="form-input" placeholder="Number of PWDs assisted" /></div>
                      <div className="form-group"><label className="form-label">Feeding Programs</label><input type="number" className="form-input" placeholder="Number of beneficiaries" /></div>
                      <div className="form-group"><label className="form-label">Livelihood Programs</label><input type="number" className="form-input" placeholder="Number of participants" /></div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Peace & Order Report</h3>
                    <div className="form-row">
                      <div className="form-group"><label className="form-label">Total Incidents</label><input type="number" className="form-input" placeholder="Number of incidents" /></div>
                      <div className="form-group"><label className="form-label">Resolved Cases</label><input type="number" className="form-input" placeholder="Number resolved" /></div>
                      <div className="form-group"><label className="form-label">Pending Cases</label><input type="number" className="form-input" placeholder="Number pending" /></div>
                    </div>
                    <div className="form-group"><label className="form-label">Major Concerns</label><textarea className="form-textarea" placeholder="Describe major peace & order concerns..."></textarea></div>
                  </div>

                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Budget & Resources</h3>
                    <div className="form-row">
                      <div className="form-group"><label className="form-label">Budget Allocated</label><input type="text" className="form-input" placeholder="₱ Amount" /></div>
                      <div className="form-group"><label className="form-label">Budget Utilized</label><input type="text" className="form-input" placeholder="₱ Amount" /></div>
                      <div className="form-group"><label className="form-label">Utilization Rate (%)</label><input type="number" className="form-input" placeholder="Percentage" min="0" max="100" /></div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#374151' }}>Additional Information</h3>
                    <div className="form-group"><label className="form-label">Urgent Issues Requiring Intervention</label><textarea className="form-textarea" placeholder="Describe urgent issues that need immediate attention..."></textarea></div>
                    <div className="form-group"><label className="form-label">Resource Requirements</label><textarea className="form-textarea" placeholder="List additional resources needed..."></textarea></div>
                    <div className="form-group"><label className="form-label">Recommendations</label><textarea className="form-textarea" placeholder="Provide recommendations for improvement..."></textarea></div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
                    <button type="submit" className="btn btn-primary">SUBMIT REPORT</button>
                    <button type="button" className="btn btn-secondary" onClick={handleSaveDraft}>SAVE DRAFT</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClearForm}>CLEAR FORM</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'allocation' && (
            <div id="allocation-tab" className="tab-content">
              <div className="card full-width">
                <div className="card-header">
                  <h2 className="card-title">RESOURCE ALLOCATION RECOMMENDATIONS</h2>
                  <button className="btn btn-success">APPROVE ALLOCATIONS</button>
                </div>
                <div className="allocation-grid">
                  {[
                    ['Bagong Silang','+₱850K',85,'#ef4444','Priority: Critical - Peace & Order Support'],
                    ['Riverside','+₱650K',75,'#f59e0b','Priority: High - Health Services Enhancement'],
                    ['Maliwanag','+₱450K',65,'#f59e0b','Priority: High - Service Delivery Improvement'],
                    ['San Rafael','+₱200K',40,'#3b82f6','Priority: Medium - Infrastructure Maintenance'],
                    ['Poblacion','+₱150K',30,'#10b981','Priority: Standard - Regular Operations'],
                    ['San Isidro Centro','+₱100K',20,'#10b981','Priority: Standard - Performance Incentive'],
                  ].map(([name, amount, pct, color, detail]) => (
                    <div className="allocation-card" key={name}>
                      <div className="allocation-header"><span className="allocation-title">{name}</span><span className="allocation-amount">{amount}</span></div>
                      <div className="allocation-bar"><div className="allocation-fill" style={{ width: `${pct}%`, backgroundColor: color }}></div></div>
                      <div className="allocation-detail">{detail}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, padding: 16, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Allocation Summary</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>Total Additional Budget</div>
                      <div style={{ fontSize: 20, fontWeight: 'bold', color: '#374151' }}>₱2.4M</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>Critical Allocations</div>
                      <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ef4444' }}>1</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>High Priority</div>
                      <div style={{ fontSize: 20, fontWeight: 'bold', color: '#f59e0b' }}>2</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>Expected Impact</div>
                      <div style={{ fontSize: 20, fontWeight: 'bold', color: '#10b981' }}>+15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BarangayAggregatedReports;


