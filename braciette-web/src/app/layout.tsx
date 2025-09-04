import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const retroFont = localFont({
  src: [
    {
      path: "../../public/fonts/retro.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-retro",
});

export const metadata: Metadata = {
  title: "Braciette 2025",
  description: "Brawijaya Appreciate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${retroFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
