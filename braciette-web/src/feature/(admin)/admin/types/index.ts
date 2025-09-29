export type OrgCategory = {
    id: number;
    name: string;
    link: string;
}

type ChartItem = {
  id: number;
  value: number;
};

type VoteItem = {
  totalVotes: number;
};

export type VoteProps = {
  data: ChartItem[];
  voteInfo: VoteItem;
};

type Nomination = {
    id: number;
    name: string;
};
export type NominationProps = {
    nominations: Nomination[];
};