"use client";

import { useState, useEffect, useRef } from 'react';
import Header from '../Header';

// ✅ Declare stats outside the component
const stats = [
  { value: "Actor." },
  { value: "Nightlife Influencer." },
  { value: "Lifestyle Influencer." },
  { value: "Fashion Influencer." },
  { value: "Brands Ambassador." },
  { value: "Brand Owner." },
];

// Custom hook for reveal on scroll
const useRevealOnScroll = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Marquee images data with correct file extensions
const marqueeImages = [
  { 
    src: "/asake.jpeg", 
    title: "Asake",
    fallback: "https://via.placeholder.com/300x300?text=Asake"
  },
  { 
    src: "/wizkid.jpeg", 
    title: "Wizkid",
    fallback: "https://via.placeholder.com/300x300?text=Wizkid"
  },
  { 
    src: "/burna.jpeg", 
    title: "Burna Boy",
    fallback: "https://via.placeholder.com/300x300?text=Burna+Boy"
  },
  { 
    src: "/olamide.jpeg", 
    title: "Olamide",
    fallback: "https://via.placeholder.com/300x300?text=Olamide"
  },
  { 
    src: "/pawnshop.jpg", 
    title: "Pawnshop",
    fallback: "https://via.placeholder.com/300x300?text=Pawnshop"
  },
  { 
    src: "/betnaija.jpg", 
    title: "Bet9ja",
    fallback: "https://via.placeholder.com/300x300?text=Bet9ja"
  },
  { 
    src: "/ashluxe.jpg", 
    title: "Ashluxe",
    fallback: "https://via.placeholder.com/300x300?text=Ashluxe"
  },
];

export default function AboutPage() {
  const [activeStat, setActiveStat] = useState(0);
  const { ref: revealRef1, isVisible: isVisible1 } = useRevealOnScroll(0.2);
  const { ref: revealRef2, isVisible: isVisible2 } = useRevealOnScroll(0.2);
  const { ref: revealRef3, isVisible: isVisible3 } = useRevealOnScroll(0.2);
  const { ref: revealRef4, isVisible: isVisible4 } = useRevealOnScroll(0.2);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-white">
      <Header />

      <div className="pt-20 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-black text-center mt-10 mb-12">
          About
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl mx-auto items-center justify-center">
          {/* Left Column - Photo with reveal */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 transform ${
              isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={revealRef1}
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/seven.jpg"
                alt="Yhemolee"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x600?text=YHEMOLEE";
                }}
              />
            </div>
          </div>

          {/* Right Column - Animated Stats with reveal */}
          <div 
            className={`w-full md:w-1/2 flex items-center justify-center relative h-40 transition-all duration-1000 transform ${
              isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={revealRef2}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 text-center text-5xl md:text-7xl font-bold text-black transform ${
                  index === activeStat
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {stat.value}
              </div>
            ))}
          </div>
        </div>

        {/* Biography Section with reveal */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left Column - Text with reveal */}
            <div 
              className={`w-full md:w-1/2 transition-all duration-1000 transform ${
                isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              ref={revealRef3}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Biography</h2>
              <p className="text-lg text-gray-800 mb-6">
                Idowu Adeyemi (born 4 April 1993), known professionally as Yhemolee is a Nigerian singer, actor, and social media personality. He gained recognition following the commercial release of his single "Mon Cheri" featuring Chinko Ekun and Asake in 2020.
              </p>
              <a 
                href="https://en.wikipedia.org/wiki/Yhemolee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3  text-black font-semibold border hover:bg-black hover:text-white transition-colors"
              >
                Read More
              </a>
            </div>
            
            {/* Right Column - Image with reveal */}
            <div 
              className={`w-full md:w-1/2 transition-all duration-1000 transform ${
                isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/two.jpg"
                  alt="Yhemolee"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x600?text=YHEMOLEE";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section with reveal */}
        <div 
          className="mt-20 max-w-6xl mx-auto"
          ref={revealRef4}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            Affiliations
          </h2>
          
          <div className={`overflow-hidden transition-all duration-1000 transform ${
            isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {isClient && (
              <div className="flex animate-marquee">
                {[...marqueeImages, ...marqueeImages].map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-48 mx-4">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = item.fallback;
                        }}
                      />
                    </div>
                    <p className="text-center font-medium text-black">{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Add custom styles for the marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
