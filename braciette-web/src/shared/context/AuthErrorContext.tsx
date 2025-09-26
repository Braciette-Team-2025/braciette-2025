// src/shared/context/AuthErrorContext.tsx
"use client";

import { apiClient } from "@/api/core/AxiosInstance";
import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useRef } from "react";

interface AuthError extends Error {
  response?: {
    status: number;
    data?: unknown;
  };
}

interface AuthErrorContextType {
  handleAuthError: (error: AuthError | AxiosError) => void;
}

export const AuthErrorContext = createContext<AuthErrorContextType | undefined>(
  undefined,
);

export const AuthErrorProvider = ({ children }: { children: ReactNode }) => {
  
  const isRedirectingRef = useRef(false);

  const handleAuthError = (error: AuthError | AxiosError) => {
    if ('response' in error && error.response?.status === 401) {
      if (isRedirectingRef.current) return;
      isRedirectingRef.current = true;

      document.cookie = 'auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict';

      alert("Sesi Anda telah berakhir. Silakan login kembali.");
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }
  };

  useEffect(() => {
    apiClient.setAuthErrorHandler(handleAuthError);
  }, []);

  const contextValue: AuthErrorContextType = {
    handleAuthError,
  };

  return (
    <AuthErrorContext.Provider value={contextValue}>
      {children}
    </AuthErrorContext.Provider>
  );
};