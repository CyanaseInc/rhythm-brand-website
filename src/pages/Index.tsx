
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { Music, BookOpen, Calendar, Mail, Play, ExternalLink, Feather, Wheat, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const quickLinks = [
    {
      title: 'The Crop',
      description: 'Albums shown as hand-drawn seed packets',
      icon: Music,
      link: '/music',
      color: 'from-[#8B7355] to-[#C4975A]'
    },
    {
      title: 'Field Notes',
      description: 'Art meets lifestyle - nature retreats and creative rituals',
      icon: BookOpen,
      link: '/biography',
      color: 'from-[#5A7C65] to-[#8FBC8F]'
    },
    {
      title: 'Footprints on Dust',
      description: 'Rustic calendar pinned on a barn wall',
      icon: Calendar,
      link: '/events',
      color: 'from-[#8B7355] to-[#D4B896]'
    },
    {
      title: 'Whispers from the Wheat',
      description: 'Letters from the Scarecrow - notes, dreams, and secret sound drops',
      icon: Mail,
      link: '/contact',
      color: 'from-[#6B5B73] to-[#9B8B9B]'
    }
  ];

  const featuredTracks = [
    {
      title: 'Harvest Moon Sessions',
      album: 'Songs from the Field (2024)',
      duration: '4:32',
      streams: 'Like whispers'
    },
    {
      title: 'Scarecrow\'s Lament',
      album: 'Songs from the Field (2024)',
      duration: '3:47',
      streams: 'In the wind'
    },
    {
      title: 'Morning Dew',
      album: 'Songs from the Field (2024)',
      duration: '5:12',
      streams: 'Between dreams'
    }
  ];

  const platforms = [
    { name: 'Spotify', url: '#', color: 'bg-[#8B7355]' },
    { name: 'Bandcamp', url: '#', color: 'bg-[#5A7C65]' },
    { name: 'SoundCloud', url: '#', color: 'bg-[#C4975A]' },
    { name: 'Cassette Tapes', url: '#', color: 'bg-[#6B5B73]' }
  ];

  return (
    <div className="min-h-screen bg-[#2A2317]">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section - "Into the Field" */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#2A2317] to-[#3A3127]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#F5E6D3] mb-4 font-serif">
            Explore Our World
          </h2>
          <p className="text-center text-[#D4B896] mb-16 font-serif italic">
            "Each path leads to a different field of dreams"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="group bg-[#F5E6D3]/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#F5E6D3]/20 transition-all duration-300 transform hover:scale-105 border border-[#D4B896]/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-8 h-8 text-[#F5E6D3]" />
                </div>
                <h3 className="text-xl font-bold text-[#F5E6D3] mb-2 font-serif">{link.title}</h3>
                <p className="text-[#D4B896] text-sm font-serif">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music Section - "Songs from the Field" */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#3A3127] to-[#2A2317]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#F5E6D3] mb-4 font-serif">
            Songs from the Field
          </h2>
          <p className="text-center text-[#D4B896] mb-16 font-serif italic">
            "Melodies grown in moonlight, harvested at dawn"
          </p>
          
          <div className="bg-[#F5E6D3]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#D4B896]/20">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#F5E6D3]/5 rounded-lg hover:bg-[#F5E6D3]/10 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <button className="bg-[#C4975A] hover:bg-[#8B7355] rounded-full p-2 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-[#F5E6D3] fill-current" />
                    </button>
                    <div>
                      <h4 className="text-[#F5E6D3] font-semibold font-serif">{track.title}</h4>
                      <p className="text-[#D4B896] text-sm font-serif">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#F5E6D3] text-sm font-serif">{track.duration}</p>
                    <p className="text-[#D4B896] text-xs font-serif italic">{track.streams}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/music"
                className="bg-gradient-to-r from-[#C4975A] to-[#8B7355] hover:from-[#8B7355] hover:to-[#C4975A] text-[#F5E6D3] font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 inline-block font-serif"
              >
                Harvest More Music
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms - "Where to Find Us" */}
      <section className="py-16 px-4 bg-[#2A2317]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#F5E6D3] mb-8 font-serif">Listen in the Sacred Spaces</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className={`${platform.color} text-[#F5E6D3] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center space-x-2 font-serif`}
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - "Join the Circle" */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#5A7C65] via-[#2A2317] to-[#6B5B73]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#F5E6D3] mb-6 font-serif">
            Join the Circle
          </h2>
          <p className="text-xl text-[#D4B896] mb-8 max-w-2xl mx-auto font-serif">
            Step into our mystical world where folklore meets sound. 
            Receive whispers from the wheat, stories from the road, and music that grows from the earth itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/music"
              className="bg-gradient-to-r from-[#C4975A] to-[#8B7355] hover:from-[#8B7355] hover:to-[#C4975A] text-[#F5E6D3] font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 font-serif"
            >
              Enter the Field
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#F5E6D3]/30 hover:border-[#F5E6D3] text-[#F5E6D3] font-semibold py-4 px-8 rounded-full transition-all duration-200 hover:bg-[#F5E6D3]/10 font-serif"
            >
              Send a Raven
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
