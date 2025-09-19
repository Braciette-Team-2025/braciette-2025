"use client";

import React from "react";
import Image from "next/image";
import LoginForm from "../components/LoginForm";
import { motion, Variants } from "framer-motion";

const LoginContainer = () => {
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
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-blue overflow-hidden px-4 py-8">
      <Image
        src="/landing-page/lines-white.svg"
        alt="Grid Overlay"
        fill
        className="object-cover"
      />

      <motion.div
        variants={leafVariants}
        initial="hidden"
        animate="visible"
        className="absolute -bottom-1 -left-28 w-[220px] h-[220px]"
      >
        <Image
          src="/login/leaf-green.svg"
          alt="Leaf Decoration"
          fill
        />
      </motion.div>

      <motion.div
        variants={leafVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-1 -right-28 transform rotate-180 w-[220px] h-[220px]"
      >
        <Image
          src="/login/leaf-green.svg"
          alt="Leaf Decoration"
          fill
        />
      </motion.div>

      <Image
        src="/login/login-font.svg"
        alt="Leaf Decoration"
        width={250}
        height={250}
        className="mb-8"
      />

      <div className="relative z-10 w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginContainer;
