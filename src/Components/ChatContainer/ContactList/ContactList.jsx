import React, { useEffect, useState } from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';
import axios from 'axios';

export function ContactList(props) {
  const [list,setList] = useState([])
  const { user } = props;
  
  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/user/db/allusers');
      setList(result.data.filter(item => item.id_usuario !== user.id_usuario));
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
            <Link to={`/chat/${index}`} style={{ textDecoration: 'none' }}>
              <ContactItem dato={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
