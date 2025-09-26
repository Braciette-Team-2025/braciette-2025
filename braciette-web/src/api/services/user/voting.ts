import { apiClient } from '../../core/AxiosInstance';
import { Candidate, SubmitVotePayload, VoteResponse  } from '@/feature/(user)/voting/types';

class VotingService {
  private static instance: VotingService;

  public static getInstance(): VotingService {
    if (!VotingService.instance) {
      VotingService.instance = new VotingService();
    }
    return VotingService.instance;
  }

  async getNominationsByCategory(categoryId: string) {
    const response = await apiClient.get<Candidate[]>(`/nomination/${categoryId}`);
    return response;
  }

  async submitVote(payload: SubmitVotePayload) {
    const response = await apiClient.post<VoteResponse>('/voting', payload);
    return response;
  }
}

export const votingService = VotingService.getInstance();