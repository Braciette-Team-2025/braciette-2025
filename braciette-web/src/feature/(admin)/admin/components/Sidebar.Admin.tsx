"use client";
import Link from "next/link";
import { SidebarData } from "../data/sidebar-data";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="bg-white h-screen flex-[1] fixed lg:sticky top-0 left-0">
      <div className="relative w-[300px] h-full flex flex-col justify-between items-center bg-dark-blue text-white font-poppins text-[20px] text-center font-semibold">
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute right-5 top-5 cursor-pointer"
        >
          <FaX />
        </button>
        <div className="flex flex-col gap-4 w-max h-max p-12 justify-center items-center">
          <div className="w-30 h-30 mb-10 rounded-full bg-white" />
          {SidebarData.map((category) => (
            <Link
              key={category.id}
              className="hover:bg-white hover:text-blue w-60 py-4 rounded-lg transition-all duration-150"
              href={category.link}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <button className="py-4 w-60 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-blue my-12 transition-all duration-150">
          Log out
        </button>
      </div>
    </div>
  ) : (
    <button
      onClick={() => setIsOpen(true)}
      className="cursor-pointer bg-dark-blue text-white p-4 rounded-lg fixed top-5 left-5 z-50 lg:hidden opacity-30 shadow-2xl hover:opacity-100 transition-opacity duration-200"
    >
      <LuPanelLeftOpen />
    </button>
  );
}

export default AdminSidebar;
