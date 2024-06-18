import '../css/Card.css';
import quote from '../../public/img/profile/quote.png';

const Card = ({ profile, username, instance, review }) => {
  return (
    <div className="Card">
      <div className="Card-container">
        <div className="Card-quote">
          <img src={quote} alt="quote" className="quote-img" />
        </div>
        <div className="Card-inner">
          <p className="Card-text-review">{review}</p>
          <div className="Card-profile">
            <div className="Card-profile-image">
              <img className="Card-img" src={profile} alt="profile-account" />
            </div>
            <div className="Card-profile-Identity">
              <p className="Card-profile-name">{username}</p>
              <p className="Card-profile-instance">{instance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
