import { useAppStore } from "../../../../../store/store";
import { ICON_HEADER_SIZE } from "../../../../../util/constants";
import { ChatItemIcon } from "../list-items/chat-item/chat-item-icon/ChatItemIcon";
import "./listHeader.css";
import { MyPopover } from "./Popover/Popover";

export const ListHeader = () => {
  const { selectedChatItem } = useAppStore((state) => state);

  return (
    <div className="list-header">
      <div className="list-header-row">
        <div>
          <ChatItemIcon
            src={selectedChatItem?.participants[0].profileImage}
            size={ICON_HEADER_SIZE}
          />
        </div>
        <div className="header-icons">
          <MyPopover />
        </div>
      </div>
    </div>
  );
};
