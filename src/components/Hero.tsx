
import React from "react";

const backgroundImage = "/lovable-uploads/bb9d7d96-7f44-4246-b82b-dd94292d360b.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100dvh] min-h-[540px] flex items-center justify-center select-none overflow-hidden"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          opacity: 0.57,
          filter: "brightness(0.93) blur(0.5px)",
          transition: "opacity 0.5s",
        }}
      />

      {/* Bottom-half painted tone overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          // Only darken and add tone to the BOTTOM half, fade in from transparent to deep dark
          background: "linear-gradient(to top, rgba(24,24,30,0.75) 0%, rgba(24,24,30,0.61) 38%, rgba(24,24,30,0.0) 55%)",
        }}
      />

      {/* Top ethereal fade - soft light overlay, only top */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(180deg,rgba(234,230,240,0.43) 0%,rgba(24,24,30,0.07) 70%,rgba(0,0,0,0.03) 100%)",
          opacity: 0.43,
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center h-full py-16 text-center">
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
