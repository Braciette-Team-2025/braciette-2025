'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f3d038] w-full p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6"
    >
      <div className="w-full flex flex-col gap-5">
        <div className="grid w-full items-center gap-2.5">
          <Label htmlFor="email" className="text-black font-bold text-base">
            Email UB
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Masukkan email UB..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      <Button variant="primary" size="sm" type="submit" className="mt-6 text-lg">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;