import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const socialMediaLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/braciate2025?igsh=MTF2d2VwODhqOGo3OA==",
    icon: <FaInstagram className="text-[#F3DE2C] w-full h-auto" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@braciate2025?_t=ZS-90BHbD7moXn&_r=1",
    icon: <FaTiktok className="text-[#F3DE2C] w-full h-auto" />,
  },
  {
    name: "WhatsApp",
    href: "http://wa.me/6287825340935",
    icon: <FaWhatsapp className="text-[#F3DE2C] w-full h-auto" />,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#F3DE2C] text-[#F913A1] py-10 px-12 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center mb-6">
          <div className="flex items-center justify-between md:justify-start w-full gap-4 md:gap-8">
            <div className="w-[14dvw] md:w-[10dvw]">
              <Image
                src="/landing-page/braciate-logo.png"
                alt="Brawijaya Appreciate Logo"
                width={230}
                height={230}
                className="w-full h-auto"
              />
            </div>
            <div
              className="font-retro text-6xl tracking-wider"
              style={{ fontSize: "clamp(30px, 5vw + 1px, 60px)" }}
            >
              <p>BRAWIJAYA</p>
              <p>APPRECIATE</p>
            </div>
            <div className="md:hidden w-[14dvw] md:w-[10dvw]">
              <Image
                src="/landing-page/braciate-logo.png"
                alt="Brawijaya Appreciate Logo"
                width={230}
                height={230}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F913A1] rounded-full p-[2dvw] lg:p-[1dvw] hover:opacity-50 transition-opacity"
                aria-label={social.name}
              >
                <div className="w-[4dvw] md:w-[3dvw] lg:w-[2dvw]">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-2 bg-[#F913A1] mb-4"></div>

        <div className="text-center text-xl font-medium font-retro">
          <p className="antialiased tracking-wider">
            Team IT Brawijaya Appreciate 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
