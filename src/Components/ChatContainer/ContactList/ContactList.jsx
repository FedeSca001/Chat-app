import { useEffect, useState } from 'react';
import './ContactList.css';
import { Link } from 'react-router-dom';
import { ContactItem } from './ContactItem/ContactItem';
import axios from 'axios';

export function ContactList(props) {
  const [list, setList] = useState([]);
  const [buscar, setBuscar] = useState('');
  const { user } = props;

  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/user/db/usuarios`);
      setList(result.data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setBuscar(e.target.value);
    fetchContactos()
  };

  
  const fetchContactos = async () => {
    try {
      if (buscar.trim() !== '') {
        const result = await axios.get(`http://localhost:5000/user/db/obtener/usuario/${buscar}`);
        if (result.data) {
          setList(result.data);
        }
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  return (
    <section className="contact-list">
      <div className='header-container'>
        <img className='user-avatar' src='/avatar.svg' alt={'avatar-' + user.nombre} />
        <p className='user-name'>{user.nombre_usuario}</p>
      </div>
      <div className='header-container'>
        <input
          type="text"
          placeholder="Buscar contactos"
          value={buscar}
          onChange={handleSearchChange}
          className='contact-list-buscador'
        />
      </div>
      <ul className='contact-list-contacts'>
  {list.map((item, index) => (
    // Verifica que user.id no sea igual a item.id antes de mostrar el componente
    user.id_usuario !== item.id_usuario && (
      <li key={index} className='contact'>
        <Link to={`/chat/${item.id_usuario}`} style={{ textDecoration: 'none' }}>
          <ContactItem
            dato={item}
            userA ={user}
          />
        </Link>
      </li>
    )
  ))}
</ul>
    </section>
  );
}
