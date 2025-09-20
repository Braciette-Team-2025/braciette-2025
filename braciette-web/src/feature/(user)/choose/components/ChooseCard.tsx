import { VoteCategory } from "../types";

const colorVariants = {
  pink: "bg-pink hover:bg-pink-600",
  green: "bg-green hover:bg-green-600",
};

interface ChooseCardProps {
  category: VoteCategory;
  onClick: () => void;
}

function ChooseCard({ category, onClick }: ChooseCardProps) {
  const { short, full, color } = category;

  return (
    <div
      onClick={onClick}
      className={`text-white text-center rounded-2xl cursor-pointer z-10 
                 w-full md:w-[25rem]
                 aspect-[2/1]
                 p-4 md:p-8
                 flex flex-col justify-center items-center transition-transform hover:scale-105
                 ${colorVariants[color]}`}
    >
      <h1
        className="font-poppins font-bold"
        style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 3rem)" }}
      >
        {short}
      </h1>
      <h2
        className="font-poppins font-medium"
        style={{ fontSize: "clamp(0.8rem, 0.5vw + 0.5rem, 1.25rem)" }}
      >
        {full}
      </h2>
    </div>
  );
}

export default ChooseCard;
