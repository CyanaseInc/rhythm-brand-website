import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-gray-400' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-gray-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section with Artist Image */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="absolute inset-0 pt-24">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1920&h=1080&fit=crop"
              alt="Dimitri & The Scarecrow"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center pt-32 md:pt-48">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="text-xl text-gray-300">Let's connect and create something amazing together</p>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Type of Inquiry
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-400 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Request</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press & Media</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Tell me more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Artist Contact Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=300&fit=crop"
                alt="Get in touch with Dimitri"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold text-lg">Ready to Connect</p>
                <p className="text-gray-300 text-sm">Let's make music magic happen</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@dimitriscarecrow.com</p>
                    <p className="text-gray-400 text-sm">General inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-500 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Booking</h3>
                    <p className="text-gray-300">booking@dimitriscarecrow.com</p>
                    <p className="text-gray-400 text-sm">Performance bookings</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Business hours: 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">Los Angeles, CA</p>
                    <p className="text-gray-400 text-sm">Available for worldwide tours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Follow the Journey</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 text-gray-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">{social.name}</p>
                      <p className="text-sm text-gray-400">@dimitriscarecrow</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="relative overflow-visible">
              <div className="bg-gradient-to-r from-green-400/30 via-blue-500/20 to-yellow-400/30 rounded-3xl p-8 shadow-xl border border-green-300/30 flex items-center gap-5 sm:gap-8 ring-2 ring-green-400/20 animate-float transition-all">
                {/* Animated glow/pulse icon */}
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-white/20 ring-2 ring-green-300/70 p-4 animate-pulse shadow-xl">
                    {/* Lucide Headphones icon represents fast/attentive support */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="text-green-500 drop-shadow-lg">
                      <path d="M3 18v-3a9 9 0 1 1 18 0v3" />
                      <path d="M21 19a2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5V16a2.5 2.5 0 0 1 2.5-2.5H21" />
                      <path d="M3 19a2 2 0 0 0 2 2h.5A2.5 2.5 0 0 0 8 18.5V16A2.5 2.5 0 0 0 5.5 13.5H3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 drop-shadow leading-tight animate-fade-in">
                      Quick Response
                    </h3>
                    <span className="bg-green-400/80 text-green-900 text-xs font-bold uppercase rounded-full px-3 py-1 ml-1 border border-green-800/30 hover:scale-105 transition-transform duration-200 animate-pulse shadow">
                      usually &lt;48h
                    </span>
                  </div>
                  <p className="text-gray-100 text-base sm:text-lg mt-1 mb-2 leading-relaxed animate-fade-in animation-delay-300">
                    We value your time. Messages are answered as soon as possible—typically within <b>24-48 hours</b>.
                  </p>
                  <p className="text-green-300 text-xs italic animate-fade-in animation-delay-500">
                    For urgent booking, call the phone number above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
