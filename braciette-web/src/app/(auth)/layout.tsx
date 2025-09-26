import React, { Suspense } from "react";
import Navbar from "@/shared/navbar/Navbar";
import { Footer } from "@/shared/footer/Footer";
import { AuthProvider } from "@/shared/context/AuthContext";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </AuthProvider>
    </>
  );
}
