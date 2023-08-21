import React from "react";
import { BsShuffle } from "react-icons/bs";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";

const MusicPlayer = () => {
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
        <span>0:00</span>
        <input
          className="accent-[#1DB954] h-1 lg:w-[28rem] md:w-[10rem] rounded-md"
          type="range"
          value="10"
        />
        <span>0:00</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
