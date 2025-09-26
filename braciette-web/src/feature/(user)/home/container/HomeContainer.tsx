import Image from "next/image";
import Hero from "../hero/components/Hero";
import About from "../about-us/components/About";
import Timeline from "../timeline/components/Timeline";
import Guide from "../guide/components/Guide";
import Hotpicks from "../hotpicks/components/Hotpicks";
import FAQ from "../faq/components/FAQ";
import Sponsorship from "../sponsorship/components/Sponsorship";

export function HomeContainer() {
  return (
    <main className="relative bg-dark-blue max-w-screen min-h-screen overflow-clip">
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
      <Sponsorship />
    </main>
  );
}
