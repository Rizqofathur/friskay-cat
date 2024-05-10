import '../css/Illustration.css';
import illustration from '../../public/Illustration.svg';

const Illustration = () => {
  return (
    <section className="Illustration-Section">
      <div className="Illustration-Wrapper">
        <div className="Illustration">
          <div className="Illustration-Image">
            <img className="Illustration-Svg" src={illustration} alt="Mwah" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Illustration;
