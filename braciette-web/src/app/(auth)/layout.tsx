import React from "react";
import Navbar from "@/shared/navbar/Navbar";
import { Footer } from "@/shared/footer/Footer";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
