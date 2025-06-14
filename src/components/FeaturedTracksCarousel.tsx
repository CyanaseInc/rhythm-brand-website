
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Waves, Play } from "lucide-react";

// Placeholder track data type
type Track = {
  title: string;
  album: string;
  duration: string;
  img: string;
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
    <div className="w-full font-sans relative">
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
      <div className="relative">
        {/* Carousel with arrows */}
        <Carousel
          opts={{
            dragFree: true,
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselPrevious />
          <CarouselContent>
            {tracks.map((track, i) => (
              <CarouselItem
                key={i}
                className="sm:basis-1/2 md:basis-1/3 px-2"
                aria-label={`Track ${track.title}`}
              >
                <div
                  className="group relative flex items-end w-full h-[400px] md:h-[430px] rounded-3xl overflow-hidden shadow-2xl bg-black/80 hover:-translate-y-2 transition-all duration-300"
                  style={{
                    backgroundImage: `url(${track.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />
                  {/* Animated waves icon */}
                  <div className="absolute top-8 left-8 z-20 text-green-300 animate-pulse drop-shadow-lg pointer-events-none">
                    <Waves size={44} strokeWidth={2.5} className="animate-[waveAnim_2.5s_ease-in-out_infinite]" />
                  </div>
                  {/* Play button (centered, animated on hover) */}
                  <button
                    className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 border-2 border-white/30 hover:border-green-300 text-white rounded-full p-6 shadow-xl transition-all duration-200 backdrop-blur focus:outline-none"
                    onClick={() => setPlayingIndex((prev) => (prev === i ? null : i))}
                    aria-label={playingIndex === i ? "Pause" : "Play"}
                  >
                    <Play size={40} className={`transition-all ${playingIndex === i ? "text-green-300 scale-110" : "text-white scale-100"}`} />
                  </button>
                  {/* Animated track info */}
                  <div
                    className={`
                      absolute left-0 right-0 bottom-0 p-6 pb-8 z-30 text-white
                      transition-all duration-400
                      bg-gradient-to-t from-black/85 via-black/50 to-transparent
                      ${playingIndex === i ? "translate-y-0" : "translate-y-6 group-hover:translate-y-0"}
                      rounded-b-3xl
                    `}
                  >
                    <h3 className="font-extrabold text-xl md:text-2xl tracking-wide truncate">{track.title}</h3>
                    <div className="text-gray-300 text-sm mb-2 truncate">{track.album}</div>
                    <div className="flex items-center justify-between mt-3 pb-2">
                      <span className="bg-black/30 px-3 py-1 rounded-full text-xs font-mono border border-white/10">
                        {track.duration}
                      </span>
                      {/* Mini playback animated music waves */}
                      {playingIndex === i && (
                        <span className="ml-2 flex gap-1">
                          <span className="block w-1 h-3 bg-green-400 rounded animate-[musicwave1_1.1s_infinite]" />
                          <span className="block w-1 h-5 bg-green-300 rounded animate-[musicwave2_1s_infinite]" />
                          <span className="block w-1 h-4 bg-green-200 rounded animate-[musicwave3_0.9s_infinite]" />
                          <span className="block w-1 h-6 bg-green-400 rounded animate-[musicwave4_1.3s_infinite]" />
                          <span className="block w-1 h-4 bg-green-300 rounded animate-[musicwave2_1.1s_infinite]" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
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
      {/* Inline keyframes for music wave animation */}
      <style>
        {`
          @keyframes musicwave1 { 
            0%,100%{height:12px;} 50%{height:29px;}
          }
          @keyframes musicwave2 { 
            0%,100%{height:20px;} 40%{height:36px;}
          }
          @keyframes musicwave3 { 
            0%,100%{height:16px;} 50%{height:25px;}
          }
          @keyframes musicwave4 { 
            0%,100%{height:28px;} 35%{height:11px;}
          }
          @keyframes waveAnim {
            0%,100% { opacity: 0.85; transform: scaleY(1);}
            20% { opacity: 0.9; transform: scaleY(1.12);}
            50% { opacity: 1; transform: scaleY(0.96);}
            80% { opacity: 0.9; transform: scaleY(1.10);}
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedTracksCarousel;

