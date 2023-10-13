import React, { useState } from 'react';
import './Login.css'

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos al servidor.
    // Por ahora, solo mostraremos los datos ingresados.
    alert(`Usuario: ${userName}, Contraseña: ${password}`);
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
