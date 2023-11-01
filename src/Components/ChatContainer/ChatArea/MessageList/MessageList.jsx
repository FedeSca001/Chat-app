import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';

export function MessageList() {
  const [chatList, setChatList] = useState([/* aca tiene que buscar en la base de datos todo el chat de la sala */]);
  const { userChat } = useParams();

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setChatList([...chatList,message]);// aca tiene que pedir los datos a la base de datos
      //ademas ver con el localeStorage como hace
    });
  }, []);

  return (
    <div>
      <h3>{userChat}</h3>
      {chatList.map((chat,index)=>(
        <p key={index}>{chat.message}</p>
      ))}
    </div>
  );
}
