import { ChatArea } from './ChatArea/ChatArea';
import './ChatContainer.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactList } from './ContactList/ContactList';

export function ChatContainer(props) {
  const { user } = props;

  // obtener lista de chats
  const chats = [
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    // Otros chats...
  ];

  return (
    <div className='chat-container'>
      <aside className='aside'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ContactList userName={user} chats={chats} />} />
          </Routes>
        </BrowserRouter>
      </aside>
      <main className='main'>
        <ChatArea />
      </main>
    </div>
  );
}
