import { MessageInput } from './ChatArea/MessageInput/MessageInput'
import { MessageList } from './ChatArea/MessageList/MessageList'
import './ChatContainer.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// este componente recibe la lista de chats del ususario
// el componente MessageList recibe el chat y hace un .map()
export function ChatContainer() {
  return (
    <div className='chat-container'>
      <aside className='aside'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<MessageList />}/>
          </Routes>
        </BrowserRouter>
      </aside>
      <main className='main'>
        <MessageInput />
      </main>
    </div>
  )
}
