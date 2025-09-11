// src/shared/footer/Footer.tsx

import Image from "next/image";
import Link from "next/link";

// Ganti semua import SVG dengan import dari react-icons
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

// Definisikan daftar sosial media menggunakan komponen dari react-icons
const socialMediaLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram className="text-[#F3DE2C] w-10 h-10" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com",
    icon: <FaTiktok className="text-[#F3DE2C] w-10 h-10" />,
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com",
    icon: <FaWhatsapp className="text-[#F3DE2C] w-10 h-10" />,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#F3DE2C] text-[#F913A1] py-10 px-12 font-sans">
      <div className="container mx-auto">
        {/* Bagian Atas: Logo & Sosmed */}
        <div className="flex justify-between items-center mb-6">
          {/* Sisi Kiri: Logo & Nama Website */}
          <div className="flex items-center gap-8">
            <Image
              src="/logobraciette.svg"
              alt="Brawijaya Appreciate Logo"
              width={300}
              height={300}
            />
            <div className="font-retro text-7xl tracking-wider">
              <p>BRAWIJAYA</p>
              <p>APPRECIATE</p>
            </div>
          </div>

          {/* Sisi Kanan: Ikon Sosial Media */}
          <div className="flex items-center gap-4">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F913A1] rounded-full p-8 hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-2 bg-[#F913A1] mb-4"></div>

        {/* Teks Copyright */}
        <div className="text-center text-2xl font-semibold font-retro">
          <p>Team IT Brawijaya Appreciate 2025</p>
        </div>
      </div>
    </footer>
  );
};
