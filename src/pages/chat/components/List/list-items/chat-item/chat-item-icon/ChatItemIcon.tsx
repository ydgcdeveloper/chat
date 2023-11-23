import "./chatItemIcon.css";

export const ChatItemIcon = ({ src, size}) => {
  return (
    <div className="chat-item-icon">
      <img src={src} style={{height: `${size}rem` }} />
    </div>
  );
};
