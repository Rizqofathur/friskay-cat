import '../css/Footer.css';
import friskayText from '../../public/img/logo/friskay.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-wrapper">
        <div className="Footer-logo">
          <img src={friskayText} alt="Friskay-text" className="Footer-img" />
        </div>
        <div className="Footer-menu">
          <ul>
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
    </footer>
  );
};

export default Footer;
