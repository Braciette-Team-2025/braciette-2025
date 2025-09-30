"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { adminService } from "@/api/services/admin/admin";
import { UpdateNominationPayload } from "../types/admin";
import { Loader2 } from "lucide-react";

type EditNomineeProps = {
  nominationId: string;
  onSubmit: (
    payload: UpdateNominationPayload,
    options: { onSuccess: () => void }
  ) => void;
  isLoading: boolean;
  onCancel: () => void;
};

function EditNominee({
  nominationId,
  onSubmit,
  isLoading,
  onCancel,
}: EditNomineeProps) {
  const [name, setName] = useState("");
  const [longName, setLongName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const { data: nominationDetail, isLoading: isLoadingDetail } = useQuery({
    queryKey: ["nominationDetail", nominationId],
    queryFn: () => adminService.getNominationDetail(nominationId),
    enabled: !!nominationId,
  });

  useEffect(() => {
    const data = nominationDetail?.data;
    if (data) {
      setName(data.name);
      setLongName(data.longName || "");
      setLogoUrl(data.logoUrl);
    }
  }, [nominationDetail]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const payload: UpdateNominationPayload = { name, longName, logoUrl };
    onSubmit(payload, {
      onSuccess: () => {
        onCancel();
      },
    });
  }

  if (isLoadingDetail) {
    return <div>Loading form...</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-poppins">Edit Nominasi</h1>
        <button onClick={onCancel} className="text-lg hover:text-red-500">
          Batal
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 font-poppins font-semibold"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nama-lembaga">Nama Lembaga</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white rounded-lg p-3 text-black text-base font-normal"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nama-panjang">Nama Panjang (Opsional)</label>
          <input
            type="text"
            value={longName}
            onChange={(e) => setLongName(e.target.value)}
            className="bg-white rounded-lg p-3 text-black text-base font-normal"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="logo-url">URL Logo</label>
          <input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            required
            className="bg-white rounded-lg p-3 text-black text-base font-normal"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-white text-blue w-max p-2 px-6 rounded-lg self-center font-bold hover:scale-105 transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Update"}
        </button>
      </form>
    </>
  );
}
export default EditNominee;
