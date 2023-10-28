import React from 'react';
import './MessageList.css';
import { useParams } from 'react-router-dom';

export function MessageList() {

  const {userChat} = useParams()

  return (
    <div>
      <p>MessageList: recibe el chat y lo renderiza</p>
      <h3>{userChat}</h3>
    </div>
  );
}
