'use strict';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#474747] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-600 pb-12">
        
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl italic text-white">
            <span className="text-brand-primary font-extrabold not-italic">🍲</span> FoodMood
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            In the new era of technology we look in the future with certainty and pride for our company and business.
          </p>
          <div className="flex items-center gap-3 pt-2">
            
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:opacity-90 transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:opacity-90 transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:opacity-90 transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Pages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
            <li><Link href="/book" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Utility Pages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Start Here</a></li>
            <li><a href="#" className="hover:text-white transition">Style Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Password Protected</a></li>
            <li><a href="#" className="hover:text-white transition">404 Not Found</a></li>
            <li><a href="#" className="hover:text-white transition">Licenses</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Follow Us On Instagram</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-500 aspect-square rounded-md overflow-hidden bg-[url('/img3.jpg')] bg-cover bg-center"></div>
            <div className="bg-gray-500 aspect-square rounded-md overflow-hidden bg-[url('/img4.jpg')] bg-cover bg-center"></div>
            <div className="bg-gray-500 aspect-square rounded-md overflow-hidden bg-[url('/img1.jpg')] bg-cover bg-center"></div>
            <div className="bg-gray-500 aspect-square rounded-md overflow-hidden bg-[url('/img2.jpeg')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 text-center text-xs text-gray-400">
        <p>Copyright © {new Date().getFullYear()} FoodMood. All Rights Reserved</p>
      </div>
    </footer>
  );
}