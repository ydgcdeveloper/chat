import { useAppStore } from "../../../../store/store";
import { ChatItemContent } from "./chat-item-content/ChatItemContent";
import { ChatItemIcon } from "./chat-item-icon/ChatItemIcon";
import "./chatItem.css";

const ICON_LIST_SIZE = 3.5;

export const ChatItem = ({ item }) => {
  const { setSelectedChatItem } = useAppStore((state) => state);
  return (
    <div className="chat-item" onClick={() => setSelectedChatItem(item)}>
      <ChatItemIcon src={item.participants[1].profileImage} size={ICON_LIST_SIZE}/>
      <ChatItemContent item={item}/>
    </div>
  );
};
