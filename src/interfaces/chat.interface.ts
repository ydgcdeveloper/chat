import ChatMessage from "./chatMessage.interface";

// Chat.ts
interface Chat {
  id: string;
  participants: string[];
  messages: ChatMessage[];
}

export default Chat;