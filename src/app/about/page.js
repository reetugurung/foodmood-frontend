'use client';

import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showStats, setShowStats] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="w-full min-h-screen bg-white py-16 px-4 sm:px-8 font-sans flex items-center justify-center">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            onClick={() => setIsOpen(true)}
            className="w-full aspect-[4/3] sm:aspect-square bg-gray-200 bg-cover bg-center rounded-3xl flex items-center justify-center relative shadow-xl overflow-hidden group cursor-pointer border border-gray-100"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200')` }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>

            <button className="z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition duration-300 relative">
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-25 group-hover:opacity-40 transition"></span>
              <svg className="w-6 h-6 text-neutral-800 ml-1 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              We provide healthy <br /> food for your family.
            </h1>
            
            <p className="text-neutral-800 font-medium text-base sm:text-lg leading-relaxed">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
            </p>

            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              At FoodMood, we take pride in offering delicious food cooked with local ingredients. Each individual menu dish represents healthy values ensuring that your breakfast, dinner, or corporate parties are perfectly curated.
            </p>
            
            <div className="pt-2">
              <button 
                onClick={() => setShowStats(!showStats)}
                className={`px-8 py-3.5 border-2 border-neutral-900 font-bold rounded-full text-sm transition-all duration-300 active:scale-95 ${
                  showStats ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {showStats ? 'Hide Details' : 'More About Us'}
              </button>
            </div>
          </div>

        </div>
        {showStats && (
          <div className="w-full bg-neutral-50 border border-neutral-100 rounded-3xl p-8 sm:p-12 animate-fade-in shadow-inner mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="space-y-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl">⏳</span>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Established</h3>
                <p className="text-2xl font-bold text-neutral-900">2022</p>
                <p className="text-xs text-gray-500 leading-relaxed">Serving premium culinary flavors for over 4 years.</p>
              </div>
              <div className="space-y-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl">📍</span>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Headquarters</h3>
                <p className="text-2xl font-bold text-neutral-900">Kathmandu</p>
                <p className="text-xs text-gray-500 leading-relaxed">Located in the vibrant heart of Bagmati Province, Nepal.</p>
              </div>
              <div className="space-y-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl">👨‍🍳</span>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Team</h3>
                <p className="text-2xl font-bold text-neutral-900">35+ Experts</p>
                <p className="text-xs text-gray-500 leading-relaxed">Master pastry artisans, executive line chefs, and sommeliers.</p>
              </div>
              <div className="space-y-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl">🌱</span>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ingredients</h3>
                <p className="text-2xl font-bold text-neutral-900">100% Organic</p>
                <p className="text-xs text-gray-500 leading-relaxed">Direct farm-to-table supply chains for optimal food safety.</p>
              </div>

            </div>
          </div>
        )}

      </div>

     
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition"
          >
            &times;
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-black aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-800"
          >
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-41614-large.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}