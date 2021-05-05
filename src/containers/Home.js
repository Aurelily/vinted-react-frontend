//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import de mes composants utilisés ici
import Header from "../components/Header";

const Home = ({ data }) => {
  return (
    <div className="container">
      <Header />
      <div className="hero">
        <h1>Home page Hero</h1>
      </div>
      <div className="content">
        {data.offers.map((offer, index) => {
          // console.log(offer);
          return (
            <div key={offer._id} className="offer-content">
              <Link to={`/offer/${offer._id}`}>
                <div className="offer">
                  <div className="owner">
                    <img
                      className="avatar"
                      src={offer.owner.account.avatar.secure_url}
                      alt=""
                    />
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <img
                    className="product-img"
                    src={offer.product_pictures[0].secure_url}
                    alt=""
                  />
                  <div className="product-price">{`${offer.product_price} €`}</div>
                  <div className="product-size">
                    {offer.product_details[0].TAILLE}
                  </div>
                  <div className="product-brand">
                    {offer.product_details[0].MARQUE}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
