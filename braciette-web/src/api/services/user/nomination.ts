import { apiClient } from '../../core/AxiosInstance';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface CategoryApiData {
  id: string;
  name: string;
  longName: string;
}

export interface NominationApiData {
  id: string;
  name: string;
  logoUrl: string;
}

class NominationService {
  private static instance: NominationService;

  public static getInstance(): NominationService {
    if (!NominationService.instance) {
      NominationService.instance = new NominationService();
    }
    return NominationService.instance;
  }

  async getAllCategories(): Promise<ApiResponse<CategoryApiData[]>> {
    const response = await apiClient.get<CategoryApiData[]>('/categories');
    return response;
  }

  async getNominationsByCategory(categoryId: string): Promise<ApiResponse<NominationApiData[]>> {
    const response = await apiClient.get<NominationApiData[]>(`/nomination/${categoryId}`);
    return response;
  }
}

export const nominationService = NominationService.getInstance();