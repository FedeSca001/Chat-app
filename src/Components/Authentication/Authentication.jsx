import { useState } from 'react';
import './Authentication.css';
import { CreateUser } from './CreateUser/CreateUser';
import { Login } from './Login/Login';

export function Authentication() {
  const [switchTab, setSwitchTab] = useState(false);

  return (
    <div className="authentication-container">
      <section className="welcome-column">
        <h1 className="welcome-text">Bienvenidos</h1>
        <p className="app-description">
          Esta es una aplicación increíble que hace cosas maravillosas.
        </p>
      </section>
      <section className="toggle-button-column">
        <div className="container">
          {switchTab ? (
            <CreateUser />
          ) : (
            <Login />
          )}
          <p><strong>-------- or --------</strong></p>
          <div className="button-container">
            <button
              className="toggle-button"
              onClick={() => setSwitchTab(!switchTab)}
            >
              {switchTab ? 'Iniciar Sesión' : 'Crear Usuario'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
