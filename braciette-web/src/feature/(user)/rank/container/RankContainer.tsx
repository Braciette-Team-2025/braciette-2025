"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CategorySwitcher } from "../components/CategorySwitcher";
import { TopThreeDisplay } from "../components/TopThreeDisplay";
import { LeaderboardList } from "../components/LeaderboardList";
import { dummyData } from "../data/dummy";
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
  const findInitialIndex = (categorySlug?: string) => {
    if (!categorySlug) return 0;
    const index = dummyData.findIndex((cat) => cat.id === categorySlug);
    return index !== -1 ? index : 0;
  };

  const [categoryIndex, setCategoryIndex] = useState(() =>
    findInitialIndex(initialCategory)
  );

  useEffect(() => {
    if (initialCategory) {
      const newIndex = findInitialIndex(initialCategory);
      setCategoryIndex(newIndex);
    }
  }, [initialCategory]);

  const handleNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const handlePrevCategory = () => {
    setCategoryIndex(
      (prevIndex) => (prevIndex - 1 + dummyData.length) % dummyData.length
    );
  };

  const currentCategory = dummyData[categoryIndex];
  const topThree = currentCategory.leaderboard.filter((item) => item.rank <= 3);
  const others = currentCategory.leaderboard.filter((item) => item.rank > 3);

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
        className="absolute top-1 -right-28 z-10 transform rotate-180"
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
        className="absolute top-96 -left-28 z-10"
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
