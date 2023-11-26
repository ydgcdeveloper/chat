import { ICON_LIST_SIZE } from "../../../../../../util/constants";
import { ChatItemIcon } from "../../ListItems/ChatItem/ChatItemIcon/ChatItemIcon";
import AvailableItemContent from "../AvailableItemContent/AvailableItemContent";
import "./availableItem.css";

const AvailableItem = ({ item }) => {
  return (
    <div className="available-item">
      <ChatItemIcon
        src={item.participants[1].profileImage}
        size={ICON_LIST_SIZE}
      />
      <AvailableItemContent item={item} />
    </div>
  );
};

export default AvailableItem;
