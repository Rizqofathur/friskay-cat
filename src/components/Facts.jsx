import '../css/Facts.css';

const Facts = () => {
  return (
    <section className="Facts-section">
      <div className="Facts-image">
        <img src="../../public/cat-bowl.png" alt="cat-in-bowl" className="Facts-img" />
      </div>
      <div className="Facts-container">
        <div className="Facts-content">
          <div className="Fact">
            <div className="Fact-header">
              <h4 className="Fact-header-text">FACT 1</h4>
            </div>
            <p className="Fact-caption">Free from artificial colors, flavors, and preservatives, our cat food offers a natural and nutritious diet for your feline friend.</p>
          </div>
          <div className="Fact">
            <div className="Fact-header">
              <h4 className="Fact-header-text">FACT 2</h4>
            </div>
            <p className="Fact-caption">Enriched with omega-3 and omega-6 fatty acids, it promotes a shiny coat and healthy skin, making it ideal for cats with sensitive skin</p>
          </div>
          <div className="Fact">
            <div className="Fact-header">
              <h4 className="Fact-header-text">FACT 3</h4>
            </div>
            <p className="Fact-caption">Packed with high-quality protein, our new cat food supports strong muscles and a healthy heart in cats of all ages.</p>
          </div>
          <div className="Fact">
            <div className="Fact-header">
              <h4 className="Fact-header-text">FACT 4</h4>
            </div>
            <p className="Fact-caption">Formulated with prebiotics and probiotics, this cat food aids in digestion and supports a balanced gut microbiome.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
