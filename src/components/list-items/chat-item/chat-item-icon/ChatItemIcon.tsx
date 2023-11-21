import "./chatItemIcon.css";

export const ChatItemIcon = ({ src }) => {
  return (
    <div className="chat-item-icon">
      <img src={src} />
    </div>
  );
};
