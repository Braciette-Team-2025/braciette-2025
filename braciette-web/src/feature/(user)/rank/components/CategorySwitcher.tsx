import { ChevronLeft, ChevronRight } from "lucide-react";

type CategorySwitcherProps = {
  categoryName: string;
  onPrev: () => void;
  onNext: () => void;
};

export function CategorySwitcher({
  categoryName,
  onPrev,
  onNext,
}: CategorySwitcherProps) {
  return (
    <div className="flex items-center justify-center gap-16 mt-4">
      <button
        onClick={onPrev}
        className="text-white transition-transform hover:scale-110 bg-yellow rounded-full p-2 cursor-pointer"
        aria-label="Previous Category"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      <h2 className="font-retro text-green text-7xl tracking-wider text-center">
        {categoryName}
      </h2>

      <button
        onClick={onNext}
        className="text-white transition-transform hover:scale-110 bg-yellow rounded-full p-2 cursor-pointer"
        aria-label="Next Category"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
    </div>
  );
}
