"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/api/services/user/categoryVote";
import ChooseCard from "../components/ChooseCard";
import TitleImage from "../components/TitleImage";
import { VoteCategory } from "../types";

function ChooseVoteContainer() {
  const router = useRouter();

  const {
    data: categoriesResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["voteCategories"],
    queryFn: () => categoryService.getAllCategories(),
  });

  const handleCardClick = (category: VoteCategory) => {
    router.push(`/voting/${category.name.toLowerCase()}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading categories...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Gagal memuat kategori.
      </div>
    );
  }

  const categories = categoriesResponse?.data || [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-20 py-10">
      <TitleImage />
      <div className="w-full max-w-4xl mx-auto flex flex-row flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
        {categories.map((category, index) => {
          const cardColor = index % 2 === 0 ? "pink" : "green";
          return (
            <ChooseCard
              key={category.id}
              category={category}
              color={cardColor}
              onClick={() => handleCardClick(category)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChooseVoteContainer;
