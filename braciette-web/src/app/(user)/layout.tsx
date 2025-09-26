// src/app/(main)/layout.tsx
import { Footer } from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthErrorProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
