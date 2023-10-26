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
// en este componente va el Link de react-router-dom
// hacia el componente MessageList
  return (
    <div className='chat-container'>
      <aside className='aside'>
        <ContactList user={user} messages={messages}/>
      </aside>
      <main className='main'>
        <ChatArea user={user} messages={messages}/>
      </main>
    </div>
  );
}
