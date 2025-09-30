import { ChartItem, VoteItem, VoteProps } from "../types";

const favoritesData: ChartItem[] = [
  { id: 1, label: "Candidate A", value: 100 },
  { id: 2, label: "Candidate B", value: 72 },
  { id: 3, label: "Candidate C", value: 64 },
  { id: 4, label: "Candidate D", value: 50 },
  { id: 5, label: "Candidate E", value: 44 },
  { id: 6, label: "Candidate F", value: 20 },
  { id: 7, label: "Candidate G", value: 190 },
  { id: 8, label: "Candidate H", value: 290 },
  { id: 9, label: "Candidate I", value: 1200 },
  { id: 10, label: "Candidate J", value: 2 },
  { id: 11, label: "Candidate K", value: 500 },
  { id: 12, label: "Candidate L", value: 670 },
  { id: 13, label: "Candidate A", value: 100 },
  { id: 14, label: "Candidate B", value: 72 },
  { id: 15, label: "Candidate C", value: 64 },
  { id: 16, label: "Candidate D", value: 50 },
  { id: 17, label: "Candidate E", value: 44 },
  { id: 18, label: "Candidate F", value: 20 },
  { id: 19, label: "Candidate G", value: 190 },
  { id: 20, label: "Candidate H", value: 290 },
  { id: 21, label: "Candidate I", value: 1200 },
  { id: 22, label: "Candidate J", value: 2 },
  { id: 23, label: "Candidate K", value: 500 },
  { id: 24, label: "Candidate L", value: 670 },
];

const totalData: VoteItem = {
    totalVotes: favoritesData.reduce((sum, item) => sum + item.value, 0),
}

export const VoteData: VoteProps = {
    data: favoritesData,
    voteInfo: totalData,
}