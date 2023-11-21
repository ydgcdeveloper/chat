import create from "zustand";

export const useAppStore = create((set) => ({
  activeSearch: false,
  setActiveSearch: (active: boolean) => set({ activeSearch: active }),
}));
