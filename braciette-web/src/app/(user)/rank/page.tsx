import { RankContainer } from "@/feature/(user)/rank/container/RankContainer";

export default function RankPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const initialCategory = searchParams?.category;
  return <RankContainer initialCategory={initialCategory} />;
}
