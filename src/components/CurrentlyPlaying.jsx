import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPictureInPictureAlt } from "react-icons/md";

const CurrentlyPlaying = () => {
  return (
    <div className="w-[300px]">
      <div className="flex items-center gap-3">
        <img
          className="h-14 w-14 rounded-md"
          src="https://i.scdn.co/image/ab67616d0000b273963d364a78358c0125eb99cf"
        />
        <div>
          <h4 className="font-medium">Saad</h4>
          <p className="text-[13px]">Jimmy Ricks, Melanie Grace</p>
        </div>
        <AiOutlineHeart size="23" />
        <MdPictureInPictureAlt size="23" />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
