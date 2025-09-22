import Image from "next/image";
import animate from "../../styles/Animation.module.css";

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
          <div
            className={`w-[75dvw] lg:-translate-x-[2dvw] -mt-30 md:-mt-40 lg:-mt-0 lg:translate-y-[10dvh] relative ${animate.slideFadeIn}`}
          >
            <Image
              src="/landing-page/hero.svg"
              alt="APPRECIATE"
              width={100}
              height={100}
              className="w-full h-auto"
            />
            {/* Desktop View */}
            <div
              className={`hidden md:block absolute w-[8dvw] -bottom-[12%] left-[2%] ${animate.slideFadeInLeft}`}
            >
              <Image
                src="/landing-page/logo.svg"
                alt="Braciate Logo"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <p
              className={`hidden md:block absolute -bottom-15 right-0 font-poppins text-purple font-bold w-120 xl:w-180 text-center md:text-right md:self-end ${animate.slideFadeInRight}`}
              style={{ fontSize: "clamp(18px, 2vw, 32px)" }}
            >
              Bring The Great Story with Harmonization and Collaborative Simpul
              Brawijaya
            </p>
          </div>
          {/* Mobile View */}
          <div className="w-full flex md:hidden flex-col-reverse md:flex-row justify-between items-center mt-4 md:mt-0">
            <div
              className={`w-[12dvw] h-[10dvh] xl:h-[15dvh] relative md:translate-y-2 md:translate-x-10 lg:translate-y-4 xl:translate-y-2 lg:-translate-x-3 xl:-translate-x-12 ${animate.slideFadeInDown}`}
            >
              <Image
                src="/landing-page/logo.svg"
                alt="Braciate Logo"
                fill={true}
                objectFit="contain"
              />
            </div>
            <p
              className={`font-poppins text-purple font-bold w-90 md:w-120 xl:w-180 text-center md:text-right md:self-end ${animate.slideFadeInDown}`}
              style={{ fontSize: "clamp(18px, 2vw, 32px)" }}
            >
              Bring The Great Story with Harmonization and Collaborative Simpul
              Brawijaya
            </p>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-[40dvw] -left-[25%] sm:w-[30dvw] sm:-left-[18%] md:w-[20dvw] lg:w-[15dvw] top-10 md:-left-[10%] lg:-left-[8%] ${animate.spin}`}
      >
        <Image
          src="/landing-page/flower.svg"
          alt="flower"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>
      <div
        className={`absolute w-[40dvw] -right-[25%] sm:w-[30dvw] sm:-right-[18%] lg:w-[10dvw] lg:-right-[6%] top-160 lg:top-50 ${animate.spin}`}
      >
        <Image
          src="/landing-page/flower.svg"
          alt="flower"
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <div
        className={`w-full overflow-hidden flex justify-start items-end lg:mt-60 ${animate.moveUp}`}
      >
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
