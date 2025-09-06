import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const hotpicksData = [
  {
    rank: 1,
    imageSrc: "/landing-page/logo.svg",
    title: "Himpunan Mahasiswa Pendidikan Dokter",
  },
  {
    rank: 2,
    imageSrc: "/landing-page/logo.svg",
    title: "Himpunan Mahasiswa Pendidikan Dokter",
  },
  {
    rank: 3,
    imageSrc: "/landing-page/logo.svg",
    title: "Himpunan Mahasiswa Pendidikan Dokter",
  },
  {
    rank: 4,
    imageSrc: "/landing-page/logo.svg",
    title: "Himpunan Mahasiswa Pendidikan Dokter",
  },
  {
    rank: 5,
    imageSrc: "/landing-page/logo.svg",
    title: "Himpunan Mahasiswa Pendidikan Dokter",
  },
];

function HotpickCard({
  rank,
  imageSrc,
  title,
}: {
  rank: number;
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="relative p-4">
      <div className="absolute top-0 left-0 z-10 w-[98.5px] h-[116.5px]">
        <Image
          src="/landing-page/medalion.svg"
          alt="Medal"
          layout="fill"
          objectFit="contain"
        />
        <div
          className="font-retro absolute top-5 right-9.5 flex items-center justify-center text-4xl font-bold text-red rotate-16"
          style={{
            textShadow: "2px 2px 0px white",
            paddingBottom: "20px",
          }}
        >
          {rank}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-pink-500 p-4 pt-12">
        <div className="relative h-40 w-full">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
        </div>
        <div className="p-4 text-center">
          <p className="text-black font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
}

function Hotpicks() {
  return (
    <div
      className="w-full py-16 px-4"
      style={{
        backgroundColor: "#00003d",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <h1
        className="text-7xl text-center font-bold mb-8 text-green-400 font-retro"
        style={{
          textShadow: "4px 4px 0px #000",
        }}
      >
        HOT PICKS !!!
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {hotpicksData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <HotpickCard
                rank={item.rank}
                imageSrc={item.imageSrc}
                title={item.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
      <p className="text-center text-white mt-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Hotpicks;
