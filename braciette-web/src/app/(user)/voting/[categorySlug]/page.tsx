import { VotingContainer } from '@/feature/(user)/voting/container/VotingContainer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full min-h-screen bg-blue"
      style={{
        backgroundImage: 'url(/landing-page/lines-white.svg)',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};

type PageProps = {
  params: {
    categorySlug: string;
  };
};

export default function VotingPage({ params }: PageProps) {
  const { categorySlug } = params;

  return (
    <PageLayout>
      <VotingContainer categorySlug={categorySlug} />
    </PageLayout>
  );
}