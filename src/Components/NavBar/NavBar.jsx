import { deleteUser } from '../../Logic/Storage/storage';
import './NavBar.css';

export function NavBar() {
  const handleLogout = () => {
    deleteUser(); // Llamas a la función para eliminar datos de la sesión
    window.location.reload(); // Recargas la página
  };

  return (
    <nav className='nav-bar'>
      Este es el nav
      <div className='buttons'>
        <button className='btn-nav'>
          <img src="/notifications.svg" alt="Notifications" />
        </button>
        <button className='btn-nav' onClick={handleLogout}>
          <img src="/closeSession.svg" alt="close" />
        </button>
      </div>
    </nav>
  );
}
