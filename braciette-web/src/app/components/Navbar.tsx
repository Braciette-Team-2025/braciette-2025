import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#faq", label: "FAQ" },
    { href: "/auth/login", label: "Login" },
  ];

  return (
    <nav className="fixed z-50 top-0 left-0 right-0">
      <ul
        className="flex flex-row justify-between items-center bg-pink p-6"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <li>
          <Link href="/" className="w-[85px] h-[85px]">
            <Image
              src="/landing-page/logo.svg"
              alt="Braciate Logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </Link>
        </li>
        <li className="font-poppins flex flex-row gap-20 text-[36px] items-center justify-center text-yellow">
          {navItems.map((item) => (
            <div key={item.href} className="relative group ">
              <Link href={item.href}>{item.label}</Link>

              {/* Dots */}
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
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
