import './ChatArea.css';
import { MessageList } from './MessageList/MessageList';
import { Route, Routes } from 'react-router-dom';

export function ChatArea(props) {
  const { user } = props;

  return (
    <div className='chat-area'>
      <section className='section-messages'>
        <Routes>
          <Route path='/' element={<h1 className='welcome-message'>Bienvenidos a una experiencia ESPECTACULAR</h1>} />
          <Route path="/chat/:userChat" element={<MessageList user={user} />} />
        </Routes>
      </section>
    </div>
  );
}
