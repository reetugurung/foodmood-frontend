'use strict';

import Link from 'next/link';
import { Coffee, UtensilsCrossed, GlassWater, Cake, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
  <div className="w-full font-sans overflow-x-hidden">
  
    <section className="relative w-full min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 px-4 sm:px-8">
      <div className="absolute inset-0 bg-black/45 transition duration-300 hover:bg-black/35"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-md">
          Best food for <br /> your taste
        </h1>
        
        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/book" 
            className="bg-brand-primary text-white font-bold px-10 py-4 rounded-full hover:bg-opacity-90 transition shadow-lg text-base text-center min-w-[180px]"
          >
            Book A Table
          </Link>
          <Link 
            href="/menu" 
            className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-brand-dark transition shadow-lg text-base text-center min-w-[180px]"
          >
            Explore Menu
          </Link>
        </div>

      </div>
    </section>
<section className="w-full py-16 md:py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-dark tracking-tight">
              Browse Our Menu
            </h2>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div className="border border-gray-200 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-14 h-14 bg-brand-lightBg rounded-full flex items-center justify-center text-brand-primary">
                <Coffee size={28} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Breakfast</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                In the new era of technology we look in the future with certainty life.
              </p>
              <Link href="/menu?category=breakfast" className="text-red-400 font-bold text-sm pt-2 hover:underline inline-block mt-auto">
                Explore Menu
              </Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-14 h-14 bg-brand-lightBg rounded-full flex items-center justify-center text-brand-primary">
                <UtensilsCrossed size={28} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Main Dishes</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                In the new era of technology we look in the future with certainty life.
              </p>
              <Link href="/menu?category=main" className="text-red-400 font-bold text-sm pt-2 hover:underline inline-block mt-auto">
                Explore Menu
              </Link>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-14 h-14 bg-brand-lightBg rounded-full flex items-center justify-center text-brand-primary">
                <GlassWater size={28} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Drinks</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                In the new era of technology we look in the future with certainty life.
              </p>
              <Link href="/menu?category=drinks" className="text-red-400 font-bold text-sm pt-2 hover:underline inline-block mt-auto">
                Explore Menu
              </Link>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-14 h-14 bg-brand-lightBg rounded-full flex items-center justify-center text-brand-primary">
                <Cake size={28} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Desserts</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                In the new era of technology we look in the future with certainty life.
              </p>
              <Link href="/menu?category=desserts" className="text-red-400 font-bold text-sm pt-2 hover:underline inline-block mt-auto">
                Explore Menu
              </Link>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full py-16 md:py-20 px-4 sm:px-8 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg aspect-[4/3] rounded-3xl bg-gray-300 overflow-hidden bg-[url('/footer.jpg')] bg-cover bg-center shadow-lg"></div>
            <div className="absolute bottom-[-30px] right-4 sm:right-10 bg-brand-dark text-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xs space-y-4">
              <h4 className="font-bold text-lg border-b border-gray-600 pb-2">Come and visit us</h4>
              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-primary shrink-0" />
                  <span>+977 9876538283</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-primary shrink-0" />
                  <span className="truncate">foodmood@contact.com</span>
                </div>
                <div className="flex items-center gap-3 items-start">
                  <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>NewRoad, Kathmandu</span>
                </div>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-6 space-y-5 lg:pl-6 pt-8 lg:pt-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-dark leading-tight">
              We provide healthy <br className="hidden sm:inline" /> food for your family.
            </h2>
            <p className="font-medium text-brand-dark text-sm sm:text-base">
              Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
            </p>
            <p className="text-brand-secondary text-sm leading-relaxed">
              At FoodMood, we take pride in offering delicious food cooked with local ingredients. Each individual menu dish represents healthy values ensuring that your breakfast, dinner, or corporate parties are perfectly curated.
            </p>
            <div className="pt-2">
              <Link href="/about" className="inline-block border-2 border-brand-dark text-brand-dark font-bold px-7 py-3 rounded-full hover:bg-brand-dark hover:text-white transition text-sm">
                More About Us
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}