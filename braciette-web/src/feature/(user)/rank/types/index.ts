import { NominationApiData } from "@/api/services/user/nomination";

export type Organization = {
  id: string;
  name: string;
  logoUrl: string;
};

export type LeaderboardData = {
  rank: number;
  organization: Organization;
};

export type Category = {
  id: string;
  name: string;
  leaderboard: NominationApiData[];
};