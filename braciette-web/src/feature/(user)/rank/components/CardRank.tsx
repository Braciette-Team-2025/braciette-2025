import Image from 'next/image';

type CardRankProps = {
  rank: number;
  orgName: string;
  orgLogo: string;
};

export function CardRank({ rank, orgName, orgLogo }: CardRankProps) {
  const medalAsset = `/rank/medal-${rank}.svg`;

  return (
    <div className="relative bg-pink p-6 rounded-2xl flex flex-col items-center gap-4 justify-center w-[280px]">
      <div className="absolute -top-8 -left-16 z-10 w-[160px] h-[118px]">
        <Image src={medalAsset} alt={`Medal Rank ${rank}`} layout="fill" objectFit="contain" />
      </div>
      <div className="bg-white border border-black rounded-lg p-6">
        <div className="relative h-32 w-32">
          <Image src={orgLogo} alt={orgName} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="w-full text-center min-h-14 flex items-center justify-center">
        <p className="text-white font-poppins text-lg font-semibold">{orgName}</p>
      </div>
    </div>
  );
}