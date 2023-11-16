import { useEffect, useState } from 'react';
import { ChatArea } from './ChatArea/ChatArea';
import './ChatContainer.css';
import { ContactList } from './ContactList/ContactList';
import axios from 'axios';

export function ChatContainer(props) {
  const { user, messages } = props;
  const fetchSalas = async () => {
    try {
      const result = await axios.get('http://localhost:5000/room/db');
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
  
    fetchSalas();
  }, []);
  
// hacia el componente MessageList
  return (
    <div className='chat-container'>
      <aside className='aside'>
        <ContactList user={user} messages={messages}/>
      </aside>
      <main className='main'>
        <ChatArea />
      </main>
    </div>
  );
}
