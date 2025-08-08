export const mayorCitizenFeedbackCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .mayor-citizen-root {
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
  .stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; margin-bottom: 24px; }
  .stat-card { background-color: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
  .stat-icon { font-size: 24px; margin-bottom: 8px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }
  .stat-change { font-size: 11px; margin-top: 4px; }
  .change-up { color: #10b981; }
  .change-down { color: #ef4444; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Sentiment Meter */
  .sentiment-meter { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: linear-gradient(90deg, #ef4444 0%, #f59e0b 25%, #fbbf24 50%, #84cc16 75%, #10b981 100%); border-radius: 8px; margin-bottom: 20px; position: relative; cursor: pointer; }
  .sentiment-indicator { position: absolute; top: -10px; width: 4px; height: 40px; background-color: #374151; border-radius: 2px; transition: left 0.3s; }
  .sentiment-labels { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.3); }

  /* Heatmap */
  .heatmap-container { height: 400px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
  .heatmap-zone { position: absolute; border-radius: 50%; opacity: 0.7; animation: heatPulse 3s infinite; cursor: pointer; }
  @keyframes heatPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
  .heat-high { background: radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(239,68,68,0.2) 70%); }
  .heat-medium { background: radial-gradient(circle, rgba(245,158,11,0.8) 0%, rgba(245,158,11,0.2) 70%); }
  .heat-low { background: radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.2) 70%); }

  /* Issue List */
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

  /* Form */
  .form-group { margin-bottom: 16px; }
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
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }

  /* Mayor Action */
  .mayor-action { background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .mayor-action-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .mayor-action-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

  /* Channels */
  .channel-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px; }
  .channel-card { padding: 12px; background-color: #f9fafb; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
  .channel-card:hover { background-color: #f3f4f6; transform: translateY(-2px); }
  .channel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .channel-name { font-size: 12px; font-weight: 600; color: #374151; }
  .channel-count { font-size: 16px; font-weight: bold; color: #dc2626; }
  .channel-stats { font-size: 11px; color: #6b7280; }

  /* Response Widget */
  .response-widget { padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin-bottom: 16px; cursor: pointer; }
  .response-time { font-size: 24px; font-weight: bold; color: #10b981; text-align: center; margin-bottom: 4px; }
  .response-label { font-size: 11px; color: #065f46; text-align: center; text-transform: uppercase; }

  /* Trending */
  .trending-list { display: grid; gap: 8px; }
  .trending-item { display: flex; align-items: center; gap: 8px; padding: 8px; background-color: #f9fafb; border-radius: 4px; font-size: 12px; cursor: pointer; }
  .trending-rank { width: 24px; height: 24px; background-color: #dc2626; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; }
  .trending-topic { flex: 1; font-weight: 600; color: #374151; }
  .trending-count { font-size: 11px; color: #6b7280; }

  /* Social Feed */
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
    .channel-grid { grid-template-columns: 1fr; }
    .btn { padding: 8px 14px; }
  }
  @media (max-width: 480px) {
    .page-title { font-size: 20px; }
    .page-subtitle { font-size: 13px; }
    .stats-grid { grid-template-columns: 1fr; }
    .btn { padding: 7px 12px; font-size: 13px; }
  }
`;


