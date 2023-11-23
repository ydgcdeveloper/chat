import { useAppStore } from "../../../../../store/store";
import exampleUsers from "../../../data/exampleUsers.data";
import { Message } from "./Message/Message";
import "./chatContent.css";

const userLogged = exampleUsers[3];

export const ChatContent = () => {
  const { selectedChatItem } = useAppStore((state) => state);

  const sendByMe = (message) => {
    return message.senderId === userLogged.id;
  };

  return (
    <div className="chat-content">
      <div className="chat-data">
        {selectedChatItem.messages?.map((messageItem) => (
          <Message
            key={messageItem.id}
            message={messageItem}
            right={sendByMe(messageItem)}
          />
        ))}
      </div>
    </div>
  );
};
