// MessageList.jsx
import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';
import axios from 'axios';

export function MessageList(props) {
  const [chatList, setChatList] = useState([]);
  const [userB, setUserB] = useState({});
  const { userChat } = useParams();
  // Obtener el usuario actual de las props
  const { user } = props;

  const fetchSala = async () => {
    try {
      // Obtener la información de la sala desde la API
      const result = await axios.get(`http://localhost:5000/room/db/${user.id_usuario}`);
      // Obtener la información del otro usuario en la sala
      const userId = result.data[0].id_usera === user.id_usuario ? result.data[0].id_userb : result.data[0].id_usera;
      const userData = await axios.get(`http://localhost:5000/user/db/${userId}`);
      setUserB(userData.data);
    } catch (error) {
      console.error('Error al obtener datos de la sala:', error);
    }
  };

  // Función para obtener la lista de mensajes de la conversación
  const fetchMensajes = async () => {
    try {
      // Obtener la lista de mensajes desde la API
      const result = await axios.get(`http://localhost:5000/msg/db/${userChat}`);
      setChatList(result.data);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
    // Escuchar eventos de nuevos mensajes desde el servidor de sockets
    socket.on('receiveMessage ', (message) => {
      // Actualizar el estado de chatList con el nuevo mensaje
      setChatList((state) => [...state, message]);
      // Actualizar el almacenamiento local con el nuevo mensaje
      localStorage.setItem('chatList', JSON.stringify([...chatList, message]));
    });
  };

  // Efecto para cargar la lista de mensajes y la información del otro usuario al montar el componente
  useEffect(() => {
    fetchMensajes();
    fetchSala();
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      socket.off('receiveMessage ');
    };
  }, [userChat]);

  return (
    <div className="message-container">
      <h3>{userChat}</h3>
      {chatList.map((chat, index) => (
        <div
          key={index}
          // Aplicar estilos y alineación según el remitente del mensaje
          className={Number(chat.from_user) === user.id_usuario ? 'sent-message' : 'received-message'}
          style={{ alignSelf: Number(chat.from_user) === user.id_usuario ? 'flex-end' : 'flex-start' }}
        >
          <h5>{Number(chat.from_user) === user.id_usuario ? userB.nombre : user.nombre}</h5>
          <p>{chat.valor_mensaje}</p>
        </div>
      ))}
    </div>
  );
}
