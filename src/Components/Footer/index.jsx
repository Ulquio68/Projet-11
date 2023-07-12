import logo from '../../Assets/logo-kasa-footer.PNG';
import './index.css';

function Footer() {
  return (
      <footer className='footer'>
        <img src={logo} className="App-logo-footer" alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
  )
}

export default Footer