"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Heart, Bell, Menu, X } from "lucide-react";
import HeaderTop from "./HeaderTop";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // set initially
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const width = useWindowWidth();

  const isDesktop = width >= 768;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative z-50 border-collapse">
      <HeaderTop />
      <header
        className={`w-full fixed z-50 transition-all duration-300 bg-cream ${
          isScrolled ? `border-b border-amber shadow-md` : ""
        }`}
        style={
          isDesktop
            ? {
                top: isScrolled ? "0px" : "35px",
                transition: "top 0.2s ease-in-out",
              }
            : { top: "0px" }
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="font-playfair text-2xl text-midnight font-semibold">
                  Bannah
                </span>
                <span className="font-playfair text-amber text-sm ml-1">
                  Perfumery
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/subscription">Subscribe</NavLink>
              <NavLink href="/community">Community</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-midnight hover:text-amber transition-colors duration-200">
                <Search size={20} />
              </button>
              <Link
                href="/wishlist"
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                <Heart size={20} />
              </Link>
              <Link
                href="/notifications"
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                <Bell size={20} />
              </Link>
              <Link
                href="/cart"
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                <ShoppingBag size={20} />
              </Link>
              <Link
                href="/account"
                className="flex items-center space-x-2 font-montserrat text-sm font-medium px-4 py-2 border border-amber text-amber hover:bg-amber hover:text-white rounded-md transition-colors duration-200"
              >
                <User size={16} />
                <span>Account</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-amber-light shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="font-playfair text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="font-playfair text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Shop
                </Link>
                <Link
                  href="/subscription"
                  className="font-playfair text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Subscribe
                </Link>
                <Link
                  href="/community"
                  className="font-playfair text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Community
                </Link>
                <Link
                  href="/about"
                  className="font-playfair text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  About
                </Link>
              </nav>
              <div className="grid grid-cols-4 gap-2 mt-4">
                <Link
                  href="/search"
                  className="flex flex-col items-center p-2 text-midnight hover:text-amber"
                >
                  <Search size={20} />
                  <span className="text-xs mt-1">Search</span>
                </Link>
                <Link
                  href="/wishlist"
                  className="flex flex-col items-center p-2 text-midnight hover:text-amber"
                >
                  <Heart size={20} />
                  <span className="text-xs mt-1">Wishlist</span>
                </Link>
                <Link
                  href="/notifications"
                  className="flex flex-col items-center p-2 text-midnight hover:text-amber"
                >
                  <Bell size={20} />
                  <span className="text-xs mt-1">Alerts</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex flex-col items-center p-2 text-midnight hover:text-amber"
                >
                  <ShoppingBag size={20} />
                  <span className="text-xs mt-1">Cart</span>
                </Link>
              </div>
              <div className="mt-4">
                <Link
                  href="/account"
                  className="block w-full text-center font-montserrat text-sm font-medium py-2 border border-amber text-amber hover:bg-amber hover:text-white rounded-md transition-colors duration-200"
                >
                  My Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

// NavLink component for consistent styling
const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="font-playfair text-lg text-midnight hover:text-amber transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
};

export default Header;

// Footer.jsx
