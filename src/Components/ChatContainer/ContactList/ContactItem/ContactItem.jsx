import React from 'react';
import './ContactItem.css'

export function ContactItem(props) {
  const { dato } = props;
  return (
    <div className="contact-card">
      <div className="contact-profile">
        <img className='contact-img'
            src='https://i.blogs.es/c554bd/portada/1366_2000.jpg' 
            alt={dato} />
      </div>
      <div className="contact-info">
        <h3 className='contact-info-name'>{dato}</h3>
        <p className='contact-info-p'>Última vez en línea: hace 2 horas</p>
      </div>
    </div>
  );
}
