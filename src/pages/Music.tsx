
import React from 'react';
import { Play, ExternalLink, Download } from 'lucide-react';
import Navigation from '../components/Navigation';

const Music = () => {
  const albums = [
    {
      id: 1,
      title: "Digital Dreams",
      year: 2024,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop",
      artistImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
      tracks: ["Neon Lights", "Digital Dreams", "Electric Soul", "Midnight Drive"]
    },
    {
      id: 2,
      title: "Synthetic Waves",
      year: 2023,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      artistImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=face",
      tracks: ["Ocean Pulse", "Synthetic Waves", "Deep Current", "Tidal Force"]
    },
    {
      id: 3,
      title: "Matrix Sessions",
      year: 2022,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      artistImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=300&fit=crop&crop=face",
      tracks: ["Code Red", "Digital Matrix", "Cyber Dreams", "Binary Love"]
    }
  ];

  const streamingPlatforms = [
    { name: "Spotify", url: "#", color: "bg-[#C4975A]" },
    { name: "Apple Music", url: "#", color: "bg-[#8B7355]" },
    { name: "YouTube Music", url: "#", color: "bg-[#D4B896]" },
    { name: "SoundCloud", url: "#", color: "bg-[#C4975A]" },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />
      
      {/* Hero Artist Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Artist Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&h=800&fit=crop&crop=face')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/80 to-[#1A1A1A]"></div>
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          {/* Artist Profile */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#D4B896] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                  alt="Dimitri & The Scarecrow"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative elements around artist image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#C4975A] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#D4B896] rounded-full animate-pulse animation-delay-500"></div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F5E6D3] font-serif">
                Music Collection
              </h1>
              <p className="text-xl text-[#D4B896] max-w-2xl font-serif italic">
                Journey through the mystical soundscapes where earth meets sky
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-7xl mx-auto">
        {/* Streaming Platforms */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#F5E6D3] mb-6 text-center font-serif">Listen On</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className={`${platform.color} text-[#1A1A1A] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center space-x-2 font-serif`}
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#F5E6D3] mb-8 text-center font-serif">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-[#2A2317] rounded-2xl overflow-hidden border border-[#D4B896]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C4975A] rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-[#8B7355] transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-[#F5E6D3] fill-current ml-1" />
                  </div>
                  <p className="text-[#F5E6D3] font-semibold font-serif">Digital Dreams - Official Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Albums Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#F5E6D3] mb-8 text-center font-serif">Discography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div key={album.id} className="bg-[#F5E6D3]/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-[#F5E6D3]/20 transition-all duration-300 group border border-[#D4B896]/20">
                {/* Album Cover */}
                <div className="relative">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#C4975A] rounded-full p-4 hover:bg-[#8B7355] transition-colors">
                      <Play className="w-6 h-6 text-[#F5E6D3] fill-current" />
                    </button>
                  </div>
                  
                  {/* Artist image overlay */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-[#F5E6D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={album.artistImage} 
                      alt="Artist"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Album Info with Artist Image */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4B896]">
                      <img 
                        src={album.artistImage} 
                        alt="Artist"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F5E6D3] font-serif">{album.title}</h3>
                      <p className="text-[#D4B896] font-serif">{album.year}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {album.tracks.map((track, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-[#D4B896] font-serif">{index + 1}. {track}</span>
                        <button className="text-[#C4975A] hover:text-[#8B7355]">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3] py-2 px-4 rounded-full text-sm font-semibold transition-colors font-serif">
                      Play Album
                    </button>
                    <button className="bg-[#2A2317] hover:bg-[#3A3127] text-[#F5E6D3] p-2 rounded-full transition-colors border border-[#D4B896]/20">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#F5E6D3] mb-8 text-center font-serif">Behind the Music</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop"
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 md:h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#C4975A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
