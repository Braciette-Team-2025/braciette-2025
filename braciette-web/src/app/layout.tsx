import type { Metadata } from "next";
import { Jersey_10, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const retro = Jersey_10({
  variable: "--font-retro",
  weight: ["400"],
  subsets: ["latin"],
});

const yourmate = localFont({
  src: "../../public/fonts/yourmate.ttf",
  variable: "--font-yourmate",
});

export const metadata: Metadata = {
  title: "Braciate 2025",
  description: "Brawijaya Appreciate Website",
   icons: {
    icon: "/logobraciette.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${retro.variable} ${yourmate.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
