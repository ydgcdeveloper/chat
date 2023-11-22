import create from "zustand";
import exampleMessages from "../data/exampleMessages.data";
import exampleUsers from "../data/exampleUsers.data";

const chatItems = [
  {
    id: 1,
    lastMessage: "Lorem ipsum dolor sit amet.",
    unreadMessages: 4,
    lastDate: new Date().toDateString(),
    messages: exampleMessages,
    participants: [exampleUsers[3], exampleUsers[0]],
  },
  {
    id: 2,
    lastMessage: "Lorem ipsum dolor sit amet.",
    unreadMessages: 10,
    lastDate: new Date("05/23/1996").toDateString(),
    messages: exampleMessages,
    participants: [exampleUsers[3], exampleUsers[1]],
  },
  {
    id: 3,
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, est.",
    unreadMessages: 2,
    lastDate: new Date("10/10/2002").toDateString(),
    messages: exampleMessages,
    participants: [exampleUsers[3], exampleUsers[2]],
  },
];

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
