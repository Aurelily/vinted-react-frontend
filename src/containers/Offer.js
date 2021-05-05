//import du hook useParams pour récupérer des paramètres passés dans les URLs
import { useParams } from "react-router-dom";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import de mes composants utilisés ici
import Header from "../components/Header";

const Offer = ({ data }) => {
  //Récupérer l'id
  //Faire une requète au serveur
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <Header />
      <Link to={"/"}>Go to Home page</Link>
      {data.offers.map((offer, index) => {
        if (offer._id === id) {
          return (
            <div key={index} className="offer-container">
              <div className="col1-picture">
                <img src={offer.product_pictures[0].secure_url} alt="" />
              </div>
              <div className="col2-infos">
                <div className="infos-content">
                  <div className="infos-top">
                    <div className="product-price">{`${offer.product_price} €`}</div>
                    <div className="product-details">
                      {offer.product_details.map((elem, index) => {
                        return (
                          <div key={index} className="detail-line">
                            <span>{Object.keys(elem)}</span>
                            <span>{Object.values(elem)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="infos-bottom">
                    <p>{offer.product_name}</p>
                    <p>{offer.product_description}</p>
                    <div className="infos-owner">
                      <img
                        className="avatar"
                        src={offer.owner.account.avatar.secure_url}
                        alt=""
                      />
                      <span>{offer.owner.account.username}</span>
                    </div>
                    <button>Acheter</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Offer;
