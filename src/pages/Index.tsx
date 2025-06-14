
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CheckoutModal from '../components/CheckoutModal';
import { Music, BookOpen, Calendar, Mail, Play, ExternalLink, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import FeaturedTracksCarousel from '../components/FeaturedTracksCarousel';

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

  const handlePlatformClick = (platform: { name: string; url: string }) => {
    console.log(`Platform clicked:`, platform.name, '-', platform.url);
  };

  const quickLinks = [
    {
      title: 'The Crop',
      description: 'Albums shown as hand-drawn seed packets',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=700&q=80',
      link: '/music'
    },
    {
      title: 'Field Notes',
      description: 'Art meets lifestyle - nature retreats and creative rituals',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=700&q=80',
      link: '/biography'
    },
    {
      title: 'Footprints on Dust',
      description: 'Rustic calendar pinned on a barn wall',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=700&q=80',
      link: '/events'
    },
    {
      title: 'Whispers from the Wheat',
      description: 'Letters from the Scarecrow - notes, dreams, and secret sound drops',
      image: 'https://images.unsplash.com/photo-1526178613658-3c702b2bc418?auto=format&fit=facearea&w=700&q=80',
      link: '/contact'
    }
  ];

  // Platforms with logos and icon-based YouTube logo included
  const platforms = [
    {
      name: 'Spotify',
      url: '#',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg'
    },
    {
      name: 'Bandcamp',
      url: '#',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Bandcamp-logotype-color.svg'
    },
    {
      name: 'SoundCloud',
      url: '#',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/SoundCloud_logo.svg'
    },
    {
      name: 'Cassette Tapes',
      url: '#',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cassette_tape_icon.svg'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube,
      isIcon: true
    },
    {
      name: 'Your Tie',
      url: '#',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=facearea&w=80&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section - Immersive cards */}
      <section className="py-20 px-4 bg-black font-sans">
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
                className="group rounded-2xl shadow-lg overflow-hidden h-72 relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/20"
                tabIndex={0}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${link.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2 font-sans uppercase group-hover:text-gray-100 transition-colors duration-200">
                    {link.title}
                  </h3>
                  <p className="text-gray-300 font-sans text-base group-hover:text-white transition-colors duration-200">
                    {link.description}
                  </p>
                  <span className="mt-6 inline-block px-4 py-2 bg-white/10 text-white rounded-full text-xs tracking-wide uppercase font-semibold group-hover:bg-white/20 transition-colors">
                    Explore
                  </span>
                </div>

                {/* Hover effect */}
                <span className="absolute inset-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music Section - NEW Modern Carousel */}
      <section className="py-20 px-4 bg-gray-900 font-sans">
        <div className="max-w-6xl mx-auto">
          <FeaturedTracksCarousel />
        </div>
      </section>

      {/* Platforms - "Listen in the Sacred Spaces" */}
      <section className="py-16 px-4 bg-black font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8 font-sans uppercase tracking-widest">Listen in the Sacred Spaces</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-transform duration-200 flex items-center space-x-3 font-sans"
                onClick={() => {
                  // @ts-ignore (platform.icon is for YouTube only)
                  console.log(`Platform clicked:`, platform.name, '-', platform.url);
                }}
              >
                {/* Platform Logo or Lucide Icon */}
                {platform.isIcon && platform.icon ? (
                  <platform.icon
                    className="w-7 h-7 text-red-500 bg-white rounded-full shadow-md ring-2 ring-white/20 p-1"
                    aria-label="YouTube"
                  />
                ) : (
                  <img 
                    src={platform.image}
                    alt={`${platform.name} logo`}
                    className="w-7 h-7 object-cover rounded-full shadow-md ring-2 ring-white/20"
                    style={{ background: "#1a1a1a"}}
                  />
                )}
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

      {/* Checkout Modal only (NO floating checkout) */}
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
