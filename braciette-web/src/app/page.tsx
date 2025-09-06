import Hero from "../feature/(home)/hero/components/Hero";
import Navbar from "../feature/(home)/hero/components/Navbar";
import { Footer } from "@/shared/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
