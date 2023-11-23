import { IoSearchOutline, IoEllipsisVertical } from "react-icons/io5";
import "./headerIcons.css";

export const HeaderIcons = () => {
  return (
    <div className="header-icons">
      <IoSearchOutline className="icon-header" />
      <IoEllipsisVertical className="icon-header" />
    </div>
  );
};
