import { createGlobalStyle } from 'styled-components';

export const GlobalStyleMayor = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }

  /* Header Styles */
  .header { background-color: #374151; color: white; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; }
  .header-left { display: flex; align-items: center; gap: 16px; }
  .logo { background-color: #dc2626; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; display: flex; align-items: center; gap: 8px; }
  .search-container { position: relative; }
  .search-input { background-color: #4b5563; color: white; padding: 8px 12px 8px 40px; border: none; border-radius: 4px; width: 300px; outline: none; }
  .search-input::placeholder { color: #9ca3af; }
  .search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; opacity: 0.6; }
  .header-right { display: flex; align-items: center; gap: 16px; font-size: 14px; }

  /* Sync Badge + Pulse */
  .sync-badge { background-color: #3b82f6; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; animation: pulse 2s infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }

  /* Status Badge */
  .status-badge { background-color: #10b981; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }

  /* Layout */
  .container { display: flex; min-height: calc(100vh - 56px); }

  /* Sidebar */
  .sidebar {
    width: 320px;
    background-color: white;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    padding: 8px;
    background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
  }
  .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; transition: background-color 0.2s; font-size: 12px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .nav-item .nav-icon { display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; }
  .nav-item:hover { background-color: #f3f4f6; }
  .nav-item.active { background-color: #dc2626; color: white; font-weight: 600; }

  /* Main Content */
  .main-content { flex: 1; padding: 24px; overflow-y: auto; }
  .page-header { margin-bottom: 24px; }
  .page-title { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .page-subtitle { color: #6b7280; font-size: 14px; }

  /* Barangay Stats Grid */
  .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 24px; }
  .stat-card { background-color: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden; }
  .stat-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; }
  .stat-card.stat-blue::before { background-color: #3b82f6; }
  .stat-card.stat-green::before { background-color: #10b981; }
  .stat-card.stat-yellow::before { background-color: #f59e0b; }
  .stat-card.stat-purple::before { background-color: #8b5cf6; }
  .stat-card.stat-red::before { background-color: #ef4444; }
  .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .stat-title { font-size: 11px; color: #6b7280; text-transform: uppercase; font-weight: 600; }
  .stat-icon { font-size: 18px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 2px; }
  .stat-subtitle { font-size: 11px; color: #6b7280; }

  /* Grid Layout */
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
  /* Budget page-specific grid override to avoid conflicts */
  .budget-page .grid { grid-template-columns: 3fr 1fr; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Barangay Table */
  .barangay-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .barangay-table th { background-color: #f9fafb; padding: 10px 12px; text-align: left; font-weight: 600; color: #374151; border-bottom: 2px solid #e5e7eb; font-size: 11px; text-transform: uppercase; }
  .barangay-table td { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #374151; }
  .barangay-table tr:hover { background-color: #f9fafb; }
  .barangay-name { font-weight: 600; color: #374151; }
  .status-indicator { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; }
  .status-good { background-color: #10b981; }
  .status-warning { background-color: #f59e0b; }
  .status-critical { background-color: #ef4444; }

  /* Performance Bars */
  .performance-bar { position: relative; height: 20px; background-color: #f3f4f6; border-radius: 10px; overflow: hidden; }
  .performance-fill { position: absolute; left: 0; top: 0; height: 100%; display: flex; align-items: center; padding: 0 8px; color: white; font-size: 10px; font-weight: 600; }
  .fill-excellent { background-color: #10b981; }
  .fill-good { background-color: #3b82f6; }
  .fill-fair { background-color: #f59e0b; }
  .fill-poor { background-color: #ef4444; }

  /* Form Styles */
  .form-section { background-color: #f9fafb; border-radius: 6px; padding: 16px; margin-bottom: 16px; }
  .form-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px; }
  .form-group { margin-bottom: 16px; }
  .form-label { display: block; font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 4px; }
  .form-required { color: #dc2626; }
  .form-input { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 13px; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: #dc2626; }
  .form-select { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 13px; background-color: white; cursor: pointer; }
  .form-textarea { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 13px; resize: vertical; min-height: 80px; }

  /* Button Styles */
  .btn { padding: 10px 20px; border: none; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
  .btn-primary { background-color: #dc2626; color: white; }
  .btn-primary:hover { background-color: #b91c1c; }
  .btn-secondary { background-color: white; color: #374151; border: 1px solid #e5e7eb; }
  .btn-secondary:hover { background-color: #f3f4f6; }
  .btn-success { background-color: #10b981; color: white; }
  .btn-success:hover { background-color: #059669; }
  .btn-warning { background-color: #f59e0b; color: white; }
  .btn-danger { background-color: #ef4444; color: white; }
  .btn-review { padding: 4px 8px; font-size: 11px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
  .btn-review:hover { background-color: #2563eb; }

  /* Drill Down Button */
  .btn-drill { padding: 4px 8px; font-size: 11px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
  .btn-drill:hover { background-color: #2563eb; }

  /* Full width */
  .full-width { grid-column: 1 / -1; }

  /* =============== Budget Utilization & Fund Tracking styles =============== */
  /* Page header */
  .page-header { margin-bottom: 24px; }
  .page-title { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .page-subtitle { color: #6b7280; font-size: 14px; }

  /* Budget Overview Cards */
  .budget-overview { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 24px; }
  .budget-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); text-align: center; position: relative; overflow: hidden; }
  .budget-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
  .budget-excellent::before { background-color: #10b981; }
  .budget-good::before { background-color: #3b82f6; }
  .budget-warning::before { background-color: #f59e0b; }
  .budget-critical::before { background-color: #ef4444; }
  .budget-icon { font-size: 28px; margin-bottom: 8px; }
  .budget-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .budget-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .budget-change { font-size: 11px; margin-top: 4px; font-weight: 600; }

  /* Heatmap */
  .heatmap-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 16px; }
  .heatmap-cell { aspect-ratio: 1; border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s; padding: 8px; }
  .heatmap-cell:hover { transform: scale(1.05); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
  .heat-excellent { background-color: #10b981; color: white; }
  .heat-good { background-color: #3b82f6; color: white; }
  .heat-fair { background-color: #fbbf24; color: #374151; }
  .heat-warning { background-color: #f59e0b; color: white; }
  .heat-critical { background-color: #ef4444; color: white; }
  .heatmap-dept { font-size: 10px; font-weight: 600; margin-bottom: 4px; }
  .heatmap-percent { font-size: 16px; font-weight: bold; }

  /* Budget Form specifics */
  .budget-page .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-group { margin-bottom: 16px; }
  .form-label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 4px; text-transform: uppercase; }
  .form-input { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: #dc2626; }
  .form-select { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; background-color: white; cursor: pointer; }
  .form-textarea { width: 100%; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; resize: vertical; min-height: 60px; }

  /* Budget Table */
  .budget-table { width: 100%; font-size: 12px; border-collapse: collapse; }
  .budget-table th { text-align: left; padding: 8px; background-color: #f3f4f6; font-weight: 600; color: #374151; text-transform: uppercase; font-size: 11px; border-bottom: 2px solid #e5e7eb; }
  .budget-table td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
  .budget-table tr:hover { background-color: #f9fafb; }

  /* Progress Bar */
  .progress-bar { width: 100%; height: 8px; background-color: #e5e7eb; border-radius: 4px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 4px; transition: width 0.3s; }
  .fill-warning { background-color: #f59e0b; }
  .fill-critical { background-color: #ef4444; }

  /* Process Flow */
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; flex-wrap: wrap; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }

  /* Intervention */
  .intervention-section { background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .intervention-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .intervention-buttons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }

  /* Variance Alert */
  .variance-alert { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .variance-icon { font-size: 20px; color: #dc2626; }
  .variance-content { flex: 1; }
  .variance-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .variance-description { font-size: 12px; color: #7f1d1d; }

  /* Disbursement Widget */
  .disbursement-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; }
  .disbursement-value { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 4px; }
  .disbursement-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  /* AIP Link Badge */
  .aip-badge { display: inline-block; padding: 2px 8px; background-color: #dbeafe; color: #1e40af; border-radius: 4px; font-size: 10px; font-weight: 600; }

  /* Procurement Status */
  .procurement-status { display: flex; align-items: center; gap: 4px; font-size: 11px; }
  .proc-completed { color: #10b981; }
  .proc-ongoing { color: #3b82f6; }
  .proc-pending { color: #f59e0b; }

  /* Fund Pills */
  .fund-pills { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .fund-pill { padding: 4px 8px; background-color: #f3f4f6; border-radius: 12px; font-size: 11px; font-weight: 600; cursor: pointer; }
  .pill-gf { background-color: #dbeafe; color: #1e40af; }
  .pill-ira { background-color: #d1fae5; color: #065f46; }
  .pill-sef { background-color: #fef3c7; color: #92400e; }
  .pill-trust { background-color: #fce7f3; color: #9f1239; }

  /* =============== Citizen Feedback & Public Sentiment styles =============== */
  .citizen-page .grid { grid-template-columns: 2fr 1fr; }
  .citizen-page .stats-grid { grid-template-columns: repeat(6, 1fr); }
  .citizen-page .stat-card { text-align: center; padding: 16px; }
  .citizen-page .stat-card::before { content: none; }
  .stat-icon { font-size: 24px; margin-bottom: 8px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .stat-change { font-size: 11px; margin-top: 4px; }
  .change-up { color: #10b981; }
  .change-down { color: #ef4444; }

  /* Sentiment meter */
  .sentiment-meter { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: linear-gradient(90deg, #ef4444 0%, #f59e0b 25%, #fbbf24 50%, #84cc16 75%, #10b981 100%); border-radius: 8px; margin-bottom: 20px; position: relative; }
  .sentiment-indicator { position: absolute; top: -10px; width: 4px; height: 40px; background-color: #374151; border-radius: 2px; transition: left 0.3s; }
  .sentiment-labels { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.3); }

  /* Heatmap */
  .heatmap-container { height: 400px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
  .heatmap-zone { position: absolute; border-radius: 50%; opacity: 0.7; animation: heatPulse 3s infinite; }
  @keyframes heatPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
  .heat-high { background: radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(239,68,68,0.2) 70%); }
  .heat-medium { background: radial-gradient(circle, rgba(245,158,11,0.8) 0%, rgba(245,158,11,0.2) 70%); }
  .heat-low { background: radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.2) 70%); }

  /* Issue list */
  .issue-list { max-height: 300px; overflow-y: auto; }
  .issue-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background-color 0.2s; }
  .issue-item:hover { background-color: #f9fafb; }
  .issue-info { flex: 1; }
  .issue-title { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px; }
  .issue-details { font-size: 11px; color: #6b7280; display: flex; gap: 12px; }
  .issue-count { padding: 4px 8px; background-color: #f3f4f6; border-radius: 12px; font-size: 12px; font-weight: 600; }
  .priority-high { background-color: #fee2e2; color: #991b1b; }
  .priority-medium { background-color: #fef3c7; color: #92400e; }
  .priority-low { background-color: #dbeafe; color: #1e40af; }

  /* Channels */
  .channel-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px; }
  .channel-card { padding: 12px; background-color: #f9fafb; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
  .channel-card:hover { background-color: #f3f4f6; transform: translateY(-2px); }
  .channel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .channel-name { font-size: 12px; font-weight: 600; color: #374151; }
  .channel-count { font-size: 16px; font-weight: bold; color: #dc2626; }
  .channel-stats { font-size: 11px; color: #6b7280; }

  /* Response widget */
  .response-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; }
  .response-time { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 4px; }
  .response-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  /* Trending */
  .trending-list { display: grid; gap: 8px; }
  .trending-item { display: flex; align-items: center; gap: 8px; padding: 8px; background-color: #f9fafb; border-radius: 4px; font-size: 12px; cursor: pointer; }
  .trending-rank { width: 24px; height: 24px; background-color: #dc2626; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; }
  .trending-topic { flex: 1; font-weight: 600; color: #374151; }
  .trending-count { font-size: 11px; color: #6b7280; }

  /* Social feed */
  .social-feed { max-height: 300px; overflow-y: auto; }
  .social-post { padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 12px; cursor: pointer; }
  .social-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .social-platform { padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase; }
  .platform-fb { background-color: #dbeafe; color: #1e40af; }
  .platform-twitter { background-color: #e0f2fe; color: #0369a1; }
  .social-content { color: #374151; margin-bottom: 4px; }
  .social-meta { font-size: 11px; color: #6b7280; }

  /* FOI */
  .foi-status { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; }
  .foi-stat { text-align: center; padding: 8px; background-color: #f3f4f6; border-radius: 4px; cursor: pointer; }
  .foi-number { font-size: 18px; font-weight: bold; color: #374151; }
  .foi-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }

  /* Mayor action */
  .mayor-action { background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .mayor-action-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .mayor-action-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

  /* Service Matrix */
  .service-matrix { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .service-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; text-align: center; border: 1px solid #e5e7eb; }
  .service-icon { font-size: 24px; margin-bottom: 4px; }
  .service-name { font-size: 11px; font-weight: 600; color: #374151; margin-bottom: 4px; }
  .service-count { font-size: 18px; font-weight: bold; color: #374151; }

  /* Alert Box */
  .alert-box { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .alert-icon { font-size: 20px; color: #dc2626; }
  .alert-content { flex: 1; }
  .alert-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .alert-description { font-size: 12px; color: #7f1d1d; }

  /* Peace & Order Grid */
  .po-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px; }
  .po-card { background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; text-align: center; }
  .po-value { font-size: 20px; font-weight: bold; margin-bottom: 4px; }
  .po-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }
  .po-trend { font-size: 11px; margin-top: 4px; }
  .trend-up { color: #ef4444; }
  .trend-down { color: #10b981; }

  /* Tab Navigation */
  .tab-nav { display: flex; gap: 8px; margin-bottom: 16px; border-bottom: 2px solid #e5e7eb; }
  .tab-item { padding: 10px 16px; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.2s; margin-bottom: -2px; }
  .tab-item:hover { color: #374151; }
  .tab-item.active { color: #dc2626; border-bottom-color: #dc2626; }

  /* Quick Actions */
  .quick-actions { display: flex; gap: 8px; }
  .action-btn { padding: 6px 12px; font-size: 11px; background-color: #f3f4f6; color: #374151; border: 1px solid #e5e7eb; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
  .action-btn:hover { background-color: #e5e7eb; }

  /* Resource Allocation */
  .allocation-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px; }
  .allocation-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; }
  .allocation-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .allocation-title { font-size: 12px; font-weight: 600; color: #374151; }
  .allocation-amount { font-size: 14px; font-weight: bold; color: #10b981; }
  .allocation-bar { height: 6px; background-color: #e5e7eb; border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
  .allocation-fill { height: 100%; background-color: #10b981; }
  .allocation-detail { font-size: 10px; color: #6b7280; }

  /* =============== Compliance & Audit Flags styles =============== */
  .compliance-page .grid { grid-template-columns: 2fr 1fr; }
  .risk-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
  .risk-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: relative; overflow: hidden; }
  .risk-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
  .risk-critical::before { background-color: #ef4444; }
  .risk-high::before { background-color: #f59e0b; }
  .risk-medium::before { background-color: #3b82f6; }
  .risk-low::before { background-color: #10b981; }
  .risk-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .risk-title { font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600; }
  .risk-icon { font-size: 20px; }
  .risk-value { font-size: 32px; font-weight: bold; margin-bottom: 4px; }
  .risk-subtitle { font-size: 12px; color: #6b7280; }

  .compliance-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .compliance-table th { background-color: #f9fafb; padding: 10px 12px; text-align: left; font-weight: 600; color: #374151; border-bottom: 2px solid #e5e7eb; font-size: 11px; text-transform: uppercase; }
  .compliance-table td { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #374151; }
  .compliance-table tr:hover { background-color: #f9fafb; }

  .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
  .badge-critical { background-color: #fee2e2; color: #991b1b; }
  .badge-warning { background-color: #fef3c7; color: #92400e; }
  .badge-pending { background-color: #dbeafe; color: #1e40af; }
  .badge-compliant { background-color: #d1fae5; color: #065f46; }

  .priority-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; }
  .priority-critical { background-color: #ef4444; }
  .priority-high { background-color: #f59e0b; }
  .priority-medium { background-color: #3b82f6; }
  .priority-low { background-color: #10b981; }

  .alert-banner { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .alert-icon { font-size: 20px; color: #dc2626; }
  .alert-content { flex: 1; }
  .alert-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .alert-description { font-size: 12px; color: #7f1d1d; }

  .score-container { text-align: center; padding: 20px; }
  .score-circle { width: 120px; height: 120px; margin: 0 auto 12px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; color: white; position: relative; }
  .score-excellent { background-color: #10b981; }
  .score-good { background-color: #3b82f6; }
  .score-fair { background-color: #f59e0b; }
  .score-poor { background-color: #ef4444; }
  .score-label { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 4px; }
  .score-subtitle { font-size: 12px; color: #6b7280; }

  .timeline-item { display: flex; gap: 12px; margin-bottom: 16px; position: relative; }
  .timeline-marker { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; color: white; flex-shrink: 0; }
  .timeline-content { flex: 1; padding-bottom: 16px; border-left: 2px solid #e5e7eb; padding-left: 12px; margin-left: -18px; }
  .timeline-title { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 2px; }
  .timeline-description { font-size: 12px; color: #6b7280; }
  .timeline-date { font-size: 11px; color: #9ca3af; margin-top: 4px; }

  .actions-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px; }
  .action-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
  .action-card:hover { background-color: #f3f4f6; border-color: #dc2626; }
  .action-icon { font-size: 24px; margin-bottom: 4px; }
  .action-label { font-size: 12px; font-weight: 600; color: #374151; }

  .procurement-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; margin-bottom: 12px; }
  .procurement-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .procurement-title { font-size: 13px; font-weight: 600; color: #374151; }
  .procurement-amount { font-size: 13px; font-weight: bold; color: #10b981; }
  .procurement-details { font-size: 11px; color: #6b7280; line-height: 1.4; }

  /* =============== Department Performance Scorecards styles =============== */
  .department-page .grid { grid-template-columns: 3fr 1fr; }
  .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
  .summary-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); text-align: center; }
  .summary-icon { font-size: 28px; margin-bottom: 8px; }
  .summary-value { font-size: 32px; font-weight: bold; margin-bottom: 4px; }
  .summary-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .rating-excellent { color: #10b981; }
  .rating-good { color: #3b82f6; }
  .rating-fair { color: #f59e0b; }
  .rating-poor { color: #ef4444; }

  .scorecard-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .scorecard { background-color: white; border-radius: 8px; padding: 16px; border: 2px solid transparent; transition: all 0.2s; cursor: pointer; position: relative; }
  .scorecard:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
  .scorecard-excellent { border-color: #10b981; }
  .scorecard-good { border-color: #3b82f6; }
  .scorecard-fair { border-color: #f59e0b; }
  .scorecard-poor { border-color: #ef4444; }
  .scorecard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .department-name { font-size: 13px; font-weight: 600; color: #374151; }
  .performance-badge { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; color: white; }
  .badge-excellent { background-color: #10b981; }
  .badge-good { background-color: #3b82f6; }
  .badge-fair { background-color: #f59e0b; }
  .badge-poor { background-color: #ef4444; }

  .metrics-grid { display: grid; gap: 8px; font-size: 11px; }
  .metric-row { display: flex; justify-content: space-between; align-items: center; }
  .metric-label { color: #6b7280; }
  .metric-value { font-weight: 600; color: #374151; }

  /* Department page progress bar override */
  .department-page .progress-bar { width: 100%; height: 6px; background-color: #e5e7eb; border-radius: 3px; overflow: hidden; margin-top: 4px; }
  .department-page .progress-fill { height: 100%; border-radius: 3px; transition: width 0.3s; }

  .performance-table { width: 100%; font-size: 12px; }
  .performance-table th { text-align: left; padding: 8px; background-color: #f3f4f6; font-weight: 600; color: #374151; text-transform: uppercase; font-size: 11px; }
  .performance-table td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
  .performance-table tr:hover { background-color: #f9fafb; }

  .rating-stars { display: inline-flex; gap: 2px; cursor: pointer; }
  .star { color: #fbbf24; }
  .star-empty { color: #e5e7eb; }

  .satisfaction-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; }
  .satisfaction-score { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 8px; }
  .satisfaction-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  .chart-container { height: 300px; background-color: #f9fafb; border-radius: 6px; padding: 16px; margin-top: 12px; }

  /* =============== Emergency & Disaster Alert Console styles =============== */
  .emergency-page .grid { grid-template-columns: 2fr 1fr; gap: 24px; }
  .alert-badge { background-color: #ef4444; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; }
  .btn-emergency { background-color: #ef4444; color: white; border: none; border-radius: 4px; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: background-color 0.2s; }
  .btn-emergency:hover { background-color: #dc2626; }

  .critical-alert { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .critical-icon { font-size: 20px; color: #dc2626; }
  .critical-content { flex: 1; }
  .critical-title { font-weight: 700; color: #991b1b; margin-bottom: 2px; }
  .critical-description { font-size: 12px; color: #7f1d1d; }

  .alert-status-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 16px; }
  .status-card { background-color: white; border-radius: 6px; padding: 12px; text-align: center; border: 1px solid #e5e7eb; }
  .status-icon { font-size: 22px; margin-bottom: 4px; }
  .status-value { font-size: 20px; font-weight: 800; color: #111827; }
  .status-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }
  .status-critical { background-color: #fee2e2; border-color: #fecaca; }
  .status-warning { background-color: #fef3c7; border-color: #fde68a; }
  .status-monitoring { background-color: #e0f2fe; border-color: #bae6fd; }
  .status-safe { background-color: #d1fae5; border-color: #a7f3d0; }

  .alert-map { height: 320px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; margin-bottom: 8px; background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 24px 24px; }
  .alert-zone { position: absolute; border-radius: 50%; opacity: 0.75; animation: heatPulse 3s infinite; }
  .zone-critical { background: radial-gradient(circle, rgba(239,68,68,0.85) 0%, rgba(239,68,68,0.25) 70%); }
  .zone-warning { background: radial-gradient(circle, rgba(245,158,11,0.85) 0%, rgba(245,158,11,0.25) 70%); }
  .zone-monitoring { background: radial-gradient(circle, rgba(59,130,246,0.85) 0%, rgba(59,130,246,0.25) 70%); }
  .alert-icon-map { position: absolute; transform: translate(-50%, -50%); font-size: 18px; cursor: pointer; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6)); }
  .icon-critical { color: #fecaca; }
  .icon-warning { color: #fde68a; }
  .icon-monitoring { color: #bae6fd; }

  .weather-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 12px; cursor: pointer; }
  .weather-header { display: flex; justify-content: space-between; align-items: center; }
  .weather-temp { font-size: 28px; font-weight: 800; color: #065f46; }
  .weather-condition { font-size: 12px; color: #065f46; text-transform: uppercase; letter-spacing: 0.02em; }

  .command-center { background-color: #fff7ed; border: 1px solid #fed7aa; border-radius: 6px; padding: 12px; margin-top: 12px; }
  .command-header { font-size: 12px; font-weight: 700; color: #92400e; text-transform: uppercase; margin-bottom: 8px; }
  .command-buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }

  .resource-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .resource-item { background-color: white; border-radius: 6px; padding: 12px; border: 1px solid #e5e7eb; text-align: center; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
  .resource-item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .resource-number { font-size: 20px; font-weight: 800; color: #374151; }
  .resource-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }

  .alert-list { max-height: 320px; overflow-y: auto; }
  .alert-item { padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer; }
  .alert-item:hover { background-color: #f9fafb; }
  .alert-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .alert-title { font-size: 13px; font-weight: 700; color: #374151; }
  .alert-priority { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; }
  .priority-critical { background-color: #fee2e2; color: #991b1b; }
  .priority-high { background-color: #fef3c7; color: #92400e; }
  .priority-medium { background-color: #dbeafe; color: #1e40af; }
  .priority-low { background-color: #d1fae5; color: #065f46; }
  .alert-details { display: flex; gap: 12px; flex-wrap: wrap; font-size: 11px; color: #6b7280; }

  .response-teams { display: grid; grid-template-columns: 1fr; gap: 8px; }
  .team-card { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 6px; }
  .team-info { display: flex; align-items: center; gap: 8px; }
  .team-name { font-size: 12px; font-weight: 600; color: #374151; }
  .team-status { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; }
  .status-deployed { background-color: #fee2e2; color: #991b1b; }
  .status-ready { background-color: #d1fae5; color: #065f46; }
  .status-standby { background-color: #e0f2fe; color: #0369a1; }

  .timeline { display: grid; gap: 8px; }
  .timeline-item { display: grid; grid-template-columns: 56px 1fr; gap: 8px; align-items: start; padding: 8px; border: 1px solid #e5e7eb; border-radius: 6px; }
  .timeline-item.critical { border-color: #fecaca; background-color: #fee2e2; }
  .timeline-time { font-size: 12px; font-weight: 700; color: #374151; text-align: center; }
  .timeline-content { font-size: 12px; color: #374151; }

  /* === POLICY REVIEW & LEGISLATIVE PANEL (from mayor_policy_review_legislative_style.ts) === */
  .mayor-policy-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    margin: 6px 8px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.05s, color 0.2s, box-shadow 0.2s;
    font-size: 12px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 10px;
    text-decoration: none;
  }
  .sidebar-item .sidebar-icon {
    opacity: 0.9;
    display: inline-flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .sidebar-item:link,
  .sidebar-item:visited {
    color: inherit;
    text-decoration: none;
  }
  .sidebar-item:hover {
    background-color: #f3f4f6;
    transform: translateX(2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  }
  .sidebar-item.active {
    background-color: #dc2626;
    color: white;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(220, 38, 38, 0.25);
  }
  .gap-alert {
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .gap-icon {
    font-size: 20px;
    color: #dc2626;
  }
  .gap-content { flex: 1; }
  .gap-title {
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 2px;
  }
  .gap-description {
    font-size: 12px;
    color: #7f1d1d;
  }
  .stat-compliant::before { background-color: #10b981; }
  .stat-partial::before { background-color: #f59e0b; }
  .stat-review::before { background-color: #3b82f6; }
  .stat-gap::before { background-color: #ef4444; }
  .policy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  .policy-card {
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .policy-card:hover {
    border-color: #dc2626;
    background-color: #fef2f2;
  }
  .policy-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .policy-title {
    font-size: 12px;
    font-weight: 600;
    color: #374151;
  }
  .policy-status {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
  }
  .status-active { background-color: #d1fae5; color: #065f46; }
  .status-review { background-color: #dbeafe; color: #1e40af; }
  .status-amend { background-color: #fef3c7; color: #92400e; }
  .status-expired { background-color: #fee2e2; color: #991b1b; }
  .policy-details {
    font-size: 11px;
    color: #6b7280;
  }
  .compliance-meter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: linear-gradient(90deg, #ef4444 0%, #f59e0b 33%, #fbbf24 66%, #10b981 100%);
    border-radius: 8px;
    margin-bottom: 16px;
    position: relative;
  }
  .compliance-indicator {
    position: absolute;
    top: -10px;
    width: 4px;
    height: 35px;
    background-color: #374151;
    border-radius: 2px;
    transition: left 0.3s;
  }
  .ordinance-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .ordinance-item {
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .ordinance-item:hover {
    background-color: #f9fafb;
  }
  .ordinance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  .ordinance-title {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
  }
  .compliance-badge {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
  }
  .compliance-full { background-color: #d1fae5; color: #065f46; }
  .compliance-partial { background-color: #fef3c7; color: #92400e; }
  .compliance-low { background-color: #fee2e2; color: #991b1b; }
  .ordinance-details {
    font-size: 11px;
    color: #6b7280;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .mayor-action {
    background-color: #fef2f2;
    border: 2px solid #dc2626;
    border-radius: 6px;
    padding: 12px;
    margin-top: 16px;
  }
  .mayor-action-header {
    font-size: 12px;
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .mayor-action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 12px;
  }
  .impact-item {
    text-align: center;
    padding: 8px;
    background-color: #f3f4f6;
    border-radius: 4px;
    cursor: pointer;
  }
  .impact-score {
    font-size: 18px;
    font-weight: bold;
    color: #374151;
  }
  .impact-label {
    font-size: 10px;
    color: #6b7280;
    text-transform: uppercase;
  }
  .dept-compliance {
    display: grid;
    gap: 8px;
  }
  .dept-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #f9fafb;
    border-radius: 4px;
    cursor: pointer;
  }
  .dept-name {
    font-size: 12px;
    font-weight: 600;
    color: #374151;
  }
  .dept-score {
    font-size: 12px;
    font-weight: 600;
  }
  .score-high { color: #10b981; }
  .score-medium { color: #f59e0b; }
  .score-low { color: #ef4444; }
  .timeline {
    position: relative;
    padding-left: 20px;
  }
  .timeline-item {
    position: relative;
    padding-bottom: 20px;
    border-left: 2px solid #e5e7eb;
    padding-left: 20px;
    cursor: pointer;
  }
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6b7280;
  }
  .timeline-item.completed::before { background-color: #10b981; }
  .timeline-item.current::before { background-color: #3b82f6; animation: pulse 2s infinite; }
  .timeline-date {
    font-size: 11px;
    color: #6b7280;
    margin-bottom: 4px;
  }
  .timeline-content {
    font-size: 12px;
    color: #374151;
  }
  /* Responsive overrides for policy panel */
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
    .search-container { width: auto; }
    .search-input { width: 200px; }
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
  /* === EMERGENCY & DISASTER PANEL (from mayor_emergency_and_disaster_style.ts) === */
  .mayor-emergency-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }
  .office-title { font-weight: 500; }
  .alert-badge {
    background-color: #ef4444;
    color: white;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    animation: blink 1s infinite;
  }
  .alert-badge.warning { background-color: #10b981; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
  .status-icon { margin-right: 4px; font-size: 12px; line-height: 1; }
  .critical-alert {
    background-color: #fee2e2;
    border: 2px solid #ef4444;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .critical-icon {
    font-size: 24px;
    color: #ef4444;
    animation: blink 1s infinite;
  }
  .critical-content { flex: 1; }
  .critical-title {
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 2px;
    font-size: 14px;
  }
  .critical-description {
    font-size: 12px;
    color: #7f1d1d;
  }
  .alert-status-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .status-card {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .status-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }
  .status-critical::before { background-color: #ef4444; animation: pulse 1.5s infinite; }
  .status-warning::before { background-color: #f59e0b; }
  .status-monitoring::before { background-color: #3b82f6; }
  .status-safe::before { background-color: #10b981; }
  .alert-map {
    height: 450px;
    background-color: #1f2937;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .alert-zone {
    position: absolute;
    border-radius: 50%;
    animation: alertPulse 2s infinite;
  }
  @keyframes alertPulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
  .zone-critical { background: radial-gradient(circle, rgba(239,68,68,0.9) 0%, rgba(239,68,68,0.2) 70%); border: 2px solid #ef4444; }
  .zone-warning { background: radial-gradient(circle, rgba(245,158,11,0.9) 0%, rgba(245,158,11,0.2) 70%); border: 2px solid #f59e0b; }
  .zone-monitoring { background: radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.2) 70%); border: 2px solid #3b82f6; }
  .alert-icon-map {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .icon-critical { background-color: #ef4444; color: white; animation: blink 1s infinite; }
  .icon-warning { background-color: #f59e0b; color: white; }
  .icon-monitoring { background-color: #3b82f6; color: white; }
  .alert-list { max-height: 400px; overflow-y: auto; }
  .alert-item {
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .alert-item:hover { background-color: #f9fafb; }
  .alert-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  .alert-title {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
  }
  .alert-priority {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .priority-critical { background-color: #fee2e2; color: #991b1b; }
  .priority-high { background-color: #fef3c7; color: #92400e; }
  .priority-medium { background-color: #dbeafe; color: #1e40af; }
  .priority-low { background-color: #d1fae5; color: #065f46; }
  .alert-details {
    font-size: 11px;
    color: #6b7280;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .command-center {
    background-color: #fee2e2;
    border: 2px solid #ef4444;
    border-radius: 6px;
    padding: 12px;
    margin-top: 16px;
  }
  .command-header {
    font-size: 12px;
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .command-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .weather-widget {
    padding: 12px;
    background-color: #dbeafe;
    border: 1px solid #93c5fd;
    border-radius: 6px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .weather-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .weather-temp {
    font-size: 24px;
    font-weight: bold;
    color: #1e40af;
  }
  .weather-condition {
    font-size: 12px;
    color: #1e3a8a;
    text-transform: uppercase;
  }
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 12px;
  }
  .resource-item {
    text-align: center;
    padding: 8px;
    background-color: #f3f4f6;
    border-radius: 4px;
    cursor: pointer;
  }
  .resource-number {
    font-size: 18px;
    font-weight: bold;
    color: #374151;
  }
  .resource-label {
    font-size: 10px;
    color: #6b7280;
    text-transform: uppercase;
  }
  .timeline {
    max-height: 300px;
    overflow-y: auto;
  }
  .timeline-item {
    display: flex;
    gap: 12px;
    padding: 8px;
    border-left: 2px solid #e5e7eb;
    margin-left: 8px;
    position: relative;
    cursor: pointer;
  }
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 12px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6b7280;
  }
  .timeline-item.critical::before { background-color: #ef4444; }
  .timeline-time {
    font-size: 11px;
    color: #6b7280;
    min-width: 50px;
  }
  .timeline-content {
    font-size: 12px;
    color: #374151;
  }
  /* Responsive overrides for emergency panel */
  @media (max-width: 1280px) {
    .alert-status-grid { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 1024px) {
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .grid { grid-template-columns: 1fr; }
    .alert-status-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .page-header { flex-direction: column; align-items: flex-start; gap: 8px; }
    .search-container { width: auto; }
    .search-input { width: 200px; }
    .header { padding: 10px 12px; }
    .logo { padding: 6px 10px; }
    .alert-status-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; }
    .alert-map { height: 320px; }
    .btn { padding: 8px 14px; }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .alert-status-grid { grid-template-columns: 1fr; }
    .btn { padding: 7px 12px; font-size: 13px; }
  }
  /* === EXECUTIVE ORDERS & MEMO GENERATOR PANEL (from executive_orders_and_memo_generator_style.ts) === */
  .exec-orders-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .stat-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    text-align: center;
  }
  .stat-icon { font-size: 28px; margin-bottom: 8px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .process-flow {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background-color: #f9fafb;
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 12px;
    flex-wrap: wrap;
  }
  .flow-step {
    padding: 6px 12px;
    background-color: white;
    border-radius: 4px;
    font-weight: 600;
    white-space: nowrap;
  }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }
  .template-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  .template-card {
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
  }
  .template-card:hover {
    border-color: #dc2626;
    background-color: #fef2f2;
  }
  .template-card.selected {
    border-color: #dc2626;
    background-color: #fee2e2;
  }
  .template-icon { font-size: 24px; margin-bottom: 4px; }
  .template-name { font-size: 12px; font-weight: 600; color: #374151; }
  .document-list { max-height: 400px; overflow-y: auto; }
  .document-item {
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .document-item:hover { background-color: #f9fafb; }
  .document-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  .document-title { font-size: 13px; font-weight: 600; color: #374151; }
  .document-status {
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .status-draft { background-color: #e5e7eb; color: #374151; }
  .status-review { background-color: #fef3c7; color: #92400e; }
  .status-approved { background-color: #d1fae5; color: #065f46; }
  .status-issued { background-color: #dbeafe; color: #1e40af; }
  .document-details {
    font-size: 11px;
    color: #6b7280;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .approval-section {
    background-color: #fef2f2;
    border: 2px solid #dc2626;
    border-radius: 6px;
    padding: 12px;
    margin-top: 16px;
  }
  .approval-header {
    font-size: 12px;
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .approval-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .recipient-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .recipient-tag {
    padding: 4px 8px;
    background-color: #e5e7eb;
    border-radius: 12px;
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .tag-remove { cursor: pointer; color: #6b7280; }
  .preview-container {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 16px;
    margin-top: 16px;
    font-family: 'Times New Roman', serif;
    line-height: 1.6;
  }
  .preview-header { text-align: center; margin-bottom: 20px; }
  .preview-seal { font-size: 32px; margin-bottom: 8px; }
  .preview-title { font-size: 18px; font-weight: bold; margin-bottom: 4px; }
  .preview-subtitle { font-size: 14px; color: #6b7280; }
  .preview-content { font-size: 14px; text-align: justify; white-space: pre-wrap; }
  .signature-section { margin-top: 20px; text-align: center; }
  .signature-line { width: 200px; border-bottom: 2px solid #374151; margin: 0 auto 4px; }
  .signature-name { font-weight: bold; font-size: 14px; }
  .signature-title { font-size: 12px; color: #6b7280; }
  .quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 16px;
  }
  .quick-action {
    padding: 8px;
    background-color: #f3f4f6;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 12px;
  }
  .quick-action:hover { background-color: #e5e7eb; }
  .archive-widget {
    padding: 12px;
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  .archive-count {
    font-size: 24px;
    font-weight: bold;
    color: #10b981;
    text-align: center;
    margin-bottom: 4px;
  }
  .archive-label {
    font-size: 11px;
    color: #065f46;
    text-align: center;
    text-transform: uppercase;
  }
  /* Responsive overrides for executive orders panel */
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
  /* === EXECUTIVE OVERVIEW LANDING PANEL (from executive_overview_landing.ts) === */
  .exec-overview-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .kpi-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .kpi-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
  }
  .kpi-green::before { background-color: #10b981; }
  .kpi-blue::before { background-color: #3b82f6; }
  .kpi-yellow::before { background-color: #f59e0b; }
  .kpi-red::before { background-color: #ef4444; }
  .kpi-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .kpi-title { font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600; }
  .kpi-icon { font-size: 20px; }
  .kpi-value { font-size: 28px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .kpi-trend { font-size: 12px; display: flex; align-items: center; gap: 4px; }
  .trend-up { color: #10b981; }
  .trend-down { color: #ef4444; }
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
  .map-container {
    height: 500px;
    background-color: #1f2937;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .layer-controls {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(255,255,255,0.95);
    border-radius: 6px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 20;
  }
  .layer-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 12px; cursor: pointer; }
  .layer-checkbox { cursor: pointer; }
  .map-overlay { position: absolute; pointer-events: none; }
  .infra-overlay { background-color: rgba(59, 130, 246, 0.3); border: 2px solid #3b82f6; }
  .hazard-overlay { background-color: rgba(239, 68, 68, 0.3); border: 2px solid #ef4444; }
  .project-marker {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    pointer-events: all;
    z-index: 15;
  }
  .project-marker:hover { transform: scale(1.1); box-shadow: 0 4px 8px rgba(0,0,0,0.3); }
  .project-tooltip {
    position: absolute;
    background: #374151;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    pointer-events: none;
    z-index: 1000;
    white-space: nowrap;
  }
  .heat-zone { position: absolute; border-radius: 4px; opacity: 0.7; }
  .av-high { background-color: #22c55e; }
  .av-medium { background-color: #fbbf24; }
  .av-low { background-color: #ef4444; }
  .info-box {
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 16px;
    font-size: 13px;
    color: #991b1b;
  }
  .executive-summary {
    background-color: #f9fafb;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .summary-header { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px; }
  .summary-item { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; }
  .summary-label { color: #6b7280; }
  .summary-value { font-weight: 600; color: #374151; }
  .charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  .chart-card { background-color: white; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .chart-placeholder { height: 200px; background-color: #f3f4f6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #6b7280; font-size: 14px; }
  .quick-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
  .quick-stat { text-align: center; padding: 8px; background-color: #f3f4f6; border-radius: 4px; }
  .quick-stat-value { font-size: 18px; font-weight: bold; color: #374151; }
  .quick-stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .decision-matrix { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px; }
  .decision-card {
    background-color: #f9fafb;
    border-radius: 6px;
    padding: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
  }
  .decision-card:hover { background-color: #f3f4f6; border-color: #dc2626; }
  .decision-icon { font-size: 24px; margin-bottom: 4px; }
  .decision-label { font-size: 12px; font-weight: 600; color: #374151; }
  .priority-list { list-style: none; padding: 0; }
  .priority-item {
    padding: 12px;
    margin-bottom: 8px;
    background-color: #f9fafb;
    border-radius: 6px;
    border-left: 3px solid;
    font-size: 13px;
  }
  .priority-critical { border-left-color: #ef4444; }
  .priority-high { border-left-color: #f59e0b; }
  .priority-medium { border-left-color: #3b82f6; }
  .priority-label { font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px; }
  .full-width { grid-column: 1 / -1; }
  /* Responsive overrides for executive overview panel */
  @media (max-width: 1280px) {
    .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 1024px) {
    .grid { grid-template-columns: 1fr; }
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .kpi-grid { grid-template-columns: repeat(2, 1fr); }
    .charts-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .search-input { width: 100%; }
    .quick-stats { grid-template-columns: 1fr; }
    .decision-matrix { grid-template-columns: 1fr; }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .kpi-grid { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; font-size: 13px; }
  }
  /* === PROJECT MONITORING GEOTRACKER PANEL (from project_monitoring_geotracker_style.ts) === */
  .project-monitoring-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }
  .filter-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
  .filter-tag { padding: 4px 12px; background-color: #f3f4f6; border-radius: 16px; font-size: 12px; cursor: pointer; transition: all 0.2s; }
  .filter-tag.active { background-color: #dc2626; color: white; }
  .map-container {
    height: 600px;
    background-color: #1f2937;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .map-controls {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(255,255,255,0.95);
    border-radius: 6px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 20;
  }
  .control-group { margin-bottom: 12px; }
  .control-label { font-size: 11px; font-weight: 600; color: #374151; margin-bottom: 6px; text-transform: uppercase; }
  .layer-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 12px; cursor: pointer; }
  .layer-checkbox { cursor: pointer; }
  .project-marker {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    pointer-events: all;
    z-index: 15;
    transition: transform 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .project-marker:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  .marker-ongoing { background-color: #3b82f6; color: white; }
  .marker-completed { background-color: #10b981; color: white; }
  .marker-delayed { background-color: #ef4444; color: white; animation: blink 1.5s infinite; }
  .marker-planned { background-color: #6b7280; color: white; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
  .project-cluster {
    position: absolute;
    background-color: rgba(59,130,246,0.2);
    border: 2px solid #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #3b82f6;
  }
  .legend { display: flex; gap: 16px; padding: 8px; background-color: #f9fafb; border-radius: 4px; font-size: 11px; }
  .legend-item { display: flex; align-items: center; gap: 6px; }
  .legend-color { width: 12px; height: 12px; border-radius: 50%; }
  .timeline-container { margin-top: 24px; }
  .timeline-header { display: flex; justify-content: space-between; margin-bottom: 12px; padding: 0 10px; font-size: 11px; color: #6b7280; }
  .timeline-bar { position: relative; height: 30px; background-color: #f3f4f6; border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
  .timeline-progress { position: absolute; height: 100%; border-radius: 4px; display: flex; align-items: center; padding: 0 8px; font-size: 11px; font-weight: 600; color: white; }
  .photo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 12px; }
  .photo-item { aspect-ratio: 16/9; background-color: #e5e7eb; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #6b7280; cursor: pointer; transition: all 0.2s; }
  .photo-item:hover { background-color: #d1d5db; }
  /* Responsive overrides for project monitoring geotracker panel */
  @media (max-width: 1280px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
    .map-controls { padding: 8px; }
    .control-group { margin-bottom: 8px; }
  }
  @media (max-width: 1024px) {
    .grid { grid-template-columns: 1fr; }
    .main-content { padding: 16px; }
    .card { padding: 16px; }
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
    .map-container { height: 500px; }
    .map-controls { position: relative; top: auto; left: auto; margin-bottom: 12px; }
    .legend { flex-wrap: wrap; gap: 12px; }
    .filter-tags { gap: 6px; }
    .filter-tag { padding: 3px 10px; font-size: 11px; }
  }
  @media (max-width: 768px) {
    .container { flex-direction: column; }
    .sidebar { width: 100%; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
    .search-input { width: 100%; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; }
    .map-container { height: 450px; }
    .project-marker { width: 32px; height: 32px; font-size: 14px; }
    .project-cluster { width: 60px !important; height: 60px !important; }
    .card-header { flex-direction: column; gap: 12px; align-items: flex-start; }
    .process-flow { flex-wrap: wrap; gap: 6px; }
    .flow-step { font-size: 11px; padding: 4px 8px; }
    .timeline-header { font-size: 10px; }
    .photo-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .stats-grid { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; font-size: 13px; }
    .map-container { height: 420px; }
    .project-marker { width: 28px; height: 28px; font-size: 12px; }
    .project-cluster { width: 50px !important; height: 50px !important; }
    .legend { padding: 6px; font-size: 10px; }
    .legend-item { gap: 4px; }
    .legend-color { width: 10px; height: 10px; }
    .form-label { font-size: 11px; }
    .form-input, .form-select, .form-textarea { font-size: 13px; padding: 6px 10px; }
    .card-title { font-size: 12px; }
    .stat-icon { font-size: 20px; }
    .stat-value { font-size: 20px; }
    .stat-label { font-size: 10px; }
    .approval-actions { grid-template-columns: 1fr !important; }
    .timeline-progress { font-size: 10px; padding: 0 6px; }
  }
`;

export default GlobalStyleMayor;
