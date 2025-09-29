import NominationAdmin from "../components/Nomination.Admin";
import AdminSidebar from "../components/Sidebar.Admin";
import VoteAdmin from "../components/Vote.Admin";

const favoritesData = [
  { id: 1, label: "Candidate A", value: 100 },
  { id: 2, label: "Candidate B", value: 72 },
  { id: 3, label: "Candidate C", value: 64 },
  { id: 4, label: "Candidate D", value: 50 },
  { id: 5, label: "Candidate E", value: 44 },
  { id: 6, label: "Candidate F", value: 20 },
  { id: 7, label: "Candidate G", value: 190 },
  { id: 8, label: "Candidate H", value: 290 },
  { id: 9, label: "Candidate I", value: 1200 },
  { id: 10, label: "Candidate J", value: 2 },
  { id: 11, label: "Candidate K", value: 500 },
  { id: 12, label: "Candidate L", value: 670 },
  { id: 13, label: "Candidate A", value: 100 },
  { id: 14, label: "Candidate B", value: 72 },
  { id: 15, label: "Candidate C", value: 64 },
  { id: 16, label: "Candidate D", value: 50 },
  { id: 17, label: "Candidate E", value: 44 },
  { id: 18, label: "Candidate F", value: 20 },
  { id: 19, label: "Candidate G", value: 190 },
  { id: 20, label: "Candidate H", value: 290 },
  { id: 21, label: "Candidate I", value: 1200 },
  { id: 22, label: "Candidate J", value: 2 },
  { id: 23, label: "Candidate K", value: 500 },
  { id: 24, label: "Candidate L", value: 670 },
];

const nominationsData = [
  { id: 1, name: "BEM Fakultas Ilmu Komputer" },
  { id: 2, name: "BEM Fakultas Kedokteran" },
  { id: 3, name: "BEM Fakultas Teknik" },
  { id: 4, name: "BEM Fakultas Ekonomi" },
  { id: 5, name: "BEM Fakultas Hukum" },
  { id: 6, name: "BEM Fakultas Pertanian" },
  { id: 7, name: "BEM Fakultas Ilmu Komputer" },
  { id: 8, name: "BEM Fakultas Kedokteran" },
  { id: 9, name: "BEM Fakultas Teknik" },
  { id: 10, name: "BEM Fakultas Ekonomi" },
  { id: 11, name: "BEM Fakultas Hukum" },
  { id: 12, name: "BEM Fakultas Pertanian" },
  { id: 13, name: "BEM Fakultas Ilmu Komputer" },
  { id: 14, name: "BEM Fakultas Kedokteran" },
  { id: 15, name: "BEM Fakultas Teknik" },
  { id: 16, name: "BEM Fakultas Ekonomi" },
  { id: 17, name: "BEM Fakultas Hukum" },
  { id: 18, name: "BEM Fakultas Pertanian" },
  { id: 19, name: "BEM Fakultas Ilmu Komputer" },
  { id: 20, name: "BEM Fakultas Kedokteran" },
  { id: 21, name: "BEM Fakultas Teknik" },
  { id: 22, name: "BEM Fakultas Ekonomi" },
  { id: 23, name: "BEM Fakultas Hukum" },
  { id: 24, name: "BEM Fakultas Pertanian" },
];

function AdminContainer() {
  return (
    <div className="w-full h-screen max-h-screen bg-white flex">
      <AdminSidebar />
      <main className="flex-grow p-12 flex gap-6">
        <section className="flex-[2] flex flex-col gap-12">
          <VoteAdmin data={favoritesData} voteInfo={{ totalVotes: 540 }} />
        </section>
        <NominationAdmin nominations={nominationsData} />
      </main>
    </div>
  );
}

export default AdminContainer;
