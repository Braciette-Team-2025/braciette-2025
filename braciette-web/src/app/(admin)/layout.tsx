// src/app/(main)/layout.tsx
import { AuthProvider } from "@/shared/context/AuthContext"; // <-- Import AuthProvider
import { AuthErrorProvider } from "@/shared/context/AuthErrorContext";
import { QueryProvider } from "@/shared/provider/QueryProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <AuthErrorProvider>
          <main>{children}</main>
        </AuthErrorProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
