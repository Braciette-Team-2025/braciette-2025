export interface NominationStatistic {
  id: string;
  name: string;
  logoUrl: string;
  totalVotes: number;
}

export interface CategoryStatistic {
  id: string;
  name: string;
  longName: string;
  totalVotes: number;
  nominations: NominationStatistic[];
}

export interface StatisticsData {
  totalUniqueVoters: number;
  statistics: CategoryStatistic[];
}

export interface CreateNominationPayload {
  name: string;
  longName: string;
  logoUrl: string;
  categoryId: string;
}

export interface NominationDetail {
  id: string;
  name: string;
  longName: string | null;
  logoUrl: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  totalVotes: number;
}

export interface UpdateNominationPayload {
  name?: string;
  longName?: string;
  logoUrl?: string;
}