import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import logo from '../../Assets/logo-kasa.PNG';
import './index.css';

function Header() {
  const location = useLocation();

  return (
    <header id="header">
      <Link to="/">
      <img src={logo} className="App-logo-header" alt="logo" />
      </Link>
      <div className='links'>
        <Link to="/" className={`link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/about" className={`link ${location.pathname === '/about' ? 'active' : ''}`}>A propos</Link>
      </div>
    </header>
  )
}

export default Header