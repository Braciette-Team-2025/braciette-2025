// src/shared/components/ui/Toast.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import React from "react";

// Tipe props tidak berubah
export interface ToastProps {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title?: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

// Objek untuk styling, biar lebih rapi daripada switch-case
const toastVariants = {
  success: {
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    style: "bg-green-50 border-green-200 text-green-800",
  },
  error: {
    icon: <AlertCircle className="h-5 w-5 text-red-500" />,
    style: "bg-red-50 border-red-200 text-red-800",
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    style: "bg-yellow-50 border-yellow-200 text-yellow-800",
  },
  info: {
    icon: <Info className="h-5 w-5 text-blue-500" />,
    style: "bg-blue-50 border-blue-200 text-blue-800",
  },
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const variant = toastVariants[type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`max-w-sm w-full border rounded-lg shadow-lg p-4 ${variant.style}`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">{variant.icon}</div>
        <div className="ml-3 w-0 flex-1">
          {title && <p className="text-sm font-medium">{title}</p>}
          <p className={`text-sm ${title ? "mt-1" : ""}`}>{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={() => onClose(id)}
            className="inline-flex rounded-md p-1.5 transition-colors hover:bg-black/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
