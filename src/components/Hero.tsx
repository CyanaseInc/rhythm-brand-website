
import React from 'react';
import { AudioWaveform } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black font-sans flex flex-col">
      {/* Top navigation bar */}
      <nav className="w-full py-6 px-8 flex items-center justify-between z-30 relative">
        {/* Logo top left */}
        <div className="flex items-center space-x-3">
          <span className="text-white text-2xl font-black tracking-widest uppercase opacity-90 select-none">dimitri&scarecrow</span>
        </div>
        {/* Minimal nav links */}
        <ul className="hidden md:flex space-x-10">
          <li><a href="/" className="text-gray-300 hover:text-white tracking-wider font-light text-sm">Home</a></li>
          <li><a href="/music" className="text-gray-300 hover:text-white tracking-wider font-light text-sm">Music</a></li>
          <li><a href="/events" className="text-gray-300 hover:text-white tracking-wider font-light text-sm">Events</a></li>
          <li><a href="/biography" className="text-gray-300 hover:text-white tracking-wider font-light text-sm">Biography</a></li>
          <li><a href="/contact" className="text-gray-300 hover:text-white tracking-wider font-light text-sm">Contact</a></li>
        </ul>
        {/* Search icon */}
        <div className="hidden md:flex">
          <svg className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </div>
      </nav>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col md:flex-row w-full justify-between items-stretch">
        {/* Left: Main content */}
        <div className="flex flex-col justify-center items-start md:w-[52%] w-full px-8 md:px-16 py-20 z-10 relative">
          {/* LOGO or Main Title */}
          <div className="mb-10 mt-16 md:mt-0 text-left w-full">
            <h1 className="text-white font-black text-[2.5rem] sm:text-6xl md:text-7xl leading-tight uppercase mb-6 tracking-widest drop-shadow font-sans select-none">
              dimitri<span className="font-light">&amp;scarecrow</span>
            </h1>
          </div>
          {/* Poetic/creative Quote */}
          <div className="mb-10 w-full">
            <blockquote className="text-white text-lg md:text-2xl lg:text-3xl font-extralight tracking-wide w-full leading-relaxed text-left italic select-none" style={{ textShadow: '0 2px 20px #000' }}>
              "IN THE SPACE BETWEEN EARTH AND SKY, WHERE WHISPERS BECOME SONGS<br className="hidden md:block"/> AND SILENCE HOLDS THE DEEPEST TRUTHS..."
            </blockquote>
          </div>
          {/* Animated Music Waves */}
          <div className="mt-6 flex items-center space-x-2">
            {/* 5 animated waves */}
            <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0s' }} />
            <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.2s' }} />
            <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.4s' }} />
            <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.6s' }} />
            <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.8s' }} />
            <style>
              {`
                @keyframes wavebounce {
                  0%, 100% { transform: translateY(0); opacity: 1; }
                  50%      { transform: translateY(-20%); opacity: 0.8; }
                }
              `}
            </style>
          </div>
        </div>
        {/* Right: Hero photo */}
        <div className="md:w-[48%] w-full h-[400px] md:h-auto relative overflow-hidden flex items-center justify-center">
          <img
            src="/lovable-uploads/bf7d600c-1e7e-4be1-a802-d9544cfb568e.png"
            alt="Hero"
            className="w-full h-full object-cover object-right md:rounded-l-[5rem] opacity-80 shadow-2xl"
            style={{
              borderLeft: '8px solid rgba(0,0,0,0.25)',
              minHeight: '400px'
            }}
          />
          {/* Optional: subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-black/0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

