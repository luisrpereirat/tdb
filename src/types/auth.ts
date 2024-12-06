export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  organizationId: string;
  permissions: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}