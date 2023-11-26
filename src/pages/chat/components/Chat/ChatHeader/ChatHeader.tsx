import { useAppStore } from '../../../../../store/store';
import { ICON_HEADER_SIZE } from '../../../../../util/constants';
import { ChatItemIcon } from '../../List/ListItems/ChatItem/ChatItemIcon/ChatItemIcon';
import { HeaderContent } from './HeaderContent/HeaderContent';
import { HeaderIcons } from './HeaderIcons/HeaderIcons';
import './chatHeader.css'

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
