import { useState, useRef } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Popover, ArrowContainer } from "react-tiny-popover";
import './popover.css'
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../../../util/common";


export const MyPopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const boxContainerRef = useRef();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(signOut, navigate);
  };

  return (
    <div className="popover-container" ref={boxContainerRef.current}>
      <Popover
        isOpen={isPopoverOpen}
        parentElement={boxContainerRef.current}
        positions={["top", "bottom", "left", "right"]}
        align="end"
        padding={8}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"#2a2e2d"}
            arrowSize={8}
          >
            <div>
              <div className="popover-content">
                <ul onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            </div>
          </ArrowContainer>
        )}
      >
        <div className="flex">
          <IoEllipsisVertical
            className="icon-header"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          />
        </div>
      </Popover>
    </div>
  );
};
