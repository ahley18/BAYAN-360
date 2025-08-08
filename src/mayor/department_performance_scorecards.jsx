import React, { useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeNav from './mayor_office_nav';

const DepartmentPerformanceScorecards = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAlert = (type) => {
    const messages = {
      'REVIEW DETAILS': '📊 Monthly Performance Review\n\nTop Performers:\n1. Engineering - 95%\n2. Health Services - 92%\n3. Human Resources - 90%\n\nRequiring Attention:\n1. Environment - 68%\n2. Business Permits - 72%\n\nRecommendations ready for approval',
      'Export Report': '📄 Export Options:\n\n• Executive Summary (PDF)\n• Detailed Analytics (Excel)\n• Department Comparisons\n• Monthly Trends Report\n• SPMS Integration Report',
      'Generate Report': '📈 Generating Performance Report\n\nIncluding:\n• KPI achievements\n• Timeline adherence\n• Budget efficiency\n• Citizen satisfaction\n• Recommendations\n\nReport will be ready in 5 seconds...',
      'View Full Analytics': '📊 Opening Analytics Dashboard\n\n• Historical trends (12 months)\n• Predictive performance modeling\n• Resource optimization suggestions\n• Benchmark comparisons\n• Impact analysis',
      'Export CSV': '📁 Exporting to CSV\n\nData includes:\n• All department metrics\n• Monthly comparisons\n• Target vs actual\n• Citizen ratings\n• Budget utilization\n\nFile: Performance_October_2025.csv',
      Reward: '🏆 Performance Reward Initiated\n\nDepartment recognized for excellent performance\nReward memo being prepared\nHR notified for processing',
      Action: '⚠️ Corrective Action Required\n\nPerformance improvement plan initiated\nMeeting scheduled with department head\nMonthly monitoring activated',
      Review: '📋 Department Under Review\n\nDetailed analysis requested\nResource assessment scheduled\nSupport options being evaluated',
    };
    alert(messages[type] || type);
  };

  const handleScorecardClick = (deptName, score) => {
    alert(`${deptName} Detailed View\n\nPerformance Score: ${score}\n\nView:\n• Monthly trends\n• Individual KPIs\n• Employee performance\n• Citizen feedback details\n• Budget utilization\n• Pending tasks`);
  };

  const handleTrendClick = (deptName) => {
    alert(`${deptName} Trend Analysis\n\nLast 6 months performance:\nMay: 82%\nJun: 85%\nJul: 87%\nAug: 89%\nSep: 90%\nOct: 95%\n\nProjected next month: 96%`);
  };

  const handleStarsClick = () => {
    alert('Citizen Feedback Details\n\n⭐⭐⭐⭐⭐ Excellent: 45%\n⭐⭐⭐⭐ Good: 35%\n⭐⭐⭐ Fair: 15%\n⭐⭐ Poor: 4%\n⭐ Very Poor: 1%\n\nTotal responses: 1,245\nAverage rating: 4.2/5.0');
  };

  const submitEvaluation = (e) => {
    e.preventDefault();
    alert("Performance Evaluation Submitted!\n\n✅ Data synced with SPMS\n📊 Dashboard updated\n📧 Notification sent to department head\n🔔 Ready for Mayor's review");
  };

  return (
    <div className="department-page">
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
              placeholder="Search department, employee, or KPI metrics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <div className="sync-badge">🔄 SPMS + HR Connected</div>
          <span>PERFORMANCE MONITORING</span>
          <div className="status-badge">✅ MONITOR OUTPUTS</div>
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
            <h1 className="page-title">Department Performance Scorecards</h1>
            <p className="page-subtitle">Office-by-office monthly performance rating connected to SPMS, HR, and Citizen Satisfaction surveys</p>
          </div>

          {/* Alert Box */}
          <div className="alert-box">
            <div className="alert-icon">🏆</div>
            <div className="alert-content">
              <div className="alert-title">Monthly Performance Review Ready</div>
              <div className="alert-description">3 departments exceeded targets • 2 require corrective action • Recognition ceremony scheduled</div>
            </div>
            <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }} onClick={() => handleAlert('REVIEW DETAILS')}>REVIEW DETAILS</button>
          </div>

          {/* Overall Performance Summary */}
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <div className="summary-value rating-good">83.5%</div>
              <div className="summary-label">Overall Performance</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <div className="summary-value rating-excellent">92%</div>
              <div className="summary-label">Target Achievement</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">😊</div>
              <div className="summary-value rating-good">4.2/5</div>
              <div className="summary-label">Citizen Satisfaction</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">⏰</div>
              <div className="summary-value rating-fair">78%</div>
              <div className="summary-label">Timeline Adherence</div>
            </div>
          </div>

          <div className="grid">
            {/* Department Scorecards */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">DEPARTMENT PERFORMANCE RATINGS</h2>
                <div style={{ display: 'flex', gap: 8 }}>
                  <select className="form-select" style={{ width: 120, padding: 6 }}>
                    <option>October 2025</option>
                    <option>September 2025</option>
                    <option>August 2025</option>
                  </select>
                  <button className="btn btn-secondary" onClick={() => handleAlert('Export Report')}>Export Report</button>
                </div>
              </div>

              {/* Process Flow */}
              <div className="process-flow">
                <span className="flow-step">Department Updates</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step flow-active">Dashboard Calculation</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step">Color-coded Ratings</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step">Mayor Review</span>
              </div>

              <div className="scorecard-grid">
                {/* Engineering */}
                <div className="scorecard scorecard-excellent" onClick={() => handleScorecardClick('🏗️ ENGINEERING', '95%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">🏗️ ENGINEERING</div>
                      <div className="trend trend-up" onClick={(e) => { e.stopPropagation(); handleTrendClick('ENGINEERING'); }}>↑ 5% vs last month</div>
                    </div>
                    <div className="performance-badge badge-excellent">95%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Projects Completed:</span><span className="metric-value">12/12</span></div>
                    <div className="metric-row"><span className="metric-label">Budget Efficiency:</span><span className="metric-value">98%</span></div>
                    <div className="metric-row"><span className="metric-label">Citizen Rating:</span><span className="metric-value">4.8/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-excellent" style={{ width: '95%' }}></div></div>
                  </div>
                </div>

                {/* Health Services */}
                <div className="scorecard scorecard-excellent" onClick={() => handleScorecardClick('🏥 HEALTH SERVICES', '92%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">🏥 HEALTH SERVICES</div>
                      <div className="trend trend-up" onClick={(e) => { e.stopPropagation(); handleTrendClick('HEALTH SERVICES'); }}>↑ 8% vs last month</div>
                    </div>
                    <div className="performance-badge badge-excellent">92%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Patients Served:</span><span className="metric-value">3,245</span></div>
                    <div className="metric-row"><span className="metric-label">Response Time:</span><span className="metric-value">12 min</span></div>
                    <div className="metric-row"><span className="metric-label">Satisfaction:</span><span className="metric-value">4.7/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-excellent" style={{ width: '92%' }}></div></div>
                  </div>
                </div>

                {/* Treasury */}
                <div className="scorecard scorecard-good" onClick={() => handleScorecardClick('💰 TREASURY', '88%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">💰 TREASURY</div>
                      <div className="trend trend-stable" onClick={(e) => { e.stopPropagation(); handleTrendClick('TREASURY'); }}>→ Stable</div>
                    </div>
                    <div className="performance-badge badge-good">88%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Collection Rate:</span><span className="metric-value">89%</span></div>
                    <div className="metric-row"><span className="metric-label">Processing Time:</span><span className="metric-value">2.5 days</span></div>
                    <div className="metric-row"><span className="metric-label">Accuracy:</span><span className="metric-value">99.2%</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '88%' }}></div></div>
                  </div>
                </div>

                {/* Education */}
                <div className="scorecard scorecard-good" onClick={() => handleScorecardClick('📚 EDUCATION', '85%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">📚 EDUCATION</div>
                      <div className="trend trend-up" onClick={(e) => { e.stopPropagation(); handleTrendClick('EDUCATION'); }}>↑ 3% vs last month</div>
                    </div>
                    <div className="performance-badge badge-good">85%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Programs Run:</span><span className="metric-value">15/18</span></div>
                    <div className="metric-row"><span className="metric-label">Student Reach:</span><span className="metric-value">8,450</span></div>
                    <div className="metric-row"><span className="metric-label">Parent Feedback:</span><span className="metric-value">4.3/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '85%' }}></div></div>
                  </div>
                </div>

                {/* Business Permits */}
                <div className="scorecard scorecard-fair" onClick={() => handleScorecardClick('📋 BUSINESS PERMITS', '72%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">📋 BUSINESS PERMITS</div>
                      <div className="trend trend-down" onClick={(e) => { e.stopPropagation(); handleTrendClick('BUSINESS PERMITS'); }}>↓ 5% vs last month</div>
                    </div>
                    <div className="performance-badge badge-fair">72%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Permits Issued:</span><span className="metric-value">234/320</span></div>
                    <div className="metric-row"><span className="metric-label">Avg Processing:</span><span className="metric-value">5 days</span></div>
                    <div className="metric-row"><span className="metric-label">Complaints:</span><span className="metric-value">12</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-fair" style={{ width: '72%' }}></div></div>
                  </div>
                </div>

                {/* Social Welfare */}
                <div className="scorecard scorecard-good" onClick={() => handleScorecardClick('🤝 SOCIAL WELFARE', '87%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">🤝 SOCIAL WELFARE</div>
                      <div className="trend trend-up" onClick={(e) => { e.stopPropagation(); handleTrendClick('SOCIAL WELFARE'); }}>↑ 6% vs last month</div>
                    </div>
                    <div className="performance-badge badge-good">87%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Beneficiaries:</span><span className="metric-value">1,856</span></div>
                    <div className="metric-row"><span className="metric-label">Programs Active:</span><span className="metric-value">8/8</span></div>
                    <div className="metric-row"><span className="metric-label">Impact Score:</span><span className="metric-value">4.5/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '87%' }}></div></div>
                  </div>
                </div>

                {/* Agriculture */}
                <div className="scorecard scorecard-good" onClick={() => handleScorecardClick('🌾 AGRICULTURE', '81%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">🌾 AGRICULTURE</div>
                      <div className="trend trend-stable" onClick={(e) => { e.stopPropagation(); handleTrendClick('AGRICULTURE'); }}>→ Stable</div>
                    </div>
                    <div className="performance-badge badge-good">81%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Farmers Assisted:</span><span className="metric-value">456</span></div>
                    <div className="metric-row"><span className="metric-label">Seeds Distributed:</span><span className="metric-value">2.5 tons</span></div>
                    <div className="metric-row"><span className="metric-label">Training Sessions:</span><span className="metric-value">12/15</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-good" style={{ width: '81%' }}></div></div>
                  </div>
                </div>

                {/* Environment */}
                <div className="scorecard scorecard-fair" onClick={() => handleScorecardClick('🌳 ENVIRONMENT', '68%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">🌳 ENVIRONMENT</div>
                      <div className="trend trend-down" onClick={(e) => { e.stopPropagation(); handleTrendClick('ENVIRONMENT'); }}>↓ 8% vs last month</div>
                    </div>
                    <div className="performance-badge badge-fair">68%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Waste Collected:</span><span className="metric-value">82%</span></div>
                    <div className="metric-row"><span className="metric-label">Trees Planted:</span><span className="metric-value">150/300</span></div>
                    <div className="metric-row"><span className="metric-label">Clean-up Drives:</span><span className="metric-value">3/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-fair" style={{ width: '68%' }}></div></div>
                  </div>
                </div>

                {/* Human Resources */}
                <div className="scorecard scorecard-excellent" onClick={() => handleScorecardClick('👥 HUMAN RESOURCES', '90%')}>
                  <div className="scorecard-header">
                    <div>
                      <div className="department-name">👥 HUMAN RESOURCES</div>
                      <div className="trend trend-up" onClick={(e) => { e.stopPropagation(); handleTrendClick('HUMAN RESOURCES'); }}>↑ 4% vs last month</div>
                    </div>
                    <div className="performance-badge badge-excellent">90%</div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-row"><span className="metric-label">Recruitment:</span><span className="metric-value">25/25</span></div>
                    <div className="metric-row"><span className="metric-label">Training Hours:</span><span className="metric-value">480</span></div>
                    <div className="metric-row"><span className="metric-label">Employee Satisfaction:</span><span className="metric-value">4.6/5</span></div>
                    <div className="progress-bar"><div className="progress-fill fill-excellent" style={{ width: '90%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Input & Actions Panel */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">PERFORMANCE INPUT</h2>
              </div>

              {/* Citizen Satisfaction Widget */}
              <div className="satisfaction-widget">
                <div className="satisfaction-score">4.2/5.0</div>
                <div className="satisfaction-label">Average Citizen Satisfaction</div>
                <div style={{ textAlign: 'center', marginTop: 8 }}>
                  <span className="rating-stars" onClick={handleStarsClick}>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star-empty">⭐</span>
                  </span>
                </div>
                <div style={{ textAlign: 'center', marginTop: 4, fontSize: 11, color: '#6b7280' }}>
                  Based on 1,245 survey responses
                </div>
              </div>

              <form id="performance-form" onSubmit={submitEvaluation}>
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <select className="form-select" required defaultValue="">
                    <option value="">Select Department...</option>
                    <option>Engineering</option>
                    <option>Health Services</option>
                    <option>Treasury</option>
                    <option>Education</option>
                    <option>Business Permits</option>
                    <option>Social Welfare</option>
                    <option>Agriculture</option>
                    <option>Environment</option>
                    <option>Human Resources</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Evaluation Period</label>
                  <select className="form-select" required defaultValue="October 2025">
                    <option>October 2025</option>
                    <option>Q3 2025</option>
                    <option>Annual 2025</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Target KPIs</label>
                    <input type="number" className="form-input" placeholder="0" min="0" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Achieved</label>
                    <input type="number" className="form-input" placeholder="0" min="0" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Key Accomplishments</label>
                  <textarea className="form-textarea" placeholder="List major accomplishments..."></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Timeline Status</label>
                  <select className="form-select">
                    <option>On Schedule</option>
                    <option>Ahead of Schedule</option>
                    <option>Minor Delay</option>
                    <option>Major Delay</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">SPMS Score</label>
                  <input type="number" className="form-input" placeholder="0-100" min="0" max="100" />
                </div>

                <div className="form-group">
                  <label className="form-label">Challenges/Issues</label>
                  <textarea className="form-textarea" placeholder="Note any challenges or resource needs..."></textarea>
                </div>

                <div className="action-section">
                  <div className="action-header">🔐 Mayor's Review Actions</div>
                  <div className="action-buttons">
                    <button type="button" className="btn btn-success" onClick={() => handleAlert('Reward')}>🏆 Initiate Reward</button>
                    <button type="button" className="btn btn-warning" onClick={() => handleAlert('Action')}>📝 Corrective Action</button>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <textarea className="form-textarea" placeholder="Mayor's comments and directives..." style={{ minHeight: 40 }}></textarea>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                  <button type="submit" className="btn btn-primary">SUBMIT EVALUATION</button>
                  <button type="button" className="btn btn-secondary" onClick={() => handleAlert('Generate Report')}>Generate Report</button>
                </div>
              </form>

              <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', color: '#6b7280' }}>Quick Actions</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  <button className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => handleAlert('View Full Analytics')}>📊 View Detailed Analytics</button>
                  <button className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => alert('📈 Department Comparison Tool\n\nSelect departments to compare:\n• Side-by-side metrics\n• Relative performance\n• Resource efficiency\n• Output quality\n• Timeline adherence')}>📈 Compare Departments</button>
                  <button className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => alert('🎯 Target Setting Module\n\nDefine:\n• Quarterly objectives\n• KPI thresholds\n• Budget allocations\n• Timeline milestones\n• Quality standards\n\nOpening target configuration...')}>🎯 Set New Targets</button>
                  <button className="btn btn-secondary" style={{ fontSize: 12, padding: 8 }} onClick={() => alert('📧 Performance Notice\n\nSending to:\n• All department heads\n• HR department\n• Finance office\n\nIncluding monthly scorecards and action items')}>📧 Send Performance Notice</button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trends & Comparative Analysis */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">PERFORMANCE TRENDS & COMPARATIVE ANALYSIS</h2>
              <button className="btn btn-secondary" onClick={() => handleAlert('View Full Analytics')}>View Full Analytics</button>
            </div>

            <div className="chart-container">
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>6-Month Performance Trend</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 11, color: '#6b7280' }}>
                  {['May','Jun','Jul','Aug','Sep','Oct'].map((m) => (<span key={m}>{m}</span>))}
                </div>
                <div style={{ position: 'relative', height: 100, backgroundColor: 'white', borderRadius: 4 }}>
                  <div style={{ position: 'absolute', bottom: '75%', left: 0, right: 0, borderTop: '2px solid #10b981' }}>
                    <span style={{ position: 'absolute', right: -30, top: -8, fontSize: 10, color: '#10b981' }}>Eng 95%</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '72%', left: 0, right: 0, borderTop: '2px solid #3b82f6' }}>
                    <span style={{ position: 'absolute', right: -30, top: -8, fontSize: 10, color: '#3b82f6' }}>Health 92%</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '65%', left: 0, right: 0, borderTop: '2px dashed #6b7280' }}>
                    <span style={{ position: 'absolute', right: -30, top: -8, fontSize: 10, color: '#6b7280' }}>Avg 83%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Top Performers vs Target</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    ['Engineering', 95, '#10b981'],
                    ['Health', 92, '#10b981'],
                    ['HR', 90, '#10b981'],
                    ['Target Line', 85, '#6b7280', true],
                  ].map(([label, pct, color, dashed]) => (
                    <div key={String(label)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 11, width: 100 }}>{label}</span>
                      <div style={{ flex: 1, height: 20, backgroundColor: 'white', borderRadius: 4, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, backgroundColor: dashed ? '#e5e7eb' : color, borderRadius: 4, border: dashed ? '2px dashed #6b7280' : 'none' }}></div>
                        <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', fontSize: 10, fontWeight: 600, color: dashed ? '#6b7280' : 'white' }}>{pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Performance Table */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">DETAILED PERFORMANCE METRICS</h2>
              <button className="btn btn-secondary" onClick={() => handleAlert('Export CSV')}>Export CSV</button>
            </div>

            <table className="performance-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Head</th>
                  <th>Score</th>
                  <th>Targets Met</th>
                  <th>Budget Used</th>
                  <th>Citizen Rating</th>
                  <th>Trend</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Engineering</strong></td>
                  <td>Engr. Santos</td>
                  <td><span style={{ color: '#10b981', fontWeight: 600 }}>95%</span></td>
                  <td>12/12</td>
                  <td>98%</td>
                  <td>
                    <span className="rating-stars" onClick={handleStarsClick}>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                    </span>
                  </td>
                  <td><span className="trend trend-up">↑ 5%</span></td>
                  <td><button className="btn btn-success" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlert('Reward')}>Reward</button></td>
                </tr>
                <tr>
                  <td><strong>Health Services</strong></td>
                  <td>Dr. Reyes</td>
                  <td><span style={{ color: '#10b981', fontWeight: 600 }}>92%</span></td>
                  <td>18/20</td>
                  <td>95%</td>
                  <td>
                    <span className="rating-stars" onClick={handleStarsClick}>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                    </span>
                  </td>
                  <td><span className="trend trend-up">↑ 8%</span></td>
                  <td><button className="btn btn-success" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlert('Reward')}>Reward</button></td>
                </tr>
                <tr>
                  <td><strong>Treasury</strong></td>
                  <td>Ms. Garcia</td>
                  <td><span style={{ color: '#3b82f6', fontWeight: 600 }}>88%</span></td>
                  <td>15/17</td>
                  <td>92%</td>
                  <td>
                    <span className="rating-stars" onClick={handleStarsClick}>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star-empty">⭐</span>
                    </span>
                  </td>
                  <td><span className="trend trend-stable">→ 0%</span></td>
                  <td><button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlert('Review')}>Review</button></td>
                </tr>
                <tr>
                  <td><strong>Business Permits</strong></td>
                  <td>Mr. Lopez</td>
                  <td><span style={{ color: '#f59e0b', fontWeight: 600 }}>72%</span></td>
                  <td>8/12</td>
                  <td>78%</td>
                  <td>
                    <span className="rating-stars" onClick={handleStarsClick}>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star-empty">⭐</span>
                      <span className="star-empty">⭐</span>
                    </span>
                  </td>
                  <td><span className="trend trend-down">↓ 5%</span></td>
                  <td><button className="btn btn-warning" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlert('Action')}>Action</button></td>
                </tr>
                <tr>
                  <td><strong>Environment</strong></td>
                  <td>Ms. Cruz</td>
                  <td><span style={{ color: '#f59e0b', fontWeight: 600 }}>68%</span></td>
                  <td>6/10</td>
                  <td>82%</td>
                  <td>
                    <span className="rating-stars" onClick={handleStarsClick}>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star">⭐</span>
                      <span className="star-empty">⭐</span>
                      <span className="star-empty">⭐</span>
                    </span>
                  </td>
                  <td><span className="trend trend-down">↓ 8%</span></td>
                  <td><button className="btn btn-warning" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => handleAlert('Action')}>Action</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DepartmentPerformanceScorecards;


