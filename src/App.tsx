import './App.css'
import { Chat } from './pages/chat/components/Chat/Chat'
import { List } from './pages/chat/components/List/List'

function App() {

  return (
    <div className='chatApp'>
      <List/>
      <Chat/>
    </div>
  )
}

export default App
