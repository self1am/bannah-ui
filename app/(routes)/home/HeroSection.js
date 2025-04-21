// HeroSection.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  // Hero slide content
  const heroSlides = [
    {
      heading: "Discover Your Signature Scent",
      subheading:
        "Personalized fragrance recommendations tailored to your preferences",
      cta: "Take the Quiz",
      ctaLink: "/quiz",
      image: "/images/hero-1.jpg",
      altText: "Elegant perfume bottles on a golden background",
      bgColor: "bg-midnight",
      accentColor: "bg-amber",
    },
    {
      heading: "Try Before You Buy",
      subheading:
        "Sample premium fragrances monthly with our curated subscription box",
      cta: "Subscribe Now",
      ctaLink: "/subscription",
      image: "/images/hero-2.jpg",
      altText: "Subscription box with perfume samples",
      bgColor: "bg-stone-900",
      accentColor: "bg-amber-light",
    },
    {
      heading: "Explore Exclusive Collections",
      subheading: "Discover niche and luxury fragrances from around the world",
      cta: "Shop Collection",
      ctaLink: "/shop",
      image: "/images/hero-3.jpg",
      altText: "Collection of luxury perfume bottles",
      bgColor: "bg-slate-900",
      accentColor: "bg-cream/30",
    },
  ];

  return (
    <section
      className={`relative h-[50vh] min-h-[600px] w-full overflow-hidden transition-colors duration-1000 ${heroSlides[activeSlide].bgColor}`}
    >
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${heroSlides[activeSlide].accentColor} transition-all duration-1000`}
        ></div>
        <div
          className={`absolute top-1/2 -left-16 w-48 h-48 rounded-full blur-3xl opacity-10 ${heroSlides[activeSlide].accentColor} transition-all duration-1000`}
        ></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-3/4 relative z-10">
          {/* Text content - left side */}
          <div className="flex items-center px-4 lg:px-8">
            <div className="relative overflow-hidden">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute inset-0"
                  }`}
                >
                  <div className="max-w-xl">
                    <h1 className="font-playfair text-4xl md:text-5xl text-cream mb-4 leading-tight">
                      {slide.heading}
                    </h1>
                    <p className="font-poppins text-lg text-cream opacity-90 mb-8 max-w-md">
                      {slide.subheading}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={slide.ctaLink}
                        className="bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm font-medium px-8 py-3 rounded-md transition-colors duration-200 flex items-center"
                      >
                        {slide.cta}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                      <Link
                        href="/shop"
                        className="border border-cream text-cream hover:bg-cream hover:text-midnight font-montserrat text-sm font-medium px-8 py-3 rounded-md transition-colors duration-200"
                      >
                        Explore All
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image content - right side */}
          <div className="hidden lg:block relative overflow-hidden rounded-l-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeSlide === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.altText}
                    fill
                    priority={index === 0}
                    quality={90}
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-midnight to-transparent opacity-20"></div>
                </div>
              </div>
            ))}

            {/* Decorative elements overlaying the image */}
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full border border-amber opacity-60 animate-pulse"></div>
                <div
                  className="w-24 h-24 rounded-full border border-amber-light opacity-30 -ml-4 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image (shown only on smaller screens) */}
      <div className="lg:hidden absolute inset-0 -z-10">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-30" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.altText}
              fill
              priority={index === 0}
              quality={80}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-amber w-8"
                : "bg-cream opacity-60 hover:opacity-80"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Decorative quote */}
      <div className="absolute top-8 right-8 hidden lg:block">
        <p className="font-playfair italic text-amber-light opacity-70 text-lg">
          &quot;A fragrance is a work of art.&quot;
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
