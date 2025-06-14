
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Search,
} from "lucide-react";

// Placeholder grayscale profile image (can easily be swapped!)
const PROFILE_IMG =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=800&q=80&grayscale";

// Placeholder simple white circular logo with 'carlCox'
const Logo = () => (
  <div className="mx-auto mt-3 mb-4 flex flex-col items-center pointer-events-none">
    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg border-4 border-white relative z-10">
      <span
        className="text-black font-extrabold text-4xl"
        style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
      >
        carl
        <span className="text-red-600 text-4xl font-extrabold relative" style={{ fontFamily: "Montserrat" }}>
          C
        </span>
        ox
      </span>
      <div className="absolute right-2 bottom-2 w-4 h-4 rounded-full bg-red-600 animate-pulse" />
    </div>
    <span className="text-xs uppercase text-white opacity-55 pt-2 tracking-widest" style={{ letterSpacing: 2 }}>
      Worldwide
    </span>
  </div>
);

const HERO_NAV = [
  "HOME",
  "ONLINE STORE",
  "EVENTS",
  "ELECTRONIC GENERATIONS",
  "MOTOR SPORT",
  "DISCOGRAPHY",
  "BIOGRAPHY",
  "OH YES, OH YES, OH YES CARL COX'S AUTOBIOGRAPHY",
  "CABIN FEVER",
  "CONTACT",
];

const SOCIALS = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Spotify", icon: Youtube, url: "#" }, // Spotify not present, use Youtube as placeholder
  { name: "YouTube", icon: Youtube, url: "#" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[98vh] bg-black flex flex-row items-stretch overflow-hidden">
      {/* Social icons - top left */}
      <div className="absolute top-5 left-7 z-20 flex gap-4">
        {SOCIALS.map((s, i) => (
          <a
            href={s.url}
            key={s.name + i}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="inline-flex items-center justify-center hover:scale-110 transition-transform duration-150"
          >
            <s.icon className="w-5 h-5 text-white opacity-80 hover:text-red-600 transition-colors" />
          </a>
        ))}
      </div>

      {/* Search icon - top right */}
      <div className="absolute top-5 right-8 z-20">
        <button aria-label="Search" className="p-2 hover:scale-110 transition-transform duration-150">
          <Search className="w-6 h-6 text-white opacity-90 hover:text-red-600 transition duration-200" />
        </button>
      </div>

      {/* Left (text + nav + logo + animated waves) */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 sm:px-10 py-6 sm:py-14">
        <Logo />
        {/* Horizontal Nav Menu */}
        <nav className="w-full mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
          {HERO_NAV.map((item, idx) => (
            <a
              key={item + idx}
              href="#"
              className="text-xs sm:text-sm uppercase tracking-widest font-bold px-2 py-0.5 text-white/90 hover:text-red-600 transition-colors"
              style={{ letterSpacing: 2, fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Heading */}
        <h1
          className="mb-5 text-center text-[2.6rem] sm:text-[3.8rem] md:text-[4.4rem] font-black uppercase text-white tracking-tight font-sans select-none drop-shadow"
          style={{ letterSpacing: 3 }}
        >
          carl
          <span className="text-red-600 drop-shadow-2xl">C</span>
          ox
        </h1>

        {/* Creative Quote */}
        <blockquote className="mx-auto text-center max-w-2xl text-white font-bold uppercase text-lg sm:text-2xl tracking-wider leading-tight drop-shadow-lg mb-10 select-none font-sans">
          THE RAVE WAS BUILT ON{" "}
          <span className="text-red-600">ENERGY</span> AND THE{" "}
          <span className="text-red-600">EXCITEMENT</span> OF IT ALL<br className="hidden md:block"/>
          AND THIS DESIRE TO GET LOST. IT'S LIKE A NEW ERA FOR ME NOW...
        </blockquote>

        {/* Animated Music Waves */}
        <div className="my-4 flex flex-row justify-center items-center space-x-1 sm:space-x-2">
          {[0, .15, .3, .45, .6].map((delay, idx) => (
            <span
              key={idx}
              className="block w-6 sm:w-8 h-10 sm:h-14 bg-white rounded-full opacity-80"
              style={{
                animation: `heroWave 1.15s ${delay}s infinite ease-in-out`,
              }}
            />
          ))}
          <style>
            {`
              @keyframes heroWave {
                0%, 100% { transform: scaleY(1); opacity: 0.85; }
                50% { transform: scaleY(1.7); opacity: 1; }
              }
            `}
          </style>
        </div>
      </div>

      {/* Right (Profile image, slightly overlaps) */}
      <div className="flex items-center justify-center w-[350px] md:w-[430px] min-h-[480px] relative z-10 -mr-8 md:-mr-12">
        <div className="absolute left-[-30px] top-14 w-full h-[430px] md:w-[450px] md:h-[630px] rounded-3xl bg-gradient-to-br from-white/10 via-gray-500/20 to-black/5 blur-2xl z-0" />
        <img
          src={PROFILE_IMG}
          alt="Profile placeholder"
          className="relative rounded-2xl object-cover object-top grayscale w-[280px] md:w-[375px] h-[355px] md:h-[500px] border-4 border-white shadow-2xl z-10"
          style={{ marginLeft: "-40px", background: "#222" }}
        />
      </div>
    </section>
  );
};

export default Hero;
