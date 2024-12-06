export interface AuditLog {
  id: string;
  action: string;
  userId: string;
  userName: string;
  resourceType: string;
  resourceId: string;
  timestamp: string;
  details: string;
}