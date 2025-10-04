import { useState, useMemo } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { votingService } from "@/api/services/user/voting";
import { categoryService } from "@/api/services/user/categoryVote";
import { Candidate, SubmitVotePayload } from "../types";
import { useAuth } from "@/shared/context/AuthContext";
import { useToast } from "@/shared/hooks/useToast";

export const useVotingPage = (categorySlug: string) => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  // const [isLoadingVote, setIsLoadingVote] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: categoriesResponse } = useQuery({
    queryKey: ["voteCategories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  const categoryId = useMemo(() => {
    if (!categoriesResponse?.data) return null;
    const foundCategory = categoriesResponse.data.find(
      (cat) => cat.name.toLowerCase() === categorySlug.toLowerCase()
    );
    return foundCategory?.id || null;
  }, [categoriesResponse, categorySlug]);

  const {
    data: nominationsResponse,
    isLoading: isLoadingNominations,
    isError,
  } = useQuery({
    queryKey: ["nominations", categoryId],
    queryFn: () => votingService.getNominationsByCategory(categoryId!),
    enabled: !!categoryId,
  });

  const candidates = nominationsResponse?.data || [];

  const filteredCandidates = useMemo(
    () =>
      candidates.filter((candidate) =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [candidates, searchTerm]
  );

  const voteMutation = useMutation({
    mutationFn: (payload: SubmitVotePayload) =>
      votingService.submitVote(payload),
    onSuccess: () => {

      // showToast({
      //   type: "success",
      //   title: "Vote Berhasil!",
      //   message: "Terima kasih atas partisipasi Anda.",
      // });
      setIsSuccess(true);
      setHasVoted(true);
    },
    onError: (error) => {
      console.error("Gagal mengirim vote:", error);
      showToast({
        type: "error",
        title: "Vote Gagal",
        message: "Anda sudah pernah vote di kategori ini.",
      });
    },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSave = () => {
    if (!selectedCandidate || !categoryId || !user?.id) {
      console.error("Data tidak lengkap untuk mengirim vote");
      return;
    }
    const payload: SubmitVotePayload = {
      nim: user.id,
      categoryId: categoryId,
      nominationId: selectedCandidate.id,
    };

    voteMutation.mutate(payload);
  };

  return {
    isLoadingNominations,
    isError,
    isLoadingVote: voteMutation.isPending,
    isSuccess,
    hasVoted,
    filteredCandidates,
    selectedCandidate,
    searchTerm,
    setSelectedCandidate,
    handleSearchChange,
    handleSave,
  };
};
