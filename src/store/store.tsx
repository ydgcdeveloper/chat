import create from "zustand";
import chatItems from "../pages/chat/data/chatItems.data";

export const useAppStore = create((set) => ({
  activeSearch: false,
  setActiveSearch: (active: boolean) => set({ activeSearch: active }),
  chatItems,
  setChatItems: (items: []) => set({ chatItems: items }),
  selectedChatItem: null,
  setSelectedChatItem: (item: object) => set({ selectedChatItem: item }),
  newMessage: {},
  setNewMessage: (text: string) =>
    set({
      newMessage: {
        text,
        created_date: new Date(),
      },
    }),
}));
