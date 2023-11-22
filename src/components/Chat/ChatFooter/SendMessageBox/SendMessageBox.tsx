import "./sendMessageBox.css";

export const SendMessageBox = ({ setNewMessage }) => {
  return (
    <div className="send-message-box">
      <input
        className="message-input"
        type="text"
        placeholder="Write a message..."
        onChange={(e) => setNewMessage(e.target.value)}
      />
    </div>
  );
};
