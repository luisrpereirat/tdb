import axios from 'axios';
import { mockDocuments, mockUsers, mockAuditLogs } from './mockData';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://4.1.103.60:3000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock API interceptor
api.interceptors.request.use(async (config) => {
  const useMockData = localStorage.getItem('useMockData') === 'true';
  
  if (useMockData) {
    const mockResponses: Record<string, any> = {
      '/documents': mockDocuments,
      '/admin/users': mockUsers,
      '/audit-logs': mockAuditLogs,
    };

    const mockResponse = mockResponses[config.url || ''];
    if (mockResponse) {
      throw new axios.Cancel('Mock data', { response: { data: mockResponse } });
    }
  }

  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isCancel(error) && error.response) {
      return Promise.resolve(error.response);
    }

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;