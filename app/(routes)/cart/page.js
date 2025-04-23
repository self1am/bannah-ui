"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingCart, 
  ChevronRight, 
  Trash2, 
  Plus, 
  Minus,
  ArrowLeft
} from 'lucide-react';

export default function CartPage() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Lavender Essential Oil",
      brand: "Aromatic Essentials",
      price: 58.99,
      quantity: 1,
      image: "/products/lavender-oil.jpg",
    },
    {
      id: 2,
      name: "Rose Quartz Facial Roller",
      brand: "Crystal Beauty",
      price: 89.50,
      quantity: 2,
      image: "/products/facial-roller.jpg",
    },
    {
      id: 3,
      name: "Natural Bamboo Bath Caddy",
      brand: "Eco Luxe",
      price: 120.00,
      quantity: 1,
      image: "/products/bath-caddy.jpg",
    }
  ]);

  // Update quantity function
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Remove item function
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 250 ? 0 : 20;
  const tax = subtotal * 0.05; // 5% VAT
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen mt-12 bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-montserrat text-midnight mb-2">
            Your Cart
          </h1>
          <p className="text-midnight/70 font-montserrat">
            Review your items before checkout
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-montserrat text-midnight">
                    Cart Items
                  </h2>
                  <span className="text-sm text-midnight/70 font-montserrat">
                    {cartItems.length} items
                  </span>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-midnight/10 rounded-lg overflow-hidden"
                    >
                      <div className="p-4 flex items-center">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden bg-midnight/5 flex-shrink-0">
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
                            AED {item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                          <div className="flex items-center border border-midnight/10 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-1 text-midnight/70 hover:bg-midnight/5"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 text-sm">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-1 text-midnight/70 hover:bg-midnight/5"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-midnight/60 hover:text-midnight text-xs flex items-center"
                          >
                            <Trash2 size={14} className="mr-1" /> 
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-midnight/10 flex justify-between">
                  <Link
                    href="/shop"
                    className="flex items-center text-amber hover:text-amber-light text-sm transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-montserrat text-midnight mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-midnight/70">Subtotal</span>
                    <span className="font-medium">AED {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-midnight/70">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `AED ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-midnight/70">VAT (5%)</span>
                    <span className="font-medium">AED {tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-midnight/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-montserrat font-medium text-lg">
                      AED {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    className="block w-full py-3 bg-amber text-midnight font-montserrat text-center rounded-md hover:bg-amber-light transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <div className="text-xs text-center text-midnight/60 px-4">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-midnight/10">
                  <h3 className="font-montserrat font-medium text-sm mb-3">
                    We Accept
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-10 h-6 bg-midnight/10 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">VISA</span>
                    </div>
                    <div className="w-10 h-6 bg-midnight/10 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">MC</span>
                    </div>
                    <div className="w-10 h-6 bg-midnight/10 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">AMEX</span>
                    </div>
                    <div className="w-10 h-6 bg-midnight/10 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">PAYP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center py-12">
            <ShoppingCart
              size={48}
              className="mx-auto text-midnight/20 mb-4"
            />
            <h3 className="font-medium text-lg mb-1">
              Your cart is empty
            </h3>
            <p className="text-midnight/60 text-sm">
              Looks like you haven&apos;t added any items to your cart yet.
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
  );
}