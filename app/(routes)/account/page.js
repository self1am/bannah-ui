"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  User,
  Heart,
  Settings,
  Package,
  Edit,
  LogOut,
  ChevronRight,
  Calendar,
  CreditCard,
} from "lucide-react";
import { perfumes } from "@/data/perfumes";

function AccountContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") || "orders";
  const [activeTab, setActiveTab] = useState(tabParam);

  // Dummy user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+971 52 123 4567",
    avatar: "/images/avatars/avatar2.jpg",
    joinDate: "March 2025",
    address: {
      street: "Apartment 1204, Marina Heights",
      city: "Dubai Marina",
      country: "United Arab Emirates",
    },
  };

  // Dummy orders data
  const orders = [
    {
      id: "ORD-3872",
      date: "April 10, 2025",
      status: "Delivered",
      total: 475,
      items: [perfumes[0], perfumes[1]],
    },
    {
      id: "ORD-3651",
      date: "March 24, 2025",
      status: "Delivered",
      total: 190,
      items: [perfumes[3]],
    },
  ];

  // Dummy wishlist data
  const wishlist = [
    perfumes[2],
    perfumes[4],
    perfumes[5],
    perfumes[6],
  ];

  return (
    <div className="min-h-screen mt-[60px] bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-montserrat text-midnight mb-2">
            My Account
          </h1>
          <p className="text-midnight/70 font-montserrat">
            Manage your orders, wishlist and settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1 h-fit">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-midnight/10">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 bg-amber/10">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-montserrat font-medium text-lg text-midnight">
                {user.name}
              </h2>
              <p className="text-sm text-midnight/70 mt-1">
                Member since {user.joinDate}
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-colors ${
                  activeTab === "orders"
                    ? "bg-amber/10 text-amber"
                    : "text-midnight/70 hover:bg-midnight/5"
                }`}
              >
                <span className="flex items-center">
                  <Package size={18} className="mr-3" />
                  <span className="font-montserrat text-sm">My Orders</span>
                </span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => setActiveTab("wishlist")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-colors ${
                  activeTab === "wishlist"
                    ? "bg-amber/10 text-amber"
                    : "text-midnight/70 hover:bg-midnight/5"
                }`}
              >
                <span className="flex items-center">
                  <Heart size={18} className="mr-3" />
                  <span className="font-montserrat text-sm">Wishlist</span>
                </span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-colors ${
                  activeTab === "settings"
                    ? "bg-amber/10 text-amber"
                    : "text-midnight/70 hover:bg-midnight/5"
                }`}
              >
                <span className="flex items-center">
                  <Settings size={18} className="mr-3" />
                  <span className="font-montserrat text-sm">
                    Account Settings
                  </span>
                </span>
                <ChevronRight size={16} />
              </button>

              <div className="pt-4 mt-4 border-t border-midnight/10">
                <button className="w-full flex items-center py-3 px-4 rounded-lg text-left text-midnight/70 hover:bg-midnight/5 transition-colors">
                  <LogOut size={18} className="mr-3" />
                  <span className="font-montserrat text-sm">Sign Out</span>
                </button>
              </div>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-montserrat text-midnight">
                    My Orders
                  </h2>
                  <span className="text-sm text-midnight/70 font-montserrat">
                    {orders.length} orders
                  </span>
                </div>

                <div className="space-y-6">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-midnight/10 rounded-lg overflow-hidden"
                      >
                        {/* Order Header */}
                        <div className="bg-midnight/5 px-4 py-3 flex flex-wrap justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <div>
                              <p className="font-medium text-sm">{order.id}</p>
                              <div className="flex items-center text-xs text-midnight/60 mt-1">
                                <Calendar size={12} className="mr-1" />
                                {order.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center mt-2 sm:mt-0">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-amber/10 text-amber"
                              }`}
                            >
                              {order.status}
                            </span>
                            <span className="ml-4 text-sm font-medium">
                              AED {order.total}
                            </span>
                          </div>
                        </div>

                        {/* Order Items */}
                        <div className="divide-y divide-midnight/10">
                          {order.items.map((item) => (
                            <div
                              key={item.id}
                              className="p-4 flex items-center"
                            >
                              <div className="relative w-16 h-16 rounded-md overflow-hidden bg-midnight/5 flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="ml-4 flex-1">
                                <h4 className="font-montserrat text-sm font-medium">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-midnight/70">
                                  {item.brand}
                                </p>
                                <p className="text-sm font-medium mt-1">
                                  AED {item.price}
                                </p>
                              </div>
                              <Link
                                href="#"
                                className="text-amber hover:text-amber-light text-sm hover:underline"
                              >
                                Buy Again
                              </Link>
                            </div>
                          ))}
                        </div>

                        {/* Order Footer */}
                        <div className="bg-midnight/5 px-4 py-3 flex justify-between items-center">
                          <div className="text-xs text-midnight/70">
                            Delivered to {user.address.city}
                          </div>
                          <Link
                            href="#"
                            className="text-amber hover:text-amber-light text-sm hover:underline flex items-center"
                          >
                            View Details{" "}
                            <ChevronRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Package
                        size={48}
                        className="mx-auto text-midnight/20 mb-4"
                      />
                      <h3 className="font-medium text-lg mb-1">
                        No orders yet
                      </h3>
                      <p className="text-midnight/60 text-sm">
                        You haven&apos;t placed any orders yet.
                      </p>
                      <Link
                        href="/shop"
                        className="inline-block mt-4 px-6 py-2 bg-amber text-midnight rounded-md text-sm font-montserrat hover:bg-amber-light transition-colors"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-montserrat text-midnight">
                    My Wishlist
                  </h2>
                  <span className="text-sm text-midnight/70 font-montserrat">
                    {wishlist.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="border border-midnight/10 rounded-lg overflow-hidden flex"
                    >
                      <div className="relative w-24 h-full flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <h4 className="font-montserrat text-sm font-medium line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-midnight/70">{item.brand}</p>
                        <p className="text-sm font-medium mt-1">
                          AED {item.price}
                        </p>
                        <div className="flex space-x-2 mt-3">
                          <button className="px-3 py-1 bg-amber text-midnight text-xs rounded hover:bg-amber-light transition-colors">
                            Add to Cart
                          </button>
                          <button className="px-3 py-1 border border-midnight/20 text-midnight/70 text-xs rounded hover:bg-midnight/5 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-montserrat text-midnight mb-6">
                  Account Settings
                </h2>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="border-b border-midnight/10 pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-montserrat font-medium">
                        Personal Information
                      </h3>
                      <button className="text-amber hover:text-amber-light text-sm flex items-center">
                        <Edit size={14} className="mr-1" /> Edit
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-midnight/60 mb-1">
                          Full Name
                        </p>
                        <p className="text-sm">{user.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-midnight/60 mb-1">
                          Email Address
                        </p>
                        <p className="text-sm">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-midnight/60 mb-1">
                          Phone Number
                        </p>
                        <p className="text-sm">{user.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="border-b border-midnight/10 pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-montserrat font-medium">
                        Shipping Address
                      </h3>
                      <button className="text-amber hover:text-amber-light text-sm flex items-center">
                        <Edit size={14} className="mr-1" /> Edit
                      </button>
                    </div>

                    <div>
                      <p className="text-sm">{user.address.street}</p>
                      <p className="text-sm">{user.address.city}</p>
                      <p className="text-sm">{user.address.country}</p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-montserrat font-medium">
                        Payment Methods
                      </h3>
                      <button className="text-amber hover:text-amber-light text-sm flex items-center">
                        <CreditCard size={14} className="mr-1" /> Add New
                      </button>
                    </div>

                    <div className="flex items-center p-3 border border-midnight/10 rounded-lg">
                      <div className="w-10 h-6 bg-midnight/10 rounded flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">VISA</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Visa ending in 4321
                        </p>
                        <p className="text-xs text-midnight/60">
                          Expires 09/26
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">
                          Default
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Account Security and Preferences */}
                  <div className="border-t border-midnight/10 pt-6 mt-6">
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between py-2 text-sm text-left">
                        <span>Change Password</span>
                        <ChevronRight size={16} className="text-midnight/40" />
                      </button>
                      <button className="w-full flex items-center justify-between py-2 text-sm text-left">
                        <span>Communication Preferences</span>
                        <ChevronRight size={16} className="text-midnight/40" />
                      </button>
                      <button className="w-full flex items-center justify-between py-2 text-sm text-left">
                        <span>Privacy Settings</span>
                        <ChevronRight size={16} className="text-midnight/40" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}
