"use client";
import Image from "next/image";
import CardSwap, { Card } from "../../../../../components/CardSwap";

function About() {
  return (
    <section className="flex flex-col justify-center items-center bg-blue">
      <div className="w-full h-full z-40 bg-blue flex flex-row justify-center lg:justify-between items-center px-8 md:px-20 2xl:px-30 pb-[20dvh]">
        <div className="w-[80dvw] lg:w-[55dvw]">
          <h1
            className="font-yourmate text-green lg:text-left text-center"
            style={{ fontSize: "clamp(45px, 5vw + 1rem, 120px)" }}
          >
            About Us
          </h1>
          <h2
            className="-mt-4 lg:-mt-10 font-retro text-pink lg:text-left text-center"
            style={{ fontSize: "clamp(36px, 4vw + 1rem, 96px)" }}
          >
            BRACIATE 2025
          </h2>
          <p
            className="font-poppins font-medium text-white text-justify lg:text-justify md:text-center lg:pr-12"
            style={{ fontSize: "clamp(16px, 0.3vw + 1rem, 36px)" }}
          >
            Brawijaya Appreciate merupakan program kerja yang diselenggarakan
            Kementerian Dalam Negeri EM UB 2024 yang Bertujuan untuk
            meningkatkan keharmonisan antar lembaga-lembaga di Universitas
            Brawijaya. Brawijaya Appreciate terdiri atas tiga rangkaian kegiatan
            yaitu pre-event, main-event, dan post-event. Acara puncak akan diisi
            oleh penampilan UKM yang ada di Universitas Brawijaya.
          </p>
        </div>
        <div className="hidden h-[400px] lg:translate-x-40 2xl:translate-x-0 relative lg:flex justify-center items-center">
          <CardSwap
            onCardClick={(index) => console.log(`Card ${index + 1} clicked`)}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div className="w-full h-full">
                <div className="bg-green w-full h-10 flex flex-row justify-between items-center px-4 py-8 border-b-4 border-black">
                  <Image
                    src="/landing-page/card-dots.svg"
                    alt="dots"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/landing-page/card-heart.svg"
                    alt="dots"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="relative w-full h-full rounded-b-[12px] overflow-hidden">
                  <Image
                    src="/landing-page/card-placeholder.png"
                    alt="About Mascot"
                    fill={true}
                    objectFit="cover"
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div className="w-full h-full">
                <div className="bg-pink w-full h-10 flex flex-row justify-between items-center px-4 py-8 border-b-4 border-black">
                  <Image
                    src="/landing-page/card-dots.svg"
                    alt="dots"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/landing-page/card-heart.svg"
                    alt="dots"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="relative w-full h-full rounded-b-[12px] overflow-hidden">
                  <Image
                    src="/landing-page/card-placeholder.png"
                    alt="About Mascot"
                    fill={true}
                    objectFit="cover"
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div className="w-full h-full">
                <div className="bg-purple w-full h-10 flex flex-row justify-between items-center px-4 py-8 border-b-4 border-black">
                  <Image
                    src="/landing-page/card-dots.svg"
                    alt="dots"
                    width={10}
                    height={10}
                  />
                  <Image
                    src="/landing-page/card-heart.svg"
                    alt="dots"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="relative w-full rounded-b-[12px] overflow-hidden flex justify-center">
                  <Image
                    src="/landing-page/card-placeholder.png"
                    alt="About Mascot"
                    width={100}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default About;
