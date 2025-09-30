import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "@/api/services/user/categoryVote";
import { adminService } from "@/api/services/admin/admin";
import {
  CreateNominationPayload,
  UpdateNominationPayload,
} from "@/feature/(admin)/admin/types/admin";
import { useToast } from "@/shared/hooks/useToast";

export const useAdminDashboard = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const { data: categoriesResponse, isLoading: isLoadingCategories } = useQuery(
    {
      queryKey: ["voteCategories"],
      queryFn: () => categoryService.getAllCategories(),
    }
  );

  const { data: statsResponse, isLoading: isLoadingStats } = useQuery({
    queryKey: ["adminStatistics"],
    queryFn: () => adminService.getStatistics(),
  });

  const allStats = statsResponse?.data;
  const categories = allStats?.statistics || [];
  const totalVotes = allStats?.totalUniqueVoters || 0;

  const selectedCategoryData = useMemo(() => {
    if (!selectedCategoryId) return null;
    return categories.find((cat) => cat.id === selectedCategoryId);
  }, [selectedCategoryId, categories]);

  const voteData =
    selectedCategoryData?.nominations.map((nom) => ({
      id: nom.id,
      label: nom.name,
      value: nom.totalVotes,
      logoUrl: nom.logoUrl,
    })) || [];

  const nominationData = selectedCategoryData?.nominations || [];

  const deleteNominationMutation = useMutation({
    mutationFn: (nominationId: string) =>
      adminService.deleteNomination(nominationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminStatistics"] });
      showToast({ type: "success", message: "Nominasi berhasil dihapus." });
    },
    onError: () => {
      showToast({ type: "error", message: "Gagal menghapus nominasi." });
    },
  });

  const createNominationMutation = useMutation({
    mutationFn: (payload: CreateNominationPayload) =>
      adminService.createNomination(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminStatistics"] });
      showToast({
        type: "success",
        message: "Nominasi baru berhasil ditambahkan.",
      });
    },
    onError: () => {
      showToast({ type: "error", message: "Gagal menambahkan nominasi." });
    },
  });

  const updateNominationMutation = useMutation({
    mutationFn: (variables: {
      nominationId: string;
      payload: UpdateNominationPayload;
    }) =>
      adminService.updateNomination(variables.nominationId, variables.payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminStatistics"] });
      showToast({ type: "success", message: "Nominasi berhasil diperbarui." });
    },
    onError: () => {
      showToast({ type: "error", message: "Gagal memperbarui nominasi." });
    },
  });

  if (!selectedCategoryId && categories.length > 0) {
    setSelectedCategoryId(categories[0].id);
  }

  return {
    isLoading: isLoadingCategories || isLoadingStats,
    categories: categories.map((c) => ({ id: c.id, name: c.name, link: "#" })),
    selectedCategoryId,
    onSelectCategory: setSelectedCategoryId,
    voteData,
    nominationData,
    totalVotes,
    deleteNomination: deleteNominationMutation.mutate,
    createNomination: createNominationMutation.mutate,
    isCreatingNomination: createNominationMutation.isPending,
    updateNomination: updateNominationMutation.mutate,
    isUpdatingNomination: updateNominationMutation.isPending,
  };
};
