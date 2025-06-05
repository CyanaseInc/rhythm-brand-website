
import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full bg-[#1A1A1A]/90 backdrop-blur-sm px-6 py-4">
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
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-start pl-8 md:pl-16 pr-8 md:pr-24">
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-white text-6xl md:text-8xl font-black tracking-wider leading-none">
                CARL
              </h1>
              <div className="flex items-center space-x-4">
                <h1 className="text-white text-6xl md:text-8xl font-black tracking-wider leading-none">
                  COX
                </h1>
                <div className="w-12 md:w-16 h-2 bg-red-500"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-lg">
              <blockquote className="text-white text-lg md:text-2xl font-semibold tracking-wide leading-relaxed">
                "THE RAVE WAS BUILT ON ENERGY AND THE EXCITEMENT OF IT ALL AND THIS DESIRE TO GET LOST. IT'S LIKE A NEW ERA FOR ME NOW..."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle (hidden by default, can be implemented later) */}
      <div className="md:hidden absolute top-6 right-6 z-30">
        <button className="text-white p-2">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
