export type ChartItem = {
  id: string;
  label: string;
  value: number;
  logoUrl: string;
};

export type VoteInfo = {
  totalVotes: number;
};

export type VoteAdminProps = {
  data: ChartItem[];
  voteInfo: VoteInfo;
};

export type Nomination = {
  id: string;
  name: string;
};

export type NominationAdminProps = {
  nominations: Nomination[];
  onDeleteNomination: (nominationId: string) => void;
};
