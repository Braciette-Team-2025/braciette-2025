import React from "react";
import Image from "next/image";
import LoginForm from "../components/LoginForm";

const LoginContainer = () => {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-blue overflow-hidden px-4 py-8"
    >
      <Image
        src="/landing-page/lines-white.svg"
        alt="Grid Overlay"
        fill
        className="object-cover"
      />

      {/* Decorative Elements */}
      <Image
        src="/login/leaf-green.svg"
        alt="Leaf Decoration"
        width={120}
        height={120}
        className="absolute -bottom-1 -left-2"
      />
      <Image
        src="/login/leaf-green.svg"
        alt="Leaf Decoration"
        width={120}
        height={120}
        className="absolute -top-1 -right-2 transform rotate-180"
      />

      <Image
        src="/login/login-font.svg"
        alt="Leaf Decoration"
        width={250}
        height={250}
        className="mb-8"
      />

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginContainer;
