import Image from "next/image";

interface GuideCardProps {
  guideline: string;
}

function GuideCard({ guideline }: GuideCardProps) {
  return (
    <div className="w-[27dvw]">
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
      <p className="px-14 py-14 text-center bg-yellow text-pink border-black border-2 font-poppins font-bold text-[24px]">
        {guideline}
      </p>
    </div>
  );
}

export default GuideCard;
