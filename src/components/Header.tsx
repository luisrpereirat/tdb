import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Bell } from 'lucide-react';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Document Broker
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-700">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}