// En ContactList.js
import React, { useEffect, useState } from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';
import axios from 'axios';

export function ContactList(props) {
  const [list,setList] = useState([0,1,2])
  const { user } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/user/db/allusers');
        setList(result.data);
      } catch (error) {
        alert.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="contact-list">
      <div className='header-container'>
        <img className='user-avatar' src='/avatar.svg' alt={'avatar-' + user.name} />
        <p className='user-name'>{user.name} {user.lastName}</p>
      </div>
      <div className='body-container'>
        <h2 className='contact-list-title'>ContactList</h2>
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
