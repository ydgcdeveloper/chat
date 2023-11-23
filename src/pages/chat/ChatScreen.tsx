import { Chat } from "./components/Chat/Chat";
import { List } from "./components/List/List";
import './chatScreen.css'

export const ChatScreen = () => {
  return (
    <div className='chatApp'>
      <List />
      <Chat />
    </div>
  );
};
