import React, { useEffect, useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() {
    return null; // No longer needed, styles are global
}

export default function MayorPolicyReviewLegislative() {
    const [activeNavIndex, setActiveNavIndex] = useState(7); // Policy Review & Legislative Coordination
    const [compliancePos, setCompliancePos] = useState(78);

    useEffect(() => {
        const id = setInterval(() => {
            setCompliancePos((pos) => {
                const variance = Math.random() * 4 - 2;
                return Math.max(0, Math.min(100, pos + variance));
            });
        }, 3000);
        return () => clearInterval(id);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        alert('📋 Policy Evaluation Submitted\n\n✅ Compliance data recorded\n📊 Impact assessment updated\n📈 Dashboard refreshed\n🏛️ SP records synced\n🔔 Department heads notified\n\nEvaluation ID: EVAL-2025-089');
    };

    return (
        <div className="mayor-policy-root">
            <GlobalStyleMayor />
            <MayorOfficeHeader iconText="🧠 POLICY REVIEW" badgeIcon="✅" badgeText="REVIEW IMPACT" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Policy Review & Legislative Coordination Panel</h1>
                        <p className="page-subtitle">Tracks implementation and impact of local ordinances connected to SP records and policy dashboards</p>
                    </div>

                    <div className="gap-alert">
                        <div className="gap-icon">⚠️</div>
                        <div className="gap-content">
                            <div className="gap-title">Policy Gap Detected</div>
                            <div className="gap-description">3 ordinances show low compliance • 5 policies need amendment • 2 expired ordinances require replacement</div>
                        </div>
                        <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }} onClick={() => alert('🔍 Policy Gap Analysis\n\nIdentified gaps:\n1. Digital services regulation\n2. Climate adaptation measures\n3. Data privacy protection\n4. E-commerce taxation\n5. Pandemic response protocols\n\nPrioritize for legislation?')}>REVIEW GAPS</button>
                    </div>

                    <div className="stats-grid">
                        {[
                            ['📋', '245', 'Active Ordinances', 'stat-compliant'],
                            ['✅', '78%', 'Compliance Rate', 'stat-compliant'],
                            ['⚡', '12', 'Under Review', 'stat-partial'],
                            ['📝', '8', 'Amendments', 'stat-review'],
                            ['🚨', '5', 'Policy Gaps', 'stat-gap'],
                            ['📊', '95%', 'Impact Score', 'stat-compliant'],
                        ].map(([icon, value, label, cls]) => (
                            <div key={String(label)} className={`stat-card ${cls}`}>
                                <div className="stat-icon">{icon}</div>
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="process-flow">
                        <span className="flow-step flow-active">Monitor Implementation</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Evaluate Impact</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Identify Gaps</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Recommend Amendments</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Mayor Review</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Submit to SP</span>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">POLICY MONITORING & EVALUATION</h2>
                                <button className="btn btn-secondary" onClick={() => alert('🏛️ Import from SP Records\n\nConnecting to Sangguniang Bayan...\n\nAvailable imports:\n• Recent ordinances (15)\n• Pending resolutions (8)\n• Committee reports (12)\n• Session minutes (23)\n\nSelect items to import...')}>Import from SP</button>
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Overall Policy Compliance</h3>
                                <div className="compliance-meter">
                                    <div className="compliance-indicator" style={{ left: `${compliancePos}%` }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginTop: 4 }}>
                                    <span>Low (0-25%)</span>
                                    <span>Fair (26-50%)</span>
                                    <span>Good (51-75%)</span>
                                    <span>Excellent (76-100%)</span>
                                </div>
                            </div>

                            <form id="policy-form" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Ordinance/Resolution *</label>
                                    <select className="form-select" required defaultValue="">
                                        <option value="">Select ordinance...</option>
                                        <option>Ord. 2025-001: Business Permit Requirements</option>
                                        <option>Ord. 2024-045: Environmental Protection</option>
                                        <option>Ord. 2024-032: Market Operations</option>
                                        <option>Res. 2025-015: Budget Appropriation</option>
                                        <option>Ord. 2023-067: Traffic Management</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Date Enacted</label>
                                        <input type="date" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Effectivity Date</label>
                                        <input type="date" className="form-input" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Implementing Office(s) *</label>
                                    <select className="form-select" multiple style={{ height: 80 }}>
                                        {['Business Permit & Licensing', 'Treasury Office', 'Engineering Office', 'Health Office', 'Environment Office', 'Market Administration', 'Traffic Management', 'DRRMO', 'Tourism Office'].map(opt => (
                                            <option key={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Policy Summary/Key Provisions</label>
                                    <textarea className="form-textarea" placeholder="Summarize key provisions and requirements..."></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Compliance Status</label>
                                        <select className="form-select" defaultValue="Fully Compliant">
                                            <option>Fully Compliant</option>
                                            <option>Partially Compliant</option>
                                            <option>Non-Compliant</option>
                                            <option>Under Review</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Compliance Rate (%)</label>
                                        <input type="number" className="form-input" min={0} max={100} placeholder="0-100" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Implementation Report</label>
                                    <textarea className="form-textarea" placeholder="Enter implementation status, challenges, and outcomes..."></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Compliance Flags/Issues</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                        {['Lack of resources', 'Unclear provisions', 'Conflicting policies', 'Public resistance', 'Technical challenges', 'Budget constraints'].map(label => (
                                            <label key={label} style={{ fontSize: 12 }}><input type="checkbox" /> {label}</label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Recommended Actions</label>
                                    <select className="form-select" defaultValue="Continue Implementation">
                                        {['Continue Implementation', 'Minor Amendment Needed', 'Major Revision Required', 'Repeal and Replace', 'Additional Guidelines Needed', 'Resource Allocation Required'].map(opt => (
                                            <option key={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mayor-action">
                                    <div className="mayor-action-header">🔐 Mayor's Legislative Action</div>
                                    <div className="mayor-action-buttons">
                                        <button type="button" className="btn btn-success" onClick={() => alert('📋 Amendment Request\n\nPreparing legislative request:\n• Ordinance identified\n• Issues documented\n• Proposed changes drafted\n• Legal review initiated\n• SP agenda submission ready\n\nProceed to draft amendment?')}>📋 Request Amendment</button>
                                        <button type="button" className="btn btn-warning" onClick={() => alert('🏛️ Submit to Sangguniang Bayan\n\nLegislative package:\n• Policy evaluation report\n• Compliance data\n• Impact assessment\n• Recommended amendments\n• Supporting documents\n\nSchedule for next SP session?')}>🏛️ Submit to SP</button>
                                        <button type="button" className="btn btn-primary" onClick={() => alert('📊 Comprehensive Impact Study\n\nAnalyzing:\n• Economic impact: ₱12.5M revenue\n• Public benefit: 8.5/10 score\n• Department efficiency: 78% improved\n• Citizen satisfaction: 4.2/5 rating\n• Implementation cost: ₱3.2M\n\nGenerate full report?')}>📊 Impact Study</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => alert('📝 Draft Policy Revision\n\nStarting revision process:\n• Current text loaded\n• Issues highlighted\n• Amendment template ready\n• Legal framework checked\n• Stakeholders identified\n\nOpen revision editor?')}>📝 Draft Revision</button>
                                    </div>
                                    <div style={{ marginTop: 8 }}>
                                        <textarea className="form-textarea" placeholder="Mayor's policy directive or legislative request..." style={{ minHeight: 40 }}></textarea>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-primary">SUBMIT EVALUATION</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => alert('📊 Generating Policy Report\n\nIncluding:\n• Compliance summary\n• Impact assessment\n• Department performance\n• Gap analysis\n• Recommendations\n• Financial impact\n\nFormat: PDF | Excel | Dashboard')}>Generate Report</button>
                                </div>
                            </form>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">IMPACT ASSESSMENT</h2>
                            </div>
                            <div className="impact-grid">
                                {[
                                    ['8.5/10', 'Public Benefit'],
                                    ['92%', 'Implementation'],
                                    ['₱12M', 'Revenue Impact'],
                                    ['4.2/5', 'Satisfaction'],
                                ].map(([score, label]) => (
                                    <div key={String(label)} className="impact-item" onClick={() => alert(`Impact Metric: ${label}\n\nCurrent Score: ${score}\n\nTrend: Improving\nBaseline: 6.5/10\nTarget: 9.0/10\n\nView detailed analysis?`)}>
                                        <div className="impact-score">{score}</div>
                                        <div className="impact-label">{label}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: 16 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>Department Compliance</h3>
                                <div className="dept-compliance">
                                    {[
                                        ['Business Permits', '95%', 'score-high'],
                                        ['Treasury', '88%', 'score-high'],
                                        ['Engineering', '72%', 'score-medium'],
                                        ['Health Office', '91%', 'score-high'],
                                        ['Environment', '58%', 'score-low'],
                                    ].map(([dept, score, cls]) => (
                                        <div key={String(dept)} className="dept-item" onClick={() => alert(`Department: ${dept}\nCompliance Score: ${score}\n\nView:\n• Detailed compliance report\n• Policy implementation status\n• Issues and challenges\n• Resource requirements\n• Timeline adherence`)}>
                                            <span className="dept-name">{dept}</span>
                                            <span className={`dept-score ${cls}`}>{score}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ marginTop: 16 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>Implementation Timeline</h3>
                                <div className="timeline">
                                    {[
                                        ['Jan 2025', 'Policy enacted by SP', 'completed'],
                                        ['Feb 2025', 'Guidelines issued', 'completed'],
                                        ['Mar-Jul 2025', 'Implementation phase', 'current'],
                                        ['Aug 2025', 'Mid-term evaluation', ''],
                                        ['Dec 2025', 'Annual review', ''],
                                    ].map(([date, content, state]) => (
                                        <div key={String(date)} className={`timeline-item ${state}`} onClick={() => alert(`Timeline Event\n\nDate: ${date}\nMilestone: ${content}\n\nView:\n• Detailed activities\n• Responsible parties\n• Deliverables\n• Status updates\n• Next steps`)}>
                                            <div className="timeline-date">{date}</div>
                                            <div className="timeline-content">{content}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ marginTop: 16 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>Quick Actions</h3>
                                <div style={{ display: 'grid', gap: 8 }}>
                                    {['📄 View Full Text', '📊 Impact Report', '🏛️ SP Records', '📋 Compliance Checklist'].map((label) => (
                                        <button key={label} className="btn btn-secondary" style={{ fontSize: 12 }} onClick={() => alert(`${label} clicked`)}>{label}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">POLICY CATEGORIES & STATUS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📚 Complete Policy Database\n\n245 Active Ordinances\n56 Resolutions\n23 Executive Orders\n12 Administrative Orders\n\nFilter by:\n• Category\n• Year\n• Department\n• Compliance status')}>View All Policies</button>
                            </div>
                            <div className="policy-grid">
                                {[
                                    ['💼 Business & Commerce', 'ACTIVE', 'status-active', '23 ordinances • 85% compliance • 2 amendments pending'],
                                    ['🏥 Health & Sanitation', 'ACTIVE', 'status-active', '18 ordinances • 92% compliance • Fully implemented'],
                                    ['🌳 Environment', 'UNDER REVIEW', 'status-review', '15 ordinances • 68% compliance • 3 gaps identified'],
                                    ['🚦 Traffic & Transport', 'AMENDMENT', 'status-amend', '12 ordinances • 75% compliance • Revision in progress'],
                                    ['🏗️ Infrastructure', 'ACTIVE', 'status-active', '28 ordinances • 88% compliance • Well-implemented'],
                                    ['💰 Revenue & Taxation', 'ACTIVE', 'status-active', '35 ordinances • 94% compliance • High impact'],
                                    ['🎓 Education & Youth', 'ACTIVE', 'status-active', '10 ordinances • 87% compliance • Positive outcomes'],
                                    ['🚨 Public Safety', '2 EXPIRED', 'status-expired', '20 ordinances • 82% compliance • Renewal needed'],
                                ].map(([title, status, cls, details]) => (
                                    <div key={String(title)} className="policy-card" onClick={() => alert(`Policy Category: ${title}\n\nStatus: ${status}\n\nView:\n• All ordinances in category\n• Compliance metrics\n• Implementation timeline\n• Department reports\n• Gap analysis\n• Recommendations`)}>
                                        <div className="policy-header">
                                            <div className="policy-title">{title}</div>
                                            <div className={`policy-status ${cls}`}>{status}</div>
                                        </div>
                                        <div className="policy-details">{details}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">ORDINANCE IMPLEMENTATION STATUS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📄 Export Compliance Report\n\nReport contents:\n• Executive summary\n• Ordinance list with status\n• Compliance metrics\n• Department breakdowns\n• Recommendations\n• Action items\n\nFile: Policy_Review_2025.pdf')}>Export Report</button>
                            </div>
                            <div className="ordinance-list">
                                {[
                                    ['📋 Ord. 2025-001: Business Permit Requirements', '95% COMPLIANT', 'compliance-full', ['📅 Enacted: Jan 15, 2025', '🏢 Lead: Business Permits', '✅ 234/245 businesses compliant', '💰 Revenue: ₱2.5M/month', '📊 Impact: High']],
                                    ['📋 Ord. 2024-045: Plastic Ban & Waste Management', '68% COMPLIANT', 'compliance-partial', ['📅 Enacted: Jun 1, 2024', '🌳 Lead: Environment Office', '⚠️ 156/230 establishments compliant', '🚩 3 major violations', '📊 Impact: Medium']],
                                    ['📋 Ord. 2024-032: Market Operations & Vendor Regulation', '88% COMPLIANT', 'compliance-full', ['📅 Enacted: Apr 15, 2024', '🏪 Lead: Market Admin', '✅ 450/510 vendors registered', '💰 Revenue: ₱850K/month', '📊 Impact: High']],
                                    ['📋 Res. 2025-015: Supplemental Budget Appropriation', '100% COMPLIANT', 'compliance-full', ['📅 Enacted: Jul 1, 2025', '💰 Lead: Budget Office', '✅ Fully implemented', '📊 ₱50M allocated', '📊 Impact: Critical']],
                                    ['📋 Ord. 2023-067: Traffic Management Scheme', '45% COMPLIANT', 'compliance-low', ['📅 Enacted: Sep 1, 2023', '🚦 Lead: Traffic Management', '⚠️ Low enforcement', '🚩 Amendment recommended', '📊 Impact: Low']],
                                ].map(([title, compliance, cls, details]) => (
                                    <div key={String(title)} className="ordinance-item" onClick={() => alert(`Ordinance Details: ${title}\n\nCompliance: ${compliance}\n\nOptions:\n• View full text\n• Implementation report\n• Compliance breakdown\n• Department feedback\n• Amendment history\n• Impact metrics`)}>
                                        <div className="ordinance-header">
                                            <div className="ordinance-title">{title}</div>
                                            <div className={`compliance-badge ${cls}`}>{compliance}</div>
                                        </div>
                                        <div className="ordinance-details">
                                            {Array.isArray(details) && details.map((d, idx) => (<span key={idx}>{d}</span>))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">POLICY GAP ANALYSIS & RECOMMENDATIONS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📈 Complete Gap Analysis\n\nAnalyzing:\n• 245 active policies\n• 12 departments\n• 5-year trend data\n• Citizen feedback\n• Best practices benchmark\n• Legal compliance\n\nEstimated time: 5 minutes')}>Full Analysis</button>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div style={{ padding: 12, backgroundColor: '#fee2e2', borderRadius: 6 }}>
                                    <h3 style={{ fontSize: 12, fontWeight: 600, color: '#991b1b', marginBottom: 8 }}>CRITICAL GAPS</h3>
                                    <div style={{ fontSize: 11, lineHeight: 1.8 }}>
                                        • Digital transactions policy needed<br />
                                        • Disaster risk reduction updates required<br />
                                        • Data privacy ordinance missing<br />
                                        • Climate change adaptation policy gap
                                    </div>
                                </div>
                                <div style={{ padding: 12, backgroundColor: '#fef3c7', borderRadius: 6 }}>
                                    <h3 style={{ fontSize: 12, fontWeight: 600, color: '#92400e', marginBottom: 8 }}>AMENDMENTS NEEDED</h3>
                                    <div style={{ fontSize: 11, lineHeight: 1.8 }}>
                                        • Traffic ordinance - outdated provisions<br />
                                        • Business permit fees - adjustment needed<br />
                                        • Market regulations - vendor concerns<br />
                                        • Curfew ordinance - review hours
                                    </div>
                                </div>
                                <div style={{ padding: 12, backgroundColor: '#dbeafe', borderRadius: 6 }}>
                                    <h3 style={{ fontSize: 12, fontWeight: 600, color: '#1e40af', marginBottom: 8 }}>UNDER REVIEW</h3>
                                    <div style={{ fontSize: 11, lineHeight: 1.8 }}>
                                        • Environmental protection measures<br />
                                        • Zoning ordinance updates<br />
                                        • Public market modernization<br />
                                        • Tourism development policies
                                    </div>
                                </div>
                                <div style={{ padding: 12, backgroundColor: '#d1fae5', borderRadius: 6 }}>
                                    <h3 style={{ fontSize: 12, fontWeight: 600, color: '#065f46', marginBottom: 8 }}>BEST PRACTICES</h3>
                                    <div style={{ fontSize: 11, lineHeight: 1.8 }}>
                                        • Revenue collection - 95% efficiency<br />
                                        • Health protocols - fully compliant<br />
                                        • Business permits - streamlined<br />
                                        • Budget utilization - transparent
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


