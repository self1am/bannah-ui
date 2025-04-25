"use client";
import { useState } from "react";
import {
  Calendar,
  Gift,
  CheckCircle,
  ChevronRight,
  Package,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SubscriptionPage() {
  // State for subscription options
  const [subscriptionType, setSubscriptionType] = useState("surprise"); // "surprise" or "choose"
  const [sampleCount, setSampleCount] = useState(2); // 2 or 3 samples

  // Timeline steps
  const timelineSteps = [
    {
      icon: <Calendar size={20} />,
      title: "Monthly Selection",
      description:
        subscriptionType === "surprise"
          ? "Our experts curate fragrances based on your preference profile"
          : "Choose your samples from our exclusive collection each month",
    },
    {
      icon: <Package size={20} />,
      title: "Elegant Packaging",
      description: "Receive your samples in our signature luxury packaging",
    },
    {
      icon: <Gift size={20} />,
      title: "Credit Towards Full Size",
      description:
        "Your monthly fee converts to store credit for full-size purchases",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-3xl md:text-4xl text-midnight mb-4">
          Fragrance Subscription
        </h1>
        <p className="font-montserrat text-midnight/70 max-w-2xl mx-auto">
          Discover new signature scents with our curated subscription service.
          Receive premium fragrance samples delivered to your door monthly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section - Subscription Options */}
        <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          {/* Subscription Type Toggle */}
          <div className="mb-8">
            <h2 className="font-montserrat text-xl text-midnight mb-4">
              Choose Your Experience
            </h2>
            <div className="flex bg-midnight/5 p-1 rounded-lg">
              <button
                onClick={() => setSubscriptionType("surprise")}
                className={`flex-1 py-3 text-center rounded-md transition-colors ${
                  subscriptionType === "surprise"
                    ? "bg-amber text-midnight font-medium"
                    : "bg-transparent text-midnight/70 hover:text-midnight"
                }`}
              >
                Surprise Me
              </button>
              <button
                onClick={() => setSubscriptionType("choose")}
                className={`flex-1 py-3 text-center rounded-md transition-colors ${
                  subscriptionType === "choose"
                    ? "bg-amber text-midnight font-medium"
                    : "bg-transparent text-midnight/70 hover:text-midnight"
                }`}
              >
                Choose My Samples
              </button>
            </div>
            <p className="text-sm text-midnight/60 mt-2">
              {subscriptionType === "surprise"
                ? "Let our experts surprise you with new fragrances based on your preferences."
                : "Browse and select which samples you'd like to receive each month."}
            </p>
          </div>

          {/* Sample Count Selection */}
          <div className="mb-8">
            <h2 className="font-montserrat text-xl text-midnight mb-4">
              Select Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                onClick={() => setSampleCount(2)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  sampleCount === 2
                    ? "border-amber bg-cream"
                    : "border-midnight/20 hover:border-amber/50"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-montserrat font-medium text-midnight">
                    2 Samples Monthly
                  </h3>
                  {sampleCount === 2 && (
                    <CheckCircle size={20} className="text-amber" />
                  )}
                </div>
                <p className="text-midnight/70 text-sm mb-3">
                  Perfect for occasional fragrance explorers
                </p>
                <div className="flex items-baseline">
                  <span className="font-montserrat text-2xl text-midnight">
                    AED 150
                  </span>
                  <span className="text-midnight/60 text-sm ml-1">/month</span>
                </div>
              </div>

              <div
                onClick={() => setSampleCount(3)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  sampleCount === 3
                    ? "border-amber bg-cream"
                    : "border-midnight/20 hover:border-amber/50"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-montserrat font-medium text-midnight">
                    3 Samples Monthly
                  </h3>
                  {sampleCount === 3 && (
                    <CheckCircle size={20} className="text-amber" />
                  )}
                </div>
                <p className="text-midnight/70 text-sm mb-3">
                  For the devoted fragrance enthusiast
                </p>
                <div className="flex items-baseline">
                  <span className="font-montserrat text-2xl text-midnight">
                    AED 210
                  </span>
                  <span className="text-midnight/60 text-sm ml-1">/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="mb-8">
            <h2 className="font-montserrat text-xl text-midnight mb-4">
              How It Works
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber/30"></div>

              {/* Timeline steps */}
              <div className="space-y-6 pl-12 relative">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Circle on timeline */}
                    <div className="absolute left-[-52px] bg-cream border-2 border-amber rounded-full p-2">
                      {step.icon}
                    </div>
                    <h3 className="font-montserrat font-medium text-midnight">
                      {step.title}
                    </h3>
                    <p className="text-midnight/70 text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="#"
              className="block w-full md:w-auto md:inline-block text-center bg-amber hover:bg-amber-light text-midnight font-montserrat font-medium px-8 py-3 rounded-md transition-colors"
            >
              Start Subscription{" "}
              <ChevronRight size={16} className="inline ml-1" />
            </Link>
          </div>
        </div>

        {/* Right Section - Benefits */}
        <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
          <h2 className="font-montserrat text-xl text-midnight mb-4">
            Membership Benefits
          </h2>

          <div className="mb-6">
            <div className="relative aspect-square bg-midnight/5 rounded-lg mb-4">
              <Image
                src="/images/perfume-black-orchid.jpg"
                alt="Subscription box"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  Premium fragrance samples (2.5ml each)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  100% of subscription fee as store credit
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  Early access to new fragrance launches
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  Exclusive subscriber-only events
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  Free shipping on all full-size purchases
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={16}
                  className="text-amber mt-1 mr-2 flex-shrink-0"
                />
                <span className="text-sm text-midnight/80">
                  Cancel or pause anytime
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-cream rounded-lg p-4">
            <h3 className="font-montserrat font-medium text-midnight mb-2">
              Special Gift for New Subscribers
            </h3>
            <p className="text-sm text-midnight/70 mb-3">
              Sign up today and receive a complimentary signature travel case
              with your first delivery.
            </p>
            <div className="text-amber text-sm font-medium">
              Limited time offer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
