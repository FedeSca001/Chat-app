// En ContactList.js
import React from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';

export function ContactList(props) {
  const { user } = props;
  const list = [0,1,2,3,4,5,6,7,8,9].map((item) => item.toString());

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
