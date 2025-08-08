export const executiveOverviewLandingCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .exec-overview-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }

  /* Header */
  .header { background-color: #374151; color: white; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; }
  .header-right { display: flex; align-items: center; gap: 16px; font-size: 14px; }
  .logo { background-color: #dc2626; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; display: flex; align-items: center; gap: 8px; }
  .search-container { position: relative; }
  .search-input { background-color: #4b5563; color: white; padding: 8px 12px 8px 40px; border: none; border-radius: 4px; width: 300px; outline: none; }
  .search-input::placeholder { color: #9ca3af; }
  .search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; opacity: 0.6; }
  .status-badge { background-color: #10b981; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }

  /* Layout */
  .container { display: flex; min-height: calc(100vh - 56px); }
  .sidebar { width: 320px; background-color: white; box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1); }
  .nav-item, .sidebar-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; transition: background-color 0.2s; font-size: 12px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .nav-item:hover, .sidebar-item:hover { background-color: #f3f4f6; }
  .nav-item.active, .sidebar-item.active { background-color: #dc2626; color: white; font-weight: 600; }

  /* Main */
  .main-content { flex: 1; padding: 24px; }
  .page-header { margin-bottom: 24px; }
  .page-title { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .page-subtitle { color: #6b7280; font-size: 14px; }

  /* KPI Grid */
  .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
  .kpi-card { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden; cursor: pointer; }
  .kpi-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; }
  .kpi-green::before { background-color: #10b981; }
  .kpi-blue::before { background-color: #3b82f6; }
  .kpi-yellow::before { background-color: #f59e0b; }
  .kpi-red::before { background-color: #ef4444; }
  .kpi-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .kpi-title { font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600; }
  .kpi-icon { font-size: 20px; }
  .kpi-value { font-size: 28px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .kpi-trend { font-size: 12px; display: flex; align-items: center; gap: 4px; }
  .trend-up { color: #10b981; }
  .trend-down { color: #ef4444; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Map */
  .map-container { height: 500px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
  .layer-controls { position: absolute; top: 10px; left: 10px; background-color: rgba(255,255,255,0.95); border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 20; }
  .layer-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 12px; cursor: pointer; }
  .layer-checkbox { cursor: pointer; }
  .map-overlay { position: absolute; pointer-events: none; }
  .infra-overlay { background-color: rgba(59, 130, 246, 0.3); border: 2px solid #3b82f6; }
  .hazard-overlay { background-color: rgba(239, 68, 68, 0.3); border: 2px solid #ef4444; }
  .project-marker { position: absolute; width: 32px; height: 32px; background-color: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; pointer-events: all; z-index: 15; }
  .project-marker:hover { transform: scale(1.1); box-shadow: 0 4px 8px rgba(0,0,0,0.3); }
  .heat-zone { position: absolute; border-radius: 4px; opacity: 0.7; }
  .av-high { background-color: #22c55e; }
  .av-medium { background-color: #fbbf24; }
  .av-low { background-color: #ef4444; }
  .project-tooltip { position: absolute; background: #374151; color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; pointer-events: none; z-index: 1000; white-space: nowrap; }

  /* Form */
  .form-group { margin-bottom: 16px; }
  .form-label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
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

  /* Executive Summary */
  .executive-summary { background-color: #f9fafb; border-radius: 6px; padding: 16px; margin-bottom: 16px; }
  .summary-header { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px; }
  .summary-item { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; }
  .summary-label { color: #6b7280; }
  .summary-value { font-weight: 600; color: #374151; }

  /* Info and Alert */
  .info-box { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 13px; color: #991b1b; }
  .alert-banner { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .alert-icon { font-size: 20px; color: #dc2626; }
  .alert-content { flex: 1; }
  .alert-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
  .alert-description { font-size: 12px; color: #7f1d1d; }

  /* Quick Stats */
  .quick-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
  .quick-stat { text-align: center; padding: 8px; background-color: #f3f4f6; border-radius: 4px; }
  .quick-stat-value { font-size: 18px; font-weight: bold; color: #374151; }
  .quick-stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }

  /* Decision Matrix */
  .decision-matrix { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px; }
  .decision-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
  .decision-card:hover { background-color: #f3f4f6; border-color: #dc2626; }
  .decision-icon { font-size: 24px; margin-bottom: 4px; }
  .decision-label { font-size: 12px; font-weight: 600; color: #374151; }

  /* Charts */
  .charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  .chart-card { background-color: white; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .chart-placeholder { height: 200px; background-color: #f3f4f6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #6b7280; font-size: 14px; }

  /* Priority List */
  .priority-list { list-style: none; padding: 0; }
  .priority-item { padding: 12px; margin-bottom: 8px; background-color: #f9fafb; border-radius: 6px; border-left: 3px solid; font-size: 13px; }
  .priority-critical { border-left-color: #ef4444; }
  .priority-high { border-left-color: #f59e0b; }
  .priority-medium { border-left-color: #3b82f6; }
  .priority-label { font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px; }

  /* Full width */
  .full-width { grid-column: 1 / -1; }

  /* Responsive */
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
`;


