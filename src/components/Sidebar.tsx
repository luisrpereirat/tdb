import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Files, 
  Users, 
  Building2, 
  Settings,
  History,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold text-lg">Tomahawk</span>
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700 ${
                isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            <Files className="w-5 h-5 mr-3" />
            <span>Documents</span>
          </NavLink>

          <NavLink
            to="/audit"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700 ${
                isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            <History className="w-5 h-5 mr-3" />
            <span>Audit Logs</span>
          </NavLink>

          {user?.role === 'admin' && (
            <>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                <Users className="w-5 h-5 mr-3" />
                <span>Users</span>
              </NavLink>

              <NavLink
                to="/admin/organizations"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                <Building2 className="w-5 h-5 mr-3" />
                <span>Organizations</span>
              </NavLink>

              <NavLink
                to="/admin/integrations"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Integrations</span>
              </NavLink>
            </>
          )}
        </nav>

        <div className="p-4">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-gray-100 rounded-lg hover:bg-gray-700"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}