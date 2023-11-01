import React, { useEffect, useState } from 'react';
import './MessageInput.css';
import { socket } from '../../../../Logic/socket-io/socket';

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
    const handleSubmit = (e) => {
    const objMsg ={
          id: crypto.randomUUID(),
          message: message,
          date: new Date()
    }
    e.preventDefault();
    socket.emit('sendMessage',objMsg)
    setMessage('');
  };
/*
  useEffect(() => {
    socket.on("receiveMessage", ({message}) => console.log(message,', mensaje recibido'))
    return () => {
      socket.off("receiveMessage", ({message}) => console.log(message));
    };
  }, []);*/

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
