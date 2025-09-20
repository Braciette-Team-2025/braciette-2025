"use client";

import { useRouter } from "next/navigation";
import ChooseCard from "../components/ChooseCard";
import TitleImage from "../components/TitleImage";
import { categories } from "../data/dummy";
import { VoteCategory } from "../types";

function ChooseVoteContainer() {
  const router = useRouter();

  const handleCardClick = (category: VoteCategory) => {
    router.push(`/voting/${category.short.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-20 py-10">
      <TitleImage />
      <div className="w-full max-w-4xl mx-auto flex flex-row flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
        {categories.map((category) => (
          <ChooseCard
            key={category.short}
            category={category}
            onClick={() => handleCardClick(category)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChooseVoteContainer;
