import { useState, useEffect } from 'react';
import './App.css';
import { Authentication } from './Components/Authentication/Authentication';
import { ChatContainer } from './Components/ChatContainer/ChatContainer';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const userObj = JSON.parse(localStorage.getItem('user'));
  setUser(userObj)
  }, []);

  return (
    <div className="app-container">
      {user ? (
        <>
          <NavBar />
          <ChatContainer user={user}  />
        </>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
