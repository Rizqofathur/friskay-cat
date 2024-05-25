import '../css/Navbar.css';
import logo from '../../public/friskay.svg';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
    console.log('Aku kangen Xena');
  }
  const isNav = nav ? 'slide' : '';
  return (
    <nav>
      <header className="nav-menu">
        <div className="Wrapper">
          <div className="Logo-Navigation">
            <div className="Logo-Wrapper">
              <div className="Image">
                <img className="Image-Logo" src={logo} alt="friskay_UwU" />
              </div>
            </div>
          </div>
          <div className="Menu">
            <ul className={`${isNav}`}>
              <li>
                <a href="#">Our Food</a>
              </li>
              <li>
                <a href="#">Ingredients</a>
              </li>
              <li>
                <a href="#">Studies</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Menu-toggle-wrapper">
          <div className="Menu-toggle" onClick={handleNav}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
