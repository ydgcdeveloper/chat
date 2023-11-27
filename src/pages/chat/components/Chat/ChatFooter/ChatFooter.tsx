import { SendMessageBox } from "./SendMessageBox/SendMessageBox";
import {
  IoAddOutline,
  IoHappyOutline,
  IoMicOutline,
  IoSendSharp,
} from "react-icons/io5";
import "./chatFooter.css";
import { useAppStore } from "../../../../../store/store";
import axios from "../../../../../api/axios";
import { NEW_MESSAGE } from "../../../../../util/constants";

export const ChatFooter = () => {
  const { newMessage, setNewMessage } = useAppStore((state) => state);

  const sendMessage = async () => {
    const response = await axios.post(NEW_MESSAGE, newMessage, {
      withCredentials: true,
    });
    console.log(response.data);
  };

  return (
    <div className="chat-footer">
      <IoHappyOutline className="icon-footer" />
      <IoAddOutline className="icon-footer" />
      <SendMessageBox setNewMessage={setNewMessage} />
      {!newMessage?.text && <IoMicOutline className="icon-footer" />}
      {newMessage?.text && (
        <IoSendSharp className="icon-footer" onClick={() => sendMessage()} />
      )}
    </div>
  );
};
