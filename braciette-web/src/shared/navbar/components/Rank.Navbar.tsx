import Link from "next/link";
import { useState } from "react";

function RankNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="relative group hover:cursor-pointer font-poppins font-medium">
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Rank
        </button>
        <span className="absolute left-1/2 -translate-x-1/2 top-full flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
          ))}
        </span>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-row my-12 gap-8 text-2xl`}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/rank"
            className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
          >
            DPM
          </Link>
          <Link
            href="/rank"
            className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
          >
            BEM
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="/rank"
            className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
          >
            HIMA
          </Link>
          <Link
            href="/rank"
            className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
          >
            UKM
          </Link>
        </div>
      </div>
      <div
        className={`hidden md:flex absolute flex-col bg-pink py-2 px-4 ${
          isOpen ? "top-20 opacity-100" : "-top-100 opacity-0"
        } -left-[80%] transition-all duration-200 font-medium font-poppins`}
      >
        <Link
          href="/rank"
          className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
        >
          DPM
        </Link>
        <Link
          href="/rank"
          className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
        >
          BEM
        </Link>
        <Link
          href="/rank"
          className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
        >
          Himpunan
        </Link>
        <Link
          href="/rank"
          className="p-2 hover:bg-yellow hover:text-pink transition-all duration-150"
        >
          UKM
        </Link>
      </div>
    </div>
  );
}

export default RankNav;
