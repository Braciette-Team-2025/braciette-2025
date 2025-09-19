import Guide from "@/feature/(user)/home/guide/components/Guide";
import Hero from "@/feature/(user)/home/hero/components/Hero";
import Image from "next/image";
import Hotpicks from "@/feature/(user)/home/hotpicks/components/Hotpicks";
import FAQ from "@/feature/(user)/home/faq/components/FAQ";
import About from "@/feature/(user)/home/about-us/components/About";
import Timeline from "@/feature/(user)/home/timeline/components/Timeline";

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
        <About />
        <Timeline />
        <Guide />
        <Hotpicks />
        <FAQ />
      </main>
    </>
  );
}
