"use client";

import Image from "next/image";
import { Variants } from "framer-motion";
import { CategoryInfoCard } from "../components/CategoryInfoCard";
import { VotingForm } from "../components/VotingForm";
import { SuccessModal } from "../components/SuccessModal";
import { AnimatedDiv } from "@/shared/ui/AnimatedDiv";
import { useVotingPage } from "../hooks/useVotingPage";

type VotingContainerProps = {
  categorySlug: string;
};

const getCategoryDisplayName = (slug: string) => {
  const map: { [key: string]: string } = {
    bem: "BEM",
    dpm: "DPM",
    hima: "HIMA",
    ukm: "UKM",
  };
  return map[slug.toLowerCase()] || slug;
};

export function VotingContainer({ categorySlug }: VotingContainerProps) {
  const {
    isLoadingNominations,
    isError,
    isLoadingVote,
    isSuccess,
    hasVoted,
    filteredCandidates,
    selectedCandidate,
    searchTerm,
    setSelectedCandidate,
    handleSearchChange,
    handleSave,
  } = useVotingPage(categorySlug);

  const popVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const displayName = getCategoryDisplayName(categorySlug);

  if (isLoadingNominations) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Loading Nominations...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        Failed to load nominations.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 md:gap-10 py-10 px-4">
      <SuccessModal isOpen={isSuccess} />

      <AnimatedDiv variants={popVariants}>
        <div className="relative w-[60vw] h-[20vh] md:w-[40vw] md:h-[25vh]">
          <Image
            src="/voting/title-choose-fighter.svg"
            alt="Choose Your Fighter"
            fill
            objectFit="contain"
          />
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2 items-center">
          <div className="md:col-span-3">
            <CategoryInfoCard categoryName={displayName} />
          </div>
          <div className="md:col-span-7">
            <VotingForm
              candidates={filteredCandidates}
              selectedCandidate={selectedCandidate}
              onSelectCandidate={setSelectedCandidate}
              onSave={handleSave}
              isLoading={isLoadingVote}
              hasVoted={hasVoted}
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
