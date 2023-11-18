import React, { useEffect, useState } from 'react';
import './MessageInput.css';
import { socket } from '../../../../Logic/socket-io/socket';
import axios from 'axios';

export function MessageInput() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  const handleSubmit = async (e) => {
    const objMsg ={
      tipo_mensaje: 'text',
      valor_mensaje: message,
      from_user: JSON.parse(localStorage.getItem('user')).id_usuario,
      id_sala: JSON.parse(localStorage.getItem('id_sala'))
    }
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/msg/db/nuevo-mensaje', objMsg)
    } catch (error) {
      alert(error)
    }
    socket.emit('sendMessage',objMsg)
    setMessage('');
  };

  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <textarea
          className="message-textarea"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          rows="3"
        ></textarea>
        <button className="message-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
