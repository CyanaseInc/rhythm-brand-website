
import React from "react";

const defaultBg =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=1200&q=80";

interface HeroProps {
  overlayImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ overlayImageUrl }) => {
  return (
    <section
      className="relative w-full h-[100dvh] min-h-[540px] flex items-center justify-center select-none overflow-hidden"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Main background image */}
      <img
        src={defaultBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0 animate-hero-music-bg transition-opacity duration-1000"
        style={{
          opacity: overlayImageUrl ? 0.39 : 1,
          filter: "brightness(0.93)",
          transition: "opacity 0.5s",
        }}
      />
      {/* Overlay image (user-uploaded) */}
      {overlayImageUrl && (
        <img
          src={overlayImageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-10 animate-hero-music-bg transition-opacity duration-1000"
          style={{
            opacity: 1,
            filter: "brightness(0.92) grayscale(60%)",
            mixBlendMode: "luminosity",
            transition: "opacity 0.5s",
          }}
        />
      )}
      {/* Bottom-up darker overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(10,10,15,0.98) 10%, rgba(20,20,28,0.93) 28%, rgba(20,20,28,0.7) 52%, rgba(20,20,28,0.32) 78%, rgba(20,20,28,0.0) 92%, rgba(0,0,0,0.0) 100%)",
        }}
      />
      {/* Main Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center h-full text-center pt-40 pb-10 md:pt-60 md:pb-12 lg:pt-72">
        <h1
          className="text-white font-monoton text-[2.6rem] sm:text-[3.2rem] md:text-[5rem] lg:text-[6rem] mb-2 leading-none animate-hero-music-title select-text"
          style={{
            textShadow: "0 1px 18px rgba(0,0,0,0.60)",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
          }}
        >
          DIMITRI
        </h1>
        <div
          className="my-0 animate-fade-in"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: 900,
            fontSize: "3rem",
            color: "#fff",
            textShadow: "0 1px 14px #00ffc3, 0 0px 6px #000a",
            lineHeight: 1,
            letterSpacing: "0.03em",
          }}
        >
          &amp;
        </div>
        <span className="block text-white font-monoton text-[1.5rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.7rem] leading-tight mt-1 animate-hero-music-subtitle select-text">
          THE SCARECROW
        </span>
        <div
          className="mt-5 md:mt-7 text-white text-md sm:text-lg md:text-2xl font-semibold italic max-w-2xl mx-auto opacity-80 animate-hero-music-quote select-text"
          style={{
            textShadow:
              "0 1px 10px rgba(0,0,0,0.43), 0 2px 24px rgba(0,0,0,0.7)",
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
