
import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 w-full bg-[#1A1A1A] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Social Media Icons - Left */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-[#1A1A1A] text-xs font-bold">T</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-[#1A1A1A] text-xs font-bold">F</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-[#1A1A1A] text-xs font-bold">I</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-[#1A1A1A] text-xs font-bold">S</span>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="text-white text-2xl font-bold">
            carl<span className="text-red-500">/</span>cox
          </div>

          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">HOME</a>
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">EVENTS</a>
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">BIOGRAPHY</a>
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">MUSIC</a>
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">STORE</a>
            <a href="#" className="text-white text-sm font-semibold tracking-wider hover:text-red-500 transition-colors">CONTACT</a>
            <Search className="w-5 h-5 text-white hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Face Image */}
        <div className="relative w-1/2 h-full">
          {/* Gradient overlay to fade the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1A1A] z-10"></div>
          
          {/* Face Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=1200&fit=crop&crop=face')`,
              backgroundPosition: 'center 20%'
            }}
          ></div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-1/2 flex items-center justify-start pl-16 pr-24">
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-white text-8xl font-black tracking-wider leading-none">
                CARL
              </h1>
              <div className="flex items-center space-x-4">
                <h1 className="text-white text-8xl font-black tracking-wider leading-none">
                  COX
                </h1>
                <div className="w-16 h-2 bg-red-500"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-lg">
              <blockquote className="text-white text-2xl font-semibold tracking-wide leading-relaxed">
                "THE RAVE WAS BUILT ON ENERGY AND THE EXCITEMENT OF IT ALL AND THIS DESIRE TO GET LOST. IT'S LIKE A NEW ERA FOR ME NOW..."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden absolute inset-0 flex flex-col">
        {/* Mobile Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=1200&fit=crop&crop=face')`,
          }}
        ></div>
        
        {/* Mobile Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-white text-6xl font-black tracking-wider leading-none">
              CARL
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <h1 className="text-white text-6xl font-black tracking-wider leading-none">
                COX
              </h1>
              <div className="w-12 h-2 bg-red-500"></div>
            </div>
          </div>

          <blockquote className="text-white text-lg font-semibold tracking-wide leading-relaxed max-w-sm">
            "THE RAVE WAS BUILT ON ENERGY AND THE EXCITEMENT OF IT ALL AND THIS DESIRE TO GET LOST. IT'S LIKE A NEW ERA FOR ME NOW..."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;
