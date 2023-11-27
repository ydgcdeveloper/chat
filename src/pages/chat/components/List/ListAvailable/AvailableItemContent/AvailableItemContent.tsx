import "./availableItemContent.css";

const AvailableItemContent = ({ item }) => {
  return (
    <div className="available-item-content">
      <div className="name">{item?.firstName}</div>
      <div>Last seen</div>
    </div>
  );
};

export default AvailableItemContent;
