"use client";

import Header from '../Header';

export default function BrandCollaborationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Brand Collaborations</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We partner with innovative brands to create unique products and experiences. Our collaborations bring together different perspectives to create something extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
} 