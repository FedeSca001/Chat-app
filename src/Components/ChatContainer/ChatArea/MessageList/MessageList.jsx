import React, { useEffect, useState } from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';
import { socket } from '../../../../Logic/socket-io/socket.js';

export function MessageList() {
  const [chatList, setChatList] = useState([/*traigo la lista del localestorage */]);
  const { userChat } = useParams();

  useEffect(() => {
    const storedChatList = JSON.parse(localStorage.getItem('chatList') || '[]');
    setChatList(storedChatList);
    
    socket.on('receiveMessage ', (message) => {
      setChatList(state => [...state,message]);
      //ahora agrego el mensaje a una lista en el localStorage
      //localStorage.setItem()
      localStorage.setItem('chatList', JSON.stringify([...storedChatList, message]));
    });
  },[]);

  return (
    <div>
      <h3>{userChat}</h3>
      {chatList.map((chat,index)=>(
        <p key={index}>{chat.message}</p>
      ))}
    </div>
  );
}
