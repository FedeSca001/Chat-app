import React, { useState } from 'react';
import './CreateUser.css'
import { newUser } from '../../../Logic/Storage/storage';

export function CreateUser() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleRegistration = () => {
    // Aquí puedes agregar la lógica de registro, como enviar los datos al servidor.
    // Por ahora, solo mostraremos los datos ingresados.
    newUser(name,lastName,password,email,age)
  }

  return (
    <div className="create-user-container">
      <h2>Registro de Usuario</h2>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button onClick={handleRegistration}>Registrar</button>
      </form>
    </div>
  );
}

export default CreateUser;
