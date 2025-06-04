
import React, { useState, useEffect } from 'react';
import { Play, Volume2, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 500);
    const timer2 = setTimeout(() => setQuoteVisible(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Moving geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.05)_25px,rgba(255,255,255,0.05)_26px,transparent_27px,transparent_99px),linear-gradient(transparent_24px,rgba(255,255,255,0.05)_25px,rgba(255,255,255,0.05)_26px,transparent_27px,transparent_99px)] bg-[length:100px_100px]"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text content */}
        <div className="text-left space-y-8">
          {/* Artist name with dramatic entrance */}
          <div className="overflow-hidden">
            <h1 className={`font-orbitron text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider transform transition-all duration-1000 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-glow">
                SONIC
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent -mt-4">
                PULSE
              </span>
            </h1>
          </div>

          {/* Animated quote section */}
          <div className="space-y-6">
            <div className={`transform transition-all duration-1000 delay-500 ${
              quoteVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <p className="font-exo text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                "THE BEAT IS THE HEARTBEAT OF
                <span className="block text-white font-semibold">THE DIGITAL REVOLUTION.</span>
                <span className="block text-purple-300">EVERY DROP IS A NEW UNIVERSE,</span>
                <span className="block text-cyan-300">EVERY BASSLINE A JOURNEY</span>
                <span className="block text-white font-bold">INTO THE UNKNOWN..."</span>
              </p>
            </div>

            {/* Genre tags with staggered animation */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['ELECTRONIC', 'TECHNO', 'PROGRESSIVE', 'TRANCE'].map((genre, index) => (
                <span
                  key={genre}
                  className={`font-rajdhani font-semibold text-sm px-4 py-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full backdrop-blur-sm transform transition-all duration-700 ${
                    quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className={`flex flex-col sm:flex-row gap-4 mt-12 transform transition-all duration-1000 delay-1000 ${
            quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-rajdhani text-lg uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Experience The Sound
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-rajdhani text-lg uppercase tracking-wider">
              <span className="flex items-center justify-center gap-2">
                <Volume2 className="w-5 h-5" />
                Latest Release
              </span>
            </button>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="relative">
          {/* Main artist image container */}
          <div className={`relative transform transition-all duration-1200 delay-300 ${
            textVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>
            
            {/* Artist image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-white/20">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-black flex items-center justify-center">
                {/* Placeholder for artist photo */}
                <div className="text-6xl lg:text-8xl font-orbitron font-black text-white opacity-60">
                  SP
                </div>
              </div>
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20"></div>
            </div>

            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/80 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-500/80 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
            
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-500/60 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
          </div>

          {/* Stats with reveal animation */}
          <div className={`mt-12 grid grid-cols-3 gap-6 transform transition-all duration-1000 delay-1500 ${
            quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-purple-400">50M+</p>
              <p className="text-sm font-rajdhani text-gray-400 uppercase tracking-wider">Streams</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-cyan-400">200+</p>
              <p className="text-sm font-rajdhani text-gray-400 uppercase tracking-wider">Shows</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-orbitron font-bold text-blue-400">15</p>
              <p className="text-sm font-rajdhani text-gray-400 uppercase tracking-wider">Albums</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-gray-400 mt-2 font-rajdhani uppercase tracking-wider">Scroll</p>
      </div>

      {/* Social media links */}
      <div className={`absolute left-8 top-1/2 transform -translate-y-1/2 space-y-6 transform transition-all duration-1000 delay-2000 ${
        quoteVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
      }`}>
        {['Instagram', 'Spotify', 'SoundCloud'].map((platform, index) => (
          <a
            key={platform}
            href="#"
            className="block w-12 h-12 bg-white/10 hover:bg-purple-500/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="text-white text-xs font-rajdhani font-bold">
              {platform.slice(0, 2).toUpperCase()}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
