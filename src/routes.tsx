import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import DocumentList from './components/documents/DocumentList';
import UserManagement from './components/admin/UserManagement';
import OrganizationManagement from './components/admin/OrganizationManagement';
import IntegrationSettings from './components/admin/IntegrationSettings';
import AuditLogs from './components/audit/AuditLogs';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user?.role === 'admin' ? <>{children}</> : <Navigate to="/" />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<DocumentList />} />
        <Route path="audit" element={<AuditLogs />} />
        
        <Route
          path="admin"
          element={
            <AdminRoute>
              <Routes>
                <Route path="users" element={<UserManagement />} />
                <Route path="organizations" element={<OrganizationManagement />} />
                <Route path="integrations" element={<IntegrationSettings />} />
              </Routes>
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
}