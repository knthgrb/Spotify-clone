import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPictureInPictureAlt } from "react-icons/md";
import { useDataLayer } from "../stores/useDataLayer";

const CurrentlyPlaying = () => {
  const { selectedTrack } = useDataLayer();

  const isLongTitle = selectedTrack?.data?.name.length > 25;

  return (
    <div className="min-w-[300px]">
      <div className="flex items-center gap-3">
        <img
          className="h-14 w-14 rounded-md"
          src={
            "https://i.scdn.co/image/ab67616d0000b273963d364a78358c0125eb99cf"
          }
        />
        <div className="">
          <h4 className="font-medium w-44">
            {isLongTitle ? (
              <marquee scrollamount="5" direction="left">
                {selectedTrack?.data?.name}
              </marquee>
            ) : (
              <p> {selectedTrack?.data?.name} </p>
            )}
          </h4>
          <p className="text-[13px]">
            {selectedTrack?.data?.artists
              ?.map((artist) => artist.name)
              .join(", ")}
          </p>
        </div>
        <AiOutlineHeart size="23" />
        <MdPictureInPictureAlt size="23" />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
