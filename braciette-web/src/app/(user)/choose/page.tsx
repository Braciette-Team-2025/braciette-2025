import Choose from "@/feature/(user)/choose/choose-lkm/components/Choose";
import Navbar from "@/shared/navbar/Navbar";
import { Footer } from "@/shared/footer/Footer";
import Image from "next/image";

export default function ChooseLKM() {
  return (
    <>
      <main className="relative bg-blue py-0 md:py-[20dvh]">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Lines Background"
          fill={true}
          objectFit="cover"
        />
        <Choose />
      </main>
    </>
  );
}
