import React from 'react';
import './ContactList.css';

export function ContactList(props) {
  const { user, messages } = props;
  return (
    <section className="contact-list">
        <div className='header-container'>
            <p className='user-name'>{user.name} {user.lastName}</p>
            <img className='user-avatar' src='avatar.svg' alt={'avatar-' + user.name} />
        </div>
        <div className='body-container'>
            <h2 className='contact-list-title'>ContactList</h2>
            <ul className='chats-list'>
              {messages.map((chat, id) => (
                <li key={id}>Chat de {chat.fromUser} - {chat.message}</li>
              ))}
            </ul>
        </div>
    </section>
  );
}
