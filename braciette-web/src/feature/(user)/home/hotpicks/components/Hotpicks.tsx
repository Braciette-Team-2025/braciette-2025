import Image from "next/image";
import { HotpicksData } from "../data/hotpicks-data";

function HotpickCard({ type, imageSrc }: { type: string; imageSrc: string }) {
  return (
    <div className="relative bg-pink p-6 rounded-2xl flex flex-col items-center gap-4 justify-center w-[280px]">
      <div className="absolute -top-8 -left-16 z-10 w-[160px] h-[118px]">
        <Image
          src="/landing-page/medal.svg"
          alt="Medal"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="bg-white rounded-lg p-8">
        <div className="relative h-32 w-32">
          <Image src={imageSrc} alt={type} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-white font-poppins text-[22px] font-semibold">
          <span className="block">{type}</span> TERBAIK
        </p>
      </div>
    </div>
  );
}

function Hotpicks() {
  return (
    <div
      className="w-full flex flex-col items-center gap-25 pb-[20dvh]"
      style={{
        backgroundColor: "#00003d",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <h1
        className="text-xl text-center font-bold text-green-400 font-yourmate text"
        style={{
          textShadow: "4px 4px 0px #000000",
          fontSize: "clamp(48px, 6vw, 96px)",
        }}
      >
        HOT PICKS !!!
      </h1>
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-18 px-20">
        {HotpicksData.map((item, index) => (
          <div key={index} className="w-max">
            <HotpickCard imageSrc={item.orgImage} type={item.name} />
          </div>
        ))}
      </div>
      <h2
        className="text-white text-center font-poppins text-[36px] font-semibold px-20"
        style={{
          fontSize: "clamp(26px, 3vw, 36px)",
          textShadow: "2px 2px 0px #000000",
        }}
      >
        Congratulations on achieving the highest votes!
      </h2>
    </div>
  );
}

export default Hotpicks;
