import React from "react";
import { useDataLayer } from "../stores/useDataLayer";
import { Link } from "react-router-dom";
import { getPlaylistTracks, getPlaylist } from "../services/apiServies";

const PlaylistCard = ({ image, title, owner, playlistId }) => {
  const { token, SET_PLAYLIST_TRACKS, SET_SELECTED_PLAYLIST } = useDataLayer();

  const handleFetchPlaylist = async (token, playlistId) => {
    const playlistItem = await getPlaylist(token, playlistId);
    SET_SELECTED_PLAYLIST(playlistItem);
  };

  const handleFetchPlaylistTracks = async (token, playlistId) => {
    const playlistTracks = await getPlaylistTracks(token, playlistId);
    SET_PLAYLIST_TRACKS(playlistTracks);
  };

  const handlePlaylistClick = async (token, playlistId) => {
    await handleFetchPlaylist(token, playlistId);
    await handleFetchPlaylistTracks(token, playlistId);
  };

  return (
    <Link to="/playlist">
      <li>
        <button
          onClick={() => {
            handlePlaylistClick(token, playlistId);
          }}
          className="w-48 aspect-[3/4] bg-[#1f1e1e] text-left rounded-lg flex flex-col p-4 hover:bg-[#373535] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <img className="h-40 aspect-square rounded-md" src={image} />
          <div className="mt-4">
            <h3 className="font-bold text-white w-40 truncate">{title}</h3>
            <p className="mt-1 text-gray-300 text-[14px] font-medium w-40 truncate">
              {owner}
            </p>
          </div>
        </button>
      </li>
    </Link>
  );
};

export default PlaylistCard;
