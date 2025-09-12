/**
@description
 */
export interface LoginForm {
  email: string;
  password: string;
}

/**
@description
 */
export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  token: string;
}