"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ArrowLeft,
  Heart,
  Share2,
  ShoppingBag,
  PlusCircle,
  MinusCircle,
  ChevronDown,
} from "lucide-react";

export default function PerfumeDetailClient({ perfume, related }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [activeBottomTab, setActiveBottomTab] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("100ml");

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const toggleFavorite = () => setFavorite(!favorite);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber/5 to-midnight/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/shop"
            className="text-amber hover:text-amber-light font-montserrat flex items-center mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span className="border-b border-amber/30 pb-1">Back to Shop</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={perfume.image}
                  alt={perfume.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                      i === 0
                        ? "ring-2 ring-amber"
                        : "opacity-70 hover:opacity-100"
                    } transition-all duration-300`}
                  >
                    <Image
                      src={perfume.image}
                      alt={`${perfume.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <p className="font-montserrat text-amber uppercase tracking-wider text-sm mb-2">
                  {perfume.brand}
                </p>
                <h1 className="text-5xl font-playfair text-midnight leading-tight">
                  {perfume.name}
                </h1>

                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${
                          i < Math.floor(perfume.rating)
                            ? "text-amber fill-amber"
                            : "text-gray-300"
                        }`}
                        size={16}
                      />
                    ))}
                    <span className="text-sm text-midnight/70 ml-2">
                      {perfume.rating}
                    </span>
                  </div>
                  <span className="text-midnight/40">|</span>
                  <span className="text-sm text-midnight/70">24 reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-montserrat font-medium text-midnight">
                AED {perfume.price}
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-montserrat font-medium text-sm text-midnight mb-3">
                  Size
                </h3>
                <div className="flex space-x-3">
                  {["30ml", "50ml", "100ml"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border font-montserrat text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? "border-amber bg-amber/10 text-midnight"
                          : "border-midnight/20 text-midnight/70 hover:border-midnight/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-montserrat font-medium text-sm text-midnight mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="rounded-full p-1 text-midnight/70 hover:text-amber hover:bg-amber/10 transition-colors"
                  >
                    <MinusCircle size={20} />
                  </button>
                  <span className="w-8 text-center font-montserrat">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="rounded-full p-1 text-midnight/70 hover:text-amber hover:bg-amber/10 transition-colors"
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button onClick={()=> {}} className="flex-1 bg-amber hover:bg-amber-light text-midnight font-montserrat text-sm font-medium px-6 py-4 rounded-md transition-colors flex items-center justify-center">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={toggleFavorite}
                  className={`p-4 rounded-md border transition-colors ${
                    favorite
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "border-midnight/20 text-midnight/70 hover:border-midnight/40"
                  }`}
                >
                  <Heart size={20} className={favorite ? "fill-red-500" : ""} />
                </button>
                <button className="p-4 rounded-md border border-midnight/20 text-midnight/70 hover:border-midnight/40 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="border-b border-midnight/10 pt-6">
                <div className="flex space-x-8">
                  {["description", "notes", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 font-montserrat text-sm capitalize transition-colors ${
                        activeTab === tab
                          ? "text-amber border-b-2 border-amber"
                          : "text-midnight/60 hover:text-midnight"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="pt-2">
                {activeTab === "description" && (
                  <p className="font-poppins text-midnight/80 leading-relaxed">
                    {perfume.description}
                  </p>
                )}

                {activeTab === "notes" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-montserrat font-medium text-midnight mb-3">
                        Fragrance Notes
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-amber">
                            Top Notes
                          </p>
                          <div className="flex flex-col space-y-2">
                            {perfume.notes.slice(0, 3).map((note) => (
                              <span
                                key={note}
                                className="text-sm text-midnight/80"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-amber">
                            Heart Notes
                          </p>
                          <div className="flex flex-col space-y-2">
                            {perfume.notes.slice(3, 5).map((note) => (
                              <span
                                key={note}
                                className="text-sm text-midnight/80"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-amber">
                            Base Notes
                          </p>
                          <div className="flex flex-col space-y-2">
                            {perfume.notes.slice(-2).map((note) => (
                              <span
                                key={note}
                                className="text-sm text-midnight/80"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {perfume.mood?.length > 0 && (
                      <div>
                        <h4 className="font-montserrat font-medium text-midnight mb-3">
                          Mood
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {perfume.mood.map((m) => (
                            <span
                              key={m}
                              className="text-xs bg-amber/10 text-amber px-3 py-1 rounded-full"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-montserrat font-medium text-midnight">
                        Customer Reviews
                      </h4>
                      <button className="text-amber text-sm font-montserrat hover:underline">
                        Write a review
                      </button>
                    </div>

                    <div className="space-y-6">
                      {[1, 2].map((review) => (
                        <div
                          key={review}
                          className="border-b border-midnight/10 pb-6"
                        >
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">Sarah {review}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`${
                                      i < 4
                                        ? "text-amber fill-amber"
                                        : "text-gray-300"
                                    }`}
                                    size={14}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-midnight/60">
                              2 weeks ago
                            </p>
                          </div>
                          <p className="text-sm text-midnight/80 mt-3">
                            This fragrance is absolutely divine. The blend of
                            notes creates such a unique and memorable scent that
                            lasts all day. I&apos;ve received so many
                            compliments since I started wearing it.
                          </p>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-3 border border-midnight/20 rounded-md text-sm font-montserrat hover:bg-midnight/5 transition-colors">
                      Load More Reviews
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion sections */}
              <div className="pt-6 space-y-4">
                {[
                  {
                    id: 1,
                    title: "Shipping & Returns",
                    content:
                      "Free shipping on all orders over AED 200. Returns accepted within 30 days of delivery.",
                  },
                  {
                    id: 2,
                    title: "How to Use",
                    content:
                      "Apply to pulse points for maximum effect. Best used after showering when skin is still warm.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-midnight/10 pb-4">
                    <button
                      className="flex justify-between items-center w-full py-2 text-left font-montserrat font-medium"
                      onClick={() =>
                        setActiveBottomTab((prev) =>
                          prev === item.id ? null : item.id
                        )
                      }
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`text-midnight/60 transition-transform ${
                          activeBottomTab === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeBottomTab === item.id && (
                      <div className="text-sm text-midnight/70 mt-2">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-playfair text-midnight">
                You Might Also Like
              </h2>
              <Link
                href="/shop"
                className="text-amber hover:text-amber-light font-montserrat text-sm underline-offset-4 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {related.map((p) => (
                <Link key={p.id} href={`/perfumes/${p.slug}`} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-md mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white text-midnight font-montserrat text-xs px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <h4 className="font-montserrat text-sm font-medium text-midnight group-hover:text-amber transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm text-midnight/70 mt-1">{p.brand}</p>
                  <p className="text-sm font-medium text-midnight mt-1">
                    AED {p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
