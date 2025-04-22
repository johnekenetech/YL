"use client";

import { useEffect, useState } from 'react';

export default function Loader({ onLoadingComplete }) {
  const [text, setText] = useState('');
  const [blink, setBlink] = useState(false);
  const fullText = "YLL.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setBlink(true);
        setTimeout(() => onLoadingComplete(), 1000); // Call onLoadingComplete after a delay
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1 className={`text-4xl font-bold text-center text-black ${blink ? 'animate-blink' : ''}`}>
        {text}
      </h1>
    </div>
  );
}
