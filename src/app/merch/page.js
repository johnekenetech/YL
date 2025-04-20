"use client";

import { useRef, useEffect } from 'react';
import Header from '../Header';

export default function MerchPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback error:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          loop
          autoPlay
        >
          <source src="/ylvid.mp4" type="video/mp4" />
        </video>
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col text-center items-center justify-center z-10">
          <h1 className="text-6xl md:text-8xl text-white mb-6">YL Collectives</h1>
          <a 
            href="https://www.yl-collectives.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer px-8 py-3 border-white border-2 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            Click to Shop
          </a>
        </div>
      </div>
    </div>
  );
} 