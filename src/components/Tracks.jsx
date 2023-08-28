import React from "react";
import SongRow from "./SongRow";
import { useDataLayer } from "../stores/useDataLayer";
import { BiTime } from "react-icons/bi";

const Tracks = () => {
  const { playlistTracks } = useDataLayer();
  return (
    <div>
      <div className="flex items-center  gap-5 border-b pb-2 min-w-72 border-[#4e4b4b]">
        <p className="basis-[30px] ml-5">#</p>
        <p className="basis-full min-w-[12rem] md:basis-2/4 xl:basis-2/5 md:min-w-[11.2rem]">
          Title
        </p>
        <p className="basis-1/3 hidden md:block">Album</p>
        <p className="basis-1/4 hidden lg:block text-center">Date Added</p>
        <p className="basis-1/4 flex justify-center">
          <BiTime size="20" />
        </p>
      </div>

      <ul className="mt-2">
        {playlistTracks[0]?.data?.items.map((item, index) => (
          <SongRow
            index={index}
            key={item.track.id}
            name={item.track.name}
            artist={item.track.artists[0].name}
            trackNumber={item.track.track_number}
            album={item.track.album.name}
            dateAdded={item.added_at}
            duration={item.track.duration_ms}
            image={item.track.album.images[0].url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tracks;
