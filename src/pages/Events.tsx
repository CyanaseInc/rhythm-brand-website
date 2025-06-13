import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, MapPin, Clock, ExternalLink, Ticket } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Electronic Paradise Festival",
      date: "2024-07-15",
      time: "20:00",
      venue: "Central Park Arena",
      city: "New York, NY",
      country: "USA",
      ticketLink: "#",
      status: "On Sale"
    },
    {
      id: 2,
      title: "Digital Dreams Tour",
      date: "2024-07-28",
      time: "21:30",
      venue: "The Electric Warehouse",
      city: "Los Angeles, CA",
      country: "USA",
      ticketLink: "#",
      status: "On Sale"
    },
    {
      id: 3,
      title: "Bass & Beyond",
      date: "2024-08-10",
      time: "19:00",
      venue: "Underground Club",
      city: "London",
      country: "UK",
      ticketLink: "#",
      status: "Limited"
    },
    {
      id: 4,
      title: "Synth City Festival",
      date: "2024-08-25",
      time: "22:00",
      venue: "Techno Arena",
      city: "Berlin",
      country: "Germany",
      ticketLink: "#",
      status: "Coming Soon"
    },
    {
      id: 5,
      title: "Electronic Odyssey",
      date: "2024-09-12",
      time: "20:30",
      venue: "Marina Bay Center",
      city: "Singapore",
      country: "Singapore",
      ticketLink: "#",
      status: "On Sale"
    }
  ];

  const pastEvents = [
    {
      title: "Miami Electronic Music Week",
      date: "2024-03-20",
      venue: "South Beach Arena",
      city: "Miami, FL"
    },
    {
      title: "Coachella Valley Music Festival",
      date: "2024-04-15",
      venue: "Empire Polo Club",
      city: "Indio, CA"
    },
    {
      title: "Tomorrowland",
      date: "2024-05-25",
      venue: "De Schorre",
      city: "Boom, Belgium"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Sale': return 'bg-green-500';
      case 'Limited': return 'bg-yellow-500';
      case 'Coming Soon': return 'bg-blue-500';
      case 'Sold Out': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section with Artist Image */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 pt-24">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0d952?w=1920&h=1080&fit=crop&crop=face"
              alt="Dimitri & The Scarecrow Live Performance"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center pt-32 md:pt-48">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Events
            </h1>
            <p className="text-xl text-gray-300">Join me on the electronic music journey</p>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Upcoming Shows</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Date & Time */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-white font-semibold">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{event.time}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{event.venue}</span>
                    </div>
                    <p className="text-gray-400">{event.city}, {event.country}</p>
                  </div>

                  {/* Status & Tickets */}
                  <div className="text-center lg:text-right">
                    <div className={`inline-block ${getStatusColor(event.status)} text-white px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                      {event.status}
                    </div>
                    <div>
                      {event.status !== 'Coming Soon' && (
                        <a 
                          href={event.ticketLink}
                          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
                        >
                          <Ticket className="w-4 h-4" />
                          <span>Get Tickets</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Performance Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Live in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
                alt="Festival Performance"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Mountain Festival 2024</p>
                <p className="text-gray-300 text-sm">Epic performance under the stars</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Sunset Set"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Sunset Sessions</p>
                <p className="text-gray-300 text-sm">Golden hour magic</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop"
                alt="River Stage"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Riverside Vibes</p>
                <p className="text-gray-300 text-sm">Nature meets beats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Never Miss a Show</h2>
            <p className="text-gray-300 mb-6">Subscribe to get notified about new tour dates and exclusive pre-sale access</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-full font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-1">{formatDate(event.date)}</p>
                <p className="text-gray-400 text-sm">{event.venue}</p>
                <p className="text-gray-500 text-sm">{event.city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Booking Inquiries</h2>
            <p className="text-gray-300 mb-6">
              Interested in booking me for your event? Let's create an unforgettable electronic music experience together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-full font-semibold transition-colors"
              >
                Contact for Booking
              </a>
              <a 
                href="mailto:booking@artistname.com" 
                className="border-2 border-white/30 hover:border-white text-white py-3 px-8 rounded-full font-semibold transition-all duration-200 hover:bg-white/10"
              >
                booking@artistname.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
