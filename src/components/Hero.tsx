
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Dark textured background without color overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#0F0F0F]">
        {/* Subtle gray/white texture only */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      {/* Grayscale portrait image - uses user-uploaded image */}
      <div className="absolute inset-0 w-full lg:w-3/5">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat grayscale animate-slow-zoom-hero"
          style={{
            backgroundImage: `url('/lovable-uploads/8e542cac-b5bf-437f-9bf5-e89730cc5f18.png')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          {/* Transparent fade out to black */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1A1A]"></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full bg-[#1A1A1A]/90 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 animate-fade-in border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Natural Icons - Left */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🌾</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🌙</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🔥</span>
            </div>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="text-white text-lg md:text-2xl font-bold animate-scale-in font-serif">
            dimitri<span className="text-gray-300">&</span>scarecrow
          </Link>

          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 font-serif">HOME</Link>
            <Link to="/music" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 font-serif">MUSIC</Link>
            <Link to="/biography" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 font-serif">BIOGRAPHY</Link>
            <Link to="/events" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 font-serif">EVENTS</Link>
            <Link to="/contact" className="text-white text-xs lg:text-sm font-semibold tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 font-serif">CONTACT</Link>
            <Search className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-white p-2 hover:text-gray-300 transition-colors">
              <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-current transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content - no brown/orange highlights, only white/gray/black */}
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] items-center">
        <div className="w-full flex items-center justify-end px-6 md:px-8 lg:px-16">
          <div className="max-w-2xl space-y-6 md:space-y-8 ml-auto">
            {/* Main Title */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-wider leading-none animate-fade-in opacity-0 animation-delay-300 font-serif text-glow px-8 md:px-12 lg:px-16" 
                  style={{ animationFillMode: 'forwards' }}>
                DIMITRI
              </h1>
              <div className="flex items-center space-x-3 md:space-x-4 animate-fade-in opacity-0 animation-delay-500 px-8 md:px-12 lg:px-16" 
                   style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] leading-none font-serif italic">
                  & THE SCARECROW
                </h2>
                <div className="w-8 md:w-12 lg:w-16 h-1.5 md:h-2 bg-white/30 animate-slide-in-right opacity-0 animation-delay-700" 
                     style={{ animationFillMode: 'forwards' }}></div>
              </div>
            </div>
            {/* Poetic Quote */}
            <div className="max-w-lg animate-fade-in opacity-0 animation-delay-1000 px-8 md:px-12 lg:px-16" 
                 style={{ animationFillMode: 'forwards' }}>
              <blockquote className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide leading-relaxed font-serif italic">
                "IN THE SPACE BETWEEN EARTH AND SKY, WHERE WHISPERS BECOME SONGS AND SILENCE HOLDS THE DEEPEST TRUTHS..."
              </blockquote>
            </div>
            {/* Call to Action Buttons - fully neutral colors */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-8 animate-fade-in opacity-0 animation-delay-1200 px-8 md:px-12 lg:px-16" 
                 style={{ animationFillMode: 'forwards' }}>
              <Link to="/music" className="bg-white text-[#1A1A1A] font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/10 font-serif text-center">
                HARVEST THE SOUND
              </Link>
              <Link to="/music" className="border-2 border-white/30 hover:border-white text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white/10 transform hover:scale-105 font-serif text-center">
                INTO THE FIELD
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute bottom-20 right-20 animate-bounce opacity-60">
        <div className="text-4xl">🌾</div>
      </div>
      <div className="absolute top-32 right-32 animate-pulse opacity-40">
        <div className="text-2xl">🦅</div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
