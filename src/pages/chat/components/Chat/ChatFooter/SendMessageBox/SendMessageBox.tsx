import { useAppStore } from "../../../../../../store/store";
import "./sendMessageBox.css";

export const SendMessageBox = ({ setNewMessage }) => {
  const { selectedChatItem } = useAppStore((state) => state);

  const newMessage = (text: string) => {
    const message = {
      text,
      senderId: selectedChatItem.participants[0]?.id,
      receiverId: selectedChatItem.participants[1]?.id,
      chatId: selectedChatItem?.id ?? null,
    };
    setNewMessage(message);
  };

  return (
    <div className="send-message-box">
      <input
        className="message-input"
        type="text"
        placeholder="Write a message..."
        onChange={(e) => newMessage(e.target.value)}
      />
    </div>
  );
};
