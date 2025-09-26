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
    categoryId: string;
  };
};

export default function VotingPage({ params }: PageProps) {
  const { categoryId } = params;

  return (
    <PageLayout>
      <VotingContainer categorySlug={categoryId} />
    </PageLayout>
  );
}