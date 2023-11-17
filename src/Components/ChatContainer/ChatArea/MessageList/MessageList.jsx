import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';
import axios from 'axios';

export function MessageList() {
  const [chatList, setChatList] = useState([]);
  const { userChat } = useParams();

  const fetchList = async()=>{
    try {// Tengo que traer la sala
      const result = await axios.get(`http://localhost:5000/room/db/${user.id_usuario}/${userChat}`);
      setChatList(result.data);
    } catch (error) {
      alert.error('Error al obtener datos:', error);
    }
    socket.on('receiveMessage ', (message) => {
      setChatList(state => [...state,message]);
      localStorage.setItem('chatList', JSON.stringify([...storedChatList, message]));
    });
  }

  useEffect(() => {
    //fetchList();
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
