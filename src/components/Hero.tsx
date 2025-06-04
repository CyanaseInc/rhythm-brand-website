
import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Artist Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">A</span>
            </div>
          </div>
        </div>

        {/* Artist Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
          ARTIST NAME
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Electronic Music Producer & DJ • Creating Sonic Experiences That Move Souls
        </p>

        {/* Featured Track */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Featured Track</h3>
          <div className="flex items-center justify-between bg-black/30 rounded-lg p-4">
            <div>
              <p className="font-medium text-white">Latest Single</p>
              <p className="text-sm text-gray-400">"Digital Dreams"</p>
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 rounded-full p-3 transition-colors">
              <Play className="w-6 h-6 text-white fill-current" />
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105">
            Listen Now
          </button>
          <button className="border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:bg-white/10">
            Shop Merch
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">50M+</p>
            <p className="text-sm text-gray-400">Streams</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">200+</p>
            <p className="text-sm text-gray-400">Shows</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">15</p>
            <p className="text-sm text-gray-400">Albums</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
