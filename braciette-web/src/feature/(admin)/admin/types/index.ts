export type OrgCategory = {
    id: number;
    name: string;
    link: string;
}

export type ChartItem = {
  id: number;
  label: string;
  value: number;
};

export type VoteItem = {
  totalVotes: number;
};

export type VoteProps = {
  data: ChartItem[];
  voteInfo: VoteItem;
};

export type Nomination = {
    id: number;
    name: string;
    logo: string;
};
export type NominationProps = {
    nominations: Nomination[];
};