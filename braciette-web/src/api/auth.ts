import { apiClient } from '@/api/core/AxiosInstance';
import { jwtDecode } from 'jwt-decode';

export interface LoginCredentials {
  id: string;
  password: string;
}

export interface UserProfile {
  nim: string;
  fullname: string;
  faculty: string;
}

interface LoginResponse {
  token: string;
}

class AuthService {
  async login(credentials: LoginCredentials) {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    const token = response.data.token;

    if (token) {
      this.setAuthCookie(token);
    }
    return response;
  }

  logout() {
    this.removeAuthCookie();
    window.location.href = '/login';
  }

  getUserFromCookie(): UserProfile | null {
    const token = this.getAuthCookie();
    if (!token) {
      return null;
    }
    try {
      const decoded: UserProfile = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode token:", error);
      this.removeAuthCookie();
      return null;
    }
  }

  private setAuthCookie(token: string) {
    document.cookie = `auth_session=${token}; path=/; max-age=604800; SameSite=Strict`;
  }

  getAuthCookie(): string | undefined {
    if (typeof document === "undefined") return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; auth_session=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return undefined;
  }

  private removeAuthCookie() {
    document.cookie = 'auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict';
  }
}

export const authService = new AuthService();