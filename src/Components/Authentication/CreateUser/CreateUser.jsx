import React, { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';

export function CreateUser() {
  // Estados para los campos del formulario de registro
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Función para manejar el registro de usuario
  const handleRegistration = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    try {
      // Objeto que representa los datos del nuevo usuario
      const bodypost = {
        "nombre_usuario": userName,
        "nombre": name,
        "apellido": lastName,
        "img_perfil": "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg",
        "acerca_del_usuario": "Soy un usuario de Cat App <3",
        "password": password,
        "fecha_nacimiento": "1989-12-31T23:00:00.000Z",
        "mail": email
      };

      // Realiza una solicitud para agregar el nuevo usuario a la base de datos
      const addUserResponse = await axios.post('http://localhost:5000/user/db', bodypost);

      // Si la adición del usuario es exitosa, realiza una solicitud para obtener el usuario recién registrado
      if (addUserResponse.status === 200) {
        const getUserLogued = await axios.get(`http://localhost:5000/user/db/${userName}/${password}`);
        
        // Guarda la información del usuario en el almacenamiento local y recarga la página
        localStorage.setItem('user', JSON.stringify(getUserLogued.data));
        window.location.reload();
      }
    } catch (error) {
      alert(error);
    }
    // Otras acciones después de enviar el formulario
  };

  return (
    <div className="create-user-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
