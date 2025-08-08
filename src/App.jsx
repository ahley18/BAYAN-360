import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import AccountingOfficeDashboard from './accounting_office_dashboard';
import MayorComplianceAndAudit from './mayor_compliance_and_audit';
import MayorBudgetUtilizationAndFundTracking from './mayor_budget_utilization_and_fund_tracking';
import MayorEmergencyAndDisaster from './mayor_emergency_and_disaster';
import MayorPolicyReviewLegislative from './mayor_policy_review_legislative';
import MayorCitizenFeedbackAndPublicSentiment from './mayor_citizen_feedback_and_public_sentiment';
import ExecutiveOrdersAndMemoGenerator from './executive_orders_and_memo_generator';
import ExecutiveOverviewLanding from './executive_overview_landing';
import ProjectMonitoringGeoTracker from './project_monitoring_geotracker'; // ✅ Newly added

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<AccountingOfficeDashboard />} />
            <Route path="/mayor/compliance-and-audit" element={<MayorComplianceAndAudit />} />
            <Route path="/mayor/budget-utilization-and-fund-tracking" element={<MayorBudgetUtilizationAndFundTracking />} />
            <Route path="/mayor/emergency-and-disaster" element={<MayorEmergencyAndDisaster />} />
            <Route path="/mayor/policy-review-legislative" element={<MayorPolicyReviewLegislative />} />
            <Route path="/mayor/citizen-feedback-and-public-sentiment" element={<MayorCitizenFeedbackAndPublicSentiment />} />
            <Route path="/mayor/executive-orders-and-memo-generator" element={<ExecutiveOrdersAndMemoGenerator />} />
            <Route path="/mayor/executive-overview-landing" element={<ExecutiveOverviewLanding />} />
            <Route path="/mayor/project-monitoring-geotracker" element={<ProjectMonitoringGeoTracker />} /> {/* ✅ Added */}
        </Routes>
    );
};

export default App;
