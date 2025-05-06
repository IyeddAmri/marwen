import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Visit Management Platform</h1>
        <div className="header-links">
          <Link to="/login" className="header-link">Login</Link>
          <Link to="/register" className="header-link">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
