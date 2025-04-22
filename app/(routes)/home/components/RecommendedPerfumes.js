"use client";
import PerfumeCard from "./PerfumeCard";
import { perfumes } from "@/data/perfumes";

const RecommendedPerfumes = () => {
  return (
    <section className="bg-cream w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-playfair text-midnight mb-8">
          Personalized Picks Just for You
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {perfumes
            .filter((p) => p.featured)
            .map((perfume) => (
              <PerfumeCard key={perfume.id} perfume={perfume} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedPerfumes;
