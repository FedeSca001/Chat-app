import React, { useEffect, useState } from 'react';
import './MessageInput.css';
import { newMessage } from '../../../../Logic/Storage/storage';

export function MessageInput() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newMessage(message, 1,2)
    // Aquí puedes manejar el envío del mensaje, por ejemplo, almacenarlo en un estado global o enviarlo al servidor.
    setMessage(''); // Limpiar el campo de mensaje después de enviarlo.
  };

  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <textarea
          className="message-textarea"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={handleMessageChange}
          rows="3"
        ></textarea>
        <button className="message-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
