"use client";
import NominationAdmin from "../components/Nomination.Admin";
import AdminSidebar from "../components/Sidebar.Admin";
import VoteAdmin from "../components/Vote.Admin";
import { useAdminDashboard } from "../hooks/useAdminDashboard";

function AdminContainer() {
  const {
    isLoading,
    categories,
    selectedCategoryId,
    onSelectCategory,
    voteData,
    nominationData,
    totalVotes,
    deleteNomination,
    createNomination,
    isCreatingNomination,
    updateNomination,
    isUpdatingNomination,
  } = useAdminDashboard();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white flex">
      <AdminSidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={onSelectCategory}
      />
      <main className="flex-1 p-6 md:p-12 flex flex-row gap-6 overflow-x-auto">
        <section className="w-[500px] flex-shrink-0">
          <VoteAdmin data={voteData} voteInfo={{ totalVotes }} />
        </section>

        <NominationAdmin
          nominations={nominationData}
          onDeleteNomination={deleteNomination}
          onCreateNomination={createNomination}
          isCreating={isCreatingNomination}
          onUpdateNomination={updateNomination}
          isUpdating={isUpdatingNomination}
          selectedCategoryId={selectedCategoryId}
        />
      </main>
    </div>
  );
}
export default AdminContainer;
