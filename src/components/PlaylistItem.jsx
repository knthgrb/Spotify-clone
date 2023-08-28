import React from "react";
import { useDataLayer } from "../stores/useDataLayer";
import { getPlaylistTracks, getPlaylist } from "../services/apiServies";
import { Link } from "react-router-dom";

const PlaylistItem = ({ title, owner, image, playlistId }) => {
  const {
    token,
    selectedPlaylistId,
    SET_PLAYLIST_TRACKS,
    SET_SELECTED_PLAYLIST,
  } = useDataLayer();

  const handleFetchPlaylist = async (token, playlistId) => {
    const playlistItem = await getPlaylist(token, playlistId);
    SET_SELECTED_PLAYLIST(playlistItem);
  };

  const handleFetchPlaylistTracks = async (token, playlistId) => {
    const playlistTracks = await getPlaylistTracks(token, playlistId);
    SET_PLAYLIST_TRACKS(playlistTracks);
  };

  const handlePlaylistClick = async (token, playlistId) => {
    SET_SELECTED_PLAYLIST(playlistId);
    await handleFetchPlaylist(token, playlistId);
    await handleFetchPlaylistTracks(token, playlistId);
  };
  return (
    <li>
      <Link to="/playlist">
        <button
          onClick={() => {
            handlePlaylistClick(token, playlistId);
          }}
          className="cursor-pointer pt-1.5 pl-1.5 pb-1.5 flex rounded-lg w-full items-center text-left hover:bg-[#1b1b1b] focus:bg-[#232222]"
        >
          <img className="h-14 w-14 rounded-md" src={image} />
          <div className="ml-2">
            <h3 className="font-medium text-gray-100 truncate w-48 md:w-[190px] lg:w-[245px] xl:w-[245px]">
              {title}
            </h3>
            <p className="text-gray-300">{owner}</p>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default PlaylistItem;
