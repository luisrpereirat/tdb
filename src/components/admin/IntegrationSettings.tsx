import React from 'react';
import { Settings, Link, RefreshCw } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  type: 'codebeamer' | 'oslc';
  status: 'connected' | 'disconnected';
  lastSync?: string;
}

const mockIntegrations: Integration[] = [
  {
    id: '1',
    name: 'CodeBeamer Production',
    type: 'codebeamer',
    status: 'connected',
    lastSync: '2024-02-28T15:30:00Z',
  },
  {
    id: '2',
    name: 'OSLC Server',
    type: 'oslc',
    status: 'disconnected',
  },
];

export default function IntegrationSettings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Integration Settings</h2>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Link className="h-5 w-5 mr-2" />
          New Integration
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockIntegrations.map((integration) => (
          <div key={integration.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {integration.type}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                integration.status === 'connected'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {integration.status}
              </span>
            </div>

            {integration.lastSync && (
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <RefreshCw className="h-4 w-4 mr-1" />
                Last synced: {new Date(integration.lastSync).toLocaleString()}
              </div>
            )}

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 text-sm text-indigo-600 hover:text-indigo-900">
                Configure
              </button>
              <button className="flex-1 text-sm text-gray-600 hover:text-gray-900">
                View Logs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}