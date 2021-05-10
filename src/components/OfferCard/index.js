import "./index.css";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  return (
    <div key={offer._id} className="offer-content">
      <Link to={`/offer/${offer._id}`}>
        <div className="offer">
          <div className="owner">
            <img
              className="avatar"
              src={offer.owner.account.avatarPath}
              alt=""
            />
            <span>{offer.owner.account.username}</span>
          </div>
          <img
            className="product-img"
            src={offer.product_image.secure_url}
            alt=""
          />
          <div className="product-price">{`${offer.product_price} €`}</div>
          <div className="product-size">{offer.product_details[0].TAILLE}</div>
          <div className="product-brand">{offer.product_details[0].MARQUE}</div>
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;
