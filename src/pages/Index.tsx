
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import { Music, ShoppingBag, Calendar, Mail, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const quickLinks = [
    {
      title: 'Latest Music',
      description: 'Stream my newest tracks and full discography',
      icon: Music,
      link: '/music',
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Official Store',
      description: 'Get exclusive merchandise and clothing',
      icon: ShoppingBag,
      link: '/store',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tour Dates',
      description: 'Find me performing live near you',
      icon: Calendar,
      link: '/events',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Get in Touch',
      description: 'Booking inquiries and collaborations',
      icon: Mail,
      link: '/contact',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const featuredTracks = [
    {
      title: 'Digital Dreams',
      album: 'Digital Dreams (2024)',
      duration: '4:32',
      streams: '2.5M'
    },
    {
      title: 'Neon Lights',
      album: 'Digital Dreams (2024)',
      duration: '3:47',
      streams: '1.8M'
    },
    {
      title: 'Electric Soul',
      album: 'Digital Dreams (2024)',
      duration: '5:12',
      streams: '3.2M'
    }
  ];

  const streamingPlatforms = [
    { name: 'Spotify', url: '#', color: 'bg-green-500' },
    { name: 'Apple Music', url: '#', color: 'bg-gray-800' },
    { name: 'YouTube', url: '#', color: 'bg-red-500' },
    { name: 'SoundCloud', url: '#', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Explore My World
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{link.title}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Latest Releases
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <button className="bg-purple-500 hover:bg-purple-600 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-current" />
                    </button>
                    <div>
                      <h4 className="text-white font-semibold">{track.title}</h4>
                      <p className="text-gray-400 text-sm">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">{track.duration}</p>
                    <p className="text-gray-500 text-xs">{track.streams} streams</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/music"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 inline-block"
              >
                View Full Discography
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Listen Everywhere</h3>
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
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-black to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Sound?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of fans worldwide and be part of the electronic music revolution. 
            Get the latest tracks, exclusive content, and early access to new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/music"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Start Listening
            </Link>
            <Link
              to="/store"
              className="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              Shop Merch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
