import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import MusicPlayer from "./MusicPlayer";
import { BsHddStack } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
const PlayerBox = () => {
  return (
    <div className="fixed w-full h-[6rem] bottom-0 bg-[#040404] text-white p-3 flex items-center gap-8">
      <div className="basis-1/4">
        <CurrentlyPlaying />
      </div>

      <div className="basis-2/4">
        <MusicPlayer />
      </div>

      <div className="basis-1/4">
        <div className="justify-end flex items-center gap-4">
          <BsHddStack size="23" />
          <RxSpeakerLoud size="23" />
          <input
            className="accent-[#1DB954] h-1 lg:w-[8rem] rounded-md md:w-[4rem] w-[2rem]"
            type="range"
            value="90"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerBox;
