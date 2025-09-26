'use client';

import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { authService, LoginCredentials, UserProfile } from '@/api/auth';
import { apiClient } from "@/api/core/AxiosInstance";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const existingUser = authService.getUserFromCookie();
      if (existingUser) {
        setUser(existingUser);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
    
    apiClient.setAuthErrorHandler(() => {
        logout();
    });

  }, []);

  const login = async (credentials: LoginCredentials) => {
    await authService.login(credentials);
    const loggedInUser = authService.getUserFromCookie();
    setUser(loggedInUser);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};