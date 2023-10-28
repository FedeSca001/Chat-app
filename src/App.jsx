import { useState, useEffect } from 'react';
import './App.css';
import { Authentication } from './Components/Authentication/Authentication';
import { ChatContainer } from './Components/ChatContainer/ChatContainer';
import { NavBar } from './Components/NavBar/NavBar';
import { getMessages, getUser } from './Logic/Storage/storage';

function App() {
  const [user, setUser] = useState(null);
  const [messages,setMesagges] = useState([])

  useEffect(() => {
    const chat = {
      id: crypto.randomUUID(),
      fromUser: 'Pedro',
      toUser: 'Pablo',
      message: 'Hola brodi',
      date: new Date()
  }
  localStorage.setItem('messages', JSON.stringify(chat));
  const userObj = getUser;
  const msgs = getMessages
  setMesagges([...messages,msgs])
  setUser(userObj)
  }, []);

  return (
    <div className="app-container">
      {user ? (
        <>
          <NavBar />
          <ChatContainer user={user} messages={messages} />
        </>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
