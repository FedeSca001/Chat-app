import { ChatArea } from './ChatArea/ChatArea';
import './ChatContainer.css';
import { ContactList } from './ContactList/ContactList';

export function ChatContainer(props) {
  const { user, messages } = props;
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
