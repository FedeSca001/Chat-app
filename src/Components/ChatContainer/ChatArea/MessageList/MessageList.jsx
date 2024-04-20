import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';
import axios from 'axios';
import { MessageInput } from '../MessageInput/MessageInput.jsx';

export function MessageList(props) {
  const [chatList, setChatList] = useState([]);
  const [userB, setUserB] = useState({});
  const [sala, setSala] = useState(0)
  const { userChat } = useParams();
  // Obtener el usuario actual de las props
  const { user } = props;

  const fetchMensajes = async () => {
    try {
      // Obtener la lista de mensajes desde la API a traves de la ID de la sala
      const result = await axios.get(`http://localhost:5000/msg/db/${sala.id_usuario}`);
      setChatList(result.data);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
    // Escuchar eventos de nuevos mensajes desde el servidor de sockets
    socket.on('sendMessage ', (message) => {
      // Actualizar el estado de chatList con el nuevo mensaje
      console.log(chatList);
      setChatList((state) => [...state, message]);
    });
  };
  const fetchUserB = async()=>{
    try {
      const getUserB = await axios.get(`http://localhost:5000/user/db/usuario/id/${userChat}`)
      setUserB(getUserB.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchRoom = async () => {
    try {
      const getRoom = await axios.get(`http://localhost:5000/room/db/${user.id_usuario}/${userB.id_usuario}`);
      // Verifica si hay datos devueltos y si hay al menos un elemento en los datos
      if (getRoom.data[0] && getRoom.data.length > 0) {
        // Si hay datos y al menos un elemento, establece la sala con el ID del primer elemento
        setSala(getRoom.data[0]);
        fetchMensajes();
      } else {
        // Si no hay datos o los datos están vacíos, crea una nueva sala
        const newRoom = await axios.post(`http://localhost:5000/room/db/nueva-sala`, {
          id_usera: user.id_usuario,
          id_userb: userB.id_usuario
        });
        // Establece la sala con el ID de la nueva sala creada
        if (newRoom.data) setSala(newRoom.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Efecto para cargar la lista de mensajes y la información del otro usuario al montar el componente
  useEffect(() => {
    fetchUserB()
    fetchRoom()
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      localStorage.removeItem('id_sala');
      socket.off('sendMessage ');
    };
  }, [userChat]);

  return (
    <div className="message-list-container">
      <div className="message-container">
        <h3>Bienvenido al chat con {userB.nombre}</h3>
        {chatList.map((chat, index) => (
          <div
            key={index}
            className={Number(chat.from_user) !== user.id_usuario ? 'received-message' : 'sent-message'}
            style={{ alignSelf: Number(chat.from_user) !== user.id_usuario ? 'flex-end' : 'flex-start' }}>
            <h5>{Number(chat.from_user) !== user.id_usuario ? userB.nombre : user.nombre}</h5>
            <p>{chat.valor_mensaje}</p>
          </div>
        ))}
      </div>{console.log(sala)}{console.log(userChat)}
      <MessageInput user={user} sala={sala}/>
    </div>
  );
  
}
