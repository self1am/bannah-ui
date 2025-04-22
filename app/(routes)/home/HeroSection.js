"use client";

import React from "react";
import Typewriter from "@/components/typewriter";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FragranceHero = () => {
  const texts = ["Signature Scent", "Perfect Match", "Fragrance Story"];
  return (
    <div className="relative w-full max-h-[600px] min-h-[600px] bg-midnight">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/90 z-10"></div>

      {/* Background image with subtle opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-1.jpg"
          alt="Luxury fragrance collection"
          fill
          priority
          quality={90}
          className="object-cover opacity-40"
        />
      </div>

      {/* Decorative elements - visible only on larger screens */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 z-0 hidden md:block">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-amber opacity-20"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 rounded-full border border-amber-light opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-cream opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 flex flex-col justify-center md:justify-between md:flex-row items-center z-20">
        {/* Left Content - takes full width on mobile */}
        <div className="w-full md:w-1/2 space-y-6 pt-16 md:pt-0">
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-montserrat">
            Luxury Fragrance Collection
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-cream space-y-2">
            <span className="block">Discover Your</span>
            <span className="block text-amber">
              <Typewriter
                texts={texts}
                speed={100} // Faster typing speed
                deleteSpeed={70} // Fast deletion
                charsPerFrame={1} // Type 2 characters per frame
                loop={true}
                cursor={true}
                delayAfterText={2000}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title text-amber"
              />
            </span>
          </h1>

          <p className="font-poppins text-cream/80 text-base md:text-lg max-w-md">
            Personalized fragrance recommendations tailored to your preferences
            and personality. Experience the art of scent.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <Link
              href="/quiz"
              className="bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm font-medium px-6 sm:px-8 py-3 rounded-md transition-colors duration-200 flex items-center"
            >
              Take the Quiz
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/shop"
              className="border border-cream text-cream hover:bg-cream hover:text-midnight font-montserrat text-sm font-medium px-6 sm:px-8 py-3 rounded-md transition-colors duration-200"
            >
              Explore All
            </Link>
          </div>
        </div>

        {/* Right Side with featured product - hidden on smallest screens, adjusted for others */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] mt-6 md:mt-0 sm:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[80%] w-[80%] overflow-hidden rounded-lg">
              <Image
                src="/images/hero-2.jpg"
                alt="Featured fragrance bottle"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight/40 to-transparent"></div>

              {/* Floating accent element - reduced size on smaller screens */}
              <div className="absolute -bottom-8 -right-8 w-24 md:w-48 h-24 md:h-48 rounded-full bg-amber/10 blur-md"></div>
              <div className="absolute -top-8 -left-8 w-16 md:w-32 h-16 md:h-32 rounded-full bg-cream/10 blur-md"></div>
            </div>
          </div>

          {/* Floating caption/badge - adjusted size for mobile */}
          <div className="absolute bottom-8 md:bottom-16 -left-2 md:-left-4 bg-midnight/80 backdrop-blur-sm p-3 md:p-4 rounded border-l-2 border-amber max-w-[200px] md:max-w-xs">
            <p className="font-playfair italic text-amber text-xs md:text-sm">
              Featured Collection
            </p>
            <p className="font-montserrat text-cream text-base md:text-lg">
              Midnight Amber
            </p>
          </div>
        </div>

        {/* Mobile-only product preview */}
        {/* <div className="sm:hidden absolute bottom-16 right-0 w-32 h-32 rounded-l-lg overflow-hidden">
          <Image
            src="/images/hero-2.jpg"
            alt="Featured fragrance bottle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-midnight/60 to-transparent"></div>
        </div> */}
      </div>

      {/* Decorative quote - visible only on large screens */}
      {/* <div className="absolute top-8 right-8 hidden lg:block z-20">
        <p className="font-playfair italic text-amber-light opacity-70 text-lg">
          &quot;A fragrance is a work of art.&quot;
        </p>
      </div> */}

      {/* Navigation Arrows - adjusted size for mobile */}
      <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-cream/10 hover:bg-cream/20 flex items-center justify-center z-30 rounded-full backdrop-blur-sm border border-cream/20">
        <span className="sr-only">Previous</span>
        <span className="text-cream">←</span>
      </button>
      <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-cream/10 hover:bg-cream/20 flex items-center justify-center z-30 rounded-full backdrop-blur-sm border border-cream/20">
        <span className="sr-only">Next</span>
        <span className="text-cream">→</span>
      </button>
    </div>
  );
};

export default FragranceHero;
