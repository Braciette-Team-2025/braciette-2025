import Image from "next/image";

interface GuideCardProps {
  guideline: string;
}

function GuideCard({ guideline }: GuideCardProps) {
  return (
    <div className="w-[80dvw] md:w-[40dvw] xl:w-[27dvw] z-50">
      <div className="flex flex-row justify-end items-center gap-6 bg-purple p-3 border-black border-2">
        <div className="relative w-[1dvw] h-[2dvh]">
          <Image
            src="/landing-page/guide-card-button-1.svg"
            alt="Minimize Button"
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="relative w-[1dvw] h-[2dvh]">
          <Image
            src="/landing-page/guide-card-button-2.svg"
            alt="Minimize Button"
            fill={true}
            objectFit="contain"
          />
        </div>
        <div className="relative w-[1dvw] h-[2dvh]">
          <Image
            src="/landing-page/guide-card-button-3.svg"
            alt="Minimize Button"
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>
      <p className="p-8 lg:p-14 text-center bg-yellow text-pink border-black border-2 font-poppins font-bold text-[14px] lg:text-[24px]">
        {guideline}
      </p>
    </div>
  );
}

export default GuideCard;
