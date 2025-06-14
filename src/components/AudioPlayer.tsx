
import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

const demoTrack = {
  title: "Harvest Moon Sessions",
  artist: "DIMITRI & THE SCARECROW",
  duration: "4:32"
};

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);

  // For demo, no real audio playback.
  const handlePlayPause = () => setPlaying(!playing);

  return (
    <div className="w-full max-w-md bg-[#292418] border border-[#C4975A]/40 rounded-xl flex items-center px-4 py-3 shadow-md space-x-4">
      <button
        aria-label={playing ? "Pause" : "Play"}
        className="p-2 rounded-full bg-[#C4975A] hover:bg-[#F5E6D3] transition-colors text-[#181818] focus-visible:ring"
        onClick={handlePlayPause}
      >
        {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>
      <div className="flex-1">
        <div className="text-[#F5E6D3] font-semibold text-base font-serif">{demoTrack.title}</div>
        <div className="text-[#D4B896] text-xs font-serif">{demoTrack.artist}</div>
      </div>
      <div className="text-[#C4975A] font-mono text-xs">{demoTrack.duration}</div>
    </div>
  );
};

export default AudioPlayer;
