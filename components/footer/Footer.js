import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-cream">
      {/* Newsletter Section */}
      <div className="bg-amber py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-playfair text-2xl text-midnight mb-2">
                Join our fragrance journey
              </h3>
              <p className="font-poppins text-sm text-midnight max-w-md">
                Subscribe to our newsletter for exclusive offers, fragrance insights, and early access to new arrivals.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md text-charcoal bg-white border border-amber-light focus:outline-none focus:ring-1 focus:ring-midnight w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-midnight text-cream font-montserrat text-sm px-6 py-3 rounded-md hover:bg-slate transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="block mb-6">
              <span className="font-playfair text-2xl text-cream font-semibold">Bannah</span>
              <span className="font-playfair text-amber text-sm ml-1">Perfumery</span>
            </Link>
            <p className="font-poppins text-sm text-slate mb-6">
              Discover your perfect scent with our personalized fragrance matching and try-before-you-buy subscription service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-amber transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-amber transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-amber transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cream hover:text-amber transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4 text-amber-light">Shop</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link href="/shop" className="text-slate hover:text-amber-light transition-colors duration-200">
                  All Fragrances
                </Link>
              </li>
              <li>
                <Link href="/shop/niche" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Niche Perfumes
                </Link>
              </li>
              <li>
                <Link href="/shop/luxury" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Luxury Collections
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Monthly Subscription
                </Link>
              </li>
              <li>
                <Link href="/shop/gifts" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4 text-amber-light">Company</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link href="/about" className="text-slate hover:text-amber-light transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Fragrance Journal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4 text-amber-light">Support</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link href="/help" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-slate hover:text-amber-light transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate hover:text-amber-light transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-slate">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-poppins text-xs text-slate mb-4 md:mb-0">
              © {new Date().getFullYear()} Bannah Perfumery. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-poppins text-xs text-slate">
              <Link href="/privacy" className="hover:text-amber-light transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-light transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-amber-light transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-amber-light transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;