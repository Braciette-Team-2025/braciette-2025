"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type SuccessModalProps = {
  isOpen: boolean;
};

export function SuccessModal({ isOpen }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.1 } }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-yellow rounded-2xl py-6 px-8 md:py-12 md:px-14"
          >
            <Image
              src="/voting/thanks-voting.svg"
              alt="Thanks for Voting"
              width={280}
              height={200}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
