import '../css/Card.css';

const Card = () => {
  return (
    <div className="Card">
      <div className="Card-container">
        <div className="Card-quote">
          <img src="../../public/quote.png" alt="quote" className="quote-img" />
        </div>
        <div className="Card-inner">
          <p className="Card-text-review">
            I&apos;ve never seen a cat food like this before. The nutritional balance is exceptional, and I&apos;ve noticed remarkable improvements in the coat and energy levels of the cats I&apos;ve recommended it to. It&apos;s a
            game-changer in feline nutrition.
          </p>
          <div className="Card-profile">
            <div className="Card-profile-image">
              <img className="Card-img" src="../../public/profile-1.jpg" alt="profile-account" />
            </div>
            <div className="Card-profile-Identity">
              <p className="Card-profile-name">Fathurrizqo</p>
              <p className="Card-profile-instance">Informatika, UNNES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;