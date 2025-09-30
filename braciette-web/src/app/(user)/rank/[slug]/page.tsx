import { RankContainer } from "@/feature/(user)/rank/container/RankContainer";

export default function RankCategoryPage({
  params,
}: {
  params?: { slug?: string };
}) {
  const initialCategory = params?.slug;
  return <RankContainer initialCategory={initialCategory} />;
}