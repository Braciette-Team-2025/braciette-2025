import Image from "next/image";
function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-yellow w-full h-[60dvh] pt-10 lg:pt-0 lg:h-screen z-40"
    >
      <Image
        src="/landing-page/lines.svg"
        alt="Hero Image"
        fill={true}
        objectFit="cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-max h-max flex flex-col items-center justify-center">
          <div className="w-[86dvw] h-[25dvh] md:h-[30dvh] lg:h-[50dvh] xl:h-[65dvh] lg:-translate-x-[2dvw] translate-y-[2dvh] lg:translate-y-[10dvh] relative">
            <Image
              src="/landing-page/hero.svg"
              alt="A"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="w-[12dvw] h-[10dvh] xl:h-[15dvh] relative translate-y-2 lg:translate-y-0 xl:translate-y-2 lg:-translate-x-5 xl:-translate-x-12">
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
      <div className="absolute w-max h-max top-30 md:top-35 lg:top-40 left-0">
        <div className="w-[9dvw] md:w-[6dvw] lg:w-[9dvw] h-[16dvh] md:h-[21dvh] lg:h-[40dvh] relative">
          <Image
            src="/landing-page/flower.svg"
            alt="flower"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="absolute w-max h-max top-100 md:top-85 right-0">
        <div className="w-[9dvw] md:w-[6dvw] lg:w-[4dvw] h-[16dvh] md:h-[14dvh] lg:h-[16dvh] relative rotate-180">
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
