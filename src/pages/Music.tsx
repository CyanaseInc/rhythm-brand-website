
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
      tracks: ["Neon Lights", "Digital Dreams", "Electric Soul", "Midnight Drive"]
    },
    {
      id: 2,
      title: "Synthetic Waves",
      year: 2023,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop",
      tracks: ["Ocean Pulse", "Synthetic Waves", "Deep Current", "Tidal Force"]
    },
    {
      id: 3,
      title: "Matrix Sessions",
      year: 2022,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      tracks: ["Code Red", "Digital Matrix", "Cyber Dreams", "Binary Love"]
    }
  ];

  const streamingPlatforms = [
    { name: "Spotify", url: "#", color: "bg-green-500" },
    { name: "Apple Music", url: "#", color: "bg-gray-800" },
    { name: "YouTube Music", url: "#", color: "bg-red-500" },
    { name: "SoundCloud", url: "#", color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Music
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my complete discography and latest releases
          </p>
        </div>

        {/* Streaming Platforms */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Listen On</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className={`${platform.color} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center space-x-2`}
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-purple-600 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                  <p className="text-white font-semibold">Digital Dreams - Official Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Albums Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Discography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div key={album.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-purple-500 rounded-full p-4 hover:bg-purple-600 transition-colors">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{album.title}</h3>
                  <p className="text-gray-400 mb-4">{album.year}</p>
                  
                  <div className="space-y-2 mb-4">
                    {album.tracks.map((track, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{index + 1}. {track}</span>
                        <button className="text-purple-400 hover:text-purple-300">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors">
                      Play Album
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
