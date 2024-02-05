// MessageList.jsx
import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';
import axios from 'axios';
import { MessageInput } from '../MessageInput/MessageInput.jsx';

export function MessageList(props) {
  const [chatList, setChatList] = useState([]);
  const [userB, setUserB] = useState({});
  const { userChat } = useParams();
  // Obtener el usuario actual de las props
  const { user } = props;


  const fetchMensajes = async () => {
    try {
      // Obtener la lista de mensajes desde la API a traves de la ID de la sala
      const result = await axios.get(`http://localhost:5000/msg/db/${sessionStorage.getItem('id_sala')}`);
      setChatList(result.data);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
    // Escuchar eventos de nuevos mensajes desde el servidor de sockets
    socket.on('receiveMessage ', (message) => {
      // Actualizar el estado de chatList con el nuevo mensaje
      setChatList((state) => [...state, message]);
      // Actualizar el almacenamiento local con el nuevo mensaje
    });
  };
  const fetchUserB = async()=>{
    try {
      const getUserB = await axios.get(`http://localhost:5000/user/db/${userChat}`)
      setUserB(getUserB.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Efecto para cargar la lista de mensajes y la información del otro usuario al montar el componente
  useEffect(() => {
    localStorage.setItem('id_sala', userChat);
    fetchMensajes();
    fetchUserB()
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      localStorage.removeItem('id_sala');
      socket.off('receiveMessage ');
    };
  }, [userChat]);

  return (
    <div className="message-container">
      <h3>Bienvenido al chat con </h3>
      {chatList.map((chat, index) => (
        <div
          key={index}
          // Aplicar estilos y alineación según el remitente del mensaje
          className={Number(chat.from_user) !== user.id_usuario ? 'sent-message' : 'received-message'}
          style={{ alignSelf: Number(chat.from_user) !== user.id_usuario ? 'flex-end' : 'flex-start' }}>
          <h5>{Number(chat.from_user) !== user.id_usuario ? userB.nombre : user.nombre}</h5>
          <p>{chat.valor_mensaje}</p>
        </div>
      ))}
      <MessageInput/>
    </div>
  );
}
