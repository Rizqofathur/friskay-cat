import '../css/Navbar.css';
import logo from '../../public/friskay.svg';
import menu from '../../public/Hamburger-Menu.svg';

function handleNav() {
  console.log('nav clicked');
}

const Navbar = () => {
  return (
    <nav>
      <header>
        <div className="Wrapper">
          <div className="Logo-Navigation">
            <div className="Logo-Wrapper">
              <div className="Image">
                <img className="Image-Logo" src={logo} alt="friskay_UwU" />
              </div>
            </div>
          </div>
          <div className="Menu" onClick={handleNav}>
            <img src={menu} alt="menu" className="Hamburger-Menu" />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
