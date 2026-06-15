'use client';

import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setIsLoading(true);
        const response = await fetch('https://your-foodmood.onrender.com/api');
        
        if (!response.ok) {
          throw new Error(`Failed to load articles: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blog array stream:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-brand-lightBg min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
    
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-brand-dark tracking-tight">
            Our Blog & Articles
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
            Stay up to date with our kitchen stories, special recipes, and nutritious guides direct from our master chefs.
          </p>
        </div>
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-brand-secondary text-sm font-medium">Gathering latest articles...</p>
          </div>
        )}
        {error && !isLoading && (
          <div className="max-w-md mx-auto bg-red-50 text-red-800 p-6 rounded-2xl text-center border border-red-100">
            <p className="font-bold">Failed to load live stories</p>
            <p className="text-xs font-mono bg-white p-2 mt-2 rounded border border-red-50">{error}</p>
          </div>
        )}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post._id} 
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col cursor-pointer"
              >
              
                <div 
                  className="w-full aspect-video bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>

                <div className="p-6 flex flex-col flex-grow space-y-4">
            
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                    <span className="text-brand-primary bg-red-50 px-3 py-1 rounded-md">{post.category}</span>
                    <span className="text-brand-secondary">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-brand-dark leading-snug hover:text-brand-primary transition duration-150 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-brand-secondary text-sm leading-relaxed line-clamp-3 flex-grow">
                    {post.content}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-brand-dark">
                    <span>By {post.author}</span>
                    <span className="text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}
        {!isLoading && !error && posts.length === 0 && (
          <div className="text-center py-12 text-gray-400 font-medium">
            No articles have been posted yet. Check back soon for kitchen stories!
          </div>
        )}

      </div>
    </div>
  );
}