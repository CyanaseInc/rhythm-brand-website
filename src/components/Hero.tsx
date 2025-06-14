
import React from "react";

// Simple fade/slide keyframes (inline for portability, could move to CSS for reuse)
const ANIMATION_STYLE = `
@keyframes heroFadeUp {
  0% { opacity: 0; transform: translateY(40px);}
  100% { opacity: 1; transform: translateY(0);}
}
.hero-fade-in {
  opacity: 0;
  animation: heroFadeUp 0.85s cubic-bezier(0.61,0.01,0.38,1) forwards;
}
.hero-fade-in-2 {
  opacity: 0;
  animation: heroFadeUp 0.85s 0.17s cubic-bezier(0.61,0.01,0.38,1) forwards;
}
.hero-fade-in-3 {
  opacity: 0;
  animation: heroFadeUp 0.7s 0.32s cubic-bezier(0.61,0.01,0.38,1) forwards;
}
`;

const Hero = () => {
  return (
    <section className="w-full h-[90dvh] min-h-[470px] flex items-center justify-center bg-black font-sans relative overflow-hidden">
      <style>{ANIMATION_STYLE}</style>
      <div className="relative w-full max-w-3xl px-7 mx-auto flex flex-col items-center justify-center">
        <h1
          className="text-white text-center text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5 hero-fade-in"
          style={{
            textShadow:
              "0 1px 18px #30281255, 0 0px 2px #eeeb, 0 3px 26px #fff4",
            letterSpacing: "-0.02em",
          }}
        >
          DIMITRI <span className="text-yellow-400">&amp;</span> THE SCARECROW
        </h1>
        <div
          className="text-lg md:text-2xl text-zinc-200 font-medium text-center mb-9 max-w-2xl hero-fade-in-2"
          style={{
            textShadow: "0 0px 4px #fff7, 0 1px 16px #3333",
            lineHeight: 1.35,
          }}
        >
          Where stories take root in rhythm, and melody whispers like wheat in the breeze.
        </div>
        <a
          href="#explore"
          className="hero-fade-in-3 inline-block px-10 py-4 bg-yellow-300 hover:bg-yellow-400 text-black text-lg font-bold rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30"
          style={{letterSpacing: "0.02em"}}
        >
          Enter the Field
        </a>
      </div>
    </section>
  );
};

export default Hero;
