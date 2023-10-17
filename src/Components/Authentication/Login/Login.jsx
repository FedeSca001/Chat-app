import React, { useState } from 'react';
import './Login.css'
import { getUser } from '../../../Logic/Storage/storage';

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    getUser()
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
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
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
