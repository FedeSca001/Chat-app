import React from 'react';
import './ContactList.css';

export function ContactList(props) {
  const { userName, chats } = props;
  return (
    <section className="contact-list">
        <div className='header-container'>
            <p className='user-name'>{userName.name} {userName.lastName}</p>
            <img className='user-avatar' src='../../../../public/avatar.svg' alt={'avatar-' + userName.name} />
        </div>
        <div className='body-container'>
            <h2 className='contact-list-title'>ContactList</h2>
            <p className='chats-count'>Lista de chats {chats.length}</p>
        </div>
    </section>
  );
}
