'use client';

import { useState, useEffect } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'main', label: 'Main Dishes' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' }
];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        setIsLoading(true);
  
        const response = await fetch('https://your-foodmood.onrender.com/api/menu');
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        console.error('Error fetching backend menu items:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, []);

  
  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category?.toLowerCase() === activeCategory);

  return (
    <div className="w-full bg-brand-lightBg min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
  
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-brand-dark tracking-tight">
            Our Menu
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
            We consider all the drivers of change gives you the components you need to change to create a truly professional website.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition duration-200 ${
                activeCategory === category.id
                  ? 'bg-brand-primary border-brand-primary text-black shadow-md'
                  : 'bg-white border-gray-200 text-brand-dark hover:border-brand-dark'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-brand-secondary text-sm font-medium">Loading delicious items...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl text-center space-y-2">
            <p className="font-bold">Failed to load live backend data</p>
            <p className="text-xs text-red-600 font-mono bg-white p-2 rounded border border-red-100">{error}</p>
            <p className="text-xs text-gray-500 pt-2">Make sure your Express server is running and CORS is enabled!</p>
          </div>
        )}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {filteredItems.map((item) => (
              <div 
                key={item._id || item.id} 
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div 
                  className="w-full aspect-[4/3] bg-gray-200 bg-cover bg-center transition-transform duration-300 hover:scale-105" 
                  style={{ backgroundImage: `url(${item.image || '/api/placeholder/350/250'})` }}
                ></div>

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-bold text-xl text-brand-dark tracking-tight truncate">
                      {item.name}
                    </h3>
                    <span className="text-brand-primary font-bold text-xl shrink-0">
                      {typeof item.price === 'number' ? `Rs. ${item.price.toFixed(2)}` : item.price}
                    </span>
                  </div>
                  <p className="text-brand-secondary text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isLoading && !error && filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-medium">
            No culinary items found in this section right now. Check back soon!
          </div>
        )}

      </div>
    </div>
  );
}