
import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full bg-[#1A1A1A]/90 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Social Media Icons - Left */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">T</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">F</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">I</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">S</span>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="text-white text-lg md:text-2xl font-bold animate-scale-in">
            carl<span className="text-red-500">/</span>cox
          </div>

          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">HOME</a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">EVENTS</a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">BIOGRAPHY</a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">MUSIC</a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">STORE</a>
            <a href="#" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-red-500 transition-all duration-300 hover:scale-110">CONTACT</a>
            <Search className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-white p-2 hover:text-red-500 transition-colors">
              <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-current transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] items-center">
        {/* Text Content - Left Side */}
        <div className="w-full flex items-center justify-start px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider leading-none animate-fade-in opacity-0 animation-delay-300" 
                  style={{ animationFillMode: 'forwards' }}>
                CARL
              </h1>
              <div className="flex items-center space-x-3 md:space-x-4 animate-fade-in opacity-0 animation-delay-500" 
                   style={{ animationFillMode: 'forwards' }}>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider leading-none">
                  COX
                </h1>
                <div className="w-8 md:w-12 lg:w-16 h-1.5 md:h-2 bg-red-500 animate-slide-in-right opacity-0 animation-delay-700" 
                     style={{ animationFillMode: 'forwards' }}></div>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl animate-fade-in opacity-0 animation-delay-1000" 
                 style={{ animationFillMode: 'forwards' }}>
              <blockquote className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide leading-relaxed">
                "THE RAVE WAS BUILT ON ENERGY AND THE EXCITEMENT OF IT ALL AND THIS DESIRE TO GET LOST. IT'S LIKE A NEW ERA FOR ME NOW..."
              </blockquote>
            </div>

            {/* Call to Action Buttons - Mobile Friendly */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-8 animate-fade-in opacity-0 animation-delay-1200" 
                 style={{ animationFillMode: 'forwards' }}>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
                LISTEN NOW
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white/10 transform hover:scale-105">
                VIEW EVENTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
