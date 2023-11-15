import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try { // ElMacho  machomaaan
      let getAuth = false
      getAuth = await axios.get(`http://localhost:5000/user/db/${userName}/${password}`)
      if (getAuth) {
        localStorage.setItem('user', JSON.stringify(getAuth.data));
        window.location.reload();
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
