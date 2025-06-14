
import React from "react";
import { Play, Pause } from "lucide-react";
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
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
  },
  {
    title: "Scarecrow's Lament",
    album: "Songs from the Field (2024)",
    duration: "3:47",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80",
  },
  {
    title: "Morning Dew",
    album: "Songs from the Field (2024)",
    duration: "5:12",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80",
  },
  {
    title: "Sunrise Chorus",
    album: "Songs from the Field (2024)",
    duration: "3:58",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&q=80",
  },
];

const FeaturedTracksCarousel: React.FC = () => {
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null);

  return (
    <div className="w-full font-sans">
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-3xl font-bold text-white tracking-wide uppercase">
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
      <div className="overflow-x-auto py-2">
        <div className="flex space-x-6 md:space-x-8" style={{ minWidth: 320 }}>
          {tracks.map((track, i) => (
            <div
              key={i}
              className="relative flex flex-col w-64 bg-card shadow-lg rounded-2xl group hover:scale-105 transition-transform duration-300 border border-gray-800"
            >
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                <img
                  src={track.img}
                  alt={track.title}
                  className="object-cover w-full h-full group-hover:brightness-110 transition"
                />
                {/* Play/Pause Floating Button */}
                <button
                  className={`absolute bottom-3 left-3 bg-black/70 rounded-full p-2 transition-opacity ${
                    playingIndex === i
                      ? "opacity-100"
                      : "opacity-80 group-hover:opacity-100"
                  }`}
                  onClick={() =>
                    setPlayingIndex((prev) => (prev === i ? null : i))
                  }
                  aria-label={playingIndex === i ? "Pause" : "Play"}
                >
                  {playingIndex === i ? (
                    <Pause className="text-white w-5 h-5" />
                  ) : (
                    <Play className="text-white w-5 h-5" />
                  )}
                </button>
                {/* Playing pulse/ring */}
                {playingIndex === i && (
                  <span className="absolute top-3 right-3 h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-xl border-2 border-white" />
                )}
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white truncate">
                    {track.title}
                  </h3>
                  <div className="text-gray-400 text-xs mb-2 truncate">
                    {track.album}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs font-mono">
                    {track.duration}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-100 transition"
                  >
                    <svg
                      fill="currentColor"
                      stroke="none"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="5" cy="10" r="1.5" />
                      <circle cx="10" cy="10" r="1.5" />
                      <circle cx="15" cy="10" r="1.5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 mb-2">
        <Button
          asChild
          variant="default"
          size="lg"
          className="uppercase font-bold rounded-full tracking-widest px-10"
        >
          <a href="/music">Harvest More Music</a>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTracksCarousel;
