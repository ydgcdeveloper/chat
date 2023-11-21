import "./headerContent.css";

export const HeaderContent = ({ item }) => {
  return (
    <div className="header-content">
      <div className="header-content-data">
        <div className="header-info-row">
          <div className="chat-name">{item.name}</div>
        </div>
        <div className="header-last-date">
          <div className="chat-last-date">{item.lastDate}</div>
        </div>
      </div>
    </div>
  );
};
