import "./sendMessageBox.css";

export const SendMessageBox = () => {
  return (
    <div className="send-message-box">
      <input className="message-input" type="text" 
      placeholder="Write a message..." />
    </div>
  );
};
