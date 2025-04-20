"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-black md:px-20">
      <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
        YL.
      </Link>

      {/* Mobile hamburger/X toggle */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? (
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation menu */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex absolute md:relative top-0 left-0 right-0 
          bg-black/80 md:bg-transparent 
          backdrop-blur-md md:backdrop-blur-none 
          p-6 md:p-0 z-40 transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
          <li><Link href="/" className="text-white hover:opacity-80">Home</Link></li>
          <li><Link href="/about" className="text-white hover:opacity-80">About</Link></li>
          <li><Link href="/merch" className="text-white hover:opacity-80">Brand</Link></li>
        </ul>
      </nav>
    </header>
  );
}
