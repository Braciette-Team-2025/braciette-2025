type AddNomineeProps = {
  redirectBack: (back: boolean) => void;
};
function AddNominee({ redirectBack }: AddNomineeProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to your backend or update state.
    // After submission, redirect back to the previous view.
    redirectBack(false);
  }
  return (
    <>
      <h1 className="text-2xl font-bold font-poppins">Tambah Nominasi</h1>

      <form
        action="post"
        className="flex flex-col gap-6 font-poppins font-semibold"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nama-lembaga">Nama Lembaga</label>
          <input
            type="text"
            name="nama-lembaga"
            id="nama-lembaga"
            className="bg-white rounded-lg p-3 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="logo">Logo</label>
          <textarea
            rows={4}
            cols={50}
            name="logo"
            id="logo"
            className="bg-white rounded-lg p-8 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-blue w-max p-2 px-4 rounded-lg self-center font-bold hover:scale-105 transition-all duration-150 cursor-pointer"
        >
          Simpan
        </button>
      </form>
    </>
  );
}
export default AddNominee;
