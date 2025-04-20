"use client";

import { useRef, useEffect } from 'react';

export default function Slider() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback error:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover md:object-center object-[center_30%]"
        playsInline
        muted
        loop
        autoPlay
      >
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
