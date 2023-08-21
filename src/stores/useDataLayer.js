import { create } from "zustand";

export const useDataLayer = create((set) => ({
  user: null,
  // token:
  //   "BQAc7931RcQS2aJ44IomJhm0vxUCb3CyWLfXF4n8WoU_s3g-nWxMw5DoEr9FPIT5hgYVyeFLV9GqfsBBt1hHS1d6iwQKcZcd75lQZyOJ9oBCmrMoFT_ZOyTBmXWEbsb4WKYq1F5lgT2lNUut_2cGd-2rTuL-L6R5Jm-wsGfKklBfkADBw-u9KaueStrRqS_wZ_euAr_BGoH",
  playlist: [],
  SET_USER: (user) => set({ user: user }),
  SET_TOKEN: (token) => set({ token: token }),
  SET_PLAYLIST: (playlist) =>
    set((state) => ({
      playlist: [...state.playlist, playlist],
    })),
}));
