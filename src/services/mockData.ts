import type { Document } from '../types/document';
import type { User } from '../types/auth';
import type { AuditLog } from '../types/audit';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Project Requirements',
    description: 'Main project requirements document',
    type: 'document',
    path: '/documents/requirements.pdf',
    createdAt: '2024-02-28T10:00:00Z',
    updatedAt: '2024-02-28T15:30:00Z',
    createdBy: 'user1',
    organizationId: 'org1',
    permissions: ['read', 'write'],
    metadata: {
      version: '1.0',
      status: 'active'
    },
    parentId: null
  },
  {
    id: '2',
    title: 'Technical Specifications',
    description: 'Detailed technical specifications',
    type: 'folder',
    path: '/documents/tech-specs',
    createdAt: '2024-02-27T09:00:00Z',
    updatedAt: '2024-02-28T14:20:00Z',
    createdBy: 'user2',
    organizationId: 'org1',
    permissions: ['read'],
    metadata: {
      category: 'technical'
    },
    parentId: null
  }
];

export const mockUsers: User[] = [
  {
    id: 'user1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    organizationId: 'org1',
    permissions: ['admin']
  },
  {
    id: 'user2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    organizationId: 'org1',
    permissions: ['read', 'write']
  }
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: '1',
    action: 'VIEW',
    userId: 'user1',
    userName: 'Admin User',
    resourceType: 'document',
    resourceId: '1',
    timestamp: '2024-02-28T15:30:00Z',
    details: 'Viewed Project Requirements document'
  },
  {
    id: '2',
    action: 'EDIT',
    userId: 'user2',
    userName: 'Regular User',
    resourceType: 'document',
    resourceId: '2',
    timestamp: '2024-02-28T14:20:00Z',
    details: 'Updated Technical Specifications folder'
  }
];