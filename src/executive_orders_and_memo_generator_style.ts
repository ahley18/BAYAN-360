export const executiveOrdersAndMemoCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .exec-orders-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }

  /* Header */
  .header { background-color: #374151; color: white; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; }
  .logo { background-color: #dc2626; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; display: flex; align-items: center; gap: 8px; }
  .logo-icon { margin-right: 8px; }
  .search-container { position: relative; }
  .search-input { background-color: #4b5563; color: white; padding: 8px 12px 8px 40px; border: none; border-radius: 4px; width: 300px; outline: none; }
  .search-input::placeholder { color: #9ca3af; }
  .search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; opacity: 0.6; }
  .header-right { display: flex; align-items: center; gap: 16px; font-size: 14px; }
  .status-badge { background-color: #10b981; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
  .sync-badge { background-color: #3b82f6; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; animation: pulse 2s infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }

  /* Layout */
  .container { display: flex; min-height: calc(100vh - 56px); }
  .sidebar { width: 320px; background-color: white; box-shadow: 2px 0 8px rgba(0,0,0,0.1); }
  .nav-item, .sidebar-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; transition: background-color 0.2s; font-size: 12px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .nav-item:hover, .sidebar-item:hover { background-color: #f3f4f6; }
  .nav-item.active, .sidebar-item.active { background-color: #dc2626; color: white; font-weight: 600; }

  /* Main */
  .main-content { flex: 1; padding: 24px; }
  .page-header { margin-bottom: 24px; }
  .page-title { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .page-subtitle { color: #6b7280; font-size: 14px; }

  /* Stats */
  .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 24px; }
  .stat-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
  .stat-icon { font-size: 28px; margin-bottom: 8px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 3fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Form */
  .form-group { margin-bottom: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 4px; text-transform: uppercase; }
  .form-input { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: #dc2626; }
  .form-select { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; background-color: white; cursor: pointer; }
  .form-textarea { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; resize: vertical; min-height: 100px; font-family: 'Courier New', monospace; }

  /* Buttons */
  .btn { padding: 10px 20px; border: none; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
  .btn-primary { background-color: #dc2626; color: white; }
  .btn-primary:hover { background-color: #b91c1c; }
  .btn-secondary { background-color: white; color: #374151; border: 1px solid #e5e7eb; }
  .btn-secondary:hover { background-color: #f3f4f6; }
  .btn-success { background-color: #10b981; color: white; }
  .btn-warning { background-color: #f59e0b; color: white; }

  /* Process Flow */
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; flex-wrap: wrap; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }

  /* Templates */
  .template-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px; }
  .template-card { padding: 12px; border: 2px solid #e5e7eb; border-radius: 6px; cursor: pointer; transition: all 0.2s; text-align: center; }
  .template-card:hover { border-color: #dc2626; background-color: #fef2f2; }
  .template-card.selected { border-color: #dc2626; background-color: #fee2e2; }
  .template-icon { font-size: 24px; margin-bottom: 4px; }
  .template-name { font-size: 12px; font-weight: 600; color: #374151; }

  /* Lists */
  .document-list { max-height: 400px; overflow-y: auto; }
  .document-item { padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background-color 0.2s; }
  .document-item:hover { background-color: #f9fafb; }
  .document-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .document-title { font-size: 13px; font-weight: 600; color: #374151; }
  .document-status { padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase; }
  .status-draft { background-color: #e5e7eb; color: #374151; }
  .status-review { background-color: #fef3c7; color: #92400e; }
  .status-approved { background-color: #d1fae5; color: #065f46; }
  .status-issued { background-color: #dbeafe; color: #1e40af; }
  .document-details { font-size: 11px; color: #6b7280; display: flex; gap: 12px; flex-wrap: wrap; }

  /* Approval */
  .approval-section { background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .approval-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .approval-buttons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }

  /* Recipient tags */
  .recipient-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .recipient-tag { padding: 4px 8px; background-color: #e5e7eb; border-radius: 12px; font-size: 11px; display: flex; align-items: center; gap: 4px; }
  .tag-remove { cursor: pointer; color: #6b7280; }

  /* Preview */
  .preview-container { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin-top: 16px; font-family: 'Times New Roman', serif; line-height: 1.6; }
  .preview-header { text-align: center; margin-bottom: 20px; }
  .preview-seal { font-size: 32px; margin-bottom: 8px; }
  .preview-title { font-size: 18px; font-weight: bold; margin-bottom: 4px; }
  .preview-subtitle { font-size: 14px; color: #6b7280; }
  .preview-content { font-size: 14px; text-align: justify; white-space: pre-wrap; }
  .signature-section { margin-top: 20px; text-align: center; }
  .signature-line { width: 200px; border-bottom: 2px solid #374151; margin: 0 auto 4px; }
  .signature-name { font-weight: bold; font-size: 14px; }
  .signature-title { font-size: 12px; color: #6b7280; }

  /* Quick actions */
  .quick-actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px; }
  .quick-action { padding: 8px; background-color: #f3f4f6; border-radius: 4px; text-align: center; cursor: pointer; transition: background-color 0.2s; font-size: 12px; }
  .quick-action:hover { background-color: #e5e7eb; }

  /* Archive */
  .archive-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; }
  .archive-count { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 4px; }
  .archive-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  /* Responsive */
  @media (max-width: 1280px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 1024px) {
    .grid { grid-template-columns: 1fr; }
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
    .template-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .search-input { width: 100%; }
    .form-row { grid-template-columns: 1fr; }
    .quick-actions { grid-template-columns: 1fr; }
    .template-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .stats-grid { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; font-size: 13px; }
  }
`;


