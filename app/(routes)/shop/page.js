"use client";
import React, { useState, useEffect } from "react";
import { perfumes } from "@/data/perfumes";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, X, ChevronDown, ChevronUp, Star } from "lucide-react";

// ShopPage component that combines filters and product grid
const ShopPage = () => {
  const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    notes: [],
    priceRange: { min: 0, max: 1000 },
    mood: [],
    gender: [],
  });

  // Extract all unique values for filter options
  const allNotes = [
    ...new Set(perfumes.flatMap((perfume) => perfume.notes)),
  ].sort();
  const allMoods = [
    ...new Set(perfumes.flatMap((perfume) => perfume.mood || [])),
  ].sort();
  const allGenders = [
    ...new Set(
      perfumes.flatMap(
        (perfume) =>
          perfume.tags?.filter((tag) =>
            ["masculine", "feminine", "unisex"].includes(tag)
          ) || []
      )
    ),
  ];

  // Apply filters when search query or active filters change
  useEffect(() => {
    let results = [...perfumes];

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (perfume) =>
          perfume.name.toLowerCase().includes(query) ||
          perfume.brand.toLowerCase().includes(query) ||
          perfume.notes.some((note) => note.toLowerCase().includes(query))
      );
    }

    // Filter by notes
    if (activeFilters.notes.length > 0) {
      results = results.filter((perfume) =>
        activeFilters.notes.some((note) => perfume.notes.includes(note))
      );
    }

    // Filter by price range
    results = results.filter(
      (perfume) =>
        perfume.price >= activeFilters.priceRange.min &&
        perfume.price <= activeFilters.priceRange.max
    );

    // Filter by mood
    if (activeFilters.mood.length > 0) {
      results = results.filter(
        (perfume) =>
          perfume.mood &&
          activeFilters.mood.some((mood) => perfume.mood.includes(mood))
      );
    }

    // Filter by gender
    if (activeFilters.gender.length > 0) {
      results = results.filter(
        (perfume) =>
          perfume.tags &&
          activeFilters.gender.some((gender) => perfume.tags.includes(gender))
      );
    }

    setFilteredPerfumes(results);
  }, [searchQuery, activeFilters]);

  // Handle toggling a filter value
  const toggleFilter = (category, value) => {
    setActiveFilters((prev) => {
      const updated = { ...prev };

      if (category === "priceRange") {
        updated.priceRange = value;
      } else {
        if (updated[category].includes(value)) {
          updated[category] = updated[category].filter(
            (item) => item !== value
          );
        } else {
          updated[category] = [...updated[category], value];
        }
      }

      return updated;
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      notes: [],
      priceRange: { min: 0, max: 1000 },
      mood: [],
      gender: [],
    });
    setSearchQuery("");
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 mt-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl text-midnight mb-2">
            Fragrance Collection
          </h1>
          <p className="font-poppins text-midnight/70">
            Discover your perfect scent from our curated selection of premium
            fragrances.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Left Side */}
          <ShopFilters
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            allNotes={allNotes}
            allMoods={allMoods}
            allGenders={allGenders}
            clearAllFilters={clearAllFilters}
          />

          {/* Product Grid - Right Side */}
          <div className="w-full md:w-3/4">
            {/* Results Summary */}
            <div className="flex justify-between items-center mb-6">
              <p className="font-poppins text-midnight/70">
                Showing {filteredPerfumes.length}{" "}
                {filteredPerfumes.length === 1 ? "result" : "results"}
              </p>
              <div className="flex gap-2">
                {Object.entries(activeFilters).some(
                  ([key, value]) =>
                    (Array.isArray(value) && value.length > 0) ||
                    (key === "priceRange" &&
                      (value.min > 0 || value.max < 1000))
                ) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-amber flex items-center hover:text-amber-light transition-colors"
                  >
                    Clear all <X size={14} className="ml-1" />
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <PerfumeGrid perfumes={filteredPerfumes} />

            {/* Empty State */}
            {filteredPerfumes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl font-playfair text-midnight mb-2">
                  No fragrances found
                </p>
                <p className="text-midnight/70 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Filter component for the left sidebar
const ShopFilters = ({
  activeFilters,
  toggleFilter,
  searchQuery,
  setSearchQuery,
  allNotes,
  allMoods,
  allGenders,
  clearAllFilters,
}) => {
  // Track which filter sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    notes: true,
    price: true,
    mood: true,
    gender: true,
  });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full md:w-1/4 bg-white rounded-lg p-6 shadow-sm h-fit md:sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-playfair text-xl text-midnight">Filters</h2>
        <button
          onClick={clearAllFilters}
          className="text-sm text-amber hover:text-amber-light transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search fragrances..."
          className="w-full pl-10 pr-4 py-2 border border-midnight/20 rounded-md focus:outline-none focus:ring-1 focus:ring-amber focus:border-amber transition-colors"
        />
        <Search
          size={18}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-midnight/40"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-midnight/40 hover:text-midnight/60"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Notes Filter */}
      <div className="mb-6 border-b border-midnight/10 pb-6">
        <button
          className="w-full flex justify-between items-center mb-4 group"
          onClick={() => toggleSection("notes")}
        >
          <h3 className="font-montserrat font-medium text-midnight">
            Fragrance Notes
          </h3>
          {expandedSections.notes ? (
            <ChevronUp
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          )}
        </button>

        {expandedSections.notes && (
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
            {allNotes.map((note) => (
              <div key={note} className="flex items-center">
                <input
                  type="checkbox"
                  id={`note-${note}`}
                  checked={activeFilters.notes.includes(note)}
                  onChange={() => toggleFilter("notes", note)}
                  className="w-4 h-4 rounded border-midnight/30 text-amber focus:ring-amber"
                />
                <label
                  htmlFor={`note-${note}`}
                  className="ml-2 text-sm text-midnight/80 cursor-pointer hover:text-midnight"
                >
                  {note}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b border-midnight/10 pb-6">
        <button
          className="w-full flex justify-between items-center mb-4 group"
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-montserrat font-medium text-midnight">
            Price Range
          </h3>
          {expandedSections.price ? (
            <ChevronUp
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          )}
        </button>

        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-midnight/70">
                AED {activeFilters.priceRange.min}
              </span>
              <span className="text-sm text-midnight/70">
                AED {activeFilters.priceRange.max}
              </span>
            </div>

            <div className="relative pb-4">
              <input
                type="range"
                min={0}
                max={1000}
                step={50}
                value={activeFilters.priceRange.max}
                onChange={(e) =>
                  toggleFilter("priceRange", {
                    ...activeFilters.priceRange,
                    max: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-midnight/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Under AED 250", value: { min: 0, max: 250 } },
                { label: "AED 250 - AED 300", value: { min: 250, max: 300 } },
                { label: "AED 300 - AED 350", value: { min: 300, max: 350 } },
                { label: "AED 350+", value: { min: 350, max: 1000 } },
              ].map((range) => (
                <button
                  key={range.label}
                  onClick={() => toggleFilter("priceRange", range.value)}
                  className={`text-xs px-3 py-2 rounded border ${
                    activeFilters.priceRange.min === range.value.min &&
                    activeFilters.priceRange.max === range.value.max
                      ? "bg-amber text-midnight border-amber"
                      : "bg-transparent text-midnight/70 border-midnight/20 hover:border-amber/50"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mood Filter */}
      <div className="mb-6 border-b border-midnight/10 pb-6">
        <button
          className="w-full flex justify-between items-center mb-4 group"
          onClick={() => toggleSection("mood")}
        >
          <h3 className="font-montserrat font-medium text-midnight">Mood</h3>
          {expandedSections.mood ? (
            <ChevronUp
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          )}
        </button>

        {expandedSections.mood && (
          <div className="flex flex-wrap gap-2">
            {allMoods.map((mood) => (
              <button
                key={mood}
                onClick={() => toggleFilter("mood", mood)}
                className={`text-xs px-3 py-1 rounded-full ${
                  activeFilters.mood.includes(mood)
                    ? "bg-amber text-midnight"
                    : "bg-midnight/5 text-midnight/70 hover:bg-midnight/10"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Gender Filter */}
      <div className="mb-2">
        <button
          className="w-full flex justify-between items-center mb-4 group"
          onClick={() => toggleSection("gender")}
        >
          <h3 className="font-montserrat font-medium text-midnight">Gender</h3>
          {expandedSections.gender ? (
            <ChevronUp
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-midnight/60 group-hover:text-midnight transition-colors"
            />
          )}
        </button>

        {expandedSections.gender && (
          <div className="space-y-2">
            {allGenders.map((gender) => (
              <div key={gender} className="flex items-center">
                <input
                  type="checkbox"
                  id={`gender-${gender}`}
                  checked={activeFilters.gender.includes(gender)}
                  onChange={() => toggleFilter("gender", gender)}
                  className="w-4 h-4 rounded border-midnight/30 text-amber focus:ring-amber"
                />
                <label
                  htmlFor={`gender-${gender}`}
                  className="ml-2 text-sm text-midnight/80 capitalize cursor-pointer hover:text-midnight"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Product Grid component
const PerfumeGrid = ({ perfumes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {perfumes.map((perfume) => (
        <Link
          href={`/perfumes/${perfume.slug}`}
          key={perfume.id}
          className="group cursor-pointer"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative aspect-square bg-midnight/5">
              <Image
                src={perfume.image || "/images/placeholder-perfume.jpg"}
                alt={perfume.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {perfume.featured && (
                <span className="absolute top-2 right-2 bg-amber text-midnight text-xs px-2 py-1 rounded-full font-montserrat">
                  Featured
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-playfair text-lg text-midnight group-hover:text-amber transition-colors">
                    {perfume.name}
                  </h3>
                  <p className="text-sm text-midnight/60 font-montserrat">
                    {perfume.brand}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star size={14} className="text-amber fill-amber" />
                  <span className="text-sm ml-1 text-midnight/70">
                    {perfume.rating}
                  </span>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-wrap gap-1 mb-3">
                {perfume.notes.slice(0, 3).map((note) => (
                  <span
                    key={note}
                    className="text-xs bg-cream text-midnight/70 px-2 py-1 rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex justify-between items-center">
                <span className="font-montserrat font-medium text-midnight">
                  AED {perfume.price}
                </span>
                <span className="text-xs text-amber group-hover:translate-x-1 transition-transform duration-300">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopPage;
