import Guide from "@/feature/(home)/guide/components/Guide";
import Hero from "@/feature/(home)/hero/components/Hero";
import Image from "next/image";
import Hotpicks from "@/feature/(home)/hotpicks/components/Hotpicks";
import FAQ from "@/feature/(home)/faq/components/FAQ";

export default function Home() {
  return (
    <>
      <main className="relative bg-dark-blue max-w-screen min-h-screen">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Lines Background"
          fill={true}
          objectFit="cover"
        />
        <Hero />
        <Guide />
        <Hotpicks />
        <FAQ />
      </main>
    </>
  );
}
