export const projectMonitoringGeotrackerCss = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body, .project-monitoring-root {
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
  .stat-card { background-color: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
  .stat-icon { font-size: 24px; margin-bottom: 8px; }
  .stat-value { font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 4px; }
  .stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; }

  /* Filter Tags */
  .filter-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
  .filter-tag { padding: 4px 12px; background-color: #f3f4f6; border-radius: 16px; font-size: 12px; cursor: pointer; transition: all 0.2s; }
  .filter-tag.active { background-color: #dc2626; color: white; }

  /* Grid */
  .grid { display: grid; grid-template-columns: 3fr 1fr; gap: 24px; }
  .card { background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px; }
  .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .card-title { font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; }

  /* Map */
  .map-container { height: 600px; background-color: #1f2937; border-radius: 8px; position: relative; overflow: hidden; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 20px 20px; }
  .map-controls { position: absolute; top: 10px; left: 10px; background-color: rgba(255,255,255,0.95); border-radius: 6px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 20; }
  .control-group { margin-bottom: 12px; }
  .control-label { font-size: 11px; font-weight: 600; color: #374151; margin-bottom: 6px; text-transform: uppercase; }
  .layer-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 12px; cursor: pointer; }
  .layer-checkbox { cursor: pointer; }

  .project-marker { position: absolute; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer; pointer-events: all; z-index: 15; transition: transform 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
  .project-marker:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  .marker-ongoing { background-color: #3b82f6; color: white; }
  .marker-completed { background-color: #10b981; color: white; }
  .marker-delayed { background-color: #ef4444; color: white; animation: blink 1.5s infinite; }
  .marker-planned { background-color: #6b7280; color: white; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }

  .project-cluster { position: absolute; background-color: rgba(59,130,246,0.2); border: 2px solid #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #3b82f6; }

  /* Legend */
  .legend { display: flex; gap: 16px; padding: 8px; background-color: #f9fafb; border-radius: 4px; font-size: 11px; }
  .legend-item { display: flex; align-items: center; gap: 6px; }
  .legend-color { width: 12px; height: 12px; border-radius: 50%; }

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

  /* Timeline */
  .timeline-container { margin-top: 24px; }
  .timeline-header { display: flex; justify-content: space-between; margin-bottom: 12px; padding: 0 10px; font-size: 11px; color: #6b7280; }
  .timeline-bar { position: relative; height: 30px; background-color: #f3f4f6; border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
  .timeline-progress { position: absolute; height: 100%; border-radius: 4px; display: flex; align-items: center; padding: 0 8px; font-size: 11px; font-weight: 600; color: white; }

  /* Photo Grid */
  .photo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 12px; }
  .photo-item { aspect-ratio: 16/9; background-color: #e5e7eb; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #6b7280; cursor: pointer; transition: all 0.2s; }
  .photo-item:hover { background-color: #d1d5db; }

  /* Process Flow */
  .process-flow { display: flex; align-items: center; gap: 8px; padding: 12px; background-color: #f9fafb; border-radius: 6px; margin-bottom: 16px; font-size: 12px; }
  .flow-step { padding: 6px 12px; background-color: white; border-radius: 4px; font-weight: 600; white-space: nowrap; }
  .flow-arrow { color: #9ca3af; }
  .flow-active { background-color: #dc2626; color: white; }

  /* Responsive */
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


