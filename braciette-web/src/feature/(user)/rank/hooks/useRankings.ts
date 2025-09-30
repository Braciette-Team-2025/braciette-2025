import { useState, useEffect, useCallback, useMemo } from 'react';
import { Category } from '../types';
import { nominationService, CategoryApiData } from '@/api/services/user/nomination';
import { createCategory, findCategoryBySlug } from '../utils/dataTransform';

interface UseRankingsReturn {
  categories: Category[];
  categoryMapping: CategoryApiData[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const CACHE_KEY = 'rankings-cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheData {
  categories: Category[];
  categoryMapping: CategoryApiData[];
  timestamp: number;
}

export function useRankings(): UseRankingsReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryMapping, setCategoryMapping] = useState<CategoryApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCachedData = useCallback((): CacheData | null => {
    if (typeof window === 'undefined') return null;
    
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;
      
      const data: CacheData = JSON.parse(cached);
      const isExpired = Date.now() - data.timestamp > CACHE_DURATION;
      
      return isExpired ? null : data;
    } catch {
      return null;
    }
  }, []);

  const setCachedData = useCallback((categories: Category[], categoryMapping: CategoryApiData[]) => {
    if (typeof window === 'undefined') return;
    
    try {
      const data: CacheData = {
        categories,
        categoryMapping,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (err) {
      console.warn('Failed to cache rankings data:', err);
    }
  }, []);

  const fetchRankings = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check cache first unless force refresh
      if (!forceRefresh) {
        const cached = getCachedData();
        if (cached) {
          setCategories(cached.categories);
          setCategoryMapping(cached.categoryMapping);
          setLoading(false);
          return;
        }
      }
      
      const categoriesResponse = await nominationService.getAllCategories();
      const availableCategories = categoriesResponse.data;
      setCategoryMapping(availableCategories);
      
      const categoryPromises = availableCategories.map(async (categoryData) => {
        try {
          const nominationsResponse = await nominationService.getNominationsByCategory(categoryData.id);
          return createCategory(categoryData, nominationsResponse.data);
        } catch (err) {
          console.error(`Failed to fetch nominations for ${categoryData.name}:`, err);
          return createCategory(categoryData, []);
        }
      });

      const fetchedCategories = await Promise.all(categoryPromises);
      setCategories(fetchedCategories);
      
      // Cache the results
      setCachedData(fetchedCategories, availableCategories);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch rankings';
      setError(errorMessage);
      console.error('Failed to fetch rankings:', err);
    } finally {
      setLoading(false);
    }
  }, [getCachedData, setCachedData]);

  useEffect(() => {
    fetchRankings();
  }, [fetchRankings]);

  const refetch = useCallback(() => {
    fetchRankings(true); // Force refresh on manual refetch
  }, [fetchRankings]);

  return { 
    categories, 
    categoryMapping,
    loading, 
    error,
    refetch
  };
}

interface UseRankingsBySlugReturn {
  category: Category | undefined;
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export function useRankingsBySlug(slug?: string): UseRankingsBySlugReturn {
  const { categories, categoryMapping, loading, error } = useRankings();
  
  const category = useMemo(() => {
    if (!slug || categories.length === 0) return undefined;
    
    return categories.find(cat => {
      const categoryData = categoryMapping.find(c => c.id === cat.id);
      return categoryData && categoryData.name.toLowerCase() === slug.toLowerCase();
    });
  }, [categories, categoryMapping, slug]);

  return {
    category,
    categories,
    loading,
    error,
  };
}