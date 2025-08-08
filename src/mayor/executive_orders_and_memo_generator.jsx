import React, { useEffect, useMemo, useState } from 'react';
import GlobalStyleMayor from './mayor_office_styles.ts';
import MayorOfficeHeader from './mayor_office_header';
import MayorOfficeNav from './mayor_office_nav';

function InlineStyle() { return null; }

export default function ExecutiveOrdersAndMemoGenerator() {
    // Active nav: Executive Orders & Memo Generator → index 6 per constants order
    const [activeNavIndex, setActiveNavIndex] = useState(6);
    const [selectedTemplate, setSelectedTemplate] = useState('Executive Order');
    const [archiveCount, setArchiveCount] = useState(1245);

    // Auto-increment the archive count periodically like the HTML
    useEffect(() => {
        const id = setInterval(() => {
            setArchiveCount((prev) => prev + Math.floor(Math.random() * 2));
        }, 60000);
        return () => clearInterval(id);
    }, []);

    // Auto-save indicator (console log to simulate)
    useEffect(() => {
        const id = setInterval(() => {
            // eslint-disable-next-line no-console
            console.log('Auto-saving draft...');
        }, 30000);
        return () => clearInterval(id);
    }, []);

    const stats = useMemo(() => ([
        ['📜', '156', 'Total Issuances 2025'],
        ['✍️', '5', 'Pending Draft'],
        ['⚖️', '3', 'Legal Review'],
        ['✅', '2', 'For Approval'],
        ['📤', '12', 'Issued This Month'],
    ]), []);

    const recentDocs = useMemo(() => ([
        ['📋 EO-2025-046: Budget Realignment for Q4', 'ISSUED', 'status-issued', ['📅 Aug 5, 2025', '👥 All Departments', '✅ Mayor Approved', '📤 Circulated', '💾 Archived']],
        ['📝 Memo-2025-089: Updated Office Hours', 'ISSUED', 'status-issued', ['📅 Aug 3, 2025', '👥 All Employees', '✅ Mayor Signed', '📤 Distributed', '💾 Archived']],
        ['📋 EO-2025-045: Emergency Response Protocol', 'APPROVED', 'status-approved', ['📅 Aug 2, 2025', '👥 DRRMO, PNP, BFP', '✅ For Issuance', '⏳ Pending']],
        ['📑 Circular-2025-015: Procurement Guidelines', 'LEGAL REVIEW', 'status-review', ['📅 Aug 1, 2025', '⚖️ Legal Office', '⏰ 2 days pending', '📝 Comments: 3']],
        ['🎯 Directive-2025-023: Department KPIs', 'DRAFT', 'status-draft', ['📅 Jul 30, 2025', '✍️ In progress', '👤 Admin Office', '⏰ Due: Aug 10']],
    ]), []);

    const handleTemplateClick = (name) => {
        setSelectedTemplate(name);
        alert(`Loading ${name} template...\n\nTemplate includes:\n• Standard format\n• Legal framework\n• Required sections\n• Common phrases\n\nCustomize as needed.`);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        alert('📋 Document Submitted for Review\n\n✅ Draft saved\n⚖️ Sent to Legal Office\n📧 Review notification sent\n⏰ Expected review: 24-48 hours\n💾 Auto-saved to archive\n\nDocument ID: EO-2025-047');
    };

    return (
        <div className="exec-orders-root">
            <GlobalStyleMayor />
            <MayorOfficeHeader iconText="🗾 EXEC ORDERS" badgeIcon="✅" badgeText="ISSUE DIRECTIVE" />
            <div className="container">
                <aside className="sidebar">
                    <MayorOfficeNav activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
                </aside>
                <main className="main-content">
                    <div className="page-header">
                        <h1 className="page-title">Executive Orders & Memo Generator</h1>
                        <p className="page-subtitle">Draft and dispatch mayoral directives with auto-logging to department records via Office of the Administrator API</p>
                    </div>

                    <div className="stats-grid">
                        {stats.map(([icon, value, label]) => (
                            <div key={label} className="stat-card">
                                <div className="stat-icon">{icon}</div>
                                <div className="stat-value">{value}</div>
                                <div className="stat-label">{label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="process-flow">
                        <span className="flow-step flow-active">Draft Document</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Legal Review</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Mayor Approval</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Digital Archive</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Circulate</span>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">DOCUMENT GENERATOR</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📋 Template Library\n\nAvailable templates:\n• Executive Orders (15)\n• Memorandums (23)\n• Circulars (12)\n• Directives (8)\n• Proclamations (5)\n• Ordinances (45)\n\nSelect template to load...')}>Load Template</button>
                            </div>

                            <div className="template-grid">
                                {[
                                    ['Executive Order', '📋'],
                                    ['Memorandum', '📝'],
                                    ['Circular', '📑'],
                                    ['Directive', '🎯'],
                                    ['Proclamation', '📣'],
                                    ['Ordinance', '⚖️'],
                                ].map(([name, icon]) => (
                                    <div
                                        key={name}
                                        className={`template-card ${selectedTemplate === name ? 'selected' : ''}`}
                                        onClick={() => handleTemplateClick(String(name))}
                                    >
                                        <div className="template-icon">{icon}</div>
                                        <div className="template-name">{name}</div>
                                    </div>
                                ))}
                            </div>

                            <form id="document-form" onSubmit={onFormSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Document Number</label>
                                        <input type="text" className="form-input" placeholder="Auto-generated" value="EO-2025-047" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Date</label>
                                        <input type="date" className="form-input" defaultValue="2025-08-07" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Subject/Title *</label>
                                    <input type="text" className="form-input" placeholder="e.g., Implementing Guidelines for..." required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Whereas Clauses (Background/Justification) *</label>
                                    <textarea className="form-textarea" placeholder={`WHEREAS, the Municipality recognizes the need to...

WHEREAS, pursuant to Republic Act No...

WHEREAS, it is imperative to establish...`} required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Now Therefore Clause (Main Content) *</label>
                                    <textarea className="form-textarea" style={{ minHeight: 150 }} placeholder={`NOW, THEREFORE, I, [Mayor Name], Mayor of [Municipality], by virtue of the powers vested in me by law, do hereby order:

Section 1. [Title/Purpose]
[Content]

Section 2. [Scope and Coverage]
[Content]

Section 3. [Implementation]
[Content]`} required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Effectivity Clause</label>
                                    <input type="text" className="form-input" placeholder="e.g., This Order shall take effect immediately" defaultValue="This Order shall take effect immediately upon signing." />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Recipients/Distribution *</label>
                                    <select className="form-select" multiple style={{ height: 80 }} defaultValue={['All Department Heads']}>
                                        {['All Department Heads', 'Sangguniang Bayan', 'Barangay Captains', 'Municipal Administrator', 'Treasury Office', 'Budget Office', 'Engineering Office', 'Health Office', 'DRRMO', 'PNP', 'Public Information'].map(opt => (
                                            <option key={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="recipient-tags">
                                    {['All Departments', 'Sangguniang Bayan', 'Barangay Captains'].map(tag => (
                                        <span key={tag} className="recipient-tag">{tag} <span className="tag-remove" onClick={(e) => { e.stopPropagation(); (e.currentTarget.parentElement)?.remove(); }}>×</span></span>
                                    ))}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Legal Basis/References</label>
                                    <textarea className="form-textarea" style={{ minHeight: 60 }} placeholder="RA 7160, Municipal Ordinance No..."></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Attachments</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                        <button type="button" className="btn btn-secondary" onClick={() => alert('📎 Attach Supporting Documents\n\nAccepted formats:\n• PDF documents\n• Word files\n• Excel spreadsheets\n• Images (JPG, PNG)\n• Scanned documents\n\nMax size: 10MB per file')}>📎 Attach File</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => alert('🔗 Link Legal Reference\n\nReference library:\n• National laws (RA)\n• Local ordinances\n• Department orders\n• Court decisions\n• Administrative issuances\n\nSearch or paste reference...')}>🔗 Link Reference</button>
                                    </div>
                                </div>

                                <div className="approval-section">
                                    <div className="approval-header">🔐 Mayor's Final Approval</div>
                                    <div className="approval-buttons">
                                        <button type="button" className="btn btn-success" onClick={() => alert('✅ DOCUMENT APPROVED & SIGNED\n\nActions completed:\n• Digital signature applied\n• Document finalized\n• Archive updated\n• Distribution list notified\n• Department records updated\n• API sync to Admin Office\n\nDocument is now official!')}>✅ Approve & Sign</button>
                                        <button type="button" className="btn btn-warning" onClick={() => alert('📝 Revision Request\n\nDocument returned for revision\nComments added to draft\nOriginal author notified\nLegal team CC\'d\n\nPlease address comments and resubmit')}>📝 Revise</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => alert('💾 Draft Saved\n\nDocument saved as draft\nAuto-save enabled\nVersion control active\nDraft ID: DRAFT-2025-047\n\nResume editing anytime')}>💾 Save Draft</button>
                                    </div>
                                    <div style={{ marginTop: 8 }}>
                                        <textarea className="form-textarea" placeholder="Mayor's notes or amendments..." style={{ minHeight: 40 }}></textarea>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
                                    <button type="submit" className="btn btn-primary">SUBMIT FOR REVIEW</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => alert('👁️ Document Preview\n\nGenerating preview...\n• Formatting applied\n• Header/footer added\n• Page numbers included\n• Watermark: DRAFT\n\nPreview ready!')}>Preview Document</button>
                                </div>
                            </form>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">QUICK ACTIONS</h2>
                            </div>

                            <div className="archive-widget">
                                <div className="archive-count">{archiveCount}</div>
                                <div className="archive-label">Documents Archived</div>
                                <div style={{ textAlign: 'center', marginTop: 4, fontSize: 11, color: '#065f46' }}>Digitally secured since 2020</div>
                            </div>

                            <div className="quick-actions">
                                {[
                                    '📋 Use Last Template',
                                    '⚡ Emergency Order',
                                    '📊 Department Memo',
                                    '🎯 Policy Directive',
                                    '📅 Annual Circular',
                                    '🏛️ Council Resolution',
                                ].map((qa) => (
                                    <div key={qa} className="quick-action" onClick={() => {
                                        if (qa.includes('Emergency Order')) {
                                            alert('🚨 Emergency Order Template\n\nLoading emergency template:\n• Immediate effectivity\n• Crisis response format\n• Expedited approval process\n• Priority distribution\n\nBypass normal review? (Mayor approval only)');
                                        } else if (qa.includes('Department Memo')) {
                                            alert('📊 Department Memo Template\n\nSelect department:\n• Engineering\n• Health\n• Treasury\n• Education\n• Social Welfare\n\nStandard memo format loaded');
                                        } else {
                                            alert(`Loading: ${qa}\n\nTemplate ready for customization`);
                                        }
                                    }}>{qa}</div>
                                ))}
                            </div>

                            <div style={{ marginTop: 16 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', color: '#6b7280' }}>Recent Templates</h3>
                                <div style={{ display: 'grid', gap: 6 }}>
                                    {['📋 EO on Budget Realignment', '📝 Memo on Office Hours', '📑 Circular on Procurement'].map((t) => (
                                        <div key={t} style={{ padding: 8, backgroundColor: '#f9fafb', borderRadius: 4, fontSize: 12, cursor: 'pointer' }} onClick={() => alert(`Loading template: ${t}\n\nThis template includes:\n• Pre-filled sections\n• Standard clauses\n• Distribution list\n• Legal references\n\nEdit to customize for current use`)}>{t}</div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: 16, padding: 12, backgroundColor: '#f9fafb', borderRadius: 6 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>Common Legal References</h3>
                                <div style={{ fontSize: 11, lineHeight: 1.6 }}>
                                    • RA 7160 - Local Government Code<br />
                                    • RA 9184 - Procurement Reform Act<br />
                                    • RA 10121 - Disaster Risk Reduction<br />
                                    • Municipal Code of 2020<br />
                                    • Admin Code of 1987
                                </div>
                            </div>

                            <div style={{ marginTop: 16 }}>
                                <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert('🖊️ Digital Signature Setup\n\nConfiguration:\n• Upload signature image\n• Set security PIN\n• Configure auto-sign rules\n• Backup credentials\n• Test signature\n\nProceed to setup wizard?')}>
                                    🖊️ SETUP DIGITAL SIGNATURE
                                </button>
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">DOCUMENT PREVIEW</h2>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <button className="btn btn-secondary" onClick={() => alert('📄 Export to PDF\n\nPDF options:\n• Include digital signature\n• Add security password\n• Enable printing\n• Allow copying\n\nFile: EO-2025-047.pdf')}>📄 Export PDF</button>
                                    <button className="btn btn-secondary" onClick={() => alert('🖨️ Print Document\n\nPrint settings:\n• Paper size: Legal\n• Orientation: Portrait\n• Copies: 10\n• Distribution list attached\n\nSend to printer?')}>🖨️ Print</button>
                                </div>
                            </div>
                            <div className="preview-container">
                                <div className="preview-header">
                                    <div className="preview-seal">🏛️</div>
                                    <div className="preview-title">REPUBLIC OF THE PHILIPPINES</div>
                                    <div className="preview-subtitle">PROVINCE OF [PROVINCE]</div>
                                    <div className="preview-subtitle">MUNICIPALITY OF [MUNICIPALITY]</div>
                                    <div className="preview-subtitle">OFFICE OF THE MAYOR</div>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                                    <strong>EXECUTIVE ORDER NO. 2025-047</strong><br />
                                    <span style={{ fontSize: 12 }}>Series of 2025</span>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    [Document Title Will Appear Here]
                                </div>
                                <div className="preview-content">
                                    WHEREAS, [Background and justification will appear here];

                                    WHEREAS, [Additional justification];

                                    NOW, THEREFORE, I, [Mayor Name], Mayor of [Municipality], by virtue of the powers vested in me by law, do hereby order:

                                    Section 1. [Main provision]

                                    Section 2. [Additional provisions]

                                    Section 3. Effectivity. This Order shall take effect immediately upon signing.

                                    DONE this 7th day of August, 2025, at [Municipality], Philippines.
                                </div>
                                <div className="signature-section">
                                    <div className="signature-line"></div>
                                    <div className="signature-name">[MAYOR'S NAME]</div>
                                    <div className="signature-title">Municipal Mayor</div>
                                </div>
                            </div>
                        </div>

                        <div className="card full-width">
                            <div className="card-header">
                                <h2 className="card-title">RECENT DOCUMENTS & STATUS</h2>
                                <button className="btn btn-secondary" onClick={() => alert('📚 Document Archive\n\n1,245 Total Documents\n\nFilter by:\n• Year (2020-2025)\n• Document type\n• Department\n• Status\n• Keyword search\n\nOpening archive viewer...')}>View Archive</button>
                            </div>
                            <div className="document-list">
                                {recentDocs.map(([title, status, statusClass, details]) => (
                                    <div key={String(title)} className="document-item" onClick={() => alert(`Document Details: ${title}\n\nStatus: ${status}\n\nOptions:\n• View full document\n• Download PDF\n• Check distribution\n• View acknowledgments\n• Track implementation\n• Generate report`)}>
                                        <div className="document-header">
                                            <div className="document-title">{title}</div>
                                            <div className={`document-status ${statusClass}`}>{status}</div>
                                        </div>
                                        <div className="document-details">
                                            {Array.isArray(details) && details.map((d, idx) => (<span key={idx}>{d}</span>))}
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


