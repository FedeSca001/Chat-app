import { MessageInput } from './ChatArea/MessageInput/MessageInput'
import { MessageList } from './ChatArea/MessageList/MessageList'
import './ChatContainer.css'
export function ChatContainer() {
  return (
    <div className='chat-container'>
      <aside className='aside'>
        <MessageList />
      </aside>
      <main className='main'>
        <MessageInput />
      </main>
    </div>
  )
}
