
import React from "react";

// Unsplash image with a face-painted figure for hero background
const backgroundImage =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100dvh] min-h-[540px] flex items-center justify-center select-none overflow-hidden"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Faint Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          opacity: 0.35,
          filter: "brightness(0.8) blur(0.5px)",
          mixBlendMode: "lighten",
          transition: "opacity 0.5s",
        }}
      />
      {/* Semi-transparent overlay for darkening */}
      <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />
      {/* Top ethereal fade */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(245,245,250,0.62) 0%,rgba(0,0,0,0) 60%)",
          opacity: 0.55,
        }}
      />
      {/* Main Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center h-full py-16 text-center">
        {/* Main Headings */}
        <h1
          className="text-white font-monoton text-[2.6rem] sm:text-[3.2rem] md:text-[5rem] lg:text-[6rem] mb-2 leading-none"
          style={{
            textShadow: "0 1px 18px rgba(0,0,0,0.60)",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
          }}
        >
          DIMITRI
          <br />
          <span className="block text-white font-monoton text-[1.5rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.7rem] leading-tight mt-1">
            &amp; THE SCARECROW
          </span>
        </h1>
        {/* Subtitle / Quote */}
        <div
          className="mt-5 md:mt-7 text-white text-md sm:text-lg md:text-2xl font-semibold italic max-w-2xl mx-auto opacity-80"
          style={{
            textShadow: "0 1px 10px rgba(0,0,0,0.43), 0 2px 24px rgba(0,0,0,0.7)",
            letterSpacing: "0.02em",
          }}
        >
          "IN THE SPACE BETWEEN EARTH AND SKY, WHERE WHISPERS BECOME SONGS AND SILENCE HOLDS THE DEEPEST TRUTHS..."
        </div>
      </div>
    </section>
  );
};

export default Hero;
