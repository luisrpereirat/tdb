import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Document } from '../../types/document';
import api from '../../services/api';
import { FileText, Folder, MoreVertical } from 'lucide-react';

export default function DocumentList() {
  const { data: documents, isLoading, error } = useQuery<Document[]>({
    queryKey: ['documents'],
    queryFn: async () => {
      const response = await api.get('/documents');
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-500">Error loading documents</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Upload Document
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <ul className="divide-y divide-gray-200">
          {documents?.map((doc) => (
            <li key={doc.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {doc.type === 'folder' ? (
                    <Folder className="h-6 w-6 text-gray-400" />
                  ) : (
                    <FileText className="h-6 w-6 text-gray-400" />
                  )}
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                    <p className="text-sm text-gray-500">
                      Updated {new Date(doc.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}