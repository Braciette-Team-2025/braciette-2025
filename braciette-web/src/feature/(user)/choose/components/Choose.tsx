import Image from "next/image";
import ChooseCard from "./Choose.card";

function Choose() {
  const categories = [
    {
      short: "HIMA",
      full: "Himpunan Mahasiswa",
      color: "pink",
    },
    {
      short: "DPM",
      full: "Dewan Perwakilan Mahasiswa",
      color: "green",
    },
    {
      short: "BEM",
      full: "Badan Eksekutif Mahasiswa",
      color: "green",
    },
    {
      short: "UKM",
      full: "Unit Kegiatan Mahasiswa",
      color: "pink",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-12 xl:gap-30">
      <div className="relative w-[45dvw] h-[15dvh] md:w-[30dvw] md:h-[25dvh]">
        <Image
          src="/choose-lkm/title-lkm-page.svg"
          alt="Time to Vote!"
          fill={true}
          objectFit="contain"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-12">
        {categories.map((category, index) => (
          <ChooseCard
            key={index}
            index={index}
            short={category.short}
            full={category.full}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Choose;
