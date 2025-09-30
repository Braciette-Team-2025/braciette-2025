"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPen, FaTrash, FaBarsStaggered } from "react-icons/fa6";
import {
  NominationStatistic,
  CreateNominationPayload,
  UpdateNominationPayload,
} from "../types/admin";
import AddNominee from "./AddNominee.Nomination";
import EditNominee from "./EditNominee.Nomination";

type NominationAdminProps = {
  nominations: NominationStatistic[];
  onDeleteNomination: (nominationId: string) => void;
  onCreateNomination: (
    payload: CreateNominationPayload,
    options: { onSuccess: () => void }
  ) => void;
  onUpdateNomination: (
    variables: { nominationId: string; payload: UpdateNominationPayload },
    options: { onSuccess: () => void }
  ) => void;
  isCreating: boolean;
  isUpdating: boolean;
  selectedCategoryId: string | null;
};

function NominationAdmin({
  nominations,
  onDeleteNomination,
  onCreateNomination,
  onUpdateNomination,
  isCreating,
  isUpdating,
  selectedCategoryId,
}: NominationAdminProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingNomination, setEditingNomination] =
    useState<NominationStatistic | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNominations = nominations.filter((nom) =>
    nom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const listView = (
    <>
      <h1 className="text-2xl font-bold flex-shrink-0">Daftar Nominasi</h1>
      <div className="mb-6 flex-shrink-0">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-2 border-light-blue rounded-lg p-3 placeholder-text-light focus:outline-none focus:border-white"
        />
      </div>
      <div className="flex-grow overflow-y-auto space-y-3 pr-2">
        {filteredNominations.map((nom) => (
          <div
            key={nom.id}
            className="bg-white rounded-xl gap-6 w-full p-6 text-text-dark flex justify-between items-center text-black"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <Image
                  src={nom.logoUrl}
                  alt={nom.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span
                className="font-semibold"
                style={{ fontSize: "clamp(20px, 1vw, 30px)" }}
              >
                {nom.name}
              </span>
            </div>
            <div className="flex gap-3 text-xs font-bold flex-shrink-0">
              <button
                onClick={() => setEditingNomination(nom)}
                className="text-black hover:underline flex items-center gap-2"
              >
                EDIT <FaPen />
              </button>
              <button
                onClick={() => onDeleteNomination(nom.id)}
                className="text-red-500 hover:underline flex items-center gap-2"
              >
                HAPUS <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full h-max justify-end flex-shrink-0">
        <button
          onClick={() => setIsAdding(true)}
          className="cursor-pointer border-2 border-white text-white font-bold text-base rounded-lg py-3.5 px-4 hover:text-black flex justify-center items-center gap-2 hover:bg-white transition-colors"
        >
          TAMBAH <FaBarsStaggered />
        </button>
      </div>
    </>
  );

  return (
    <section className="w-[700px] h-full bg-blue rounded-2xl p-6 text-white flex flex-col gap-6 font-poppins">
      {isAdding ? (
        <AddNominee
          onCancel={() => setIsAdding(false)}
          onSubmit={onCreateNomination}
          isLoading={isCreating}
          categoryId={selectedCategoryId!}
        />
      ) : editingNomination ? (
        <EditNominee
          nominationId={editingNomination.id}
          onCancel={() => setEditingNomination(null)}
          onSubmit={(payload, options) =>
            onUpdateNomination(
              { nominationId: editingNomination.id, payload },
              options
            )
          }
          isLoading={isUpdating}
        />
      ) : (
        listView
      )}
    </section>
  );
}

export default NominationAdmin;
