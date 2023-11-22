import { useAppStore } from "../../store/store";
import { ChatContent } from "./ChatContent/ChatContent";
import { ChatFooter } from "./ChatFooter/ChatFooter";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { EmptyContent } from "./EmptyContent/EmptyContent";
import "./chat.css";

export const Chat = () => {
  const { selectedChatItem } = useAppStore((state) => state);
  return (
    <div className="chat">
      {selectedChatItem && (
        <div className="chat-container">
          <ChatHeader />
          <ChatContent />
          <ChatFooter />
        </div>
      )}
      {!selectedChatItem && (
        <div className="empty-chat-container">
          <EmptyContent/>
        </div>
      )}
    </div>
  );
};
