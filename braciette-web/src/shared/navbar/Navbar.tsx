"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/shared/context/AuthContext";
import { rankDropdownLinks } from "@/shared/data/dataNav";
import { Menu, X } from "lucide-react";

const NavHoverEffect = () => (
  <span className="absolute left-1/2 -translate-x-1/2 top-full flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
    ))}
  </span>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRankDropdownOpen, setIsRankDropdownOpen] = useState(false);
  const { isAuthenticated, logout, isLoading } = useAuth();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-pink"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-row justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]">
          <Image
            src="/landing-page/logo.svg"
            alt="Braciate Logo"
            width={70}
            height={70}
          />
        </Link>

        <div className="font-poppins hidden md:flex flex-row gap-20 items-center text-yellow text-xl font-medium md:text-2xl">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link href={item.href}>{item.label}</Link>
              <NavHoverEffect />
            </div>
          ))}

          {isAuthenticated && (
            <div className="relative group">
              <Link href="/choose">Vote</Link>
              <NavHoverEffect />
            </div>
          )}

          <div className="relative">
            <div className="relative group">
              <button
                className="cursor-pointer"
                onClick={() => setIsRankDropdownOpen(!isRankDropdownOpen)}
              >
                Rank
              </button>
              <NavHoverEffect />
            </div>
            <div
              className={`hidden md:flex absolute flex-col bg-pink py-2 px-4 rounded-md shadow-lg ${
                isRankDropdownOpen
                  ? "top-16 opacity-100"
                  : "top-24 opacity-0 pointer-events-none"
              } -left-[80%] transition-all duration-300 font-medium font-poppins`}
            >
              {rankDropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150 rounded-md whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="w-20 h-8 bg-yellow/20 rounded-md animate-pulse" />
          ) : isAuthenticated ? (
            <div className="relative group">
              <button onClick={logout} className="cursor-pointer">
                Logout
              </button>
              <NavHoverEffect />
            </div>
          ) : (
            <div className="relative group">
              <Link href="/login">Login</Link>
              <NavHoverEffect />
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden bg-pink font-poppins text-yellow text-center h-screen flex flex-col justify-center items-center"
          style={{ boxShadow: "0 18px 20px rgba(0, 0, 0, 0.25)" }}
        >
          <ul className="flex flex-col items-center justify-center gap-12 py-8 -translate-y-[60px]">
            {navItems.map((item) => (
              <li key={item.href} className="text-4xl font-medium">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}

            {isAuthenticated && (
              <li className="text-4xl font-medium">
                <Link
                  href="/choose"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vote
                </Link>
              </li>
            )}

            <li className="text-4xl font-medium">
              <button
                onClick={() => setIsRankDropdownOpen(!isRankDropdownOpen)}
              >
                Rank
              </button>
              {isRankDropdownOpen && (
                <div className="flex justify-center items-center gap-4 text-2xl mt-8">
                  <div className="flex flex-col gap-4 w-35">
                    {rankDropdownLinks.slice(0, 2).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 w-35">
                    {rankDropdownLinks.slice(2, 4).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li className="text-4xl font-medium">
              {isLoading ? (
                <div className="w-32 h-10 bg-yellow/20 rounded-md animate-pulse" />
              ) : isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
