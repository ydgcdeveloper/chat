import "./emptyContent.css";
import chatImage from "../../../../../assets/chat.png";
import { IoLockClosedOutline } from "react-icons/io5";

export const EmptyContent = () => {
  return (
    <div className="empty-content">
      <div className="image-container">
        <img src={chatImage} alt="" />
      </div>
      <h1 className="sub-title">An App build with React + Vite</h1>
      <div className="bottom-text">
        <p>
          <IoLockClosedOutline className="icon-lock" />
          Your personal messages are save
        </p>
      </div>
    </div>
  );
};
