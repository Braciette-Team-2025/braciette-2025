import ChooseVoteContainer from "@/feature/(user)/choose/container/ChooseVoteContainer";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full min-h-screen bg-blue"
      style={{
        backgroundImage: "url(/landing-page/lines-white.svg)",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default function PilihanVotingPage() {
  return (
    <PageLayout>
      <ChooseVoteContainer />
    </PageLayout>
  );
}
