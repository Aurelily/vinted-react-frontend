//Import d'Axios pour pouvoir faire des requetes vers l'API après installation via terminal : yarn add axios
import axios from "axios";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import useState
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Chargement des données de l'API via la fonction fetchData, une seule fois au chargement du site.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="hero"></div>
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
