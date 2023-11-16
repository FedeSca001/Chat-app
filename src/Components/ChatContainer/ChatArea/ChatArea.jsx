import './ChatArea.css'
import { MessageInput } from './MessageInput/MessageInput'
import { MessageList } from './MessageList/MessageList'
import './ChatArea.css'
import { Route, Routes } from 'react-router-dom'

export function ChatArea (){

    return (
        <>
          <section className='section-messages'>
            <Routes>
              <Route path='/' element={<p>Hola</p>} />
              <Route path="/chat/:userChat" element={<MessageList />} />
            </Routes>
          </section>
          <MessageInput />
        </>
      );
}