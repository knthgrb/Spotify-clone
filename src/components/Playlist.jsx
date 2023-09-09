import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useDataLayer } from "../stores/useDataLayer";
import PlaylistItem from "./PlaylistItem";

const Playlist = () => {
  const { playlist } = useDataLayer();
  const [onSearch, setOnSearch] = useState(false);
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);

  //initialize the filteredPlaylist with the full playlist
  useEffect(() => {
    setFilteredPlaylist(playlist[0]?.items || []);
  }, [playlist]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;

    // filter the playlist based on the search
    const filteredItems = playlist[0]?.items.filter((item) =>
      item.name.toLowerCase().startsWith(query.toLowerCase())
    );

    setFilteredPlaylist(filteredItems);
  };

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
            onChange={handleSearchInputChange}
            onBlur={() => {
              setOnSearch(false);
            }}
            className="p-1 placeholder-white placeholder:text-[14px] focus:outline-none rounded-r-md bg-[#3d3838] text-white"
            type="text"
            placeholder="Search in your Library"
          />
        )}
      </div>
      <div className="overflow-y-auto mt-2 ml-3">
        <ul className="absolute">
          {filteredPlaylist.map((items) => (
            <PlaylistItem
              setFilteredPlaylist={setFilteredPlaylist}
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
