"use client";

import { useState } from 'react';
import Loader from './Loader';
import Slider from './Slider';
import Header from './Header';
import Link from 'next/link';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      <Header />
      {!loadingComplete ? (
        <Loader onLoadingComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          <Slider />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-5xl md:text-8xl text-white mb-2">YHEMOLEE.</h1>
            <p className="text-xl md:text-2xl text-white mb-8">No. 1 Nightlife and Lifestyle Influencer</p>
            <a 
              href="https://www.instagram.com/yhemo_lee?igsh=eTlxZGFtdDg3ajdi" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-white border-2 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black"
            >
              Book Me
            </a>
          </div>
        </>
      )}
    </div>
  );
}
