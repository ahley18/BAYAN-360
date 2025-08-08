import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import AccountingOfficeDashboard from './accounting_office_dashboard';
import MayorComplianceAndAudit from './mayor_compliance_and_audit';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<AccountingOfficeDashboard />} />
            <Route path="/mayor/compliance-and-audit" element={<MayorComplianceAndAudit />} />
        </Routes>
    );
};

export default App;
