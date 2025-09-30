import NominationAdmin from "../components/Nomination.Admin";
import AdminSidebar from "../components/Sidebar.Admin";
import VoteAdmin from "../components/Vote.Admin";
import { Nominations } from "../data/nomination-data";
import { VoteData } from "../data/vote-data";

function AdminContainer() {
  return (
    <div className="w-full h-screen max-h-screen bg-white flex">
      <AdminSidebar />
      <main className="flex-grow p-12 flex gap-6">
        <section className="flex-[2] flex flex-col gap-12">
          <VoteAdmin data={VoteData.data} voteInfo={VoteData.voteInfo} />
        </section>
        <NominationAdmin nominations={Nominations.nominations} />
      </main>
    </div>
  );
}

export default AdminContainer;
