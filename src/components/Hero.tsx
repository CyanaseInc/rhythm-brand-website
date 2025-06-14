
import React from "react";

// Use a royalty-free Unsplash image for the background
const backgroundImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100dvh] min-h-[540px] flex items-center justify-center select-none overflow-hidden"
      style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      {/* Background Image with overlay */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/65 z-10" />
      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full py-16 text-center">
        {/* Date */}
        <div
          className="text-[#F78386] text-xl md:text-2xl font-bold mb-3 tracking-widest uppercase"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)", letterSpacing: "0.13em" }}
        >
          2 Dec 2023
        </div>
        {/* Heading */}
        <h1
          className="text-white text-[2.5rem] sm:text-[3.2rem] md:text-[5rem] lg:text-[6rem] mb-3 leading-tight font-monoton"
          style={{
            textShadow: "0 1px 12px rgba(0,0,0,0.55)",
            lineHeight: 1.05,
          }}
        >
          FESTIVAL 2023
        </h1>
        {/* Venue */}
        <div
          className="text-white text-xl md:text-2xl font-extrabold mt-2 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] tracking-wide"
          style={{
            textShadow: "0 2px 18px rgba(0,0,0,0.85),0 1px rgba(0,0,0,0.6)",
          }}
        >
          Ragga Dee beach, Uganda
        </div>
      </div>
    </section>
  );
};

export default Hero;
