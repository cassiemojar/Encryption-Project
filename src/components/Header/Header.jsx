import './Header.css'; 

const Header = ({ title, onNavigate, currentPage }) => {
  const handleWriteClick = () => {
    if (onNavigate) {
      onNavigate('journal');
    }
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="nav-bar">
      <header className="header">
        <div className="title" onClick={handleHomeClick} style={{cursor: 'pointer'}}>
          <p>{title}</p>
        </div>

        <ul className="tabs">
          <li>
            <button>sign in</button>
          </li>
          <li>
            <button onClick={handleWriteClick}>
              {currentPage === 'journal' ? 'back to home' : 'write'}
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;