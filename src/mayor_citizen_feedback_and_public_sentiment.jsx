import React, { useEffect, useState } from 'react';
import { mayorCitizenFeedbackCss } from './mayor_citizen_feedback_and_public_sentiment_style.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() { return <style>{mayorCitizenFeedbackCss}</style>; }

export default function MayorCitizenFeedbackAndPublicSentiment() {
    const [activeNavIndex, setActiveNavIndex] = useState(3); // Citizen Feedback & Public Sentiment
    const [period, setPeriod] = useState('This Week');
    const [sentimentPos, setSentimentPos] = useState(65);

    useEffect(() => {
        const id = setInterval(() => {
            setSentimentPos((pos) => {
                const variance = Math.random() * 4 - 2;
                return Math.max(0, Math.min(100, pos + variance));
            });
        }, 4000);
        return () => clearInterval(id);
    }, []);

    const onIssueClick = (title) => {
        alert(`Issue Details: ${title}\n\nView:\n• Complete complaint history\n• Geographic distribution\n• Department assignment\n• Response timeline\n• Resolution status\n• Citizen comments`);
    };

    return (
        <div className="mayor-citizen-root">
            <InlineStyle />
            <MayorOfficeHeader iconText="💬 CITIZEN FEEDBACK" badgeIcon="✅" badgeText="REVIEW FEEDBACK" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Citizen Feedback & Public Sentiment Panel</h1>
                        <p className="page-subtitle">View trends in complaints, requests, surveys, and FOI merged with social media monitoring</p>
                    </div>

                    <div className="stats-grid">
                        {[
                            ['📞', '856', 'Hotline Calls', '↑ 12% this week', 'change-up'],
                            ['💬', '1,234', 'Help Desk', '↑ 8% this week', 'change-up'],
                            ['🏘️', '432', 'Barangay Desk', '↓ 3% this week', 'change-down'],
                            ['🌐', '678', 'Online Portal', '↑ 25% this week', 'change-up'],
                            ['📱', '342', 'Social Media', '↑ 45% this week', 'change-up'],
                            ['📄', '28', 'FOI Requests', '↑ 2 new today', 'change-up'],
                        ].map(([icon, value, label, change, cls]) => (
                            <div key={String(label)} className="stat-card">
                                <div className="stat-icon">{icon}</div>
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{label}</div>
                                <div className={`stat-change ${cls}`}>{change}</div>
                            </div>
                        ))}
                    </div>

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
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">ISSUE HEATMAP & PUBLIC SENTIMENT</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <select className="form-select" style={{ width: 120, padding: 6 }} value={period} onChange={(e) => setPeriod(e.target.value)}>
                                        <option>This Week</option>
                                        <option>This Month</option>
                                        <option>This Quarter</option>
                                    </select>
                                    <button className="btn btn-secondary" onClick={() => alert('📄 Export Options:\n\n• Sentiment Report (PDF)\n• Issue Heatmap (Image)\n• Feedback Database (Excel)\n• Social Media Analysis\n• Executive Summary\n\nSelect format and date range...')}>Export</button>
                                </div>
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Overall Public Sentiment</h3>
                                <div className="sentiment-meter" onClick={() => alert('😊 Sentiment Analysis Details\n\nCurrent Score: 68% Positive\n\nBreakdown by source:\n• Hotline: 72% positive\n• Online portal: 65% positive\n• Social media: 61% positive\n• Barangay desk: 74% positive\n\nTrend: Improving (+5% this week)')}>
                                    <div className="sentiment-indicator" style={{ left: `${sentimentPos}%` }}></div>
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
                            <div className="heatmap-container">
                                <div className="heatmap-zone heat-high" style={{ left: '25%', top: '30%', width: 120, height: 120 }} onClick={() => alert('Zone Analysis\n\nPriority Level: High\n\nTop issues in this area:\n• Water supply\n• Road conditions\n• Garbage collection\n• Street lighting\n\nView detailed barangay report...')}></div>
                                <div className="heatmap-zone heat-high" style={{ left: '60%', top: '50%', width: 100, height: 100 }} onClick={() => alert('Zone Analysis\n\nPriority Level: High...')}></div>
                                <div className="heatmap-zone heat-medium" style={{ left: '45%', top: '20%', width: 90, height: 90 }} onClick={() => alert('Zone Analysis\n\nPriority Level: Medium...')}></div>
                                <div className="heatmap-zone heat-medium" style={{ left: '35%', top: '60%', width: 80, height: 80 }} onClick={() => alert('Zone Analysis\n\nPriority Level: Medium...')}></div>
                                <div className="heatmap-zone heat-low" style={{ left: '70%', top: '25%', width: 70, height: 70 }} onClick={() => alert('Zone Analysis\n\nPriority Level: Low...')}></div>
                                <div className="heatmap-zone heat-low" style={{ left: '15%', top: '55%', width: 60, height: 60 }} onClick={() => alert('Zone Analysis\n\nPriority Level: Low...')}></div>
                                <div style={{ position: 'absolute', left: '25%', top: '30%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Poblacion<br />156 issues</div>
                                <div style={{ position: 'absolute', left: '60%', top: '50%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Riverside<br />98 issues</div>
                                <div style={{ position: 'absolute', left: '45%', top: '20%', color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Centro<br />67 issues</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12, padding: 8, backgroundColor: '#f9fafb', borderRadius: 4 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#ef4444', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>High Priority</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#f59e0b', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Medium Priority</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 12, height: 12, backgroundColor: '#3b82f6', borderRadius: '50%' }}></div><span style={{ fontSize: 11 }}>Low Priority</span></div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">INPUT CHANNELS</h2>
                            </div>
                            <div className="response-widget" onClick={() => alert('⏱️ Response Time Analytics\n\nCurrent average: 2.4 hours\n\nBy channel:\n• Hotline: 1.2 hours\n• Online: 3.5 hours\n• Barangay: 2.8 hours\n• Social media: 1.8 hours\n\nTarget: Under 2 hours\nImprovement: 30% this month')}>
                                <div className="response-time">2.4 hrs</div>
                                <div className="response-label">Average Response Time</div>
                                <div style={{ textAlign: 'center', marginTop: 4, fontSize: 11, color: '#065f46' }}>↓ 30% improvement from last month</div>
                            </div>
                            <div className="channel-grid">
                                {[
                                    ['📞 8888 Hotline', '856', 'Response rate: 95%\nResolved: 723/856'],
                                    ['💬 Help Desk', '1,234', 'Response rate: 89%\nResolved: 1,098/1,234'],
                                    ['🏘️ Barangay', '432', 'Response rate: 92%\nResolved: 397/432'],
                                    ['🌐 Online Portal', '678', 'Response rate: 87%\nResolved: 590/678'],
                                ].map(([name, count, stats]) => (
                                    <div key={String(name)} className="channel-card" onClick={() => alert(`${name} Details\n\nTotal: ${count} feedback items\n\nBreakdown:\n• Complaints: 45%\n• Requests: 30%\n• Suggestions: 15%\n• Compliments: 10%\n\nClick to view detailed report...`)}>
                                        <div className="channel-header">
                                            <span className="channel-name">{name}</span>
                                            <span className="channel-count">{count}</span>
                                        </div>
                                        <div className="channel-stats" dangerouslySetInnerHTML={{ __html: stats.replace(/\n/g, '<br/>') }} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: 16, padding: 12, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>FOI Request Status</h3>
                                <div className="foi-status">
                                    {[
                                        ['Pending', '28'], ['Processing', '12'], ['Completed', '156']
                                    ].map(([label, num]) => (
                                        <div key={label} className="foi-stat" onClick={() => alert(`FOI ${label} Requests: ${num}\n\nDetails:\n• Average processing time: 5 days\n• Compliance rate: 95%\n• Most requested: Budget documents\n• Department: Treasury, Engineering\n\nView full FOI dashboard...`)}>
                                            <div className="foi-number">{num}</div>
                                            <div className="foi-label">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mayor-action">
                                <div className="mayor-action-header">🔐 Mayor's Response Actions</div>
                                <div className="mayor-action-buttons">
                                    <button type="button" className="btn btn-success" onClick={() => alert('📢 Public Statement Generator\n\nPrepare statement regarding:\n• Water supply crisis\n• Infrastructure updates\n• Health service improvements\n\nDrafting official statement for review...')}>📢 Issue Statement</button>
                                    <button type="button" className="btn btn-warning" onClick={() => alert('📋 Policy Change Initiator\n\nRecommended policy adjustments:\n• Water distribution schedule\n• Garbage collection frequency\n• Health center operating hours\n• Emergency response protocols\n\nPreparing policy draft...')}>📋 Policy Change</button>
                                </div>
                                <div style={{ marginTop: 8 }}>
                                    <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert('🎯 Follow-up Action Order\n\nAssigning to departments:\n• Engineering - Water supply issue\n• CENRO - Garbage collection\n• Health Office - Clinic queues\n\nDeadline: 48 hours\nStatus: Priority escalation\n\nNotifications sent to department heads')}>🎯 Order Follow-up Action</button>
                                </div>
                            </div>
                            <form style={{ marginTop: 16 }} onSubmit={(e) => { e.preventDefault(); alert('✅ Response Submitted\n\nAction logged:\n• Issue prioritized\n• Department notified\n• Timeline set: 24-48 hours\n• Public update scheduled\n• Follow-up reminder created'); }}>
                                <div className="form-group">
                                    <label className="form-label">Priority Issue Response</label>
                                    <select className="form-select" defaultValue="Select issue to address...">
                                        {['Select issue to address...', 'Water Supply - Poblacion', 'Road Repair - Riverside', 'Garbage Collection Delay', 'Street Light Maintenance'].map(opt => (<option key={opt}>{opt}</option>))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Action Type</label>
                                    <select className="form-select" defaultValue="Immediate Response">
                                        {['Immediate Response', 'Department Referral', 'Policy Review', 'Public Announcement'].map(opt => (<option key={opt}>{opt}</option>))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Response</button>
                            </form>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">CATEGORIZED ISSUES & PRIORITIES</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📋 Complete Issue Registry\n\nTotal: 487 active issues\nHigh Priority: 45\nMedium: 156\nLow: 286\n\nFilters available:\n• By category\n• By location\n• By date\n• By department')}>View All Issues</button>
                            </div>
                            <div className="issue-list">
                                {[
                                    ['💧 Water Supply Interruption', 'HIGH', 'priority-high', ['📍 Poblacion, Centro', '📅 3 days ongoing', '👥 Affects 2,500 residents', '📞 156 complaints']],
                                    ['🚗 Road Repair Requests', 'HIGH', 'priority-high', ['📍 Multiple locations', '📅 This month', '👥 Traffic affected', '📞 98 reports']],
                                    ['🗑️ Garbage Collection Delays', 'MEDIUM', 'priority-medium', ['📍 Riverside, West', '📅 1 week', '👥 5 barangays', '📞 76 complaints']],
                                    ['💡 Street Light Maintenance', 'MEDIUM', 'priority-medium', ['📍 Various streets', '📅 2 weeks pending', '👥 Safety concern', '📞 54 requests']],
                                    ['🏥 Health Center Queues', 'MEDIUM', 'priority-medium', ['📍 Main Health Center', '📅 Recurring issue', '👥 Daily patients', '📞 43 feedback']],
                                    ['📋 Business Permit Processing', 'LOW', 'priority-low', ['📍 Municipal Hall', '📅 Monthly issue', '👥 Business owners', '📞 32 complaints']],
                                    ['🌳 Park Maintenance', 'LOW', 'priority-low', ['📍 Central Park', '📅 This week', '👥 Park users', '📞 18 suggestions']],
                                ].map(([title, priority, cls, details]) => (
                                    <div key={String(title)} className="issue-item" onClick={() => onIssueClick(String(title))}>
                                        <div className="issue-info">
                                            <div className="issue-title">{title}</div>
                                            <div className="issue-details">
                                                {Array.isArray(details) && details.map((d, idx) => (<span key={idx}>{d}</span>))}
                                            </div>
                                        </div>
                                        <div className={`issue-count ${cls}`}>{priority}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">TRENDING TOPICS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('🔄 Refreshing Data...\n\nUpdating:\n• Social media feeds\n• Trending topics\n• Sentiment scores\n• Issue priorities\n\nLast update: 2 minutes ago')}>Refresh</button>
                            </div>
                            <div className="trending-list">
                                {[
                                    ['1', '#WaterSupplyPH', '234 mentions'],
                                    ['2', '#FixOurRoads', '189 mentions'],
                                    ['3', '#HealthServices', '156 mentions'],
                                    ['4', '#MayorAction', '123 mentions'],
                                    ['5', '#PublicSafety', '98 mentions'],
                                ].map(([rank, topic, count]) => (
                                    <div key={topic} className="trending-item" onClick={() => alert(`Trending Analysis: ${topic}\n\nMentions: ${count}\nPeak time: 2-4 PM\nMain concerns:\n• Service delays\n• Communication gaps\n• Resource allocation\n\nView detailed sentiment analysis...`)}>
                                        <div className="trending-rank">{rank}</div>
                                        <div className="trending-topic">{topic}</div>
                                        <div className="trending-count">{count}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">SOCIAL MEDIA MONITORING</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📱 Social Media Dashboard\n\nMonitoring:\n• Facebook: 1,234 mentions\n• Twitter: 567 tweets\n• Instagram: 234 posts\n• News sites: 45 articles\n\nSentiment tracking active')}>View All</button>
                            </div>
                            <div className="social-feed">
                                {[
                                    ['Facebook', 'Juan Dela Cruz', '"Salamat sa mabilis na aksyon sa water supply issue sa aming barangay! 💙"', '2 hours ago • 45 likes • Positive sentiment', 'platform-fb'],
                                    ['Twitter', '@concerned_citizen', '"3 days na walang tubig sa Poblacion area. Need immediate action! #WaterSupplyPH"', '3 hours ago • 23 retweets • Negative sentiment', 'platform-twitter'],
                                    ['Facebook', 'Maria Santos', '"Great job sa road repair sa Main Street! Finally smooth na ang daan 👍"', '5 hours ago • 67 likes • Positive sentiment', 'platform-fb'],
                                    ['Twitter', '@resident2025', '"Health center needs more staff. 4 hours waiting time is too much 😔"', '6 hours ago • 15 retweets • Negative sentiment', 'platform-twitter'],
                                    ['Facebook', 'LGU Updates Page', '"ADVISORY: Water supply restoration ongoing. Expected completion by 5PM today."', '1 hour ago • 234 shares • Official', 'platform-fb'],
                                ].map(([platform, author, content, meta, platformClass]) => (
                                    <div key={author + meta} className="social-post" onClick={() => alert(`Social Media Analysis\n\nPlatform: ${platform}\nContent: ${content}\n\nEngagement metrics:\n• Reach: 2,450 users\n• Interactions: 145\n• Shares: 23\n• Sentiment score: 0.68\n\nSuggested response drafted...`)}>
                                        <div className="social-header">
                                            <span className={`social-platform ${platformClass}`}>{platform}</span>
                                            <span style={{ fontWeight: 600 }}>{author}</span>
                                        </div>
                                        <div className="social-content">{content}</div>
                                        <div className="social-meta">{meta}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">SENTIMENT TRENDS & ANALYSIS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📊 Generating Sentiment Report\n\nIncluding:\n• Weekly trends\n• Issue categorization\n• Geographic distribution\n• Department performance\n• Response metrics\n• Recommendations\n\nReport will be ready in 10 seconds...')}>Generate Report</button>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                <div>
                                    <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>7-Day Sentiment Trend</h3>
                                    <div style={{ position: 'relative', height: 150, backgroundColor: '#f9fafb', borderRadius: 6, padding: 10 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 10, color: '#6b7280' }}>
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
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
                                            <div key={String(label)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
                    </div>
                </main>
            </div>
        </div>
    );
}


