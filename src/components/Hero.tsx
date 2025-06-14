import React from "react";

const backgroundImage =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=1200&q=80"; // Rihanna, Unsplash (shades of black, famous, suitable for hero)

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100dvh] min-h-[540px] flex items-center justify-center select-none overflow-hidden"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Animated background image (unchanged) */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0 animate-hero-music-bg transition-opacity duration-1000"
        style={{
          opacity: 1,
          filter: "brightness(0.93)",
          transition: "opacity 0.5s",
        }}
      />
      {/* Dark overlay (unchanged) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(10,10,15,0.98) 10%, rgba(20,20,28,0.93) 28%, rgba(20,20,28,0.7) 52%, rgba(20,20,28,0.32) 78%, rgba(20,20,28,0.0) 92%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center h-full text-center pt-40 pb-10 md:pt-60 md:pb-12 lg:pt-72">
        {/* "DIMITRI" stands out prominently */}
        <span
          className="
            text-white font-monoton
            text-[3.3rem] sm:text-[4rem] md:text-[6.8rem] 
            lg:text-[8rem] mb-0 leading-none animate-hero-elegant-title
            select-text tracking-wide
            drop-shadow-[0_2px_32px_rgba(160,244,255,0.4)]
            "
          style={{
            textShadow: "0 2px 32px #b5fdffff, 0 1px 18px rgba(0,0,0,0.63)",
            letterSpacing: "0.04em",
            fontWeight: 900,
            lineHeight: 1.066
          }}
        >
          DIMITRI
        </span>

        {/* "& THE SCARECROW" subtle, slightly spaced, but still stylish */}
        <span
          className="
            block text-white font-monoton
            text-[1.4rem] sm:text-[1.85rem] md:text-[2.4rem] 
            lg:text-[2.89rem] mt-3 mb-1 tracking-[0.28em]
            animate-hero-elegant-subtitle select-text opacity-80
          "
          style={{
            textShadow: "0 1px 14px #0009, 0 0px 18px rgba(160,244,255,0.11)",
            fontWeight: 700,
            letterSpacing: "0.26em",
            lineHeight: 1.08,
          }}
        >
          &nbsp;&amp; THE SCARECROW
        </span>

        <span
          className="block text-white font-sans text-[1.3rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.7rem] font-bold opacity-90 mb-6 animate-hero-elegant-subtitle select-text"
          style={{
            textShadow:
              "0 1px 12px rgba(0,0,0,0.42), 0 2px 20px rgba(0,0,0,0.6)",
            letterSpacing: "0.02em",
          }}
        >
          Where Songs Rise from Shadows &amp; Dust
        </span>
        <a
          href="/music"
          className="inline-block mt-4 px-8 py-4 text-lg rounded-full bg-white/[0.08] hover:bg-white/[0.13] transition-all duration-200 font-semibold text-white shadow-lg backdrop-blur-lg animate-hero-elegant-button border border-white/15"
          style={{
            letterSpacing: "0.04em",
            boxShadow:
              "0 2px 32px 4px rgba(30, 36, 38, 0.13), 0 2px 8px 1px #0102",
          }}
        >
          Enter the Field
        </a>
      </div>
      {/* Decorative wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="80"
          className="block w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,60 
              Q360,110 720,60 
              T1440,60 
              V120 
              H0 
              Z"
            fill="rgba(0,0,0,0.97)"
          />
          <path
            d="
              M0,90 
              Q360,30 720,80 
              T1440,90 
              V120 
              H0 
              Z"
            fill="rgba(20,20,28,0.98)"
            opacity="0.65"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
