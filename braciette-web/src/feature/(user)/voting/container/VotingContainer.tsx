"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CategoryInfoCard } from "../components/CategoryInfoCard";
import { VotingForm } from "../components/VotingForm";
import { SuccessModal } from "../components/SuccessModal";
import { allCandidates } from "../data/dummy";
import { Candidate } from "../types";
import { Variants } from "framer-motion";
import { AnimatedDiv } from "@/shared/ui/AnimatedDiv";

type VotingContainerProps = {
  categorySlug: string;
};

export function VotingContainer({ categorySlug }: VotingContainerProps) {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const candidatesForCategory = useMemo(
    () => allCandidates[categorySlug] || [],
    [categorySlug]
  );
  
  const filteredCandidates = candidatesForCategory.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSave = () => {
    if (!selectedCandidate) return;

    setIsLoading(true);
    setTimeout(() => {
      console.log("Vote saved for:", selectedCandidate.name);
      setIsLoading(false);
      setIsSuccess(true);
      setHasVoted(true);
    }, 1500);
  };

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
            <CategoryInfoCard categoryName={categorySlug} />
          </div>
          <div className="md:col-span-7">
            <VotingForm
              candidates={filteredCandidates}
              selectedCandidate={selectedCandidate}
              onSelectCandidate={setSelectedCandidate}
              onSave={handleSave}
              isLoading={isLoading}
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
