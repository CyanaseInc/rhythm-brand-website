
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

// Creative background: gradient, hand-drawn frame, animated floating elements
const AnimatedFireflies = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: "blur(1px)" }}>
    <circle cx="8%" cy="22%" r="2.5" fill="#fffbe6" opacity="0.45">
      <animate attributeName="cy" from="24%" to="94%" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="55%" cy="67%" r="1.7" fill="#ffeedd" opacity="0.35">
      <animate attributeName="cx" from="54%" to="60%" dur="11s" repeatCount="indefinite" />
      <animate attributeName="cy" from="65%" to="68%" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="85%" cy="44%" r="2" fill="#fffbe6" opacity="0.38">
      <animate attributeName="cy" from="44%" to="12%" dur="12s" repeatCount="indefinite" />
    </circle>
    <circle cx="33%" cy="77%" r="1.3" fill="#fffae0" opacity="0.32">
      <animate attributeName="cy" from="77%" to="81%" dur="8.7s" repeatCount="indefinite" />
    </circle>
    {/* More dots for "glimmer" */}
    <circle cx="61%" cy="19%" r="1.1" fill="#fffbe6" opacity="0.22">
      <animate attributeName="cy" from="19%" to="26%" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="23%" cy="53%" r="2.2" fill="#fffde9" opacity="0.26">
      <animate attributeName="cy" from="53%" to="45%" dur="12s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const Hero = () => {
  // Animate in individual letters with slight stagger
  const band = "DIMITRI";
  const scarecrow = "THE SCARECROW";
  return (
    <section className="relative w-full h-[88dvh] min-h-[530px] flex items-center justify-center bg-black overflow-hidden font-sans select-none">
      {/* Background gradient and artistic overlays */}
      <div className="absolute inset-0 z-0">
        {/* Dramatic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#27230C] to-[#191735] opacity-95" />
        {/* Vignette for focus */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 58% 66%,rgba(150,160,75,0.11) 0%,rgba(10,10,15,0.78) 85%,rgba(0,0,0,1) 100%)"
          }}
        />
        {/* Artistic sketch frame - top & bottom */}
        <svg className="absolute left-0 right-0 top-0 w-full h-10 z-20 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path
            d="M0,6 Q20,1 35,5 Q50,10 70,3 Q85,2 100,7"
            fill="none"
            stroke="#dbc082"
            strokeWidth="0.6"
            opacity="0.30"
            strokeLinecap="round"
          />
        </svg>
        <svg className="absolute left-0 right-0 bottom-0 w-full h-14 z-20 pointer-events-none" viewBox="0 0 100 14" preserveAspectRatio="none">
          <path
            d="M0,9 Q11,15 32,12 Q52,6 77,13 Q91,15 100,10"
            fill="none"
            stroke="#dbc082"
            strokeWidth="0.7"
            opacity="0.27"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Animated floating fireflies */}
      <AnimatedFireflies />

      {/* Main creative content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center text-center pt-28 sm:pt-40 pb-12 lg:pt-56">
        {/* Logo/hero icon */}
        <div className="mb-8 flex flex-col items-center gap-1">
          <span className="text-[2.7rem] md:text-6xl font-monoton tracking-normal text-white font-bold drop-shadow-lg leading-none glowing-title">
            {/* Band name, animated letters */}
            {Array.from(band).map((l, i) =>
              <span
                key={i}
                style={{
                  animation: "fadeIn 0.5s cubic-bezier(0.72,0.12,0.16,1.2) both",
                  animationDelay: `${i * 0.08 + 0.16}s`
                }}
                className="inline-block"
              >
                {l}
              </span>
            )}
            <span className="mx-3 font-monoton text-yellow-300 animate-pulse" style={{ filter: 'drop-shadow(0 0 7px #fff3)' }}>&amp;</span>
            {Array.from(scarecrow).map((l, i) =>
              <span
                key={i}
                style={{
                  animation: "fadeIn 0.52s cubic-bezier(0.72,0.12,0.16,1.2) both",
                  animationDelay: `${i * 0.06 + 0.6}s`
                }}
                className="inline-block"
              >
                {l === " " ? "\u00A0" : l}
              </span>
            )}
          </span>
          {/* Sparkle accent */}
          <span className="block mt-1">
            <Sparkles className="mx-auto text-yellow-100/80" size={30} />
          </span>
        </div>
        {/* Tagline */}
        <div className="mt-2 md:mt-3 text-sm sm:text-lg md:text-2xl text-[#fffb] font-semibold italic max-w-2xl mx-auto animate-fade-in opacity-90 font-sans"
          style={{
            textShadow: "0 2px 10px #2227, 0 0 16px #997e1b33"
          }}>
          “Where ancient stories&nbsp;grow roots in rhythm and the wheat whispers&nbsp;in melody...”
        </div>
        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#explore"
            className="relative font-sans bg-[#dbb975] border-2 border-[#dbb975] text-black py-4 px-8 rounded-full text-lg font-bold shadow hover:shadow-lg transition-all duration-150 hover:bg-yellow-200/90 hover:text-black focus:outline-none focus:ring-4 focus:ring-yellow-300/30"
            style={{
              letterSpacing: "0.03em",
              textShadow: "0 0 2px #fff7"
            }}
          >
            Enter the Field
            <ArrowRight className="inline mb-1 ml-2 w-6 h-6 text-yellow-900 animate-slide-in-right" />
          </a>
        </div>
      </div>
      <style>{`
        .glowing-title {
          text-shadow:
            0 0 14px #ede88fce,
            0 4px 26px #b7a13c77,
            0 0px 19px #000;
          filter: drop-shadow(0 1px 5px #cbbb7880)
        }
      `}</style>
    </section>
  );
};

export default Hero;

