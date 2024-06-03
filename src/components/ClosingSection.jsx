import '../css/ClosingSection.css';
import SecondaryButton from './SecondaryButton';

const ClosingSection = () => {
  return (
    <section className="Closing-section">
      <div className="Closing-section-container">
        <div className="Closing-section-content">
          <div className="Closing-section-header">
            <div className="Closing-friskay-wrapper">
              <img className="Closing-section-friskay" src="../../public/friskay.svg" alt="friskay-text" />
            </div>
            <h1 className="Closing-section-text">Are you ready to go bonkers?</h1>
          </div>
          <div className="Closing-section-btn">
            <SecondaryButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
