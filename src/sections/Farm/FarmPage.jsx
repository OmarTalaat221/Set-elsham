"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const FarmPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Have a look at our
                <br />
                <span className="text-green-600">beautiful farm!</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie 
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh 
                porttitor. Ut in nulla enim. Phasellus molestie magna non est 
                bibendum non venenatis nisl tempor.
              </p>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                PURCHASE THEME
              </button>
            </div>

            {/* Right Images */}
            <div className="relative order-1 lg:order-2 h-[600px] lg:h-auto">
              {/* Large Image - 470x660 */}
              <div className="relative z-10">
                <div className="w-full max-w-[470px] h-[660px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-2xl font-semibold">470 × 660</span>
                  </div>
                </div>
              </div>
              
              {/* Small Overlapping Image - 370x240 */}
              <div className="absolute -bottom-10 -right-10 lg:bottom-20 lg:right-0 z-20">
                <div className="w-[280px] lg:w-[370px] h-[180px] lg:h-[240px] bg-gray-300 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-lg font-semibold">370 × 240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Our Farmers */}
      <section className="relative py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image with Yellow Overlay */}
            <div className="relative order-2 lg:order-1">
              {/* Yellow Background Element */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-yellow-200 rounded-lg -z-10"></div>
              
              {/* Main Image - 370x530 */}
              <div className="relative z-10">
                <div className="w-full max-w-[370px] h-[530px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-xl font-semibold">370 × 530</span>
                  </div>
                </div>
              </div>
              
              {/* Person Info */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900">JONH DOE</h3>
                <p className="text-gray-600">Director Organd</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our
                <br />
                <span className="text-green-600">farmers</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie 
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh 
                porttitor. Ut in nulla enim. Phasellus molestie magna non est 
                bibendum non venenatis nisl tempor. Suspendisse in dictum sit 
                amet ipsum auctor auctor. Duis vitae magna mollis, congue 
                augue nec, ullamcorper lectus.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie 
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh 
                porttitor. Ut in nulla enim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Three Circular Avatars */}
            <div className="flex items-center justify-center space-x-4 lg:space-x-8 mb-6">
              {/* Avatar 1 */}
              <div className="relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Avatar 2 */}
              <div className="relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Avatar 3 */}
              <div className="relative">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Member Name */}
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">MICHAEL HUNTS</h3>
              <p className="text-gray-600">Team Lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmPage;
