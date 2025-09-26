import { Search } from "lucide-react";
import { Candidate } from "../types";
import { CandidateList } from "./CandidateList";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type VotingFormProps = {
  candidates: Candidate[];
  selectedCandidate: Candidate | null;
  onSelectCandidate: (candidate: Candidate) => void;
  onSave: () => void;
  isLoading: boolean;
  hasVoted: boolean;
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function VotingForm({
  candidates,
  selectedCandidate,
  onSelectCandidate,
  onSave,
  isLoading,
  hasVoted,
  searchTerm,
  onSearchChange,
}: VotingFormProps) {
  return (
    <div className="w-full bg-blue-dark p-6 rounded-lg flex flex-col gap-6 font-poppins">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-white rounded-lg p-3 border border-white focus:outline-none focus:ring focus:ring-yellow"
          disabled={hasVoted}
          value={searchTerm}
          onChange={onSearchChange}
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
          size={25}
        />
      </div>

      <fieldset disabled={hasVoted}>
        <CandidateList
          candidates={candidates}
          selectedCandidateId={selectedCandidate?.id || null}
          onSelectCandidate={onSelectCandidate}
        />
      </fieldset>

      <div className="flex items-center gap-4 bg-yellow rounded-xl px-4 py-2 text-sm md:text-xl">
        <label htmlFor="your-choice" className="font-semibold flex-shrink-0">
          Your Choice
        </label>

        <div className="relative w-full bg-white font-bold rounded-lg px-3 py-2 overflow-hidden h-10 flex items-center text-xs md:text-lg">
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedCandidate ? selectedCandidate.id : "empty"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {selectedCandidate ? selectedCandidate.name : ""}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button
          onClick={onSave}
          disabled={!selectedCandidate || isLoading || hasVoted}
          variant="secondary"
          size="sm"
          className="text-lg px-6 cursor-pointer"
        >
          {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "Save!"}
        </Button>
      </div>
    </div>
  );
}
