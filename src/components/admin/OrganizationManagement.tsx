import React from 'react';
import { Building2, Plus } from 'lucide-react';

interface Organization {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'inactive';
  userCount: number;
}

const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Acme Corp',
    domain: 'acme.com',
    status: 'active',
    userCount: 25,
  },
  {
    id: '2',
    name: 'TechStart Inc',
    domain: 'techstart.io',
    status: 'active',
    userCount: 15,
  },
];

export default function OrganizationManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Organizations</h2>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Organization
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockOrganizations.map((org) => (
          <div key={org.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Building2 className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{org.name}</h3>
                <p className="text-sm text-gray-500">{org.domain}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Users: {org.userCount}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                org.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {org.status}
              </span>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 text-sm text-indigo-600 hover:text-indigo-900">
                Manage
              </button>
              <button className="flex-1 text-sm text-gray-600 hover:text-gray-900">
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}