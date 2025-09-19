import Image from 'next/image';

type LeaderboardItemProps = {
  rank: number;
  orgName: string;
  orgLogo: string;
};

export function LeaderboardItem({ rank, orgName, orgLogo }: LeaderboardItemProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-6">
        <div className="relative w-16 h-16 bg-white rounded-full overflow-hidden">
          <Image
            src={orgLogo}
            alt={orgName}
            layout="fill"
            objectFit="contain"
            className="p-1"
          />
        </div>
        <p className="font-retro text-green text-3xl">{orgName}</p>
      </div>
      <span className="font-retro text-red-500 text-6xl font-bold">{rank}</span>
    </div>
  );
}