
import React from "react";
import { Link } from "react-router-dom";

// Use your previously uploaded hero BG
const backgroundImage = "/lovable-uploads/bb9d7d96-7f44-4246-b82b-dd94292d360b.png";

// SVG abstract graphic for left vertical strip
const AbstractSVG = () => (
  <svg
    viewBox="0 0 120 900"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b78864" />
        <stop offset="50%" stopColor="#ee6f95" />
        <stop offset="100%" stopColor="#b32a4c" />
      </linearGradient>
    </defs>
    <path
      d="
        M0,0 
        Q40,120 25,300
        T 80,550
        Q120,700 0,900
        L120,900
        L120,0
        Z"
      fill="url(#waveGrad1)"
      opacity="0.9"
    />
    <circle cx="60" cy="150" r="28" fill="#fbb1b8" opacity="0.46"/>
    <ellipse cx="100" cy="730" rx="16" ry="48" fill="#9d2702" opacity="0.25"/>
    <ellipse cx="25" cy="455" rx="28" ry="70" fill="#fff2e3" opacity="0.15"/>
  </svg>
);

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[620px] flex items-stretch justify-center select-none overflow-hidden font-sans"
    >
      {/* BG Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          opacity: 0.82,
          filter: "brightness(0.85)",
          transition: "opacity 0.5s",
        }}
        draggable={false}
      />

      {/* Semi-transparent gradient overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(28,27,31,0.54) 0%,rgba(40,24,32,0.72) 50%,rgba(27,22,24,0.84) 100%)",
        }}
      />

      {/* Dynamically fade (lighter at top) effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(242,234,255,0.12) 0%,rgba(60,51,62,0) 55%,rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* Main Hero Flex Layout */}
      <div className="relative z-30 flex w-full h-full min-h-[620px]">
        {/* Left Art Strip */}
        <div className="hidden sm:flex flex-col items-center justify-between bg-transparent w-1/5 min-w-[80px] max-w-[130px] xl:max-w-[170px] h-full py-10">
          {/* Handwritten logo/text at top of strip */}
          <div className="w-full flex flex-col items-center mt-6">
            <span
              className="text-pink-400 text-2xl md:text-3xl font-semibold font-pacifico"
              style={{
                letterSpacing: "0.03em",
                textShadow: "0 4px 14px rgba(200,70,160,0.14)",
                transform: "rotate(-10deg)"
              }}
            >
              Etherfest
            </span>
          </div>
          {/* Abstract SVG occupies the full strip */}
          <div className="flex-1 w-full">
            <AbstractSVG />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col justify-between w-full sm:w-4/5 h-full relative">

          {/* Navigation Bar */}
          <nav className="flex items-center justify-between pt-8 pl-0 sm:pl-12 pr-5 lg:pr-12 w-full z-40 gap-3">
            <div className="flex items-center gap-6">
              <Link to="/" className="text-white text-sm lg:text-base font-semibold hover:text-pink-400 transition-colors">Home</Link>
              <Link to="/lineup" className="text-white text-sm lg:text-base font-semibold hover:text-pink-400 transition-colors">Line Up</Link>
              <Link to="/tickets" className="text-white text-sm lg:text-base font-semibold hover:text-pink-400 transition-colors">Buy Ticket</Link>
            </div>
            <div>
              <Link
                to="/tickets"
                className="bg-pink-500 hover:bg-pink-400 text-white px-5 py-2 rounded-full font-bold shadow-md text-sm uppercase tracking-widest transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                style={{ boxShadow: "0 2px 18px 0 rgba(223,83,140,0.13)" }}
              >
                Buy Tickets
              </Link>
            </div>
          </nav>

          {/* Main Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-center sm:items-start w-full px-8 sm:pl-28 pt-10 sm:pt-0 pb-16 sm:pb-0">
            {/* Headline */}
            <h1
              className="text-white text-[2.7rem] sm:text-[3.5rem] md:text-[5rem] xl:text-[6rem] font-black uppercase leading-[1.025] drop-shadow-xl tracking-tight outline-text mb-3"
              style={{
                WebkitTextStroke: "2px #ff8db1",
                textShadow:
                  "0 2px 28px rgba(0,0,0,0.3), 0 5px 77px rgba(255,65,146,0.13)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              DIMITRI & THE SCARECROW
            </h1>
            {/* Subtitle - quote */}
            <div
              className="mt-3 max-w-xl text-white/90 text-md sm:text-xl md:text-2xl font-semibold italic opacity-95"
              style={{
                textShadow: "0 1px 24px rgba(0,0,0,0.37), 0 3px 22px rgba(0,0,0,0.27)",
              }}
            >
              "IN THE SPACE BETWEEN EARTH AND SKY, WHERE WHISPERS BECOME SONGS AND SILENCE HOLDS THE DEEPEST TRUTHS..."
            </div>
            {/* Date and location line */}
            <div className="mt-7 text-gray-200 text-lg font-sans font-bold tracking-widest flex flex-row items-center gap-4">
              <span className="bg-slate-800/60 rounded-full px-4 py-1 text-base border border-pink-300/20">
                July 18–21, 2025
              </span>
              <span className="bg-slate-800/60 rounded-full px-4 py-1 text-base border border-pink-300/20">
                Wheat Fields, Dream Valley
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: overlay handwritten title at top */}
      <div className="absolute z-40 top-2 left-0 w-full flex sm:hidden justify-center">
        <span
          className="text-pink-400 text-[1.65rem] font-semibold font-pacifico"
          style={{
            letterSpacing: "0.04em",
            textShadow: "0 4px 14px rgba(200,70,160,0.17)",
            transform: "rotate(-7deg)",
          }}
        >
          Etherfest
        </span>
      </div>
      {/* Responsive: hide vertical strip and stack all content if <= sm */}
    </section>
  );
};

export default Hero;
