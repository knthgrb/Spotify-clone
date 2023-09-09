import { create } from "zustand";

export const useDataLayer = create((set) => ({
  user: null,
  token: null,
  playlist: [],
  selectedPlaylistId: null,
  playlistTracks: [],
  selectedTrack: null,

  SET_USER: (user) => set({ user: user }),

  SET_TOKEN: (token) => set({ token: token }),

  SET_PLAYLIST: (playlist) =>
    set((state) => ({
      playlist: [...state.playlist, playlist],
    })),

  SET_SELECTED_PLAYLIST: (playlistItem) =>
    set({ selectedPlaylistId: playlistItem }),

  SET_PLAYLIST_TRACKS: (playlistTracks) =>
    set({
      playlistTracks: [playlistTracks],
    }),

  SET_SELECTED_TRACK: (track) => set({ selectedTrack: track }),
}));
