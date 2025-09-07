import Image from "next/image";
import GuideCard from "./Guide.card";

// PAGE ON HOLD, WAITING FOR FINAL DESIGN

function Guide() {
  const guidelines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

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
          <div className="absolute -rotate-12 md:rotate-0 top-[10dvh] md:-top-[7dvh] lg:-top-[6dvh] left-0 md:left-auto md:-right-[4dvw] z-10">
            <div className="relative w-[8dvw] h-[6dvh] md:w-[5dvw] md:h-[16dvh]">
              <Image
                src="/landing-page/star.svg"
                alt="star"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute rotate-12 md:rotate-0 top-[10dvh] md:top-0 lg:top-[3dvh] xl:top-[6dvh] right-0 md:-right-[5dvw] z-10">
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
            className="font-retro -translate-y-2 text-pink"
            style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
          >
            BRACIATE 2025
          </h2>
        </div>
        <div className="hidden md:block relative w-[11dvw] h-[15dvh] -translate-x-[6dvw]">
          <Image
            src="/landing-page/logo-alternate.svg"
            alt="Guide"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-10 flex-wrap gap-12">
        {guidelines.map((guideline, index) => (
          <GuideCard key={index} guideline={guideline} />
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
            src="/landing-page/logo-alternate.svg"
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
