import React from 'react';
import './MessageList.css';

export function MessageList(props) {
  const { item } = props;

  return (
    <div>
      <p>MessageList: recibe el chat y lo renderiza</p>
      <h3>{item}</h3>
    </div>
  );
}
