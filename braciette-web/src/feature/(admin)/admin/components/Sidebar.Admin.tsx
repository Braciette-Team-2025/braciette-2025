"use client";

import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { LuPanelLeftOpen } from "react-icons/lu";
import { useAuth } from "@/shared/context/AuthContext";
import { useToast } from "@/shared/hooks/useToast";
import Image from "next/image";

interface SidebarCategory {
  id: string;
  name: string;
}

type AdminSidebarProps = {
  categories: SidebarCategory[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
};

function AdminSidebar({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();
  const { showToast } = useToast();

  const handleLogout = () => {
    showToast({
      type: "info",
      title: "Logout Berhasil",
      message: "Anda telah keluar dari akun.",
    });
    setTimeout(() => {
      logout();
    }, 1500);
  };

  const sidebarContent = (
    <div className="relative w-[300px] h-full flex flex-col items-center bg-dark-blue text-white font-poppins text-[20px] text-center font-semibold p-8">
      <button
        onClick={() => setIsOpen(false)}
        className="lg:hidden absolute right-5 top-5 cursor-pointer z-10"
      >
        <FaX />
      </button>

      <div className="w-full flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/landing-page/logo.svg"
            alt="Website Logo"
            layout="fill"
            objectFit="contain" 
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          {categories.map((category) => {
            const isActive = category.id === selectedCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-full py-4 rounded-lg transition-all duration-150 ${
                  isActive ? "bg-white text-blue" : "hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-auto py-3 w-60 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-blue transition-all duration-150 flex-shrink-0"
      >
        Log out
      </button>
    </div>
  );

  return (
    <>
      <aside className="h-screen flex-shrink-0 sticky top-0 left-0 hidden lg:block">
        {sidebarContent}
      </aside>

      {isOpen ? (
        <aside className="h-screen flex-shrink-0 fixed top-0 left-0 z-40 lg:hidden">
          {sidebarContent}
        </aside>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer bg-dark-blue text-white p-4 rounded-lg fixed top-5 left-5 z-50 lg:hidden opacity-50 shadow-2xl hover:opacity-100 transition-opacity duration-200"
        >
          <LuPanelLeftOpen />
        </button>
      )}
    </>
  );
}

export default AdminSidebar;
