import '../css/Illustration.css';
import illustration from '../../public/img/decoration/Illustration.svg';

const Illustration = () => {
  return (
    <section className="Image-Container">
      <div className="Illustration-Wrapper">
        <div className="Illustration-Decoration" />
        <div className="Illustration-Image">
          <img className="Illustration-Svg" src={illustration} alt="Mwah" />
        </div>
      </div>
    </section>
  );
};

export default Illustration;
