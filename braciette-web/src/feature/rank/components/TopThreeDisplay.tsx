import { CardRank } from "./CardRank";
import { LeaderboardData } from "../types";

type TopThreeDisplayProps = {
  data: LeaderboardData[];
};

export function TopThreeDisplay({ data }: TopThreeDisplayProps) {
  const rank1 = data.find((item) => item.rank === 1);
  const rank2 = data.find((item) => item.rank === 2);
  const rank3 = data.find((item) => item.rank === 3);

  return (
    <div className="relative flex justify-center items-end gap-8 mt-12 w-full">
      {/* Rank 2 */}
      {rank2 && (
        <CardRank
          rank={rank2.rank}
          orgName={rank2.organization.name}
          orgLogo={rank2.organization.logoUrl}
        />
      )}

      {rank1 && (
        <div className="mb-16">
          <CardRank
            rank={rank1.rank}
            orgName={rank1.organization.name}
            orgLogo={rank1.organization.logoUrl}
          />
        </div>
      )}

      {rank3 && (
        <CardRank
          rank={rank3.rank}
          orgName={rank3.organization.name}
          orgLogo={rank3.organization.logoUrl}
        />
      )}
    </div>
  );
}
