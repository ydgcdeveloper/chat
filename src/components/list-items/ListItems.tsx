import { useAppStore } from '../../store/store';
import { ChatItem } from './chat-item/ChatItem'
import './listItems.css'


export const ListItems = () => {
  const { chatItems } = useAppStore((state) => state);

  return (
    <div className="list-items">
        {chatItems.map( item => (
          <ChatItem key={item.id} item={item}/>
        ))}
    </div>
  )
}
