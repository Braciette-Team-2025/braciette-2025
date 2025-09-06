import Guide from "@/feature/(home)/guide/components/Guide";
import Hero from "../feature/(home)/hero/components/Hero";
import Navbar from "../feature/(home)/hero/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-dark-blue min-h-screen">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Lines Background"
          fill={true}
          objectFit="cover"
        />
        <Hero />
        <Guide />
      </main>
    </>
  );
}
