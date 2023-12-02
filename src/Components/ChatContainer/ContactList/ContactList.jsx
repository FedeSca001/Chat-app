import React, { useEffect, useState } from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';
import axios from 'axios';

export function ContactList(props) {
  const [list, setList] = useState([]);
  const [buscar, setBuscar] = useState(''); // Cambié el valor inicial a una cadena vacía
  const { user } = props;
  
  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/room/db/${user.id_usuario}`);
      setList(result.data);
    } catch (error) {
      console.error('Error al obtener datos:', error); // Cambié alert.error por console.error para un mejor manejo de errores
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Función para manejar el cambio en el input de búsqueda
  const handleSearchChange = (e) => {
    setBuscar(e.target.value);
    console.log(buscar);
  };

  // Filtrar la lista basada en el input de búsqueda
  const listaFiltrada = list.filter((item) => {
    // Modifica la condición según tus criterios de búsqueda
    return item.id_usera === user.id_usuario || item.id_userb === user.id_usuario;
  });

  return (
    <section className="contact-list">
      <div className='header-container'>
        <img className='user-avatar' src='/avatar.svg' alt={'avatar-' + user.nombre} />
        <p className='user-name'>{user.nombre_usuario}</p>
      </div>
      <div className='header-container'>
        <input type="text" value={buscar} onChange={handleSearchChange} className='contact-list-buscador'/>
        <button className='contact-list-btn'>X</button>
      </div>
      <ul className='contact-list-contacts'>
        {listaFiltrada.map((item, index) => (
          <li key={index} className='contact'>
            <Link to={`/chat/${item.id_sala}`} style={{ textDecoration: 'none' }}>
              <ContactItem
                dato={item.id_usera === user.id_usuario ? item.id_userb : item.id_usera}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
