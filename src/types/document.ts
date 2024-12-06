export interface Document {
  id: string;
  title: string;
  description: string;
  type: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  organizationId: string;
  permissions: string[];
  metadata: Record<string, unknown>;
  parentId: string | null;
}

export interface DocumentFolder {
  id: string;
  name: string;
  path: string;
  parentId: string | null;
  organizationId: string;
  documents: Document[];
  subfolders: DocumentFolder[];
}