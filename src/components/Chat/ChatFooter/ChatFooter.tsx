import { SendMessageBox } from "./SendMessageBox/SendMessageBox";
import { IoAddOutline, IoHappyOutline, IoMicOutline } from "react-icons/io5";
import "./chatFooter.css";

export const ChatFooter = () => {
  return (
    <div className="chat-footer">
      <IoHappyOutline className="icon-footer" />
      <IoAddOutline className="icon-footer" />
      <SendMessageBox />
      <IoMicOutline className="icon-footer" />
    </div>
  );
};
