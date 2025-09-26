import { Candidate } from "../types";
import { CandidateItem } from "./CandidateItem";
import { AnimatePresence } from "framer-motion";

type CandidateListProps = {
  candidates: Candidate[];
  selectedCandidateId: string | null;
  onSelectCandidate: (candidate: Candidate) => void;
};

export function CandidateList({
  candidates,
  selectedCandidateId,
  onSelectCandidate,
}: CandidateListProps) {
  return (
    <div className="h-[200px] overflow-y-auto pr-2 flex flex-col gap-3">
      <AnimatePresence>
        {candidates.map((candidate) => (
          <CandidateItem
            key={candidate.id}
            candidate={candidate}
            isSelected={candidate.id === selectedCandidateId}
            onSelect={() => onSelectCandidate(candidate)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
