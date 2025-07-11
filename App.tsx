import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/Login/LoginPage';
import DashboardLayout from './components/Layout/DashboardLayout';
import ModuleLayout from './components/Layout/ModuleLayout';
import DashboardHome from './components/Dashboard/DashboardHome';
import CRMDashboard from './components/Modules/CRM/CRMDashboard';
import CustomerManagement from './components/Modules/CRM/CustomerManagement';
import LeadManagement from './components/Modules/CRM/LeadManagement';
import ContractManagement from './components/Modules/CRM/ContractManagement';
import TicketManagement from './components/Modules/CRM/TicketManagement';
import QuotationManagement from './components/Modules/CRM/QuotationManagement';
import ProjectDashboard from './components/Modules/Project/ProjectDashboard';
import InventoryDashboard from './components/Modules/Inventory/InventoryDashboard';
import ProcurementDashboard from './components/Modules/Procurement/ProcurementDashboard';
import TravelDashboard from './components/Modules/Travel/TravelDashboard';
import CXODashboard from './components/Modules/CXO/CXODashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboard Route - No Sidebar */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
          </Route>
          
          {/* Module Routes - With Sidebar */}
          <Route path="/" element={
            <ProtectedRoute>
              <ModuleLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="crm" element={<CRMDashboard />} />
            <Route path="crm/customers" element={<CustomerManagement />} />
            <Route path="crm/leads" element={<LeadManagement />} />
            <Route path="crm/contracts" element={<ContractManagement />} />
            <Route path="crm/tickets" element={<TicketManagement />} />
            <Route path="crm/quotations" element={<QuotationManagement />} />
            <Route path="project-management" element={<ProjectDashboard />} />
            <Route path="inventory" element={<InventoryDashboard />} />
            <Route path="procurement" element={<ProcurementDashboard />} />
            <Route path="travel" element={<TravelDashboard />} />
            <Route path="cxo-dashboard" element={<CXODashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;