import { ChatItemContent } from "./chat-item-content/ChatItemContent";
import { ChatItemIcon } from "./chat-item-icon/ChatItemIcon";
import "./chatItem.css";

export const ChatItem = ({ item }) => {
  return (
    <div className="chat-item">
      <ChatItemIcon src={item.src} />
      <ChatItemContent item={item}/>
    </div>
  );
};
