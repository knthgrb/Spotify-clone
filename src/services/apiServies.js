import axios from "axios";

export const getPlaylistTracks = async (token, playlistId) => {
  try {
    const playlistTracks = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return playlistTracks;
  } catch (error) {
    console.error("Error fetching playlist tracks:", error);
  }
};

export const getPlaylist = async (token, playlistId) => {
  try {
    const playlistItem = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return playlistItem;
  } catch (error) {
    console.error("Error fetching playlist:", error);
  }
};
