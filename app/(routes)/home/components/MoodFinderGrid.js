"use client";

import React, { useState } from "react";
import { moods } from "@/data/moods";
import { perfumes } from "@/data/perfumes";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MoodFinderGrid = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const clearSelection = () => {
    setSelectedMood(null);
  };

  const filteredPerfumes = selectedMood
    ? perfumes.filter((p) => p.mood.includes(selectedMood.tag)).slice(0, 4)
    : [];

  return (
    <section className="py-16 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-montserrat text-midnight">
            Explore by Mood
          </h2>
          {selectedMood && (
            <button
              onClick={clearSelection}
              className="flex items-center text-amber hover:text-amber-light transition-colors font-montserrat text-sm"
            >
              Clear Selection <X size={16} className="ml-1" />
            </button>
          )}
        </div>

        {/* Selected Mood Details */}
        {selectedMood && (
          <div className="mb-10 p-6 bg-midnight/5 rounded-xl border border-amber/20 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl p-4 rounded-full bg-gradient-to-br shadow-sm flex items-center justify-center w-16 h-16 md:w-20 md:h-20 text-midnight">
                  {selectedMood.icon}
                </span>
                <div>
                  <h3 className="font-montserrat text-2xl text-midnight">
                    {selectedMood.name} Fragrances
                  </h3>
                  <p className="font-poppins text-sm text-midnight/70 mt-1">
                    Discover perfumes that match the{" "}
                    {selectedMood.name.toLowerCase()} mood.
                  </p>
                </div>
              </div>

              <div className="ml-auto mt-4 md:mt-0">
                <Link
                  href={`/shop?mood=${selectedMood.tag}`}
                  className="bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200 flex items-center"
                >
                  Browse Collection
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Perfume Preview */}
            {filteredPerfumes.length > 0 && (
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredPerfumes.map((perfume) => (
                  <Link
                    key={perfume.id}
                    href={`/perfumes/${perfume.slug}`}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                      <Image
                        src={perfume.image}
                        alt={perfume.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                    </div>
                    <h4 className="font-montserrat text-sm mt-2 text-midnight group-hover:text-amber transition-colors">
                      {perfume.name}
                    </h4>
                    <p className="font-poppins text-xs text-midnight/60">
                      AED {perfume.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mood Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`
                flex flex-col justify-center items-center aspect-square rounded-xl
                bg-gradient-to-br ${mood.color}
                shadow hover:shadow-lg transition-all duration-300
                text-midnight hover:text-amber group
                ${
                  selectedMood?.id === mood.id
                    ? "ring-2 ring-amber ring-offset-2"
                    : ""
                }
              `}
              onClick={() => handleMoodSelect(mood)}
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {mood.icon}
              </span>
              <span className="font-montserrat text-lg font-medium">
                {mood.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-amber/5 blur-3xl -z-10" />
      <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-amber/5 blur-3xl -z-10" />
    </section>
  );
};

export default MoodFinderGrid;
