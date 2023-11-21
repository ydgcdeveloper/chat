import { ChatContent } from "./ChatContent/ChatContent";
import { ChatFooter } from "./ChatFooter/ChatFooter";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import "./chat.css";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <ChatHeader />
        <ChatContent />
        <ChatFooter />
      </div>
    </div>
  );
};
