import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Dashboard from './accounting_office_dashboard.jsx';
import BarangayAggregatedReports from './mayor/barangay_aggregated_reports.jsx';
import BudgetUtilizationAndFundTracking from './mayor/budget_utilization_and_fund_tracking.jsx';
import CitizenFeedbackAndPublicSentiment from './mayor/citizen_feedback_and_public_sentiment.jsx';
import ComplianceAndAuditFlagsDashboard from './mayor/compliance_and_audit_flags_dashboard.jsx';
import DepartmentPerformanceScorecards from './mayor/department_performance_scorecards.jsx';
import EmergencyAndDisaster from './mayor/emergency_and_disaster.jsx';
import PolicyReviewLegislative from './mayor/policy_review_legislative.jsx';
import ExecutiveOrdersAndMemoGenerator from './mayor/executive_orders_and_memo_generator.jsx';
import ExecutiveOverviewLanding from './mayor/executive_overview_landing.jsx';
import ProjectMonitoringGeotracker from './mayor/project_monitoring_geotracker.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/barangay_aggregated_reports" element={<BarangayAggregatedReports />} />
        <Route path="/budget_utilization_and_fund_tracking" element={<BudgetUtilizationAndFundTracking />} />
        <Route path="/citizen_feedback_and_public_sentiment" element={<CitizenFeedbackAndPublicSentiment />} />
        <Route path="/compliance_and_audit_flags_dashboard" element={<ComplianceAndAuditFlagsDashboard />} />
        <Route path="/department_performance_scorecards" element={<DepartmentPerformanceScorecards />} />
        <Route path="/emergency_and_disaster" element={<EmergencyAndDisaster />} />
        <Route path="/policy_review_legislative" element={<PolicyReviewLegislative />} />
        <Route path="/executive_orders_and_memo_generator" element={<ExecutiveOrdersAndMemoGenerator />} />
        <Route path="/executive_overview_landing" element={<ExecutiveOverviewLanding />} />
        <Route path="/project_monitoring_geotracker" element={<ProjectMonitoringGeotracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
