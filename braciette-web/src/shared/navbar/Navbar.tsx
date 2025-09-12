"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/faq", label: "FAQ" },
    { href: "/rank", label: "Rank" },
    { href: "/login", label: "Login" },
  ];

  return (
    <nav
      className="sticky top-0 z-90 bg-pink"
      style={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex flex-row justify-between items-center p-4">
        <Link href="/" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]">
          <Image
            src="/landing-page/logo.svg"
            alt="Braciate Logo"
            width={30}
            height={30}
            className="w-full h-full"
          />
        </Link>

        <div className="font-poppins hidden md:flex flex-row gap-20 items-center justify-center text-yellow text-2xl md:text-2xl">
          {navItems.map((item) => (
            <div key={item.href} className="relative group ">
              <Link href={item.href}>{item.label}</Link>
              <span className="absolute left-1/2 -translate-x-1/2 top-full flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-yellow-300 rounded-full"
                  />
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden bg-pink font-poppins text-yellow text-center h-screen flex flex-col justify-center items-center"
          style={{ boxShadow: "0 18px 20px rgba(0, 0, 0, 0.25)" }}
        >
          <ul className="flex flex-col items-center justify-center gap-18 py-8 -translate-y-[60px]">
            {navItems.map((item) => (
              <li key={item.href} className="text-4xl font-semibold">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
