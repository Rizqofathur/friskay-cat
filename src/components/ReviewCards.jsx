import '../css/ReviewCards.css';
import Card from './Card';

const ReviewCards = () => {
  return (
    <section className="review-cards">
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default ReviewCards;
