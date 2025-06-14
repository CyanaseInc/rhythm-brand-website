
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FloatingCheckout from '../components/FloatingCheckout';
import CheckoutModal from '../components/CheckoutModal';
import { Music, BookOpen, Calendar, Mail, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cartItems] = useState(3);
  const [cartTotal] = useState(89.99);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { toast } = useToast();

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    toast({
      title: "Order Completed! 🌾",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      duration: 5000,
    });
  };

  const quickLinks = [
    {
      title: 'The Crop',
      description: 'Albums shown as hand-drawn seed packets',
      icon: Music,
      link: '/music'
    },
    {
      title: 'Field Notes',
      description: 'Art meets lifestyle - nature retreats and creative rituals',
      icon: BookOpen,
      link: '/biography'
    },
    {
      title: 'Footprints on Dust',
      description: 'Rustic calendar pinned on a barn wall',
      icon: Calendar,
      link: '/events'
    },
    {
      title: 'Whispers from the Wheat',
      description: 'Letters from the Scarecrow - notes, dreams, and secret sound drops',
      icon: Mail,
      link: '/contact'
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
    { name: 'Spotify', url: '#' },
    { name: 'Bandcamp', url: '#' },
    { name: 'SoundCloud', url: '#' },
    { name: 'Cassette Tapes', url: '#' }
  ];

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section - "Into the Field" */}
      <section className="py-20 px-4 bg-gradient-to-r from-black via-gray-900 to-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-sans uppercase tracking-widest">
            EXPLORE OUR WORLD
          </h2>
          <p className="text-center text-gray-400 mb-16 font-sans italic">
            "Each path leads to a different field of dreams"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="group bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans uppercase">{link.title}</h3>
                <p className="text-gray-400 text-sm font-sans">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music Section - "Songs from the Field" */}
      <section className="py-20 px-4 bg-gray-900 font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-sans uppercase tracking-widest">
            Songs from the Field
          </h2>
          <p className="text-center text-gray-400 mb-16 font-sans italic">
            "Melodies grown in moonlight, harvested at dawn"
          </p>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white" />
                    </button>
                    <div>
                      <h4 className="text-white font-semibold font-sans">{track.title}</h4>
                      <p className="text-gray-400 text-sm font-sans">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-sm font-sans">{track.duration}</p>
                    <p className="text-gray-400 text-xs font-sans italic">{track.streams}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/music"
                className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 inline-block font-sans"
              >
                Harvest More Music
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms - "Where to Find Us" */}
      <section className="py-16 px-4 bg-black font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans uppercase tracking-widest">Listen in the Sacred Spaces</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-transform duration-200 flex items-center space-x-2 font-sans"
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - "Join the Circle" */}
      <section className="py-20 px-4 bg-gray-900 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans uppercase tracking-widest">
            Join the Circle
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-sans">
            Step into our mystical world where folklore meets sound. 
            Receive whispers from the wheat, stories from the road, and music that grows from the earth itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/music"
              className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 font-sans"
            >
              Enter the Field
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-700 hover:border-gray-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 hover:bg-gray-800 font-sans"
            >
              Send a Raven
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Checkout and Modal */}
      <FloatingCheckout 
        totalItems={cartItems}
        totalPrice={cartTotal}
        onCheckout={handleCheckout}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalItems={cartItems}
        totalPrice={cartTotal}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
};

export default Index;

