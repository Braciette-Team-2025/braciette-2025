import Image from "next/image";

type CategoryInfoCardProps = {
  categoryName: string;
};

export function CategoryInfoCard({ categoryName }: CategoryInfoCardProps) {
  return (
    <div className="relative bg-pink p-6 rounded-2xl flex flex-col items-center gap-4 justify-center w-[280px] mx-auto">
      <div className="absolute -top-8 -left-16 z-10 w-[160px] h-[130px]">
        <Image
          src="/voting/medal.svg"
          alt="Medal"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="bg-white border border-black rounded-lg p-6">
        <div className="relative h-32 w-32">
          <Image
            src="/voting/question-mark.svg"
            alt="Category"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="w-full text-center min-h-14 flex flex-col items-center justify-center">
        <p className="text-white font-poppins text-lg font-semibold uppercase">
          {categoryName}
        </p>
        <p className="text-white font-poppins text-lg font-semibold">
          TERFAVORIT
        </p>
      </div>
    </div>
  );
}
