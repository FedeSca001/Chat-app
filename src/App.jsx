import { useState, useEffect } from 'react';
import './App.css';
import { Authentication } from './Components/Authentication/Authentication';
import { ChatContainer } from './Components/ChatContainer/ChatContainer';
import { NavBar } from './Components/NavBar/NavBar';
import { deleteUser, getUser, newUser } from './Logic/Storage/storage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getU = getUser();
    if (getU) {
      setUser(JSON.parse(getU));
    }
  }, []);


  return (
    <div className="app-container">
      {user ? (
        <>
          <NavBar />
          <ChatContainer />
        </>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
