import Image from "next/image";
function Hero() {
  return (
    <section id="hero" className="relative bg-yellow w-full h-screen z-40">
      <Image
        src="/landing-page/lines.svg"
        alt="Hero Image"
        fill={true}
        objectFit="cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-max h-max flex flex-col">
          <div className="w-[86dvw] h-[65dvh] -translate-x-[2dvw] translate-y-[10dvh] relative">
            <Image
              src="/landing-page/hero.svg"
              alt="A"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-[15dvw] h-[15dvh] relative translate-y-2 -translate-x-12">
              <Image
                src="/landing-page/logo.svg"
                alt="Braciate Logo"
                fill={true}
                objectFit="contain"
              />
            </div>
            <p className="font-poppins text-[26px] text-purple font-bold w-180 text-right self-end">
              Bring The Great Story with Harmonization and Collaborative Simpul
              Brawijaya
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-max h-max top-40 left-0">
        <div className="w-[9dvw] h-[40dvh] relative">
          <Image
            src="/landing-page/flower.svg"
            alt="flower"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="absolute w-max h-max top-85t right-0">
        <div className="w-[5dvw] h-[20dvh] relative rotate-180">
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
