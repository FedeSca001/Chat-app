import { ChatArea } from './ChatArea/ChatArea';
import './ChatContainer.css';
import { ContactList } from './ContactList/ContactList';

export function ChatContainer(props) {
  const { user } = props; 

// hacia el componente MessageList
  return (
    <div className='chat-container'>
      <aside className='aside'>
        <ContactList user={user} />
      </aside>
      <main className='main'>
        <ChatArea user={user} />
      </main>
    </div>
  );
}
