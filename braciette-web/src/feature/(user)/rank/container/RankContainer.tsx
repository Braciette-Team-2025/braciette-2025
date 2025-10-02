"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CategorySwitcher } from "../components/CategorySwitcher";
import { TopThreeDisplay } from "../components/TopThreeDisplay";
import { LeaderboardList } from "../components/LeaderboardList";
import { useRankings } from "../hooks/useRankings";
import { findCategoryBySlug } from "../utils/dataTransform";
import { AnimatedDiv } from "@/shared/ui/AnimatedDiv";

const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function RankContainer({
  initialCategory,
}: {
  initialCategory?: string;
}) {
  const { categories, categoryMapping, loading, error, refetch } =
    useRankings();

  const findInitialIndex = (categorySlug?: string) => {
    if (!categorySlug || categories.length === 0) return 0;

    const categoryData = findCategoryBySlug(categoryMapping, categorySlug);
    if (!categoryData) return 0;

    const index = categories.findIndex((cat) => cat.id === categoryData.id);
    return index !== -1 ? index : 0;
  };

  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (categories.length > 0) {
      const newIndex = findInitialIndex(initialCategory);
      setCategoryIndex(newIndex);
    }
  }, [initialCategory, categories, categoryMapping]);

  const handleNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  if (loading) {
    return (
      <main className="relative min-h-screen w-full bg-dark-blue flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Grid Overlay"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-20 flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
          <p className="text-white text-lg">Loading rankings...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="relative min-h-screen w-full bg-dark-blue flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Grid Overlay"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-20 flex flex-col items-center text-center">
          <p className="text-white text-xl mb-4">Error loading rankings</p>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={refetch}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  if (categories.length === 0) {
    return (
      <main className="relative min-h-screen w-full bg-dark-blue flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
        <Image
          src="/landing-page/lines-white.svg"
          alt="Grid Overlay"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-20 flex flex-col items-center">
          <p className="text-white text-xl">No rankings available</p>
        </div>
      </main>
    );
  }

  const currentCategory = categories[categoryIndex];
  // Get first 3 nominations for top three display (rank 1, 2, 3)
  const topThree = currentCategory.leaderboard.slice(0, 3).map((item, index) => ({
    rank: index + 1,
    organization: {
      id: item.id,
      name: item.name,
      logoUrl: item.logoUrl,
    }
  }));
  // Get remaining nominations starting from rank 4
  const others = currentCategory.leaderboard.slice(3).map((item, index) => ({
    rank: index + 4,
    organization: {
      id: item.id,
      name: item.name,
      logoUrl: item.logoUrl,
    }
  }));

  const leafVariants: Variants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 360,
      transition: {
        scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 25,
        },
      },
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-dark-blue flex flex-col items-center py-20 px-4 overflow-hidden">
      <Image
        src="/landing-page/lines-white.svg"
        alt="Grid Overlay"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <motion.div
        variants={leafVariants}
        initial="hidden"
        animate="visible"
        className="hidden xl:block absolute top-1 -right-28 z-10 transform rotate-180"
      >
        <Image
          src="/login/leaf-green.svg"
          alt="Leaf"
          width={220}
          height={220}
        />
      </motion.div>
      <motion.div
        variants={leafVariants}
        initial="hidden"
        animate="visible"
        className="hidden xl:block absolute top-96 -left-28 z-10"
      >
        <Image
          src="/login/leaf-green.svg"
          alt="Leaf"
          width={220}
          height={220}
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center w-full gap-16 py-4">
        <AnimatedDiv delay={0}>
          <Image
            src="/rank/titlerank.svg"
            alt="Rank Title"
            width={350}
            height={150}
          />
        </AnimatedDiv>

        <AnimatedDiv delay={0.1}>
          <CategorySwitcher
            categoryName={currentCategory.name}
            onNext={handleNextCategory}
            onPrev={handlePrevCategory}
          />
        </AnimatedDiv>

        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={categoryIndex}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              <TopThreeDisplay data={topThree} />
              <LeaderboardList data={others} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
