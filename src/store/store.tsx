import { create } from "zustand";
import axios from "../api/axios";
import { AVAILABLE_USERS, USER_CHATS } from "../util/constants";

const initialState = {
  activeSearch: false,
  focusToSearch: false,
  chatItems: [],
  selectedChatItem: null,
  newMessage: {},
  isSendingLogin: false,
  isSendingRegister: false,
  showAvailableUsers: false,
  showPencil: false,
  availableUsers: [],
  userLoggued: null,
};

export const useAppStore = create((set) => ({
  ...initialState,
  setUserLoggued: () =>
    set({
      userLoggued:
        JSON.parse(localStorage.getItem("user_logged") ?? "") ?? null,
    }),
  setActiveSearch: (active: boolean) => set({ activeSearch: active }),
  setFocusToSearch: (focus: boolean) => set({ focusToSearch: focus }),
  setChatItems: (items: []) => set({ chatItems: items }),
  getChatItems: async () => {
    const response = await axios.get(USER_CHATS, {
      withCredentials: true,
    });
    set({ chatItems: response.data });
  },
  setSelectedChatItem: (item: object) => {
    set({ selectedChatItem: item })
  },
  setNewMessage: (newMessage: object) => {
    set({
      newMessage,
    });
  },
  setIsSendingLogin: (value: boolean) => set({ isSendingLogin: value }),
  setIsSendingRegister: (value: boolean) => set({ isSendingRegister: value }),
  setShowAvailableUsers: (value: boolean) => set({ showAvailableUsers: value }),
  setShowPencil: (value: boolean) => set({ showPencil: value }),
  getAvailableUsers: async () => {
    const response = await axios.get(AVAILABLE_USERS, {
      withCredentials: true,
    });
    set({ availableUsers: response.data });
  },
  reset: () => {
    set(initialState);
  },
}));
