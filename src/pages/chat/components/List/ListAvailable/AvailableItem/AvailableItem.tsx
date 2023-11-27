import { useEffect } from "react";
import { useAppStore } from "../../../../../../store/store";
import { ICON_LIST_SIZE } from "../../../../../../util/constants";
import { ChatItemIcon } from "../../ListItems/ChatItem/ChatItemIcon/ChatItemIcon";
import AvailableItemContent from "../AvailableItemContent/AvailableItemContent";
import "./availableItem.css";

const AvailableItem = ({ item }) => {
  const { setSelectedChatItem, userLoggued, selectedChatItem } = useAppStore((state) => state);

  const createLocalChat = () => {
    const newChat = {
      type: "two",
      unreadMessages: 0,
      lastMessageId: null,
      participants: [userLoggued, item],
      chatMessage: [],
      lastMessage: null,
    };
    setSelectedChatItem(newChat);
  };

  return (
    <div className="available-item" onClick={() => createLocalChat()}>
      <ChatItemIcon src={item?.profileImage} size={ICON_LIST_SIZE} />
      <AvailableItemContent item={item} />
    </div>
  );
};

export default AvailableItem;
