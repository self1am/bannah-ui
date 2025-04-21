"use client";
import React from "react";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="bg-midnight text-cream py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-xs font-poppins">
            Free shipping on all UAE orders over AED 250
          </p>
          <div className="flex space-x-6 text-xs font-poppins">
            <Link href="/help" className="hover:text-amber-light transition-colors duration-200">
              Help & FAQs
            </Link>
            <Link href="/track-order" className="hover:text-amber-light transition-colors duration-200">
              Track Order
            </Link>
            <div className="flex items-center space-x-2">
              <span>Language:</span>
              <select className="bg-transparent border-none focus:outline-none text-xs cursor-pointer">
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;