"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Home } from 'lucide-react';

export default function Custom404() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(true);
    
    // Optional: You could add some analytics tracking here
    // to monitor 404 occurrences
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--cream)] text-[var(--charcoal)] px-4">
      <div className={`max-w-md w-full transition-opacity duration-700 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center">
          <h1 className="text-[var(--midnight)] text-6xl font-bold mb-2">404</h1>
          <div className="h-1 w-16 bg-[var(--amber)] mx-auto my-4"></div>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-[var(--slate)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--midnight)] text-[var(--cream)] hover:bg-opacity-90 transition-all"
            >
              <Home size={18} />
              <span>Go Home</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--cream)] transition-all"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
        
        <div className="mt-16 border-t border-[var(--slate)] border-opacity-20 pt-6 text-center text-sm text-[var(--slate)]">
          <p>If you believe this is a mistake, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}