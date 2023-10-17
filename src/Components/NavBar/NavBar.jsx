import { deleteUser } from '../../Logic/Storage/storage';
import './NavBar.css';

export function NavBar() {
  return (
    <nav className='nav-bar'>
      Este es el nav
      <div className='buttons'>
        <button className='btn-nav'>
          <img src="../../../public/notifications.svg" alt="Notifications" />
        </button>
        <button className='btn-nav' onClick={deleteUser}>
          <img src="../../../public/closeSession.svg" alt="close" />
        </button>
      </div>
    </nav>
  );
}
