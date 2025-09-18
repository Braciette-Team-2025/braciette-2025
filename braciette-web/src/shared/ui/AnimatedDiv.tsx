import { motion, Variants } from 'framer-motion';
import React from 'react';

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedDiv({
  children,
  className,
  variants = defaultVariants,
  delay = 0,
}: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}