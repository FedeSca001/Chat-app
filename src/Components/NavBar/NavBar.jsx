import './NavBar.css';

export function NavBar() {
  const handleLogout = () => {
    // cerrar sesion
    localStorage.removeItem('user');
    window.location.reload(); // Recargas la página
  };

  return (
    <nav className='nav-bar'>
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
