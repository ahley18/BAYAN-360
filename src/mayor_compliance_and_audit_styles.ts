export const mayorComplianceAndAuditCss = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, .mayor-compliance-root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #f3f4f6;
        color: #374151;
    }

    /* Header Styles */
    .header {
        background-color: #374151;
        color: white;
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .logo {
        background-color: #dc2626;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .logo-icon { margin-right: 8px; }

    .search-container {
        position: relative;
    }

    .search-input {
        background-color: #4b5563;
        color: white;
        padding: 8px 12px 8px 40px;
        border: none;
        border-radius: 4px;
        width: 300px;
        outline: none;
    }

    .search-input::placeholder {
        color: #9ca3af;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        opacity: 0.6;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 14px;
    }

    .office-title { font-weight: 500; }

    /* Status Badge */
    .status-badge {
        background-color: #f59e0b;
        color: white;
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .status-badge.warning { background-color: #f59e0b; }
    .status-icon { margin-right: 4px; }

    /* Layout */
    .container {
        display: flex;
        min-height: calc(100vh - 56px);
    }

    /* Sidebar */
    .sidebar {
        width: 320px;
        background-color: white;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    }

    .nav-item, .sidebar-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 12px;
        color: #6b7280;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .nav-item:hover, .sidebar-item:hover {
        background-color: #f3f4f6;
    }

    .nav-item.active, .sidebar-item.active {
        background-color: #dc2626;
        color: white;
        font-weight: 600;
    }

    /* Main Content */
    .main-content {
        flex: 1;
        padding: 24px;
        overflow-y: auto;
    }

    .page-header {
        margin-bottom: 24px;
    }

    .page-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
    }

    .page-subtitle {
        color: #6b7280;
        font-size: 14px;
    }

    /* Risk Level Cards */
    .risk-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 24px;
    }

    .risk-card {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;
    }

    .risk-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
    }

    .risk-critical::before { background-color: #ef4444; }
    .risk-high::before { background-color: #f59e0b; }
    .risk-medium::before { background-color: #3b82f6; }
    .risk-low::before { background-color: #10b981; }

    .risk-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    .risk-title {
        font-size: 12px;
        color: #6b7280;
        text-transform: uppercase;
        font-weight: 600;
    }

    .risk-icon { font-size: 20px; }
    .risk-value { font-size: 32px; font-weight: bold; margin-bottom: 4px; }
    .risk-subtitle { font-size: 12px; color: #6b7280; }

    /* Grid Layout */
    .grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
        margin-bottom: 24px;
    }

    .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        padding: 24px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .card-title {
        font-size: 14px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
    }

    /* Compliance Table */
    .compliance-table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .compliance-table th {
        background-color: #f9fafb;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        color: #374151;
        border-bottom: 2px solid #e5e7eb;
        font-size: 11px;
        text-transform: uppercase;
    }
    .compliance-table td { padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #374151; }
    .compliance-table tr:hover { background-color: #f9fafb; }

    /* Status Badges */
    .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
    .badge-critical { background-color: #fee2e2; color: #991b1b; }
    .badge-warning { background-color: #fef3c7; color: #92400e; }
    .badge-pending { background-color: #dbeafe; color: #1e40af; }
    .badge-compliant { background-color: #d1fae5; color: #065f46; }

    /* Priority Indicator */
    .priority-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; }
    .priority-critical { background-color: #ef4444; }
    .priority-high { background-color: #f59e0b; }
    .priority-medium { background-color: #3b82f6; }
    .priority-low { background-color: #10b981; }

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
    .btn-warning { background-color: #f59e0b; color: white; }
    .btn-warning:hover { background-color: #d97706; }
    .btn-review { padding: 4px 8px; font-size: 11px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
    .btn-review:hover { background-color: #2563eb; }

    /* Full width */
    .full-width { grid-column: 1 / -1; }

    /* Alert Banner */
    .alert-banner { background-color: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
    .alert-icon { font-size: 20px; color: #dc2626; }
    .alert-content { flex: 1; }
    .alert-title { font-weight: 600; color: #991b1b; margin-bottom: 2px; }
    .alert-description { font-size: 12px; color: #7f1d1d; }

    /* Compliance Checklist */
    .checklist-item { display: flex; align-items: center; padding: 10px; margin-bottom: 8px; background-color: #f9fafb; border-radius: 6px; border-left: 3px solid; font-size: 13px; }
    .checklist-overdue { border-left-color: #ef4444; background-color: #fee2e2; }
    .checklist-pending { border-left-color: #f59e0b; }
    .checklist-compliant { border-left-color: #10b981; }
    .checklist-checkbox { margin-right: 12px; }
    .checklist-content { flex: 1; }
    .checklist-deadline { font-size: 11px; color: #6b7280; margin-left: auto; }

    /* Tab Navigation */
    .tab-nav { display: flex; gap: 8px; margin-bottom: 16px; border-bottom: 2px solid #e5e7eb; }
    .tab-item { padding: 10px 16px; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.2s; margin-bottom: -2px; }
    .tab-item:hover { color: #374151; }
    .tab-item.active { color: #dc2626; border-bottom-color: #dc2626; }

    /* Governance Score */
    .score-container { text-align: center; padding: 20px; }
    .score-circle { width: 120px; height: 120px; margin: 0 auto 12px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; color: white; position: relative; }
    .score-excellent { background-color: #10b981; }
    .score-good { background-color: #3b82f6; }
    .score-fair { background-color: #f59e0b; }
    .score-poor { background-color: #ef4444; }
    .score-label { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 4px; }
    .score-subtitle { font-size: 12px; color: #6b7280; }

    /* Timeline */
    .timeline-item { display: flex; gap: 12px; margin-bottom: 16px; position: relative; }
    .timeline-marker { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; color: white; flex-shrink: 0; }
    .timeline-content { flex: 1; padding-bottom: 16px; border-left: 2px solid #e5e7eb; padding-left: 12px; margin-left: -18px; }
    .timeline-title { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 2px; }
    .timeline-description { font-size: 12px; color: #6b7280; }
    .timeline-date { font-size: 11px; color: #9ca3af; margin-top: 4px; }

    /* Quick Actions Grid */
    .actions-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px; }
    .action-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
    .action-card:hover { background-color: #f3f4f6; border-color: #dc2626; }
    .action-icon { font-size: 24px; margin-bottom: 4px; }
    .action-label { font-size: 12px; font-weight: 600; color: #374151; }

    /* Procurement Status */
    .procurement-card { background-color: #f9fafb; border-radius: 6px; padding: 12px; margin-bottom: 12px; }
    .procurement-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .procurement-title { font-size: 13px; font-weight: 600; color: #374151; }
    .procurement-amount { font-size: 13px; font-weight: bold; color: #10b981; }
    .procurement-details { font-size: 11px; color: #6b7280; line-height: 1.4; }
`;


