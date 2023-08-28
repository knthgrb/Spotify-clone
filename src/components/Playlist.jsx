import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDataLayer } from "../stores/useDataLayer";
import PlaylistItem from "./PlaylistItem";

const Playlist = () => {
  const [onSearch, setOnSearch] = useState(false);
  const { playlist } = useDataLayer();

  return (
    <div>
      <div className="flex items-center ml-3">
        <button
          onClick={() => {
            setOnSearch(true);
          }}
          className={
            onSearch
              ? "p-1 rounded-l-md pointer-events-none bg-[#3d3838] text-gray-300"
              : "text-gray-300 rounded-full p-1 hover:bg-[#3d3838] hover:text-white"
          }
        >
          <FiSearch size="24" />
        </button>
        {onSearch && (
          <input
            autoFocus
            onBlur={(prevState) => {
              setOnSearch(!prevState);
            }}
            className="p-1 focus:outline-none rounded-r-md bg-[#3d3838] text-white"
            type="text"
            placeholder="Search in your Library"
          />
        )}
      </div>
      <div className="overflow-y-auto mt-2 ml-3">
        <ul className="absolute">
          {playlist[0]?.items?.map((items) => (
            <PlaylistItem
              title={items.name}
              key={items.id}
              playlistId={items.id}
              owner={items.owner.display_name}
              image={items.images[0].url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
