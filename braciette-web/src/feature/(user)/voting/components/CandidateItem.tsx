import { Candidate } from "../types";
import { motion } from "framer-motion";

type CandidateItemProps = {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: () => void;
};

export function CandidateItem({
  candidate,
  isSelected,
  onSelect,
}: CandidateItemProps) {
  const itemStyle = isSelected ? "bg-yellow text-blue" : "bg-pink text-white";

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onClick={onSelect}
      className={`w-full text-left px-4 py-3 rounded-lg font-medium font-poppins hover:bg-yellow hover:text-blue transition-colors ${itemStyle} cursor-pointer`}
    >
      {candidate.name}
    </motion.button>
  );
}
