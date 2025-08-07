import React, { useState, useEffect, useRef } from 'react';
import './accounthing_office_dash_styles.ts';

const App = () => {
  // State management
  const [activeNav, setActiveNav] = useState('revenue-map');
  const [activeFilter, setActiveFilter] = useState('All Sources');
  const [workflowCompleted, setWorkflowCompleted] = useState(false);
  const [periodType, setPeriodType] = useState('');
  const [startDate, setStartDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-01-21');
  const [monthlyTrendChart, setMonthlyTrendChart] = useState(null);
  const [currentChartType, setCurrentChartType] = useState('line');
  const [chartPeriod, setChartPeriod] = useState('6months');
  const [chartView, setChartView] = useState('all');
  const chartRef = useRef(null);

  // Revenue source checkboxes state
  const [taxRevenue, setTaxRevenue] = useState({
    realPropertyTax: true,
    businessTax: true,
    communityTax: false,
    transferTax: false
  });

  const [nonTaxRevenue, setNonTaxRevenue] = useState({
    permitsLicenses: true,
    serviceFees: true,
    regulatoryFees: false,
    otherIncome: false
  });

  // Event handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setWorkflowCompleted(true);
    
    alert('Income Heatmap Generated!\n\n' +
          '📊 Analysis Complete:\n' +
          '• Total Revenue: ₱124.5M\n' +
          '• Top Performer: Poblacion (₱12.5M)\n' +
          '• Collection Rate: 108.3%\n' +
          '• Growth Rate: +11.2% YoY\n\n' +
          'Report ready for Mayor\'s review');
  };

  const handleZoneClick = (zoneName, revenue, growth) => {
    alert(`${zoneName} Revenue Details:\n\n` +
          `Total Revenue: ${revenue}\n` +
          `Growth Rate: ${growth}\n\n` +
          `Revenue Breakdown:\n` +
          `• Real Property Tax: 42%\n` +
          `• Business Tax: 31%\n` +
          `• Permits & Licenses: 19%\n` +
          `• Other Fees: 8%\n\n` +
          `OR Issued: 2,345\n` +
          `Collection Efficiency: 96.5%`);
  };

  const handleTagClick = (tag) => {
    setActiveFilter(tag);
    console.log('Filtering by revenue source:', tag);
  };

  const handleMapControl = (action) => {
    if (action === 'toggle-values') {
      alert('Toggle Display:\n• Total Revenue\n• Revenue per Capita\n• Growth Percentage\n• Collection Rate');
    } else if (action === 'period-compare') {
      alert('Period Comparison:\n\n' +
            '• Current vs Previous Month\n' +
            '• Current vs Same Period Last Year\n' +
            '• Quarterly Trends\n' +
            '• Annual Performance');
    }
  };

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const handleSecondaryButton = (action) => {
    switch (action) {
      case 'import':
        alert('Import Options:\n\n' +
              '• OR Database Sync\n' +
              '• Excel Upload (COA Format)\n' +
              '• CSV Import\n' +
              '• API Integration\n\n' +
              'Supported: OR logs with revenue codes');
        break;
      case 'export':
        alert('Export Options:\n• Revenue Map (PDF/PNG)\n• SRE Report (Excel)\n• COA Format\n• GIS Layer Data');
        break;
      case 'print':
        alert('Preparing revenue heatmap for printing...\nIncluding all zones and revenue breakdowns');
        break;
      case 'sre-report':
        alert('Generating SRE Report:\n\n' +
              '• Statement of Receipts\n' +
              '• Revenue by Source\n' +
              '• Collection Efficiency\n' +
              '• Comparative Analysis\n' +
              '• COA-compliant format\n\n' +
              'Report ID: SRE-2025-01-21');
        break;
    }
  };

  const handleTableRowClick = (barangay) => {
    alert(`Opening detailed revenue analysis for ${barangay}...\n\nShowing OR logs and daily collection trends`);
  };

  const handleTaxRevenueChange = (field) => {
    setTaxRevenue(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleNonTaxRevenueChange = (field) => {
    setNonTaxRevenue(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // Chart functions
  const initializeTrendChart = () => {
    if (!chartRef.current || !window.Chart) return;

    const ctx = chartRef.current.getContext('2d');
    
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Poblacion',
          data: [2.1, 2.25, 2.4, 2.35, 2.65, 2.5],
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Commercial District',
          data: [1.65, 1.78, 1.92, 1.88, 2.05, 1.95],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Industrial Zone',
          data: [1.45, 1.58, 1.72, 1.68, 1.85, 1.78],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Market Area',
          data: [1.04, 1.12, 1.22, 1.19, 1.31, 1.25],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Residential A',
          data: [0.75, 0.82, 0.89, 0.87, 0.95, 0.91],
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Residential B',
          data: [0.63, 0.69, 0.74, 0.73, 0.79, 0.76],
          borderColor: '#ec4899',
          backgroundColor: 'rgba(236, 72, 153, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Coastal Area',
          data: [0.48, 0.52, 0.57, 0.55, 0.61, 0.58],
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Agricultural Zone',
          data: [0.21, 0.22, 0.24, 0.23, 0.26, 0.25],
          borderColor: '#84cc16',
          backgroundColor: 'rgba(132, 204, 22, 0.1)',
          tension: 0.4,
          fill: false
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ₱';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toFixed(2) + 'M';
              }
              if (context.dataIndex > 0) {
                const prevValue = context.dataset.data[context.dataIndex - 1];
                const change = ((context.parsed.y - prevValue) / prevValue * 100).toFixed(1);
                label += ' (' + (change > 0 ? '+' : '') + change + '%)';
              }
              return label;
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          }
        },
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₱' + value + 'M';
            }
          },
          grid: {
            borderDash: [5, 5]
          }
        }
      }
    };

    const chart = new window.Chart(ctx, {
      type: currentChartType,
      data: chartData,
      options: chartOptions
    });
    
    setMonthlyTrendChart(chart);
  };

  const updateTrendChart = () => {
    if (monthlyTrendChart) {
      if (chartPeriod === '12months') {
        monthlyTrendChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        monthlyTrendChart.data.datasets.forEach(dataset => {
          const lastValue = dataset.data[dataset.data.length - 1];
          const growth = 1.02;
          dataset.data = [...dataset.data, 
            lastValue * growth,
            lastValue * Math.pow(growth, 2),
            lastValue * Math.pow(growth, 3),
            lastValue * Math.pow(growth, 4),
            lastValue * Math.pow(growth, 5),
            lastValue * Math.pow(growth, 6)
          ];
        });
      }
      
      if (chartView === 'top5') {
        monthlyTrendChart.data.datasets = monthlyTrendChart.data.datasets.slice(0, 5);
      }
      
      monthlyTrendChart.update();
    }
  };

  const toggleChartType = () => {
    const types = ['line', 'bar', 'area'];
    let currentIndex = types.indexOf(currentChartType);
    currentIndex = (currentIndex + 1) % types.length;
    setCurrentChartType(types[currentIndex]);
    
    if (monthlyTrendChart) {
      if (types[currentIndex] === 'area') {
        monthlyTrendChart.config.type = 'line';
        monthlyTrendChart.data.datasets.forEach(dataset => {
          dataset.fill = true;
        });
      } else {
        monthlyTrendChart.config.type = types[currentIndex];
        monthlyTrendChart.data.datasets.forEach(dataset => {
          dataset.fill = false;
        });
      }
      monthlyTrendChart.update();
    }
  };

  const expandChart = () => {
    if (chartRef.current) {
      const chartSection = chartRef.current.closest('.trend-chart-section');
      if (chartSection && chartSection.requestFullscreen) {
        chartSection.requestFullscreen();
      }
    }
  };

  const showTrendDetail = (type) => {
    const details = {
      'average': 'Monthly Average Analysis:\n\n₱10.4M average across all barangays\n\nTop Contributors:\n• Poblacion: ₱2.38M/month\n• Commercial: ₱1.87M/month\n• Industrial: ₱1.68M/month\n\nGrowth trend: +8.5% vs last year',
      'peak': 'Peak Month Performance:\n\nMay 2025: ₱13.2M total\n\nKey Drivers:\n• Business tax renewals: +45%\n• New permits issued: 856\n• RPT collection surge: +23%\n\nAll barangays exceeded targets',
      'growth': 'Growth Analysis:\n\nIndustrial Zone: 18.7% YoY\n\nGrowth Factors:\n• 45 new businesses registered\n• Manufacturing expansion\n• Improved collection efficiency\n\nProjected to reach ₱2M/month by Q4',
      'projection': '2025 Revenue Projection:\n\nTarget: ₱156.2M (92% confidence)\n\nAssumptions:\n• Current growth rate maintained\n• No major economic disruptions\n• Collection efficiency: 105%\n\nRange: ₱148M - ₱164M'
    };
    
    alert(details[type]);
  };

  const toggleDataset = (datasetIndex) => {
    if (monthlyTrendChart) {
      const meta = monthlyTrendChart.getDatasetMeta(datasetIndex);
      meta.hidden = !meta.hidden;
      monthlyTrendChart.update();
    }
  };

  const getChartTypeIcon = () => {
    const icons = { line: '📈', bar: '📊', area: '📉' };
    return icons[currentChartType] || '📈';
  };

  // Effects
  useEffect(() => {
    // Load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      setTimeout(initializeTrendChart, 100);
    };
    document.head.appendChild(script);

    return () => {
      if (monthlyTrendChart) {
        monthlyTrendChart.destroy();
      }
    };
  }, []);

  useEffect(() => {
    updateTrendChart();
  }, [chartPeriod, chartView, monthlyTrendChart]);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            📊 BARANGAY REVENUE MAP
          </div>
          <div className="search-container">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search OR number, revenue code, or barangay..."
              onChange={(e) => console.log('Searching for:', e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <span>ACCOUNTING DEPARTMENT</span>
          <div className="status-badge">
            ✅ VIEW
          </div>
        </div>
      </header>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            {[
              { id: 'revenue-map', icon: '🗺️', label: 'REVENUE MAP' },
              { id: 'income-tracking', icon: '💰', label: 'INCOME TRACKING' },
              { id: 'or-logs', icon: '🧾', label: 'OR LOGS' },
              { id: 'revenue-codes', icon: '📋', label: 'REVENUE CODES' },
              { id: 'sre-reports', icon: '📊', label: 'SRE REPORTS' },
              { id: 'coa-compliance', icon: '🏦', label: 'COA COMPLIANCE' },
              { id: 'analytics', icon: '📈', label: 'ANALYTICS' },
              { id: 'export', icon: '📤', label: 'EXPORT' }
            ].map((item) => (
              <div 
                key={item.id}
                className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Geographic Revenue Distribution Analysis</h1>
            <p className="page-subtitle">Monitor income from taxes and fees by barangay for SRE reporting and COA compliance</p>
          </div>

          {/* COA Compliance Notice */}
          <div className="coa-box">
            <span>📋</span>
            <span><strong>COA Compliance Mode:</strong> All revenue data is tracked according to COA Circular No. 2022-001 for accurate SRE reporting and audit trail documentation.</span>
          </div>

          {/* KPI Overview */}
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon">💰</div>
              <div className="kpi-value">₱124.5M</div>
              <div className="kpi-label">Total Revenue YTD</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon">📈</div>
              <div className="kpi-value">108.3%</div>
              <div className="kpi-label">Collection Rate</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon">🏘️</div>
              <div className="kpi-value">42</div>
              <div className="kpi-label">Barangays</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon">🧾</div>
              <div className="kpi-value">45,892</div>
              <div className="kpi-label">OR Issued</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon">📊</div>
              <div className="kpi-value">₱2.96M</div>
              <div className="kpi-label">Avg/Barangay</div>
            </div>
          </div>

          <div className="grid">
            {/* Revenue Data Input */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Revenue Data Configuration</h2>
              </div>

              <form onSubmit={handleFormSubmit}>
                {/* Period Selection */}
                <div className="form-section">
                  <h3 className="form-section-title">Reporting Period</h3>
                  
                  <div className="form-group">
                    <label className="form-label form-label-required">Period Type</label>
                    <select 
                      className="form-select" 
                      value={periodType}
                      onChange={(e) => setPeriodType(e.target.value)}
                      required
                    >
                      <option value="">Select period...</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annual">Annual</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Date Range</label>
                    <div className="date-range-grid">
                      <input 
                        type="date" 
                        className="form-input" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      <input 
                        type="date" 
                        className="form-input" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Revenue Source Selection */}
                <div className="form-section">
                  <h3 className="form-section-title">Revenue Sources</h3>
                  
                  <div className="form-group">
                    <label className="form-label">Tax Revenue</label>
                    <div className="revenue-code-list">
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={taxRevenue.realPropertyTax}
                          onChange={() => handleTaxRevenueChange('realPropertyTax')}
                        />
                        <span>Real Property Tax</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={taxRevenue.businessTax}
                          onChange={() => handleTaxRevenueChange('businessTax')}
                        />
                        <span>Business Tax</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={taxRevenue.communityTax}
                          onChange={() => handleTaxRevenueChange('communityTax')}
                        />
                        <span>Community Tax</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={taxRevenue.transferTax}
                          onChange={() => handleTaxRevenueChange('transferTax')}
                        />
                        <span>Transfer Tax</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Non-Tax Revenue</label>
                    <div className="revenue-code-list">
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={nonTaxRevenue.permitsLicenses}
                          onChange={() => handleNonTaxRevenueChange('permitsLicenses')}
                        />
                        <span>Permits & Licenses</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={nonTaxRevenue.serviceFees}
                          onChange={() => handleNonTaxRevenueChange('serviceFees')}
                        />
                        <span>Service Fees</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={nonTaxRevenue.regulatoryFees}
                          onChange={() => handleNonTaxRevenueChange('regulatoryFees')}
                        />
                        <span>Regulatory Fees</span>
                      </div>
                      <div className="revenue-code-item">
                        <input 
                          type="checkbox" 
                          className="revenue-code-checkbox" 
                          checked={nonTaxRevenue.otherIncome}
                          onChange={() => handleNonTaxRevenueChange('otherIncome')}
                        />
                        <span>Other Income</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Code Tags */}
                <div className="form-section">
                  <h3 className="form-section-title">Quick Revenue Filters</h3>
                  <div className="revenue-source-tags">
                    {['All Sources', 'RPT', 'Business', 'Permits', 'Fees', 'Others'].map((tag) => (
                      <span 
                        key={tag}
                        className={`source-tag ${activeFilter === tag ? 'active' : ''}`}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Workflow Status */}
                <div className="workflow-container">
                  <div className="workflow-header">Report Generation Workflow</div>
                  <div className="workflow-steps">
                    <div className="workflow-line"></div>
                    <div className="workflow-line workflow-line-active"></div>
                    
                    <div className="workflow-step">
                      <div className={`step-icon ${workflowCompleted ? 'completed' : 'completed'}`}>
                        ✓
                      </div>
                      <div className="step-label">Accounting</div>
                    </div>
                    
                    <div className="workflow-step">
                      <div className={`step-icon ${workflowCompleted ? 'completed' : 'active'}`}>
                        {workflowCompleted ? '✓' : '2'}
                      </div>
                      <div className="step-label">Mayor</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button type="submit" className="btn btn-primary btn-icon">
                    <span>🌡️</span>
                    <span>GENERATE HEATMAP</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => handleSecondaryButton('import')}
                  >
                    IMPORT OR DATA
                  </button>
                </div>
              </form>
            </div>

            {/* Revenue Heatmap */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Income Heatmap by Barangay</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn btn-secondary" 
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                    onClick={() => handleSecondaryButton('export')}
                  >
                    Export
                  </button>
                  <button 
                    className="btn btn-secondary" 
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                    onClick={() => handleSecondaryButton('print')}
                  >
                    Print
                  </button>
                </div>
              </div>

              <div className="quick-stats">
                <div className="stat-card">
                  <div className="stat-value">₱12.5M</div>
                  <div className="stat-label">Highest Zone</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">₱852K</div>
                  <div className="stat-label">Lowest Zone</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">42%</div>
                  <div className="stat-label">RPT Share</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">31%</div>
                  <div className="stat-label">Business Tax</div>
                </div>
              </div>

              <div className="map-container">
                {/* Map Controls */}
                <div className="map-controls">
                  <button className="map-btn" title="Zoom In">+</button>
                  <button className="map-btn" title="Zoom Out">−</button>
                  <button className="map-btn" title="Reset View">⟲</button>
                  <button 
                    className="map-btn" 
                    title="Toggle Values"
                    onClick={() => handleMapControl('toggle-values')}
                  >
                    💰
                  </button>
                  <button 
                    className="map-btn" 
                    title="Period Compare"
                    onClick={() => handleMapControl('period-compare')}
                  >
                    📊
                  </button>
                </div>

                {/* Revenue Heat Zones */}
                {[
                  { name: 'Poblacion', revenue: '₱12.5M', growth: '+15.2%', level: 'revenue-highest', style: { left: '20%', top: '20%', width: '150px', height: '120px' } },
                  { name: 'Commercial', revenue: '₱9.8M', growth: '+12.5%', level: 'revenue-high', style: { left: '40%', top: '15%', width: '170px', height: '140px' } },
                  { name: 'Market Area', revenue: '₱6.2M', growth: '+8.3%', level: 'revenue-medium', style: { left: '60%', top: '25%', width: '140px', height: '110px' } },
                  { name: 'Residential A', revenue: '₱4.5M', growth: '+5.1%', level: 'revenue-standard', style: { left: '15%', top: '45%', width: '160px', height: '130px' } },
                  { name: 'Agricultural', revenue: '₱1.2M', growth: '+2.3%', level: 'revenue-low', style: { left: '70%', top: '50%', width: '130px', height: '110px' } },
                  { name: 'Industrial', revenue: '₱8.7M', growth: '+18.7%', level: 'revenue-high', style: { left: '35%', top: '55%', width: '180px', height: '150px' } },
                  { name: 'Residential B', revenue: '₱3.8M', growth: '+4.2%', level: 'revenue-medium', style: { left: '55%', top: '65%', width: '140px', height: '120px' } },
                  { name: 'Coastal', revenue: '₱2.9M', growth: '+6.5%', level: 'revenue-standard', style: { left: '25%', top: '75%', width: '150px', height: '125px' } }
                ].map((zone, index) => (
                  <div 
                    key={index}
                    className={`revenue-zone ${zone.level}`} 
                    style={zone.style}
                    onClick={() => handleZoneClick(zone.name, zone.revenue, zone.growth)}
                  >
                    <span>{zone.name}<br />{zone.revenue}<br />{zone.growth}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="legend">
                {[
                  { color: 'revenue-highest', label: 'Highest (>₱10M)' },
                  { color: 'revenue-high', label: 'High (₱5-10M)' },
                  { color: 'revenue-medium', label: 'Medium (₱3-5M)' },
                  { color: 'revenue-standard', label: 'Standard (₱1-3M)' },
                  { color: 'revenue-low', label: 'Low (<₱1M)' }
                ].map((item, index) => (
                  <div key={index} className="legend-item">
                    <div className={`legend-color ${item.color}`}></div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Detailed Revenue Breakdown */}
            <div className="card full-width">
              <div className="card-header">
                <h2 className="card-title">Barangay Revenue Performance Details</h2>
                <button 
                  className="btn btn-secondary" 
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                  onClick={() => handleSecondaryButton('sre-report')}
                >
                  Generate SRE Report
                </button>
              </div>

              <table className="revenue-table">
                <thead>
                  <tr>
                    <th>Barangay</th>
                    <th>Total Revenue</th>
                    <th>RPT</th>
                    <th>Business Tax</th>
                    <th>Permits/Licenses</th>
                    <th>Other Fees</th>
                    <th>YoY Growth</th>
                    <th>Collection Rate</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { barangay: 'Poblacion', totalRevenue: '₱12,523,450', rpt: '₱5,234,000', businessTax: '₱4,125,300', permits: '₱2,345,150', otherFees: '₱819,000', yoyGrowth: '+15.2%', collectionRate: '112.5%', performance: 'Excellent' },
                    { barangay: 'Commercial District', totalRevenue: '₱9,845,230', rpt: '₱3,456,000', businessTax: '₱3,789,230', permits: '₱1,890,000', otherFees: '₱710,000', yoyGrowth: '+12.5%', collectionRate: '108.3%', performance: 'Excellent' },
                    { barangay: 'Industrial Zone', totalRevenue: '₱8,734,560', rpt: '₱2,890,000', businessTax: '₱3,567,560', permits: '₱1,567,000', otherFees: '₱710,000', yoyGrowth: '+18.7%', collectionRate: '115.2%', performance: 'Excellent' },
                    { barangay: 'Market Area', totalRevenue: '₱6,234,890', rpt: '₱1,234,000', businessTax: '₱2,890,890', permits: '₱1,456,000', otherFees: '₱654,000', yoyGrowth: '+8.3%', collectionRate: '102.1%', performance: 'Good' },
                    { barangay: 'Residential A', totalRevenue: '₱4,523,120', rpt: '₱2,345,000', businessTax: '₱890,120', permits: '₱788,000', otherFees: '₱500,000', yoyGrowth: '+5.1%', collectionRate: '98.5%', performance: 'Good' },
                    { barangay: 'Residential B', totalRevenue: '₱3,789,340', rpt: '₱1,890,000', businessTax: '₱678,340', permits: '₱721,000', otherFees: '₱500,000', yoyGrowth: '+4.2%', collectionRate: '95.2%', performance: 'Average' },
                    { barangay: 'Coastal Area', totalRevenue: '₱2,890,450', rpt: '₱1,234,000', businessTax: '₱567,450', permits: '₱689,000', otherFees: '₱400,000', yoyGrowth: '+6.5%', collectionRate: '96.8%', performance: 'Average' },
                    { barangay: 'Agricultural Zone', totalRevenue: '₱1,234,780', rpt: '₱567,000', businessTax: '₱234,780', permits: '₱233,000', otherFees: '₱200,000', yoyGrowth: '+2.3%', collectionRate: '88.5%', performance: 'Needs Work' }
                  ].map((row, index) => (
                    <tr key={index} onClick={() => handleTableRowClick(row.barangay)}>
                      <td><strong>{row.barangay}</strong></td>
                      <td style={{ fontWeight: 'bold' }}>{row.totalRevenue}</td>
                      <td>{row.rpt}</td>
                      <td>{row.businessTax}</td>
                      <td>{row.permits}</td>
                      <td>{row.otherFees}</td>
                      <td style={{ color: row.yoyGrowth.startsWith('+') ? '#10b981' : '#f59e0b' }}>
                        {row.yoyGrowth}
                      </td>
                      <td>{row.collectionRate}</td>
                      <td>
                        <span className={`performance-badge badge-${
                          row.performance === 'Excellent' ? 'excellent' :
                          row.performance === 'Good' ? 'good' :
                          row.performance === 'Average' ? 'average' : 'needs-improvement'
                        }`}>
                          {row.performance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Revenue Trend Chart */}
              <div className="trend-chart-section">
                <div className="trend-chart-header">
                  <h3 className="trend-chart-title">📊 Monthly Revenue Trend by Barangay</h3>
                  <div className="trend-chart-controls">
                    <select 
                      className="trend-select" 
                      value={chartPeriod}
                      onChange={(e) => setChartPeriod(e.target.value)}
                    >
                      <option value="6months">Last 6 Months</option>
                      <option value="12months">Last 12 Months</option>
                      <option value="ytd">Year to Date</option>
                      <option value="quarter">This Quarter</option>
                    </select>
                    <select 
                      className="trend-select" 
                      value={chartView}
                      onChange={(e) => setChartView(e.target.value)}
                    >
                      <option value="all">All Barangays</option>
                      <option value="top5">Top 5 Performers</option>
                      <option value="comparison">YoY Comparison</option>
                    </select>
                    <button className="trend-btn" onClick={toggleChartType}>
                      <span>{getChartTypeIcon()}</span>
                    </button>
                    <button className="trend-btn" onClick={expandChart}>⛶</button>
                  </div>
                </div>
                
                <div className="trend-summary-cards">
                  {[
                    { value: '₱10.4M', label: 'Monthly Average', change: '↑ 8.5%', type: 'average' },
                    { value: '₱13.2M', label: 'Peak Month (May)', change: '↑ 15.3%', type: 'peak' },
                    { value: '18.7%', label: 'Highest Growth', sublabel: 'Industrial Zone', type: 'growth' },
                    { value: '₱156.2M', label: '2025 Projection', change: '92% confidence', type: 'projection' }
                  ].map((card, index) => (
                    <div 
                      key={index}
                      className="trend-card" 
                      onClick={() => showTrendDetail(card.type)}
                    >
                      <div className="trend-card-value">{card.value}</div>
                      <div className="trend-card-label">{card.label}</div>
                      {card.sublabel && (
                        <div className="trend-card-sublabel">{card.sublabel}</div>
                      )}
                      {card.change && (
                        <div className="trend-card-change positive">{card.change}</div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="chart-wrapper">
                  <canvas ref={chartRef}></canvas>
                </div>
                
                <div className="chart-legend-grid">
                  {[
                    { color: '#dc2626', label: 'Poblacion', value: '₱14.25M' },
                    { color: '#f59e0b', label: 'Commercial', value: '₱11.23M' },
                    { color: '#3b82f6', label: 'Industrial', value: '₱10.06M' },
                    { color: '#10b981', label: 'Market', value: '₱7.13M' },
                    { color: '#8b5cf6', label: 'Residential A', value: '₱5.19M' },
                    { color: '#ec4899', label: 'Residential B', value: '₱4.34M' },
                    { color: '#06b6d4', label: 'Coastal', value: '₱3.31M' },
                    { color: '#84cc16', label: 'Agricultural', value: '₱1.41M' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="legend-item" 
                      onClick={() => toggleDataset(index)}
                    >
                      <span 
                        className="legend-dot" 
                        style={{ background: item.color }}
                      ></span>
                      <span className="legend-label">{item.label}</span>
                      <span className="legend-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
