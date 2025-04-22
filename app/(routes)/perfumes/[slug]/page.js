import { perfumes } from "@/data/perfumes";
import { notFound } from "next/navigation";
import PerfumeDetailClient from "./PerfumeDetailClient";

export async function generateStaticParams() {
  return perfumes.map((perfume) => ({
    slug: String(perfume.slug),
  }));
}

export default function PerfumeDetailPage({ params }) {
  const perfume = perfumes.find((p) => p.slug === params.slug);

  if (!perfume) return notFound();

  const related = perfumes
    .filter(
      (p) =>
        p.slug !== perfume.slug &&
        p.mood?.some((m) => perfume.mood?.includes(m))
    )
    .slice(0, 4);

  return <PerfumeDetailClient perfume={perfume} related={related} />;
}
