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
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-400 transition-colors"
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                  placeholder="Tell me more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
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
                  <Mail className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@dimitriscarecrow.com</p>
                    <p className="text-gray-400 text-sm">General inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Booking</h3>
                    <p className="text-gray-300">booking@dimitriscarecrow.com</p>
                    <p className="text-gray-400 text-sm">Performance bookings</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Business hours: 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-400 mt-1" />
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
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/30">
              <h3 className="text-lg font-bold text-white mb-2">Quick Response</h3>
              <p className="text-green-200 text-sm">
                I typically respond to messages within 24-48 hours. For urgent booking inquiries, 
                please call the phone number above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
