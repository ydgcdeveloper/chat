import './App.css'
import { Chat } from './components/Chat'
import { List } from './components/List'

function App() {

  return (
    <div className='chatApp'>
      <List/>
      <Chat/>
    </div>
  )
}

export default App
