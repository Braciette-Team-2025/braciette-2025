import Image from "next/image";
import GuideCard from "./Guide.card";
import { GuideData } from "../data/guide-data";

function Guide() {
  return (
    <section className="w-full h-full py-[20dvh] z-50">
      <div className="w-full flex flex-row justify-center md:justify-between items-center">
        <div className="hidden md:flex flex-col gap-0">
          <div className="relative w-[10dvw] h-[6dvh]">
            <Image
              src="/landing-page/squiggly-pink.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="relative w-[10dvw] h-[6dvh]">
            <Image
              src="/landing-page/squiggly-pink.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="relative flex flex-col text-center gap-0">
          <div className="hidden md:block absolute -rotate-12 md:rotate-0 top-[8dvh] md:-top-[7dvh] lg:-top-[6dvh] left-0 md:left-auto md:-right-[4dvw] z-10">
            <div className="relative w-[8dvw] h-[6dvh] md:w-[5dvw] md:h-[16dvh]">
              <Image
                src="/landing-page/star.svg"
                alt="star"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="hidden md:block absolute rotate-12 md:rotate-0 top-[8dvh] md:top-0 lg:top-[3dvh] xl:top-[6dvh] right-0 md:-right-[5dvw] z-10">
            <div className="relative w-[8dvw] h-[6dvh] md:w-[3dvw] md:h-[10dvh]">
              <Image
                src="/landing-page/star.svg"
                alt="star"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <h1
            className="font-yourmate translate-y-2 text-green"
            style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
          >
            GUIDE VOTING
          </h1>
          <h2
            className="font-retro -translate-y-4 xl:-translate-y-8 text-pink"
            style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
          >
            Braciate 2025
          </h2>
        </div>
        <div className="hidden md:block relative w-[11dvw] h-[15dvh] -translate-x-[6dvw]">
          <Image
            src="/landing-page/braciate-logo.png"
            alt="Guide"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-10 flex-wrap gap-12">
        {GuideData.map((guideline, index) => (
          <GuideCard key={index} guideline={guideline.step} />
        ))}
      </div>
      <div className="flex justify-between items-center md:justify-end">
        <div className="flex md:hidden flex-col gap-0">
          <div className="relative w-[20dvw] h-[6dvh] md:h-[10dvh]">
            <Image
              src="/landing-page/squiggly-pink.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="relative w-[20dvw] h-[6dvh] md:h-[10dvh]">
            <Image
              src="/landing-page/squiggly-blue.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="block md:hidden relative w-[25dvw] h-[10dvh]">
          <Image
            src="/landing-page/braciate-logo.png"
            alt="Guide"
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="md:hidden relative w-[20dvw] h-[6dvh] md:h-[10dvh]">
            <Image
              src="/landing-page/squiggly-pink.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="hidden md:block relative w-[20dvw] h-[6dvh] md:h-[10dvh]">
            <Image
              src="/landing-page/squiggly-blue.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="relative w-[20dvw] h-[6dvh] md:h-[10dvh]">
            <Image
              src="/landing-page/squiggly-blue.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
