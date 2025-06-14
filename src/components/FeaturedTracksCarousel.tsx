
import React from "react";
import { Play, Pause, AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder track data type
type Track = {
  title: string;
  album: string;
  duration: string;
  img: string;
  isPlaying?: boolean;
};

const tracks: Track[] = [
  {
    title: "Harvest Moon Sessions",
    album: "Songs from the Field (2024)",
    duration: "4:32",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=500&q=90",
  },
  {
    title: "Scarecrow's Lament",
    album: "Songs from the Field (2024)",
    duration: "3:47",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=500&q=90",
  },
  {
    title: "Morning Dew",
    album: "Songs from the Field (2024)",
    duration: "5:12",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=500&q=90",
  },
  {
    title: "Sunrise Chorus",
    album: "Songs from the Field (2024)",
    duration: "3:58",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=500&q=90",
  },
];

const FeaturedTracksCarousel: React.FC = () => {
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null);

  return (
    <div className="w-full font-sans">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider uppercase drop-shadow-lg">
          Songs from the Field
        </h2>
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="uppercase font-bold tracking-wider"
        >
          <a href="/music">See All</a>
        </Button>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-x-auto py-2">
        <div className="flex space-x-8 min-w-[320px]">
          {tracks.map((track, i) => {
            const isPlaying = playingIndex === i;
            return (
              <div
                key={i}
                className="relative group flex-shrink-0 w-[320px] md:w-[360px] h-[420px] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Album image as background with glow and overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${track.img})`,
                    filter: isPlaying
                      ? "brightness(1.05) blur(2px)"
                      : "brightness(0.68)",
                    transition: "filter 0.4s cubic-bezier(.77,0,.18,1.06)",
                  }}
                />
                {/* Overlay & glow */}
                <div
                  className={`absolute inset-0 z-10 transition-all duration-300 ${
                    isPlaying
                      ? "bg-black/30"
                      : "bg-gradient-to-b from-black/80 to-black/60"
                  }`}
                />
                {/* Animated pulse border on play */}
                <div
                  className={`absolute inset-0 rounded-3xl pointer-events-none z-20 ${
                    isPlaying
                      ? "ring-2 ring-green-400/80 animate-pulse shadow-[0_0_36px_0_rgba(34,197,94,0.5)]"
                      : ""
                  } transition-all duration-500`}
                />
                {/* Play/Pause or Waveform button */}
                <button
                  className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 p-5 shadow-lg hover:bg-black/80 focus:outline-none transition-all duration-200 border-2 border-white/20 ${
                    isPlaying
                      ? "scale-110 animate-fade-in border-green-500"
                      : "group-hover:scale-105"
                  }`}
                  onClick={() =>
                    setPlayingIndex((prev) => (prev === i ? null : i))
                  }
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <AudioWaveform
                      size={40}
                      className="text-green-400 animate-[pulse_1.2s_infinite] drop-shadow-md"
                      strokeWidth={2.4}
                    />
                  ) : (
                    <Play size={36} className="text-white" />
                  )}
                </button>
                {/* Track info slide up on hover or always visible on mobile */}
                <div
                  className={`
                    absolute left-0 right-0 bottom-0 z-30
                    p-6 pt-10
                    text-white
                    transition-all duration-400
                    bg-gradient-to-t from-black/85 via-black/40 to-transparent
                    ${isPlaying ? 'translate-y-0' : 'group-hover:translate-y-0 translate-y-16'}
                    md:group-hover:translate-y-0
                    rounded-b-3xl
                  `}
                  style={{
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <h3 className="font-extrabold text-xl md:text-2xl tracking-wide truncate">
                    {track.title}
                  </h3>
                  <div className="text-gray-300 text-sm mb-2 truncate">
                    {track.album}
                  </div>
                  <div className="flex items-center justify-between mt-3 pb-1">
                    <span className="bg-black/30 px-3 py-1 rounded-full text-xs font-mono border border-white/10">
                      {track.duration}
                    </span>
                    {/* Bonus: playback progress bar for fun */}
                    {isPlaying && (
                      <span className="ml-2 flex-1 h-2 bg-green-200/10 rounded-full overflow-hidden relative max-w-[100px]">
                        <span className="absolute left-0 top-0 h-full bg-green-400/70 rounded-full animate-[pulse_2s_infinite] w-4/6" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-10 mb-2">
        <Button
          asChild
          variant="default"
          size="lg"
          className="uppercase font-bold rounded-full tracking-widest px-10 animate-fade-in"
        >
          <a href="/music">Harvest More Music</a>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTracksCarousel;

