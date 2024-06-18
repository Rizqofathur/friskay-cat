import '../css/ReviewCards.css';
import Card from './Card';
import profile1 from '../../public/img/profile/profile-1.jpg';
import profile2 from '../../public/img/profile/profile-2.jpg';
import profile3 from '../../public/img/profile/profile-3.jpg';
import profile4 from '../../public/img/profile/profile-4.png';

const ReviewCards = () => {
  const reviews = [
    {
      id: 1,
      profile: profile1,
      username: 'Fathurrizqo',
      instance: 'Informatika, UNNES',
      caption:
        "I've never seen a cat food like this before. The nutritional balance is exceptional, and I've noticed remarkable improvements in the coat and energy levels of the cats I've recommended it to. It's a game-changer in feline nutrition.",
    },
    {
      id: 2,
      profile: profile2,
      username: 'Holyservant',
      instance: 'Google',
      caption:
        "I've never seen a cat food like this before. The nutritional balance is exceptional, and I've noticed remarkable improvements in the coat and energy levels of the cats I've recommended it to. It's a game-changer in feline nutrition.",
    },
    {
      id: 3,
      profile: profile3,
      username: 'Makima',
      instance: 'ChainsawMan.inc',
      caption:
        "I've never seen a cat food like this before. The nutritional balance is exceptional, and I've noticed remarkable improvements in the coat and energy levels of the cats I've recommended it to. It's a game-changer in feline nutrition.",
    },
    {
      id: 4,
      profile: profile4,
      username: 'David',
      instance: 'Gadgetin',
      caption: 'Halo guys, David disini. sebenernya saya gatau kenapa bisa ada di sini, yang pasti ulah developernya yang ga ada bahan buat bikin text lagi. bukan mau review hp atau gadget apapun, saya cuma mau ngisi konten buat card ini.',
    },
  ];

  return (
    <section className="review-cards">
      <div className="cards">
        {reviews.map((review) => (
          <Card profile={review.profile} instance={review.instance} username={review.username} review={review.caption} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default ReviewCards;
