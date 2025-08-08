export const mayorPolicyReviewLegislativeCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .mayor-policy-root {
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

  /* Gap Alert */
  .gap-alert { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .gap-icon { font-size: 20px; color: #dc2626; }
  .gap-content { flex: 1; }
  .gap-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .gap-description { font-size: 12px; color: #7f1d1d; }

  /* Stats */
  .stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; margin-bottom: 24px; }
  .stat-card { background-color: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; position: relative; overflow: hidden; }
  .stat-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
  .stat-compliant::before { background-color: #10b981; }
  .stat-partial::before { background-color: #f59e0b; }
  .stat-review::before { background-color: #3b82f6; }
  .stat-gap::before { background-color: #ef4444; }
  .stat-icon { font-size: 24px; margin-bottom: 8px; }
  .stat-value { font-size: 20px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Forms */
  .form-group { margin-bottom: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 4px; text-transform: uppercase; }
  .form-input { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: #dc2626; }
  .form-select { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; background-color: white; cursor: pointer; }
  .form-textarea { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; resize: vertical; min-height: 80px; }

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

  /* Policy Grid */
  .policy-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px; }
  .policy-card { padding: 12px; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
  .policy-card:hover { border-color: #dc2626; background-color: #fef2f2; }
  .policy-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .policy-title { font-size: 12px; font-weight: 600; color: #374151; }
  .policy-status { padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600; }
  .status-active { background-color: #d1fae5; color: #065f46; }
  .status-review { background-color: #dbeafe; color: #1e40af; }
  .status-amend { background-color: #fef3c7; color: #92400e; }
  .status-expired { background-color: #fee2e2; color: #991b1b; }
  .policy-details { font-size: 11px; color: #6b7280; }

  /* Compliance Meter */
  .compliance-meter { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: linear-gradient(90deg, #ef4444 0%, #f59e0b 33%, #fbbf24 66%, #10b981 100%); border-radius: 8px; margin-bottom: 16px; position: relative; }
  .compliance-indicator { position: absolute; top: -10px; width: 4px; height: 35px; background-color: #374151; border-radius: 2px; transition: left 0.3s; }

  /* Ordinances */
  .ordinance-list { max-height: 400px; overflow-y: auto; }
  .ordinance-item { padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background-color 0.2s; }
  .ordinance-item:hover { background-color: #f9fafb; }
  .ordinance-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .ordinance-title { font-size: 13px; font-weight: 600; color: #374151; }
  .compliance-badge { padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; }
  .compliance-full { background-color: #d1fae5; color: #065f46; }
  .compliance-partial { background-color: #fef3c7; color: #92400e; }
  .compliance-low { background-color: #fee2e2; color: #991b1b; }
  .ordinance-details { font-size: 11px; color: #6b7280; display: flex; gap: 12px; flex-wrap: wrap; }

  /* Mayor Action */
  .mayor-action { background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .mayor-action-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .mayor-action-buttons { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }

  /* Impact */
  .impact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 12px; }
  .impact-item { text-align: center; padding: 8px; background-color: #f3f4f6; border-radius: 4px; cursor: pointer; }
  .impact-score { font-size: 18px; font-weight: bold; color: #374151; }
  .impact-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }

  /* Dept Compliance */
  .dept-compliance { display: grid; gap: 8px; }
  .dept-item { display: flex; justify-content: space-between; align-items: center; padding: 8px; background-color: #f9fafb; border-radius: 4px; cursor: pointer; }
  .dept-name { font-size: 12px; font-weight: 600; color: #374151; }
  .dept-score { font-size: 12px; font-weight: 600; }
  .score-high { color: #10b981; }
  .score-medium { color: #f59e0b; }
  .score-low { color: #ef4444; }

  /* Timeline */
  .timeline { position: relative; padding-left: 20px; }
  .timeline-item { position: relative; padding-bottom: 20px; border-left: 2px solid #e5e7eb; padding-left: 20px; cursor: pointer; }
  .timeline-item::before { content: ''; position: absolute; left: -6px; top: 0; width: 10px; height: 10px; border-radius: 50%; background-color: #6b7280; }
  .timeline-item.completed::before { background-color: #10b981; }
  .timeline-item.current::before { background-color: #3b82f6; animation: pulse 2s infinite; }
  .timeline-date { font-size: 11px; color: #6b7280; margin-bottom: 4px; }
  .timeline-content { font-size: 12px; color: #374151; }

  /* Full width */
  .full-width { grid-column: 1 / -1; }

  /* Responsive */
  @media (max-width: 1280px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 1024px) {
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .search-container { width: 100%; }
    .search-input { width: 100%; }
    .header { padding: 10px 12px; }
    .logo { padding: 6px 10px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; }
    .policy-grid { grid-template-columns: 1fr; }
    .impact-grid { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .stats-grid { grid-template-columns: 1fr; }
    .btn { padding: 7px 12px; font-size: 13px; }
  }
`;