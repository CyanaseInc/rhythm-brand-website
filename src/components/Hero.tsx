
import React from 'react';
import { AudioWaveform } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] bg-black font-sans flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Hero Image */}
      <div className="md:w-[50%] w-full h-[350px] md:h-auto relative flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          alt="Hero Placeholder"
          className="w-full h-full object-cover object-left md:rounded-r-[4rem] opacity-90 shadow-2xl"
          style={{
            borderRight: '8px solid rgba(0,0,0,0.20)',
            minHeight: '350px'
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none md:rounded-r-[4rem]"></div>
      </div>
      {/* Right: Main Content */}
      <div className="flex flex-col justify-center md:items-start items-center md:w-[50%] w-full px-7 md:px-14 py-12 z-10 bg-black/90">
        {/* Logo/Title */}
        <div className="mb-6 mt-0 w-full flex md:justify-start justify-center">
          <h1 className="text-white font-black text-[2.2rem] sm:text-5xl md:text-6xl leading-tight uppercase mb-2 tracking-widest drop-shadow font-sans select-none">
            dimitri<span className="font-light">&amp;scarecrow</span>
          </h1>
        </div>
        {/* Poetic/creative Quote */}
        <div className="mb-7 w-full text-left md:text-left text-center">
          <blockquote className="text-white text-lg md:text-2xl font-extralight tracking-wide leading-relaxed italic select-none" style={{ textShadow: '0 2px 20px #000' }}>
            "IN THE SPACE BETWEEN EARTH AND SKY, WHERE WHISPERS BECOME SONGS<br className="hidden md:block"/> AND SILENCE HOLDS THE DEEPEST TRUTHS..."
          </blockquote>
        </div>
        {/* Animated Music Waves */}
        <div className="mt-5 flex items-center justify-start md:justify-normal space-x-2">
          <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0s' }} />
          <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.12s' }} />
          <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.24s' }} />
          <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.36s' }} />
          <AudioWaveform className="text-white w-8 h-8 animate-[wavebounce_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.48s' }} />
          <style>{`
            @keyframes wavebounce {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50%      { transform: translateY(-22%); opacity: 0.85; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;

