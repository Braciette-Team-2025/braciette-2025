import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const retro = localFont({
  src: "../../public/fonts/retro.ttf",
  variable: "--font-retro",
});

export const metadata: Metadata = {
  title: "Braciate 2025",
  description: "Brawijaya Appreciate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${retro.variable}`}>
        {children}
      </body>
    </html>
  );
}
