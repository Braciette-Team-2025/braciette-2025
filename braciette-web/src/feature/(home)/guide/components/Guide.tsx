import Image from "next/image";
import GuideCard from "./Guide.card";

function Guide() {
  const guidelines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <section className="w-full h-full py-[20dvh]">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-col gap-0">
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
          <div className="absolute -top-[6dvh] -right-[4dvw] z-10">
            <div className="relative w-[5dvw] h-[16dvh]">
              <Image
                src="/landing-page/star.svg"
                alt="star"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute top-[6dvh] -right-[5dvw] z-10">
            <div className="relative w-[3dvw] h-[10dvh]">
              <Image
                src="/landing-page/star.svg"
                alt="star"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <h1 className="font-yourmate text-[96px] translate-y-2 text-green">
            GUIDE VOTING
          </h1>
          <h2 className="font-retro text-[96px] -translate-y-2 text-pink">
            BRACIATE 2025
          </h2>
        </div>
        <div className="relative w-[11dvw] h-[21dvh] -translate-x-26">
          <Image
            src="/landing-page/logo-alternate.svg"
            alt="Guide"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center py-10 px-26">
        {guidelines.map((guideline, index) => (
          <GuideCard key={index} guideline={guideline} />
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-0">
          <div className="relative w-[20dvw] h-[10dvh]">
            <Image
              src="/landing-page/squiggly-blue.svg"
              alt="squiggly"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="relative w-[20dvw] h-[10dvh]">
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
