"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/shared/context/AuthContext";
import { useToast } from "@/shared/hooks/useToast";

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const loggedInUser = await login({ identifier, password });
      showToast({
        type: "success",
        title: "Login Berhasil!",
        message: "Anda akan diarahkan ke halaman utama.",
      });

      setTimeout(() => {
        if (loggedInUser?.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/choose");
        }
      }, 1500);
    } catch (err) {
      showToast({
        type: "error",
        title: "Login Gagal",
        message: "Periksa kembali NIM / Email UB dan password Anda.",
      });
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f3d038] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="grid w-full items-center gap-2.5">
          <Label
            htmlFor="identifier"
            className="text-black font-bold text-base"
          >
            NIM atau Email UB
          </Label>
          <Input
            id="identifier"
            type="text"
            placeholder="Masukkan email UB atau NIM ...."
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            className="bg-white rounded-[12px] h-12 text-base focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          />
        </div>
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="password" className="text-black font-bold text-base">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Masukkan password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white rounded-[12px] h-12 text-base focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          />
        </div>
      </div>

      <Button
        variant="primary"
        size="sm"
        type="submit"
        className="mt-6 text-lg"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
