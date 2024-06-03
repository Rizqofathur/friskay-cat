import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-wrapper">
        <div className="Footer-logo">
          <img src="../../public/friskay.svg" alt="Friskay-text" className="Footer-img" />
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
