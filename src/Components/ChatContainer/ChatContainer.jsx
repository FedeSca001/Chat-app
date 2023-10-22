import { ChatArea } from './ChatArea/ChatArea';
import './ChatContainer.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactList } from './ContactList/ContactList';

export function ChatContainer(props) {
  const { user, messages } = props;

  // obtener lista de chats
  const chats = [
    { id: 1, message: 'Hola amigo, hoy salimos a psear?', fromUser: 'Raul' },
    { id: 2, message: 'Hola perdido', fromUser: 'Pedro' },
  ];

  return (
    <div className='chat-container'>
      <aside className='aside'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ContactList user={user} messages={messages}/>} />
          </Routes>
        </BrowserRouter>
      </aside>
      <main className='main'>
        <ChatArea user={user} messages={messages}/>
      </main>
    </div>
  );
}
