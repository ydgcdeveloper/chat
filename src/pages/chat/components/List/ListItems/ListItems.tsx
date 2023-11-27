import { useEffect } from "react";
import { useAppStore } from "../../../../../store/store";
import { ChatItem } from "./ChatItem/ChatItem";
import "./listItems.css";

export const ListItems = () => {
  const { chatItems, getChatItems, showAvailableUsers } = useAppStore(
    (state) => state
  );

  useEffect(() => {
    if (!showAvailableUsers) getChatItems();
  }, [getChatItems]);

  return (
    <div className="list-items">
      {chatItems?.map((item) => (
        <ChatItem key={item.id} item={item.participants ? item : null} />
      ))}
    </div>
  );
};
