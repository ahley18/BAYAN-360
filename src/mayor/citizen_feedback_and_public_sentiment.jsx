import React, { useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeNav from './mayor_office_nav';

const CitizenFeedbackAndPublicSentiment = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  const handleButton = (label) => {
    if (label === 'Export') {
      alert('📄 Export Options:\n\n• Sentiment Report (PDF)\n• Issue Heatmap (Image)\n• Feedback Database (Excel)\n• Social Media Analysis\n• Executive Summary\n\nSelect format and date range...');
    } else if (label === 'View All Issues') {
      alert('📋 Complete Issue Registry\n\nTotal: 487 active issues\nHigh Priority: 45\nMedium: 156\nLow: 286\n\nFilters available:\n• By category\n• By location\n• By date\n• By department');
    } else if (label === 'Refresh') {
      alert('🔄 Refreshing Data...\n\nUpdating:\n• Social media feeds\n• Trending topics\n• Sentiment scores\n• Issue priorities\n\nLast update: 2 minutes ago');
    } else if (label === 'View All') {
      alert('📱 Social Media Dashboard\n\nMonitoring:\n• Facebook: 1,234 mentions\n• Twitter: 567 tweets\n• Instagram: 234 posts\n• News sites: 45 articles\n\nSentiment tracking active');
    } else if (label === 'Generate Report') {
      alert('📊 Generating Sentiment Report\n\nIncluding:\n• Weekly trends\n• Issue categorization\n• Geographic distribution\n• Department performance\n• Response metrics\n• Recommendations\n\nReport will be ready in 10 seconds...');
    }
  };

  const handleIssueClick = (title) => {
    alert(`Issue Details: ${title}\n\nView:\n• Complete complaint history\n• Geographic distribution\n• Department assignment\n• Response timeline\n• Resolution status\n• Citizen comments`);
  };

  const handleChannelClick = (name, count) => {
    alert(`${name} Details\n\nTotal: ${count} feedback items\n\nBreakdown:\n• Complaints: 45%\n• Requests: 30%\n• Suggestions: 15%\n• Compliments: 10%\n\nClick to view detailed report...`);
  };

  const handleMayorAction = (type) => {
    if (type === 'statement') {
      alert('📢 Public Statement Generator\n\nPrepare statement regarding:\n• Water supply crisis\n• Infrastructure updates\n• Health service improvements\n\nDrafting official statement for review...');
    } else if (type === 'policy') {
      alert('📋 Policy Change Initiator\n\nRecommended policy adjustments:\n• Water distribution schedule\n• Garbage collection frequency\n• Health center operating hours\n• Emergency response protocols\n\nPreparing policy draft...');
    } else if (type === 'followup') {
      alert("🎯 Follow-up Action Order\n\nAssigning to departments:\n• Engineering - Water supply issue\n• CENRO - Garbage collection\n• Health Office - Clinic queues\n\nDeadline: 48 hours\nStatus: Priority escalation\n\nNotifications sent to department heads");
    }
  };

  const handleSocialPostClick = (platform, content) => {
    alert(`Social Media Analysis\n\nPlatform: ${platform}\nContent: ${content}\n\nEngagement metrics:\n• Reach: 2,450 users\n• Interactions: 145\n• Shares: 23\n• Sentiment score: 0.68\n\nSuggested response drafted...`);
  };

  const handleFoiClick = (label, number) => {
    alert(`FOI ${label} Requests: ${number}\n\nDetails:\n• Average processing time: 5 days\n• Compliance rate: 95%\n• Most requested: Budget documents\n• Department: Treasury, Engineering\n\nView full FOI dashboard...`);
  };

  const handleSentimentMeter = () => {
    alert('😊 Sentiment Analysis Details\n\nCurrent Score: 68% Positive\n\nBreakdown by source:\n• Hotline: 72% positive\n• Online portal: 65% positive\n• Social media: 61% positive\n• Barangay desk: 74% positive\n\nTrend: Improving (+5% this week)');
  };

  const handleHeatZoneClick = (intensity) => {
    alert(`Zone Analysis\n\nPriority Level: ${intensity}\n\nTop issues in this area:\n• Water supply\n• Road conditions\n• Garbage collection\n• Street lighting\n\nView detailed barangay report...`);
  };

  return (
    <div className="citizen-page">
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
              placeholder="Search feedback, complaints, or issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <div className="sync-badge">🔄 Live Feed Active</div>
          <span>PUBLIC SENTIMENT</span>
          <div className="status-badge">✅ REVIEW FEEDBACK</div>
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
            <h1 className="page-title">Citizen Feedback & Public Sentiment Panel</h1>
            <p className="page-subtitle">View trends in complaints, requests, surveys, and FOI merged with social media monitoring</p>
          </div>

          {/* Feedback Statistics */}
          <div className="stats-grid">
            {[
              ['📞','856','Hotline Calls','↑ 12% this week','up'],
              ['💬','1,234','Help Desk','↑ 8% this week','up'],
              ['🏘️','432','Barangay Desk','↓ 3% this week','down'],
              ['🌐','678','Online Portal','↑ 25% this week','up'],
              ['📱','342','Social Media','↑ 45% this week','up'],
              ['📄','28','FOI Requests','↑ 2 new today','up'],
            ].map(([icon, value, label, change, dir]) => (
              <div className="stat-card" key={label}>
                <div className="stat-icon">{icon}</div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
                <div className={`stat-change ${dir === 'up' ? 'change-up' : 'change-down'}`}>{change}</div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="process-flow">
            <span className="flow-step">Aggregate Reports</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step flow-active">Categorize</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Flag Priorities</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Mayor Review</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Action/Policy</span>
          </div>

          <div className="grid">
            {/* Issue Heatmap & Sentiment */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">ISSUE HEATMAP & PUBLIC SENTIMENT</h2>
                <div style={{ display: 'flex', gap: 8 }}>
                  <select className="form-select" style={{ width: 120, padding: 6 }}>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                  </select>
                  <button className="btn btn-secondary" onClick={() => handleButton('Export')}>Export</button>
                </div>
              </div>

              {/* Overall Sentiment Meter */}
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Overall Public Sentiment</h3>
                <div className="sentiment-meter" onClick={handleSentimentMeter}>
                  <div className="sentiment-indicator" style={{ left: '65%' }}></div>
                </div>
                <div className="sentiment-labels">
                  <span>Very Negative</span>
                  <span>Negative</span>
                  <span>Neutral</span>
                  <span>Positive</span>
                  <span>Very Positive</span>
                </div>
                <div style={{ textAlign: 'center', marginTop: 8, fontSize: 14, fontWeight: 600, color: '#10b981' }}>
                  Current: 68% Positive
                </div>
              </div>

              {/* Geographic Issue Heatmap */}
              <div className="heatmap-container">
                {/* High */}
                <div className="heatmap-zone heat-high" style={{ left: '25%', top: '30%', width: 120, height: 120 }} onClick={() => handleHeatZoneClick('High')}></div>
                <div className="heatmap-zone heat-high" style={{ left: '60%', top: '50%', width: 100, height: 100 }} onClick={() => handleHeatZoneClick('High')}></div>
                {/* Medium */}
                <div className="heatmap-zone heat-medium" style={{ left: '45%', top: '20%', width: 90, height: 90 }} onClick={() => handleHeatZoneClick('Medium')}></div>
                <div className="heatmap-zone heat-medium" style={{ left: '35%', top: '60%', width: 80, height: 80 }} onClick={() => handleHeatZoneClick('Medium')}></div>
                {/* Low */}
                <div className="heatmap-zone heat-low" style={{ left: '70%', top: '25%', width: 70, height: 70 }} onClick={() => handleHeatZoneClick('Low')}></div>
                <div className="heatmap-zone heat-low" style={{ left: '15%', top: '55%', width: 60, height: 60 }} onClick={() => handleHeatZoneClick('Low')}></div>

                {/* Labels */}
                <div style={{ position: 'absolute', left: '25%', top: '30%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  Poblacion<br />156 issues
                </div>
                <div style={{ position: 'absolute', left: '60%', top: '50%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  Riverside<br />98 issues
                </div>
                <div style={{ position: 'absolute', left: '45%', top: '20%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  Centro<br />67 issues
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12, padding: 8, backgroundColor: '#f9fafb', borderRadius: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#ef4444', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>High Priority</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#f59e0b', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Medium Priority</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#3b82f6', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Low Priority</span></div>
              </div>
            </div>

            {/* Input Channels & Actions */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">INPUT CHANNELS</h2>
              </div>

              {/* Response Time Widget */}
              <div className="response-widget" onClick={() => alert('⏱️ Response Time Analytics\n\nCurrent average: 2.4 hours\n\nBy channel:\n• Hotline: 1.2 hours\n• Online: 3.5 hours\n• Barangay: 2.8 hours\n• Social media: 1.8 hours\n\nTarget: Under 2 hours\nImprovement: 30% this month')}>
                <div className="response-time">2.4 hrs</div>
                <div className="response-label">Average Response Time</div>
                <div style={{ textAlign: 'center', marginTop: 4, fontSize: 11, color: '#065f46' }}>↓ 30% improvement from last month</div>
              </div>

              {/* Channel Statistics */}
              <div className="channel-grid">
                {[
                  ['📞 8888 Hotline','856','Response rate: 95%','Resolved: 723/856'],
                  ['💬 Help Desk','1,234','Response rate: 89%','Resolved: 1,098/1,234'],
                  ['🏘️ Barangay','432','Response rate: 92%','Resolved: 397/432'],
                  ['🌐 Online Portal','678','Response rate: 87%','Resolved: 590/678'],
                ].map(([name, count, line1, line2]) => (
                  <div key={name} className="channel-card" onClick={() => handleChannelClick(name, count)}>
                    <div className="channel-header"><span className="channel-name">{name}</span><span className="channel-count">{count}</span></div>
                    <div className="channel-stats">{line1}<br />{line2}</div>
                  </div>
                ))}
              </div>

              {/* FOI Tracker */}
              <div style={{ marginTop: 16, padding: 12, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>FOI Request Status</h3>
                <div className="foi-status">
                  <div className="foi-stat" onClick={() => handleFoiClick('Pending', '28')}>
                    <div className="foi-number">28</div>
                    <div className="foi-label">Pending</div>
                  </div>
                  <div className="foi-stat" onClick={() => handleFoiClick('Processing', '12')}>
                    <div className="foi-number">12</div>
                    <div className="foi-label">Processing</div>
                  </div>
                  <div className="foi-stat" onClick={() => handleFoiClick('Completed', '156')}>
                    <div className="foi-number">156</div>
                    <div className="foi-label">Completed</div>
                  </div>
                </div>
              </div>

              {/* Mayor's Action Panel */}
              <div className="mayor-action">
                <div className="mayor-action-header">🔐 Mayor's Response Actions</div>
                <div className="mayor-action-buttons">
                  <button type="button" className="btn btn-success" onClick={() => handleMayorAction('statement')}>📢 Issue Statement</button>
                  <button type="button" className="btn btn-warning" onClick={() => handleMayorAction('policy')}>📋 Policy Change</button>
                </div>
                <div style={{ marginTop: 8 }}>
                  <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleMayorAction('followup')}>🎯 Order Follow-up Action</button>
                </div>
              </div>

              {/* Quick Response Form */}
              <form style={{ marginTop: 16 }} onSubmit={(e) => { e.preventDefault(); alert('✅ Response Submitted\n\nAction logged:\n• Issue prioritized\n• Department notified\n• Timeline set: 24-48 hours\n• Public update scheduled\n• Follow-up reminder created'); }}>
                <div className="form-group">
                  <label className="form-label">Priority Issue Response</label>
                  <select className="form-select">
                    <option>Select issue to address...</option>
                    <option>Water Supply - Poblacion</option>
                    <option>Road Repair - Riverside</option>
                    <option>Garbage Collection Delay</option>
                    <option>Street Light Maintenance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Action Type</label>
                  <select className="form-select">
                    <option>Immediate Response</option>
                    <option>Department Referral</option>
                    <option>Policy Review</option>
                    <option>Public Announcement</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Response</button>
              </form>
            </div>
          </div>

          {/* Categorized Issues */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">CATEGORIZED ISSUES & PRIORITIES</h2>
              <button className="btn btn-secondary" onClick={() => handleButton('View All Issues')}>View All Issues</button>
            </div>

            <div className="issue-list">
              {[
                ['💧 Water Supply Interruption',[['📍 Poblacion, Centro'],['📅 3 days ongoing'],['👥 Affects 2,500 residents'],['📞 156 complaints']],'HIGH'],
                ['🚗 Road Repair Requests',[['📍 Multiple locations'],['📅 This month'],['👥 Traffic affected'],['📞 98 reports']],'HIGH'],
                ['🗑️ Garbage Collection Delays',[['📍 Riverside, West'],['📅 1 week'],['👥 5 barangays'],['📞 76 complaints']],'MEDIUM'],
                ['💡 Street Light Maintenance',[['📍 Various streets'],['📅 2 weeks pending'],['👥 Safety concern'],['📞 54 requests']],'MEDIUM'],
                ['🏥 Health Center Queues',[['📍 Main Health Center'],['📅 Recurring issue'],['👥 Daily patients'],['📞 43 feedback']],'MEDIUM'],
                ['📋 Business Permit Processing',[['📍 Municipal Hall'],['📅 Monthly issue'],['👥 Business owners'],['📞 32 complaints']],'LOW'],
              ].map(([title, details, priority]) => (
                <div className="issue-item" key={title} onClick={() => handleIssueClick(title)}>
                  <div className="issue-info">
                    <div className="issue-title">{title}</div>
                    <div className="issue-details">
                      {details.map((d) => (<span key={d[0]}>{d[0]}</span>))}
                    </div>
                  </div>
                  <div className={`issue-count ${priority === 'HIGH' ? 'priority-high' : priority === 'MEDIUM' ? 'priority-medium' : 'priority-low'}`}>{priority}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">TRENDING TOPICS</h2>
              <button className="btn btn-secondary" onClick={() => handleButton('Refresh')}>Refresh</button>
            </div>
            <div className="trending-list">
              {[
                ['1','#WaterSupplyPH','234 mentions'],
                ['2','#FixOurRoads','189 mentions'],
                ['3','#HealthServices','156 mentions'],
                ['4','#MayorAction','123 mentions'],
                ['5','#PublicSafety','98 mentions'],
              ].map(([rank, topic, count]) => (
                <div className="trending-item" key={topic} onClick={() => alert(`Trending Analysis: ${topic}\n\nMentions: ${count}\nPeak time: 2-4 PM\nMain concerns:\n• Service delays\n• Communication gaps\n• Resource allocation\n\nView detailed sentiment analysis...`)}>
                  <div className="trending-rank">{rank}</div>
                  <div className="trending-topic">{topic}</div>
                  <div className="trending-count">{count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Monitoring */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">SOCIAL MEDIA MONITORING</h2>
              <button className="btn btn-secondary" onClick={() => handleButton('View All')}>View All</button>
            </div>
            <div className="social-feed">
              {[
                ['Facebook','Juan Dela Cruz','"Salamat sa mabilis na aksyon sa water supply issue sa aming barangay! 💙"','2 hours ago • 45 likes • Positive sentiment'],
                ['Twitter','@concerned_citizen','"3 days na walang tubig sa Poblacion area. Need immediate action! #WaterSupplyPH"','3 hours ago • 23 retweets • Negative sentiment'],
                ['Facebook','Maria Santos','"Great job sa road repair sa Main Street! Finally smooth na ang daan 👍"','5 hours ago • 67 likes • Positive sentiment'],
                ['Twitter','@resident2025','"Health center needs more staff. 4 hours waiting time is too much 😔"','6 hours ago • 15 retweets • Negative sentiment'],
                ['Facebook','LGU Updates Page','"ADVISORY: Water supply restoration ongoing. Expected completion by 5PM today."','1 hour ago • 234 shares • Official'],
              ].map(([platform, user, content, meta]) => (
                <div className="social-post" key={`${platform}-${user}`} onClick={() => handleSocialPostClick(platform, content)}>
                  <div className="social-header">
                    <span className={`social-platform ${platform === 'Facebook' ? 'platform-fb' : 'platform-twitter'}`}>{platform}</span>
                    <span style={{ fontWeight: 600 }}>{user}</span>
                  </div>
                  <div className="social-content">{content}</div>
                  <div className="social-meta">{meta}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Trends & Analysis */}
          <div className="card full-width">
            <div className="card-header">
              <h2 className="card-title">SENTIMENT TRENDS & ANALYSIS</h2>
              <button className="btn btn-secondary" onClick={() => handleButton('Generate Report')}>Generate Report</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>7-Day Sentiment Trend</h3>
                <div style={{ position: 'relative', height: 150, backgroundColor: '#f9fafb', borderRadius: 6, padding: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 10, color: '#6b7280' }}>
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (<span key={d}>{d}</span>))}
                  </div>
                  <div style={{ position: 'relative', height: 100 }}>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
                      <polyline points="0,60 50,50 100,45 150,40 200,35 250,30 300,25" fill="none" stroke="#10b981" strokeWidth="2" />
                    </svg>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
                      <polyline points="0,40 50,45 100,50 150,55 200,50 250,45 300,40" fill="none" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
                      <polyline points="0,70 50,70 100,70 150,70 200,75 250,75 300,75" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 10, fontSize: 11 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 12, height: 2, backgroundColor: '#10b981' }}></span> Positive</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 12, height: 2, backgroundColor: '#ef4444' }}></span> Negative</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 12, height: 2, backgroundColor: '#6b7280' }}></span> Neutral</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Service Category Satisfaction</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    ['Infrastructure', 75, '#10b981'],
                    ['Health Services', 68, '#3b82f6'],
                    ['Public Safety', 82, '#10b981'],
                    ['Environment', 45, '#f59e0b'],
                    ['Social Services', 71, '#3b82f6'],
                  ].map(([label, pct, color]) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 11, width: 100 }}>{label}</span>
                      <div style={{ flex: 1, height: 20, backgroundColor: '#e5e7eb', borderRadius: 4, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, backgroundColor: color, borderRadius: 4 }}></div>
                        <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', fontSize: 10, fontWeight: 600 }}>{pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', padding: 16, backgroundColor: '#f9fafb', borderRadius: 6, marginTop: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: '#10b981' }}>68%</div>
                <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Positive</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: '#6b7280' }}>21%</div>
                <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Neutral</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ef4444' }}>11%</div>
                <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Negative</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: '#3b82f6' }}>3,570</div>
                <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Total Feedback</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: '#f59e0b' }}>2.4hrs</div>
                <div style={{ fontSize: 11, color: '#6b7280', textTransform: 'uppercase' }}>Avg Response</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CitizenFeedbackAndPublicSentiment;


