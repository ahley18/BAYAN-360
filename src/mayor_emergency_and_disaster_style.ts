export const mayorEmergencyAndDisasterCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .mayor-emergency-root {
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
  .alert-badge { background-color: #ef4444; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; animation: blink 1s infinite; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

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

  /* Critical Alert Banner */
  .critical-alert { background-color: #fee2e2; border: 2px solid #ef4444; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .critical-icon { font-size: 24px; color: #ef4444; animation: blink 1s infinite; }
  .critical-content { flex: 1; }
  .critical-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; font-size: 14px; }
  .critical-description { font-size: 12px; color: #7f1d1d; }

  /* Status Overview */
  .alert-status-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; margin-bottom: 24px; }
  .status-card { background-color: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; position: relative; overflow: hidden; }
  .status-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; }
  .status-critical::before { background-color: #ef4444; animation: pulse 1.5s infinite; }
  .status-warning::before { background-color: #f59e0b; }
  .status-monitoring::before { background-color: #3b82f6; }
  .status-safe::before { background-color: #10b981; }
  .status-icon { font-size: 24px; margin-bottom: 8px; }
  .status-value { font-size: 20px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .status-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Alert Map */
  .alert-map { height: 450px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
  .alert-zone { position: absolute; border-radius: 50%; animation: alertPulse 2s infinite; }
  @keyframes alertPulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
  .zone-critical { background: radial-gradient(circle, rgba(239,68,68,0.9) 0%, rgba(239,68,68,0.2) 70%); border: 2px solid #ef4444; }
  .zone-warning { background: radial-gradient(circle, rgba(245,158,11,0.9) 0%, rgba(245,158,11,0.2) 70%); border: 2px solid #f59e0b; }
  .zone-monitoring { background: radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.2) 70%); border: 2px solid #3b82f6; }
  .alert-icon-map { position: absolute; width: 32px; height: 32px; background-color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
  .icon-critical { background-color: #ef4444; color: white; animation: blink 1s infinite; }
  .icon-warning { background-color: #f59e0b; color: white; }
  .icon-monitoring { background-color: #3b82f6; color: white; }

  /* Lists & Items */
  .alert-list { max-height: 400px; overflow-y: auto; }
  .alert-item { padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background-color 0.2s; }
  .alert-item:hover { background-color: #f9fafb; }
  .alert-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .alert-title { font-size: 13px; font-weight: 600; color: #374151; }
  .alert-priority { padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase; }
  .priority-critical { background-color: #fee2e2; color: #991b1b; }
  .priority-high { background-color: #fef3c7; color: #92400e; }
  .priority-medium { background-color: #dbeafe; color: #1e40af; }
  .priority-low { background-color: #d1fae5; color: #065f46; }
  .alert-details { font-size: 11px; color: #6b7280; display: flex; gap: 12px; flex-wrap: wrap; }

  /* Forms */
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
  .btn-emergency { background-color: #ef4444; color: white; animation: pulse 1.5s infinite; }
  .btn-warning { background-color: #f59e0b; color: white; }
  .btn-success { background-color: #10b981; color: white; }

  /* Process Flow */
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; flex-wrap: wrap; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #ef4444; color: white; }

  /* Command Center */
  .command-center { background-color: #fee2e2; border: 2px solid #ef4444; border-radius: 6px; padding: 12px; margin-top: 16px; }
  .command-header { font-size: 12px; font-weight: 600; color: #991b1b; margin-bottom: 8px; text-transform: uppercase; }
  .command-buttons { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }

  /* Response Teams */
  .response-teams { display: grid; gap: 8px; margin-bottom: 16px; }
  .team-card { padding: 8px; background-color: #f9fafb; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background-color 0.2s; }
  .team-card:hover { background-color: #f3f4f6; }
  .team-info { display: flex; align-items: center; gap: 8px; }
  .team-name { font-size: 12px; font-weight: 600; color: #374151; }
  .team-status { padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600; }
  .status-ready { background-color: #d1fae5; color: #065f46; }
  .status-deployed { background-color: #fee2e2; color: #991b1b; }
  .status-standby { background-color: #fef3c7; color: #92400e; }

  /* Weather */
  .weather-widget { padding: 12px; background-color: #dbeafe; border: 1px solid #93c5fd; border-radius: 6px; margin-bottom: 16px; cursor: pointer; }
  .weather-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .weather-temp { font-size: 24px; font-weight: bold; color: #1e40af; }
  .weather-condition { font-size: 12px; color: #1e3a8a; text-transform: uppercase; }

  /* Resource */
  .resource-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 12px; }
  .resource-item { text-align: center; padding: 8px; background-color: #f3f4f6; border-radius: 4px; cursor: pointer; }
  .resource-number { font-size: 18px; font-weight: bold; color: #374151; }
  .resource-label { font-size: 10px; color: #6b7280; text-transform: uppercase; }

  /* Timeline */
  .timeline { max-height: 300px; overflow-y: auto; }
  .timeline-item { display: flex; gap: 12px; padding: 8px; border-left: 2px solid #e5e7eb; margin-left: 8px; position: relative; cursor: pointer; }
  .timeline-item::before { content: ''; position: absolute; left: -6px; top: 12px; width: 10px; height: 10px; border-radius: 50%; background-color: #6b7280; }
  .timeline-item.critical::before { background-color: #ef4444; }
  .timeline-time { font-size: 11px; color: #6b7280; min-width: 50px; }
  .timeline-content { font-size: 12px; color: #374151; }

  /* Responsive */
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
    .search-container { width: 100%; }
    .search-input { width: 100%; }
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
`;


