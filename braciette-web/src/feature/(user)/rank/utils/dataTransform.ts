import { Category, LeaderboardData } from '../types';
import { NominationApiData, CategoryApiData } from '@/api/services/user/nomination';

export function transformNominationToLeaderboard(
  nominations: NominationApiData[]
): LeaderboardData[] {
  if (!nominations || nominations.length === 0) {
    return [];
  }

  // Use nominations in the order received from API (already sorted by backend)
  return nominations.map((nomination, index) => ({
    rank: index + 1,
    organization: {
      id: nomination.id,
      name: nomination.name,
      logoUrl: nomination.logoUrl || "/landing-page/org-placeholder.svg", // Fallback logo
    }
  }));
}

export function createCategory(
  categoryData: CategoryApiData, 
  nominations: NominationApiData[]
): Category {
  return {
    id: categoryData.id,
    name: `${categoryData.name} Terfavorit`,
    leaderboard: nominations
  };
}

export const categorySlugMap: Record<string, string> = {
  'BEM': 'bem',
  'DPM': 'dpm', 
  'HIMA': 'hima',
  'UKM': 'ukm'
};

export function getCategorySlug(categoryName: string): string {
  return categorySlugMap[categoryName] || categoryName.toLowerCase();
}

export function findCategoryBySlug(categories: CategoryApiData[], slug: string): CategoryApiData | undefined {
  if (!categories || categories.length === 0 || !slug) {
    return undefined;
  }

  const normalizedSlug = slug.toLowerCase().trim();
  const categoryName = Object.keys(categorySlugMap).find(key => 
    categorySlugMap[key] === normalizedSlug
  );
  
  if (!categoryName) return undefined;
  
  return categories.find(cat => cat.name.toUpperCase() === categoryName.toUpperCase());
}