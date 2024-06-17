import '../css/Facts.css';

const Facts = () => {
  const facts = [
    {
      id: 1,
      caption: 'Free from artificial colors, flavors, and preservatives, our cat food offers a natural and nutritious diet for your feline friend.',
    },
    {
      id: 2,
      caption: 'Enriched with omega-3 and omega-6 fatty acids, it promotes a shiny coat and healthy skin, making it ideal for cats with sensitive skin.',
    },
    {
      id: 3,
      caption: 'Packed with high-quality protein, our new cat food supports strong muscles and a healthy heart in cats of all ages.',
    },
    {
      id: 4,
      caption: 'Formulated with prebiotics and probiotics, this cat food aids in digestion and supports a balanced gut microbiome.',
    },
  ];

  return (
    <section className="Facts-section">
      <div className="Facts-image">
        <img src="../../public/img/cat-bowl.png" alt="cat-in-bowl" className="Facts-img" />
      </div>
      <div className="Facts-container">
        <div className="Facts-content">
          {facts.map((fact) => (
            <div className="Fact" key={fact.id}>
              <div className="Fact-header">
                <h4 className="Fact-header-text">FACT {fact.id}</h4>
              </div>
              <p className="Fact-caption">{fact.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
