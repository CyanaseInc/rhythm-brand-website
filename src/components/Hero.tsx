
import React from "react";

// Placeholder profile image
const profileImg =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=400&q=80";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between pt-32 md:pt-48 pb-12 md:pb-20 px-4 md:px-0 relative">
        {/* Left: Heading & Quote */}
        <div className="flex-1 z-10 flex flex-col gap-8 md:gap-14">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-tight tracking-tight drop-shadow-lg text-left md:text-left mb-2 font-sans">
            carl
            <span className="inline-block text-red-600 ml-2">
              C
            </span>
            <span className="text-white">ox</span>
          </h1>
          {/* Quote */}
          <blockquote className="text-white font-bold uppercase text-lg sm:text-2xl md:text-3xl leading-snug tracking-wide max-w-2xl font-sans">
            THE RAVE WAS BUILT ON
            <span className="mx-2 text-red-600 drop-shadow font-extrabold">
              ENERGY
            </span>
            AND THE
            <span className="mx-2 text-red-600 drop-shadow font-extrabold">
              EXCITEMENT
            </span>
            OF IT ALL AND THIS DESIRE TO GET LOST.
            <br />
            IT'S LIKE A NEW ERA FOR ME NOW...
          </blockquote>
        </div>
        {/* Right: Grayscale Profile Image (overlapping left on md+) */}
        <div className="relative mt-10 md:mt-0 md:-mr-10 lg:-mr-20">
          <img
            src={profileImg}
            alt="Carl Cox profile"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full grayscale shadow-2xl border-4 border-white border-opacity-20 hover:scale-105 transition-transform duration-300"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
      {/* Optional: Black overlay for extra contrast */}
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
