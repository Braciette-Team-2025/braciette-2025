import Image from "next/image";
function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-yellow w-full pt-0 min-h-screen z-40 flex flex-col justify-between"
    >
      <Image
        src="/landing-page/lines.svg"
        alt="Lines Background"
        fill={true}
        objectFit="cover"
      />
      <div className="w-full h-screen lg:h-full flex flex-col justify-center items-center">
        <div className="w-max h-max flex flex-col items-center justify-center">
          <div className="w-[86dvw] h-[25dvh] md:h-[30dvh] lg:h-[50dvh] xl:h-[65dvh] lg:-translate-x-[2dvw]  lg:translate-y-[10dvh] relative">
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
              className="-mt-10 md:mt-0 font-poppins text-purple font-bold w-90 md:w-120 xl:w-180 text-center md:text-right md:self-end"
              style={{ fontSize: "clamp(18px, 2vw, 32px)" }}
            >
              Bring The Great Story with Harmonization and Collaborative Simpul
              Brawijaya
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-15 md:w-20 lg:w-30 xl:w-40 top-5 left-0">
        <Image
          src="/landing-page/flower.svg"
          alt="flower"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute w-15 xl:w-20 top-110 lg:top-50 right-0 rotate-180">
        <Image
          src="/landing-page/flower.svg"
          alt="flower"
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full h-max md:h-[35rem] overflow-hidden flex justify-start items-end xl:items-start">
        <Image
          src="/landing-page/blue-wave.svg"
          alt="Wave"
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
