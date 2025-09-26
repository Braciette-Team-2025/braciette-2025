export interface Candidate {
  id: string;
  name: string;
  logoUrl: string;
}

export interface SubmitVotePayload {
  nim: string;
  categoryId: string;
  nominationId: string;
}

export interface VoteResponse {
  id: string;
  nim: string;
  categoryId: string;
  nominationId: string;
  createdAt: string;
}