export const mayorBudgetUtilizationCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .mayor-budget-root {
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
  .office-title { font-weight: 500; }
  .status-badge { background-color: #10b981; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
  .status-badge.warning { background-color: #10b981; }
  .status-icon { margin-right: 4px; }
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
  .page-header { margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
  .page-title { font-size: 24px; font-weight: 600; margin-bottom: 4px; }
  .page-subtitle { color: #6b7280; font-size: 14px; }

  /* Variance Alert */
  .variance-alert { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .variance-icon { font-size: 20px; color: #dc2626; }
  .variance-content { flex: 1; }
  .variance-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .variance-description { font-size: 12px; color: #7f1d1d; }

  /* Budget Overview */
  .budget-overview { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 24px; }
  .budget-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; position: relative; overflow: hidden; }
  .budget-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
  .budget-excellent::before { background-color: #10b981; }
  .budget-good::before { background-color: #3b82f6; }
  .budget-warning::before { background-color: #f59e0b; }
  .budget-critical::before { background-color: #ef4444; }
  .budget-icon { font-size: 28px; margin-bottom: 8px; }
  .budget-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .budget-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .budget-change { font-size: 11px; margin-top: 4px; font-weight: 600; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 3fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Heatmap */
  .heatmap-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 16px; }
  .heatmap-cell { aspect-ratio: 1; border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s; padding: 8px; }
  .heatmap-cell:hover { transform: scale(1.05); box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
  .heat-excellent { background-color: #10b981; color: white; }
  .heat-good { background-color: #3b82f6; color: white; }
  .heat-fair { background-color: #fbbf24; color: #374151; }
  .heat-warning { background-color: #f59e0b; color: white; }
  .heat-critical { background-color: #ef4444; color: white; }
  .heatmap-dept { font-size: 10px; font-weight: 600; margin-bottom: 4px; }
  .heatmap-percent { font-size: 16px; font-weight: bold; }

  /* Form */
  .form-group { margin-bottom: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 4px; text-transform: uppercase; }
  .form-input { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: #dc2626; }
  .form-select { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; background-color: white; cursor: pointer; }
  .form-textarea { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; resize: vertical; min-height: 60px; }

  /* Buttons */
  .btn { padding: 10px 20px; border: none; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
  .btn-primary { background-color: #dc2626; color: white; }
  .btn-primary:hover { background-color: #b91c1c; }
  .btn-secondary { background-color: white; color: #374151; border: 1px solid #e5e7eb; }
  .btn-secondary:hover { background-color: #f3f4f6; }
  .btn-success { background-color: #10b981; color: white; }
  .btn-warning { background-color: #f59e0b; color: white; }
  .btn-danger { background-color: #ef4444; color: white; }

  /* Table */
  .budget-table { width: 100%; font-size: 12px; border-collapse: collapse; }
  .budget-table th { text-align: left; padding: 8px; background-color: #f3f4f6; font-weight: 600; color: #374151; text-transform: uppercase; font-size: 11px; border-bottom: 2px solid #e5e7eb; }
  .budget-table td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
  .budget-table tr:hover { background-color: #f9fafb; }

  /* Progress */
  .progress-bar { width: 100%; height: 8px; background-color: #e5e7eb; border-radius: 4px; overflow: hidden; cursor: pointer; }
  .progress-fill { height: 100%; border-radius: 4px; transition: width 0.3s; }
  .fill-excellent { background-color: #10b981; }
  .fill-good { background-color: #3b82f6; }
  .fill-warning { background-color: #f59e0b; }
  .fill-critical { background-color: #ef4444; }

  /* Full width */
  .full-width { grid-column: 1 / -1; }

  /* Process Flow */
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; flex-wrap: wrap; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }

  /* Intervention */
  .intervention-section { background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .intervention-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .intervention-buttons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }

  /* Badges & Pills */
  .aip-badge { display: inline-block; padding: 2px 8px; background-color: #dbeafe; color: #1e40af; border-radius: 4px; font-size: 10px; font-weight: 600; cursor: pointer; }
  .procurement-status { display: flex; align-items: center; gap: 4px; font-size: 11px; cursor: pointer; }
  .proc-completed { color: #10b981; }
  .proc-ongoing { color: #3b82f6; }
  .proc-pending { color: #f59e0b; }
  .fund-pills { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .fund-pill { padding: 4px 8px; background-color: #f3f4f6; border-radius: 12px; font-size: 11px; font-weight: 600; cursor: pointer; }
  .pill-gf { background-color: #dbeafe; color: #1e40af; }
  .pill-ira { background-color: #d1fae5; color: #065f46; }
  .pill-sef { background-color: #fef3c7; color: #92400e; }
  .pill-trust { background-color: #fce7f3; color: #9f1239; }

  /* Widgets */
  .disbursement-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; }
  .disbursement-value { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 4px; }
  .disbursement-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  /* Responsive */
  @media (max-width: 1280px) {
    .budget-overview { grid-template-columns: repeat(4, 1fr); }
    .heatmap-grid { grid-template-columns: repeat(4, 1fr); }
  }

  @media (max-width: 1024px) {
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .grid { grid-template-columns: 1fr; }
    .budget-overview { grid-template-columns: repeat(3, 1fr); }
    .heatmap-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .page-header { flex-direction: column; align-items: flex-start; gap: 8px; }
    .search-container { width: 100%; }
    .search-input { width: 100%; }
    .header { padding: 10px 12px; }
    .logo { padding: 6px 10px; }
    .budget-overview { grid-template-columns: repeat(2, 1fr); }
    .heatmap-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; }
    .card { overflow-x: auto; }
    .budget-table { min-width: 900px; }
  }

  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .budget-overview { grid-template-columns: 1fr; }
    .heatmap-grid { grid-template-columns: 1fr; }
    .btn { padding: 7px 12px; font-size: 13px; }
    .disbursement-value { font-size: 20px; }
    .header-right { gap: 8px; }
  }
`;


