
import React, { useEffect, useState } from 'react';
import { Play, ExternalLink, Volume2 } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background with Animated Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-red-900/20 via-transparent to-cyan-900/20"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        
        {/* Artist Logo/Symbol */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
              <Volume2 className="w-16 h-16 text-white animate-glow" />
            </div>
          </div>
        </div>

        {/* Main Artist Name with Dramatic Animation */}
        <div className="mb-8 relative">
          <h1 className={`font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-4 relative transition-all duration-1500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-glow">
                SONIC
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent opacity-50 blur-sm">
                SONIC
              </div>
            </span>
            <br />
            <span className={`relative inline-block transition-all duration-1500 delay-300 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                PULSE
              </span>
            </span>
          </h1>
          
          {/* Animated Underline */}
          <div className={`h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto transition-all duration-2000 delay-500 ${isLoaded ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        {/* Professional Quote */}
        <div className={`mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <blockquote className="font-exo text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed tracking-wide">
            <span className="text-purple-400">"</span>
            THE SOUND WAS BUILT ON<br />
            ENERGY AND THE<br />
            EXCITEMENT OF IT ALL AND<br />
            THIS DESIRE TO GET LOST,<br />
            <span className="text-blue-400 font-medium">IT'S LIKE A NEW ERA FOR ME NOW...</span>
            <span className="text-purple-400">"</span>
          </blockquote>
        </div>

        {/* Genre Tags */}
        <div className={`mb-12 transition-all duration-1000 delay-900 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {['ELECTRONIC', 'TECHNO', 'PROGRESSIVE', 'HOUSE'].map((genre, index) => (
              <span 
                key={genre}
                className={`font-rajdhani font-semibold text-sm tracking-wider px-6 py-2 border border-purple-400/30 rounded-full text-purple-300 hover:border-purple-400 hover:text-white transition-all duration-300 hover:scale-110 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Track Player */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'animate-delayed-scale-in' : 'opacity-0'}`}>
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
            <h3 className="font-rajdhani font-bold text-lg text-purple-300 mb-4 tracking-wider">FEATURED TRACK</h3>
            <div className="flex items-center justify-between bg-purple-900/20 rounded-xl p-6 group-hover:bg-purple-900/30 transition-all duration-300">
              <div className="text-left">
                <p className="font-exo font-bold text-white text-lg">"Digital Euphoria"</p>
                <p className="font-rajdhani text-gray-400 text-sm tracking-wide">Latest Single • 2024</p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full p-4 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <Play className="w-6 h-6 text-white fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`mb-16 transition-all duration-1000 delay-1200 ${isLoaded ? 'animate-delayed-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="font-rajdhani font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 tracking-wider text-lg">
              LISTEN NOW
            </button>
            <button className="font-rajdhani font-bold border-2 border-white/30 hover:border-white text-white py-4 px-12 rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-xl tracking-wider text-lg">
              EXPLORE MUSIC
            </button>
          </div>
        </div>

        {/* Stats with Professional Animation */}
        <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1400 ${isLoaded ? 'animate-delayed-fade-in-up-2' : 'opacity-0'}`}>
          {[
            { number: '100M+', label: 'STREAMS' },
            { number: '500+', label: 'SHOWS' },
            { number: '25', label: 'ALBUMS' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group cursor-pointer">
              <p className="font-orbitron font-bold text-3xl md:text-4xl text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                {stat.number}
              </p>
              <p className="font-rajdhani text-gray-400 text-sm tracking-widest mt-2 group-hover:text-gray-300 transition-all duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${isLoaded ? 'animate-delayed-fade-in-up-3' : 'opacity-0'}`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="font-rajdhani text-xs text-gray-500 tracking-widest">SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
