import '../css/SecondSection.css';
import catSteps from '../../public/img/decoration/float-element.png';
import character from '../../public/img/decoration/illustration-2.png';

const SecondSection = () => {
  return (
    <div className="wrapper">
      <div className="second-section-wrapper">
        <div className="second-section-text">
          <h1 className="second-section-header">
            Veternarians go bonkers for our
            <br />
            tasty kitty formula.
          </h1>
        </div>
        <div className="second-section-float">
          <img src={catSteps} alt="cat-steps" />
          <img src={catSteps} alt="cat-steps" />
        </div>
        <div className="container">
          <div className="image-wrapper">
            <div className="white-eclipse">
              <div className="orange-eclipse">
                <div className="image-section">
                  <img src={character} alt="illustration-png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
