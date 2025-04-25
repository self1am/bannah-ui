"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Bell,
  Menu,
  X,
  Check,
} from "lucide-react";
import HeaderTop from "./HeaderTop";

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: "restock",
    title: "Restock Alert",
    message: "Tom Ford Oud Wood is back in stock!",
    image: "/api/placeholder/40/40",
    timeAgo: "2 minutes ago",
    isUnread: true,
  },
  {
    id: 2,
    type: "subscription",
    title: "Subscription Update",
    message: "Your May subscription box has been shipped",
    image: "/api/placeholder/40/40",
    timeAgo: "3 hours ago",
    isUnread: true,
  },
  {
    id: 3,
    type: "discount",
    title: "Limited Offer",
    message: "25% off all niche fragrances this weekend",
    image: "/api/placeholder/40/40",
    timeAgo: "1 day ago",
    isUnread: false,
  },
  {
    id: 4,
    type: "community",
    title: "Community Activity",
    message: "FragranceLover replied to your post",
    image: "/api/placeholder/40/40",
    timeAgo: "2 days ago",
    isUnread: false,
  },
];

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

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [unreadCount, setUnreadCount] = useState(0);
  const width = useWindowWidth();

  const notificationRef = useOutsideClick(() => {
    setNotificationsOpen(false);
  });

  const isDesktop = width >= 768;

  useEffect(() => {
    // Calculate unread notifications count
    const count = notifications.filter(
      (notification) => notification.isUnread
    ).length;
    setUnreadCount(count);
  }, [notifications]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isUnread: false,
    }));
    setNotifications(updatedNotifications);
  };

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, isUnread: false }
        : notification
    );
    setNotifications(updatedNotifications);
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
                <span className="font-montserrat text-2xl text-midnight font-semibold">
                  Bannah
                </span>
                <span className="font-montserrat text-amber text-sm ml-1">
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
              <NavLink href="/quiz">Quiz</NavLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-midnight hover:text-amber transition-colors duration-200">
                <Search size={20} />
              </button>
              <Link
                href="/account?tab=wishlist"
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                <Heart size={20} />
              </Link>
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={toggleNotifications}
                  className="text-midnight hover:text-amber transition-colors duration-200 relative"
                >
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-2 -right-1 bg-amber text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="flex justify-between items-center p-4 bg-cream border-b border-midnight/10">
                      <h3 className="font-montserrat font-medium text-midnight">
                        Notifications
                      </h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-amber hover:text-amber-light transition-colors"
                      >
                        Mark all as read
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-midnight/10 hover:bg-cream/50 transition-colors ${
                              notification.isUnread ? "bg-cream/30" : ""
                            }`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="relative">
                                <Image
                                  src={notification.image}
                                  alt=""
                                  width={40}
                                  height={40}
                                  className="rounded-md"
                                />
                                {notification.isUnread && (
                                  <span className="absolute -top-1 -right-1 bg-amber w-2 h-2 rounded-full"></span>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-montserrat font-medium text-sm text-midnight">
                                    {notification.title}
                                  </h4>
                                  <span className="text-xs text-midnight/50">
                                    {notification.timeAgo}
                                  </span>
                                </div>
                                <p className="text-sm text-midnight/70 mt-1">
                                  {notification.message}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-midnight/60">
                          <p>No notifications</p>
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-cream/50 text-center border-t border-midnight/10">
                      <Link
                        href="/notifications"
                        className="text-sm text-amber hover:text-amber-light transition-colors"
                      >
                        View all notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleNotifications}
                className="text-midnight hover:text-amber transition-colors duration-200 relative"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {unreadCount}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-midnight hover:text-amber transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Notification Panel */}
        {notificationsOpen && !isDesktop && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-amber-light shadow-lg">
            <div className="flex justify-between items-center p-4 bg-cream border-b border-midnight/10">
              <h3 className="font-montserrat font-medium text-midnight">
                Notifications
              </h3>
              <button
                onClick={markAllAsRead}
                className="text-xs text-amber hover:text-amber-light transition-colors"
              >
                Mark all as read
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-midnight/10 hover:bg-cream/50 transition-colors ${
                    notification.isUnread ? "bg-cream/30" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Image
                        src={notification.image}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      {notification.isUnread && (
                        <span className="absolute -top-1 -right-1 bg-amber w-2 h-2 rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-montserrat font-medium text-sm text-midnight">
                          {notification.title}
                        </h4>
                        <span className="text-xs text-midnight/50">
                          {notification.timeAgo}
                        </span>
                      </div>
                      <p className="text-sm text-midnight/70 mt-1">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-cream/50 text-center border-t border-midnight/10">
              <Link
                href="/notifications"
                className="text-sm text-amber hover:text-amber-light transition-colors"
              >
                View all notifications
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-amber-light shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="font-montserrat text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="font-montserrat text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Shop
                </Link>
                <Link
                  href="/subscription"
                  className="font-montserrat text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Subscribe
                </Link>
                <Link
                  href="/community"
                  className="font-montserrat text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  Community
                </Link>
                {/* <Link
                  href="/about"
                  className="font-montserrat text-lg text-midnight hover:text-amber py-2 border-b border-amber-light"
                >
                  About
                </Link> */}
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
      className="font-montserrat text-lg text-midnight hover:text-amber transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
};

export default Header;
