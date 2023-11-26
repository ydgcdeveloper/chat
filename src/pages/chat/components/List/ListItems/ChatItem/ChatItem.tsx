import { useAppStore } from "../../../../../../store/store";
import { ICON_LIST_SIZE } from "../../../../../../util/constants";
import { ChatItemContent } from "./ChatItemContent/ChatItemContent";
import { ChatItemIcon } from "./ChatItemIcon/ChatItemIcon";
import "./chatItem.css";


export const ChatItem = ({ item }) => {
  const { setSelectedChatItem } = useAppStore((state) => state);
  return (
    <div className="chat-item" onClick={() => setSelectedChatItem(item)}>
      <ChatItemIcon src={item.participants[1].profileImage} size={ICON_LIST_SIZE}/>
      <ChatItemContent item={item}/>
    </div>
  );
};
