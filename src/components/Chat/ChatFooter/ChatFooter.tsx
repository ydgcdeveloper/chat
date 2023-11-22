import { SendMessageBox } from "./SendMessageBox/SendMessageBox";
import {
  IoAddOutline,
  IoHappyOutline,
  IoMicOutline,
  IoSendSharp,
} from "react-icons/io5";
import "./chatFooter.css";
import { useAppStore } from "../../../store/store";

export const ChatFooter = () => {
  const { newMessage, setNewMessage } = useAppStore((state) => state);

  return (
    <div className="chat-footer">
      <IoHappyOutline className="icon-footer" />
      <IoAddOutline className="icon-footer" />
      <SendMessageBox setNewMessage={setNewMessage} />
      {(!newMessage?.text && <IoMicOutline className="icon-footer" />)}
      {(newMessage?.text && <IoSendSharp className="icon-footer" />)}
    </div>
  );
};
