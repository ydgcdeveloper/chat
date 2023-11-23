import "./chatItemContent.css";

export const ChatItemContent = ({ item }) => {
  return (
    <div className="chat-item-content">
      <div className="chat-info-row">
        <div className="chat-name">{item.participants[1].firstName}</div>
        <div>{item.lastDate}</div>
      </div>
      <div className="chat-last-message">
        <p>{item.lastMessage}</p>
        <div className="chat-badge-transition">
          <span className="chat-badge">{item.unreadMessages}</span>
        </div>
      </div>
    </div>
  );
};
