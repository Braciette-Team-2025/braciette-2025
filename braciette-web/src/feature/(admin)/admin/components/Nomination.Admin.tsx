"use client";

import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { NominationProps } from "../types";
import AddNominee from "./AddNominee.Nomination";

function NominationAdmin({ nominations }: NominationProps) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredNominations = nominations.filter((nom) =>
    nom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAddClick() {
    setIsAdding(!isAdding);
  }

  return (
    <section className="flex-[1] max-h-[50rem] 2xl:max-h-none bg-primary-blue rounded-2xl p-6 text-white flex flex-col gap-6 bg-blue font-poppins">
      {isAdding ? (
        <AddNominee redirectBack={setIsAdding} />
      ) : (
        <>
          <h1 className="text-2xl font-bold">Daftar Nominasi</h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-2 border-light-blue rounded-lg p-3 placeholder-text-light focus:outline-none focus:border-white"
            />
          </div>

          <div className="flex-grow min-w-max overflow-y-auto space-y-3 pr-2 max-w-full overflow-auto">
            {filteredNominations.map((nom) => (
              <div
                key={nom.id}
                className="bg-white rounded-xl gap-6 w-full p-6 text-text-dark flex justify-between items-center text-black"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray"></div>
                  <span
                    className="font-semibold"
                    style={{ fontSize: "clamp(20px, 1vw, 30px)" }}
                  >
                    {nom.name}
                  </span>
                </div>
                <div className="flex gap-3 text-xs font-bold">
                  <a
                    href="#"
                    className="text-black hover:underline flex items-center gap-2 text-[10px]"
                  >
                    EDIT
                    <FaPen />
                  </a>
                  <a
                    href="#"
                    className="text-red hover:underline flex items-center gap-2 text-[10px]"
                  >
                    HAPUS
                    <FaTrash />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full h-max justify-end">
            <button
              onClick={handleAddClick}
              className="cursor-pointer border-2 border-white text-white text-primary-blue font-bold text-base rounded-lg py-3.5 w-50 hover:text-black flex justify-center items-center gap-2 hover:bg-white transition-colors"
            >
              TAMBAH
              <FaBarsStaggered />
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default NominationAdmin;
