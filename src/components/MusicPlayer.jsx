import React from "react";
import { BsShuffle } from "react-icons/bs";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";
import { useDataLayer } from "../stores/useDataLayer";

const MusicPlayer = () => {
  const { selectedTrack } = useDataLayer();

  const formatDuration = (durationMs) => {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-5">
        <BsShuffle size="22" />
        <MdSkipPrevious size="30" />
        <AiFillPlayCircle size="40" />
        <MdSkipNext size="30" />
        <BsRepeat size="22" />
      </div>

      <div className="flex items-center gap-2">
        {selectedTrack === null ? <span>0:00</span> : <span>1:13</span>}
        <input
          className="accent-[#1DB954] h-1 lg:w-[28rem] md:w-[10rem] rounded-md"
          type="range"
          value="10"
        />
        {selectedTrack === null ? (
          <span>0:00</span>
        ) : (
          <span>{formatDuration(selectedTrack?.data?.duration_ms)}</span>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
