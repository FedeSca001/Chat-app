import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactItem.css'

export function ContactItem(props) {
  const { dato } = props;
  const [contacto, setContacto] = useState({})

  const fetchContacto = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/user/db/${dato}`);
      setContacto(result.data);
    } catch (error) {
      console.log('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    fetchContacto();
  }, []);

  return (
    <div className="contact-card">
      <div className="contact-profile">
        <img className='contact-img'
            src={'https://st5.depositphotos.com/50037850/64343/v/450/depositphotos_643435830-stock-illustration-reapor-minecraft-gaming-video-vector.jpg'} 
            alt={contacto.nombre} />
      </div>
      <div className="contact-info">
        <h3 className='contact-info-name'>{contacto.nombre} {contacto.apellido}</h3>
        <p className='contact-info-p'>Última vez en línea: hace 2 horas</p>
      </div>
    </div>
  );
}
