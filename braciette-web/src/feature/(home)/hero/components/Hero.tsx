import Image from "next/image";
function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-yellow w-full pt-10 lg:pt-0 h-screen z-40"
    >
      <Image
        src="/landing-page/lines.svg"
        alt="Lines Background"
        fill={true}
        objectFit="cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-max h-max flex flex-col items-center justify-center">
          <div className="w-[86dvw] h-[25dvh] md:h-[30dvh] lg:h-[50dvh] xl:h-[65dvh] lg:-translate-x-[2dvw] translate-y-[2dvh] lg:translate-y-[10dvh] relative">
            <Image
              src="/landing-page/hero.svg"
              alt="APPRECIATE"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center mt-4 md:mt-0">
            <div className="w-[12dvw] h-[10dvh] xl:h-[15dvh] relative md:translate-y-2 md:translate-x-10 lg:translate-y-4 xl:translate-y-2 lg:-translate-x-3 xl:-translate-x-12">
              <Image
                src="/landing-page/logo.svg"
                alt="Braciate Logo"
                fill={true}
                objectFit="contain"
              />
            </div>
            <p
              className="font-poppins text-purple font-bold w-90 md:w-120 xl:w-180 text-center md:text-right md:self-end"
              style={{ fontSize: "clamp(18px, 2vw, 32px)" }}
            >
              Bring The Great Story with Harmonization and Collaborative Simpul
              Brawijaya
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-max h-max top-20 md:top-35 lg:top-40 left-0">
        <div className="w-[15dvw] md:w-[6dvw] lg:w-[9dvw] h-[35dvh] md:h-[21dvh] lg:h-[40dvh] 2xl:w-[6dvw] relative">
          <Image
            src="/landing-page/flower.svg"
            alt="flower"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="absolute w-max h-max top-120 md:top-150 lg:top-85 right-0">
        <div className="w-[15dvw] md:w-[6dvw] lg:w-[4dvw] h-[35dvh] md:h-[14dvh] lg:h-[16dvh] 2xl:h-[25dvh] relative rotate-180">
          <Image
            src="/landing-page/flower.svg"
            alt="flower"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
