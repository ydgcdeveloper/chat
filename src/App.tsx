import './App.css'
import { Chat } from './components/Chat/Chat'
import { List } from './components/List/List'

function App() {

  return (
    <div className='chatApp'>
      <List/>
      <Chat/>
    </div>
  )
}

export default App
