"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  CreditCard,
  Check,
  ChevronDown,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

export default function CheckoutPage() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "UAE",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  // Order summary data (mock)
  const orderSummary = {
    subtotal: 268.49,
    shipping: 0,
    tax: 13.42,
    total: 281.91,
    items: 4,
  };

  // Order confirmation state
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "country",
    ];
    const isValid = requiredFields.every((field) => formState[field].trim());

    if (isValid) {
      setOrderPlaced(true);
      window.scrollTo(0, 0);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="min-h-screen mt-12 bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {orderPlaced ? (
          // Order confirmation
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-montserrat text-midnight mb-3">
              Order Confirmed
            </h1>
            <p className="text-midnight/70 font-montserrat max-w-md mx-auto mb-6">
              Thank you for your order! Your order number is #ORD-
              {Math.floor(10000 + Math.random() * 90000)}.
            </p>
            <p className="text-sm text-midnight/70 mb-8">
              A confirmation email has been sent to {formState.email}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="px-6 py-3 bg-amber text-midnight font-montserrat rounded-md hover:bg-amber-light transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/account?tab=orders"
                className="px-6 py-3 border border-midnight/20 text-midnight font-montserrat rounded-md hover:bg-midnight/5 transition-colors"
              >
                View Order
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-montserrat text-midnight mb-2">
                Checkout
              </h1>
              <p className="text-midnight/70 font-montserrat">
                Complete your order
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Checkout Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-2 text-sm mb-8">
                    <Link
                      href="/cart"
                      className="text-midnight/60 hover:text-midnight"
                    >
                      Cart
                    </Link>
                    <ChevronRight size={14} className="text-midnight/40" />
                    <span className="text-amber font-medium">Checkout</span>
                    <ChevronRight size={14} className="text-midnight/40" />
                    <span className="text-midnight/40">Confirmation</span>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Contact Information */}
                    <div className="mb-8">
                      <h2 className="text-lg font-montserrat text-midnight mb-4">
                        Contact Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-midnight/70 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-midnight/70 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-midnight/70 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-midnight/70 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="mb-8 pb-8 border-b border-midnight/10">
                      <h2 className="text-lg font-montserrat text-midnight mb-4">
                        Shipping Address
                      </h2>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm text-midnight/70 mb-1">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formState.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-midnight/70 mb-1">
                              City *
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formState.city}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-midnight/70 mb-1">
                              Country *
                            </label>
                            <div className="relative">
                              <select
                                name="country"
                                value={formState.country}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber appearance-none pr-8"
                                required
                              >
                                <option value="UAE">
                                  United Arab Emirates
                                </option>
                                <option value="KSA">Saudi Arabia</option>
                                <option value="QAT">Qatar</option>
                                <option value="KWT">Kuwait</option>
                                <option value="BHR">Bahrain</option>
                                <option value="OMN">Oman</option>
                              </select>
                              <ChevronDown
                                size={16}
                                className="absolute right-2 top-3 text-midnight/40 pointer-events-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h2 className="text-lg font-montserrat text-midnight mb-4">
                        Payment Method
                      </h2>

                      <div className="mb-4">
                        <div className="flex items-center border border-amber rounded-md p-3 bg-amber/5">
                          <input
                            type="radio"
                            id="credit-card"
                            name="paymentMethod"
                            value="credit-card"
                            checked={formState.paymentMethod === "credit-card"}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <label
                            htmlFor="credit-card"
                            className="flex items-center flex-1"
                          >
                            <CreditCard
                              size={18}
                              className="mr-2 text-midnight/70"
                            />
                            <span>Credit / Debit Card</span>
                          </label>
                          <div className="flex gap-1">
                            <div className="w-8 h-5 bg-midnight/10 rounded flex items-center justify-center">
                              <span className="text-xs">VISA</span>
                            </div>
                            <div className="w-8 h-5 bg-midnight/10 rounded flex items-center justify-center">
                              <span className="text-xs">MC</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center border border-midnight/20 rounded-md p-3 mt-2">
                          <input
                            type="radio"
                            id="cash-delivery"
                            name="paymentMethod"
                            value="cash-delivery"
                            checked={
                              formState.paymentMethod === "cash-delivery"
                            }
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <label
                            htmlFor="cash-delivery"
                            className="flex items-center"
                          >
                            <ShoppingBag
                              size={18}
                              className="mr-2 text-midnight/70"
                            />
                            <span>Cash on Delivery</span>
                          </label>
                        </div>
                      </div>

                      {formState.paymentMethod === "credit-card" && (
                        <div className="mt-4 bg-midnight/5 p-4 rounded-md">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm text-midnight/70 mb-1">
                                Card Number
                              </label>
                              <input
                                type="text"
                                name="cardNumber"
                                value={formState.cardNumber}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-midnight/70 mb-1">
                                Cardholder Name
                              </label>
                              <input
                                type="text"
                                name="cardName"
                                value={formState.cardName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-midnight/70 mb-1">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                name="expiry"
                                value={formState.expiry}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-midnight/70 mb-1">
                                CVV
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                value={formState.cvv}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-midnight/20 rounded-md focus:outline-none focus:border-amber"
                                placeholder="123"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Link
                        href="/cart"
                        className="flex items-center text-amber hover:text-amber-light text-sm transition-colors"
                      >
                        <ArrowLeft size={16} className="mr-2" />
                        Return to Cart
                      </Link>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-amber text-midnight font-montserrat rounded-md hover:bg-amber-light transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-montserrat text-midnight mb-6">
                    Order Summary
                  </h2>

                  <div className="flex justify-between items-center pb-4 mb-4 border-b border-midnight/10">
                    <span className="text-sm text-midnight/70">
                      {orderSummary.items} items
                    </span>
                    <button className="text-amber text-sm hover:underline">
                      View Details
                    </button>
                  </div>

                  <div className="space-y-3 pb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-midnight/70">Subtotal</span>
                      <span className="font-medium">
                        AED {orderSummary.subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-midnight/70">Shipping</span>
                      <span className="font-medium">
                        {orderSummary.shipping === 0
                          ? "Free"
                          : `AED ${orderSummary.shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-midnight/70">VAT (5%)</span>
                      <span className="font-medium">
                        AED {orderSummary.tax.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-midnight/10 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-montserrat font-medium text-lg">
                        AED {orderSummary.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-midnight/10">
                    <h3 className="font-montserrat font-medium text-sm mb-2">
                      Need Help?
                    </h3>
                    <p className="text-xs text-midnight/70 mb-3">
                      If you have questions about your order, please contact our
                      customer support team.
                    </p>
                    <Link
                      href="/contact"
                      className="text-amber text-sm hover:underline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
