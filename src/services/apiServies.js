import axios from "axios";

//get playlist tracks
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
    console.error(error);
  }
};

//get playlist
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
    console.error(error);
  }
};

//getTrack
export const getTrack = async (token, trackId) => {
  try {
    const playlistItem = await axios.get(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return playlistItem;
  } catch (error) {
    console.error(error);
  }
};

// //search
// export const search = async (token, searchQuery) => {
//   try {
//     const query = await axios.get(
//       `https://api.spotify.com/v1/search?q=${encodeURIComponent(
//         searchQuery
//       )}&type=playlist,artist`,
//       {
//         headers: { Authorization: "Bearer " + token },
//       }
//     );
//     return query;
//   } catch (error) {
//     console.error(error);
//   }
// };
