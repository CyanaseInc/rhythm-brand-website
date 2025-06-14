
import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder background - replace with your event/festival image
const bgImage = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1500&q=80";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${bgImage}')`
        }}
      />
      {/* Black overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"/>

      {/* Header: logo left, nav center, button right */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <span className="font-bold text-white text-3xl md:text-4xl font-serif italic whitespace-nowrap drop-shadow-lg">
            Once Upon <br className="block sm:hidden" />
            <span className="ml-1">A Beach</span>
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center space-x-10">
          <Link to="/" className="text-white font-extrabold text-lg tracking-wider hover:text-pink-200 transition">HOME</Link>
          <Link to="/lineup" className="text-white font-extrabold text-lg tracking-wider hover:text-pink-200 transition">LINE UP</Link>
          <Link to="/tickets" className="text-white font-extrabold text-lg tracking-wider hover:text-pink-200 transition">BUY TICKET</Link>
        </nav>
        {/* Buy Ticket Button */}
        <div className="flex-1 flex justify-end">
          <Link to="/tickets" className="bg-pink-300 text-white font-bold py-3 px-8 rounded transition hover:bg-pink-400 text-lg shadow-lg">
            Buy Tickets
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center min-h-screen">
        {/* Date */}
        <div className="mb-6">
          <span className="text-pink-300 font-bold text-3xl sm:text-4xl md:text-4xl text-center block drop-shadow-lg">
            2 Dec 2023
          </span>
        </div>
        {/* FESTIVAL 2023 - lined text */}
        <h1 className="text-white text-6xl sm:text-7xl md:text-8xl font-black text-center mb-4 overflow-visible drop-shadow-2xl tracking-wider"
            style={{ fontFamily: '"Oswald", "Montserrat", Arial, sans-serif', letterSpacing: '0.05em', textShadow: '0 0 24px #000, 0 1px 4px #000' }}>
          <span style={{
            WebkitTextStroke: "2.5px white",
            color: "transparent",
            textShadow: "none"
          }}>
            FESTIVAL 2023
          </span>
        </h1>
        {/* Venue */}
        <div className="mt-2">
          <span className="text-white text-3xl sm:text-4xl font-extrabold text-center block drop-shadow-lg">
            Ragga Dee beach, Uganda
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
