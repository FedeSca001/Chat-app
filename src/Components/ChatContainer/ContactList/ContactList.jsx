import React, { useEffect, useState } from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';
import axios from 'axios';

export function ContactList(props) {
  const [list, setList] = useState([]);
  const { user } = props;
  
  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/room/db/${user.id_usuario}`);
      
      // Eliminar elementos duplicados basados en el id_usera o id_userb
      const uniqueList = result.data.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.id_usera === item.id_usera || t.id_userb === item.id_userb)
      );

      setList(uniqueList);
    } catch (error) {
      alert.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="contact-list">
      <div className='header-container'>
        <img className='user-avatar' src='/avatar.svg' alt={'avatar-' + user.nombre} />
        <p className='user-name'>{user.nombre_usuario}</p>
      </div>
      <ul className='contact-list-contacts'>
        {list.map((item, index) => (
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
