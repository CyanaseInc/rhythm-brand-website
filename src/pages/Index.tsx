import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FloatingCheckout from '../components/FloatingCheckout';
import CheckoutModal from '../components/CheckoutModal';
import { Music, BookOpen, Calendar, Mail, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cartItems] = useState(3); // Simulate cart items
  const [cartTotal] = useState(89.99); // Simulate cart total
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
    <div className="min-h-screen bg-[#111112] font-sans">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section - "Into the Field" */}
      <section className="py-20 px-4 bg-[#18181b] font-sans">
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
                className="group bg-[#18181b] rounded-2xl p-6 hover:bg-[#232323] transition-all duration-300 transform hover:scale-105 border border-[#232323]"
              >
                <div className="w-16 h-16 bg-[#171717] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-[#232323] font-sans">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4 font-sans uppercase tracking-widest">
            Songs from the Field
          </h2>
          <p className="text-center text-gray-400 mb-16 font-sans italic">
            "Melodies grown in moonlight, harvested at dawn"
          </p>
          
          <div className="bg-[#18181b] rounded-2xl p-8 border border-[#232323]">
            <div className="space-y-4">
              {featuredTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#171717] rounded-lg hover:bg-[#232323] transition-colors group">
                  <div className="flex items-center space-x-4">
                    <button className="bg-[#333333] hover:bg-[#444444] rounded-full p-2 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-current" />
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
                className="bg-[#333333] hover:bg-[#444444] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 inline-block font-sans"
              >
                Harvest More Music
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms - "Where to Find Us" */}
      <section className="py-16 px-4 bg-[#111112] font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans uppercase tracking-widest">Listen in the Sacred Spaces</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="bg-[#333333] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center space-x-2 font-sans"
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - "Join the Circle" */}
      <section className="py-20 px-4 bg-[#18181b] font-sans">
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
              className="bg-[#333333] hover:bg-[#444444] text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 font-sans"
            >
              Enter the Field
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 hover:bg-white/10 font-sans"
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
