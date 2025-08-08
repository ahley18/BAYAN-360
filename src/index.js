import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Dashboard from './accounting_office_dashboard.jsx';
import BarangayAggregatedReports from './barangay_aggregated_reports.jsx';
import BudgetUtilizationAndFundTracking from './budget_utilization_and_fund_tracking.jsx';
import CitizenFeedbackAndPublicSentiment from './citizen_feedback_and_public_sentiment.jsx';
import ComplianceAndAuditFlagsDashboard from './compliance_and_audit_flags_dashboard.jsx';
import DepartmentPerformanceScorecards from './department_performance_scorecards.jsx';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
