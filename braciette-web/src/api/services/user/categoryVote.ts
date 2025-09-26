import { apiClient } from '../../core/AxiosInstance';
import { VoteCategory } from '@/feature/(user)/choose/types';

class CategoryService {
  private static instance: CategoryService;

  public static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }
    return CategoryService.instance;
  }

  async getAllCategories() {
    const response = await apiClient.get<VoteCategory[]>('/categories');
    return response;
  }
}

export const categoryService = CategoryService.getInstance();