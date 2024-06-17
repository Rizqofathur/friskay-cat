import '../css/Hero.css';
import bonkers from '../../public/img/logo/Bonkers.svg';
import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Main-Content">
        <div className="Hero-Wrapper">
          <div className="Hero-Text">
            <h1 className="Hero-text-header">Your cat will go</h1>
            <div className="Bonkers-Text">
              <img className="Bonkers" src={bonkers} alt="bonkers" />
            </div>
            <p className="Hero-text-caption">
              ..for the world’s best testing cat food,
              <br /> sourced with only the finest ingredients. <br />
              Made with love from the heart of <br />
              Mississippi.
            </p>
          </div>
        </div>
        <PrimaryButton />
      </div>
    </section>
  );
};

export default Hero;
