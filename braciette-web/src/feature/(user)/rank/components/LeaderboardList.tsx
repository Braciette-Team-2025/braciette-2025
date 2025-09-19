import { LeaderboardItem } from './LeaderboardItem';
import { LeaderboardData } from '../types';

type LeaderboardListProps = {
  data: LeaderboardData[];
};

export function LeaderboardList({ data }: LeaderboardListProps) {
  return (
    <div className="w-full max-w-4xl mt-16 flex flex-col items-center gap-6">
      {data.map(item => (
        <LeaderboardItem
          key={item.rank}
          rank={item.rank}
          orgName={item.organization.name}
          orgLogo={item.organization.logoUrl}
        />
      ))}
    </div>
  );
}