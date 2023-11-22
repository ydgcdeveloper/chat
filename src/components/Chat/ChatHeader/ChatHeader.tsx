import { useAppStore } from '../../../store/store';
import { ChatItemIcon } from '../../List/list-items/chat-item/chat-item-icon/ChatItemIcon';
import { HeaderContent } from './HeaderContent/HeaderContent';
import { HeaderIcons } from './HeaderIcons/HeaderIcons';
import './chatHeader.css'

const ICON_HEADER_SIZE = 2.7;

export const ChatHeader = () => {

  const { selectedChatItem } = useAppStore((state) => state);

  return (
    <div className='chat-header'>
      <ChatItemIcon src={selectedChatItem.participants[1].profileImage} size={ICON_HEADER_SIZE}/>
      <HeaderContent item={selectedChatItem}/>
      <HeaderIcons/>
    </div>
  )
}
