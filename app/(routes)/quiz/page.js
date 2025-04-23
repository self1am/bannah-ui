"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { perfumes } from "@/data/perfumes";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    notes: [],
    mood: [],
    occasion: "",
    favorites: [],
    intensity: "",
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [progress, setProgress] = useState(0);

  const totalSteps = 5;

  const handleNoteSelection = (note) => {
    setAnswers((prev) => {
      const newNotes = prev.notes.includes(note)
        ? prev.notes.filter((n) => n !== note)
        : [...prev.notes, note];
      return { ...prev, notes: newNotes };
    });
  };

  const handleMoodSelection = (mood) => {
    setAnswers((prev) => {
      const newMoods = prev.mood.includes(mood)
        ? prev.mood.filter((m) => m !== mood)
        : [...prev.mood, mood];
      return { ...prev, mood: newMoods };
    });
  };

  const handleOccasionSelect = (occasion) => {
    setAnswers((prev) => ({ ...prev, occasion }));
  };

  const handleFavoriteSelection = (perfume) => {
    setAnswers((prev) => {
      const newFavorites = prev.favorites.includes(perfume)
        ? prev.favorites.filter((p) => p !== perfume)
        : [...prev.favorites, perfume];
      return { ...prev, favorites: newFavorites };
    });
  };

  const handleIntensitySelect = (intensity) => {
    setAnswers((prev) => ({ ...prev, intensity }));
  };

  const goToNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setProgress(((step + 1) / totalSteps) * 100);
    }
  };

  const goToPrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setProgress(((step - 1) / totalSteps) * 100);
    }
  };

  const submitQuiz = () => {
    setIsCalculating(true);
    setStep(totalSteps)

    // Simulate API call with timeout
    setTimeout(() => {
      // Simple algorithm to match perfumes based on answers
      const matched = perfumes
        .filter((p) => {
          // Match by notes overlap
          const notesMatch = p.notes?.some((note) =>
            answers.notes.includes(note)
          );

          // Match by mood overlap
          const moodMatch = p.mood?.some((mood) => answers.mood.includes(mood));

          // Simple scoring
          return notesMatch || moodMatch;
        })
        .slice(0, 5); // Get top 5

      setRecommendations(matched);
      setIsCalculating(false);
    }, 3000);
  };

  // Notes for the quiz
  const noteOptions = [
    "Citrus",
    "Floral",
    "Woody",
    "Spicy",
    "Sweet",
    "Fruity",
    "Amber",
    "Musk",
    "Vanilla",
    "Leather",
    "Rose",
    "Oud",
  ];

  // Mood options
  const moodOptions = [
    "Romantic",
    "Confident",
    "Relaxed",
    "Energetic",
    "Sophisticated",
    "Playful",
    "Mysterious",
    "Fresh",
  ];

  // Occasion options
  const occasionOptions = [
    "Everyday",
    "Work",
    "Date Night",
    "Special Event",
    "Outdoor",
    "Evening Out",
    "Summer Day",
    "Winter Night",
  ];

  // Example perfumes for the favorites question
  const popularPerfumes = [
    {
      id: 1,
      name: "Santal 33",
      brand: "Le Labo",
      image: "/perfumes/example1.jpg",
    },
    {
      id: 2,
      name: "Black Orchid",
      brand: "Tom Ford",
      image: "/perfumes/example2.jpg",
    },
    { id: 3, name: "J'adore", brand: "Dior", image: "/perfumes/example3.jpg" },
    {
      id: 4,
      name: "Bleu de Chanel",
      brand: "Chanel",
      image: "/perfumes/example4.jpg",
    },
    {
      id: 5,
      name: "Light Blue",
      brand: "Dolce & Gabbana",
      image: "/perfumes/example5.jpg",
    },
    { id: 6, name: "Aventus", brand: "Creed", image: "/perfumes/example6.jpg" },
  ];

  // Intensity options
  const intensityOptions = [
    {
      value: "light",
      label: "Light & Fresh",
      description: "Subtle, daytime appropriate",
    },
    {
      value: "moderate",
      label: "Moderate",
      description: "Noticeable but not overwhelming",
    },
    {
      value: "strong",
      label: "Strong & Bold",
      description: "Statement making, long-lasting",
    },
  ];

  return (
    <div className="min-h-screen mt-[100px] bg-gradient-to-b from-amber/5 to-cream py-12 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-amber"></div>
        <div className="absolute top-20 left-1/3 w-24 h-24 rounded-full bg-midnight"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 rounded-full bg-amber"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-midnight"></div>
        <div className="absolute -top-30 left-1/4 w-32 h-32 rounded-full bg-amber"></div>
        <div className="absolute -top-70 right-1/3 w-24 h-24 rounded-full bg-midnight"></div>
        <div className="absolute bottom-10 left-1/2 w-40 h-40 rounded-full bg-amber"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-montserrat text-midnight">
            Find Your Signature Scent
          </h2>
          <p className="text-midnight/70 font-montserrat">
            Answer a few questions to discover your perfect fragrance match
          </p>
        </div>
        {step < totalSteps && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-montserrat text-midnight/70">
                Step {step + 1} of {totalSteps}
              </span>
              <span className="text-sm font-montserrat text-midnight/70">
                {Math.round(progress)}% Complete
              </span>
            </div>

            <div className="w-full bg-midnight/10 rounded-full h-2">
              <div
                className="bg-amber h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Step 1: Notes Preference */}
          {step === 0 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-montserrat text-midnight">
                What scent notes do you enjoy?
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Select all that appeal to you.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {noteOptions.map((note) => (
                  <button
                    key={note}
                    onClick={() => handleNoteSelection(note)}
                    className={`py-3 px-4 rounded-lg border text-sm font-montserrat transition-all ${
                      answers.notes.includes(note)
                        ? "border-amber bg-amber/10 text-amber"
                        : "border-midnight/20 text-midnight/70 hover:border-midnight/40"
                    }`}
                  >
                    <div className="flex items-center">
                      {answers.notes.includes(note) && (
                        <Check size={16} className="mr-2" />
                      )}
                      <span>{note}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Mood */}
          {step === 1 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-montserrat text-midnight">
                How do you want your perfume to make you feel?
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Select all that apply.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {moodOptions.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => handleMoodSelection(mood)}
                    className={`py-3 px-4 rounded-lg border text-sm font-montserrat transition-all ${
                      answers.mood.includes(mood)
                        ? "border-amber bg-amber/10 text-amber"
                        : "border-midnight/20 text-midnight/70 hover:border-midnight/40"
                    }`}
                  >
                    <div className="flex items-center">
                      {answers.mood.includes(mood) && (
                        <Check size={16} className="mr-2" />
                      )}
                      <span>{mood}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Occasion */}
          {step === 2 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-montserrat text-midnight">
                When will you mostly wear this fragrance?
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Choose your primary occasion.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {occasionOptions.map((occasion) => (
                  <button
                    key={occasion}
                    onClick={() => handleOccasionSelect(occasion)}
                    className={`py-3 px-4 rounded-lg border text-sm font-montserrat transition-all ${
                      answers.occasion === occasion
                        ? "border-amber bg-amber/10 text-amber"
                        : "border-midnight/20 text-midnight/70 hover:border-midnight/40"
                    }`}
                  >
                    <div className="flex items-center">
                      {answers.occasion === occasion && (
                        <Check size={16} className="mr-2" />
                      )}
                      <span>{occasion}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Past Favorites */}
          {step === 3 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-montserrat text-midnight">
                Have you enjoyed any of these before?
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Select any that you&apos;ve liked in the past.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {popularPerfumes.map((perfume) => (
                  <button
                    key={perfume.id}
                    onClick={() => handleFavoriteSelection(perfume.id)}
                    className={`border rounded-lg p-3 transition-all ${
                      answers.favorites.includes(perfume.id)
                        ? "border-amber bg-amber/5"
                        : "border-midnight/10 hover:border-midnight/30"
                    }`}
                  >
                    <div className="relative w-full aspect-square rounded-md overflow-hidden mb-2 bg-midnight/5">
                      <Image
                        src={perfume.image}
                        alt={perfume.name}
                        fill
                        className="object-cover"
                      />
                      {answers.favorites.includes(perfume.id) && (
                        <div className="absolute top-2 right-2 bg-amber rounded-full p-1">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-montserrat text-sm font-medium">
                      {perfume.name}
                    </h3>
                    <p className="text-xs text-midnight/60">{perfume.brand}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Intensity Preference */}
          {step === 4 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-montserrat text-midnight">
                What scent intensity do you prefer?
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Choose your ideal strength level.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-4">
                {intensityOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleIntensitySelect(option.value)}
                    className={`py-4 px-4 rounded-lg border text-left transition-all ${
                      answers.intensity === option.value
                        ? "border-amber bg-amber/10 text-midnight"
                        : "border-midnight/20 text-midnight hover:border-midnight/40"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h3 className="font-montserrat font-medium">
                          {option.label}
                        </h3>
                        <p className="text-sm text-midnight/60">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading/Calculating Step */}
          {step === totalSteps && isCalculating && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-montserrat text-midnight">
                  Finding Your Perfect Match
                </h1>
                <p className="text-midnight/70 font-montserrat max-w-md mx-auto">
                  We&apos;re analyzing your preferences to find the ideal
                  fragrances for you...
                </p>

                <div className="relative w-40 h-40 mx-auto mt-8">
                  <div className="absolute inset-0 rounded-full border-4 border-midnight/10"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-amber border-t-transparent animate-spin"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-amber/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-montserrat text-2xl text-amber">
                      85%
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 mt-8">
                  <div className="flex items-center text-sm text-midnight/70 animate-pulse">
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Analyzing note preferences...
                  </div>
                  <div className="flex items-center text-sm text-midnight/70">
                    <Check size={16} className="mr-2 text-amber" />
                    Mood profile processed
                  </div>
                  <div className="flex items-center text-sm text-midnight/70">
                    <Check size={16} className="mr-2 text-amber" />
                    Occasion matching complete
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Page */}
          {step === totalSteps && !isCalculating && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-montserrat text-midnight mb-2">
                  Your Fragrance Matches
                </h1>
                <p className="text-midnight/70 font-montserrat max-w-md mx-auto">
                  Based on your preferences, we think you&apos;ll love these
                  fragrances.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {recommendations.map((perfume) => (
                  <div
                    key={perfume.id}
                    className="border border-midnight/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square bg-midnight/5">
                      <Image
                        src={perfume.image}
                        alt={perfume.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-montserrat font-medium">
                        {perfume.name}
                      </h3>
                      <p className="text-sm text-midnight/70">
                        {perfume.brand}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {perfume.mood?.slice(0, 2).map((mood) => (
                          <span
                            key={mood}
                            className="text-xs bg-amber/10 text-amber px-2 py-1 rounded-full"
                          >
                            {mood}
                          </span>
                        ))}
                      </div>

                      <p className="font-medium pt-1">AED {perfume.price}</p>

                      <Link
                        href={`/perfumes/${perfume.slug}`}
                        className="block text-center mt-3 py-2 bg-amber hover:bg-amber-light text-midnight text-sm font-montserrat rounded transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-midnight/5 rounded-lg p-6 mt-8">
                <h3 className="font-montserrat text-xl mb-3">
                  Ready to experience these scents?
                </h3>
                <p className="text-midnight/70 mb-4">
                  Try samples of all {recommendations.length} fragrances with
                  our Discovery Set
                </p>
                <button className="w-full py-3 bg-midnight text-white font-montserrat rounded-md hover:bg-midnight/90 transition-colors">
                  Order Discovery Set • AED 149
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < totalSteps && (
            <div className="flex justify-between mt-10">
              {step > 0 ? (
                <button
                  onClick={goToPrevStep}
                  className="flex items-center text-sm font-montserrat text-midnight/70 hover:text-midnight"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < totalSteps - 1 ? (
                <button
                  onClick={goToNextStep}
                  className="bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  Continue
                  <ArrowRight size={16} className="ml-1" />
                </button>
              ) : (
                <button
                  onClick={submitQuiz}
                  className="bg-amber cursor-pointer hover:bg-amber-light text-midnight font-montserrat text-sm px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  Find My Matches
                  <ArrowRight size={16} className="ml-1" />
                </button>
              )}
            </div>
          )}

          <div className="mt-12 text-center text-midnight/60 text-sm">
            <p>
              Our fragrance matching algorithm uses 200+ data points to find
              your perfect scent
            </p>
          </div>

          {/* Back to Home (Results page only) */}
          {step === totalSteps && !isCalculating && (
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-amber hover:text-amber-light font-montserrat text-sm hover:underline"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
