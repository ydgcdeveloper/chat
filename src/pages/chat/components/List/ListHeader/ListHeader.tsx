import { useAppStore } from "../../../../../store/store";
import { ICON_HEADER_SIZE } from "../../../../../util/constants";
import { ChatItemIcon } from "../ListItems/ChatItem/ChatItemIcon/ChatItemIcon";
import "./listHeader.css";
import { MyPopover } from "./Popover/Popover";
import { useEffect } from "react";

export const ListHeader = () => {
  const { selectedChatItem, userLoggued, setUserLoggued } = useAppStore(
    (state) => state
  );

  useEffect(() => {
    setUserLoggued();
  }, [setUserLoggued]);

  return (
    <div className="list-header">
      <div className="list-header-row">
        <div>
          <ChatItemIcon
            src={userLoggued?.profileImage}
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
