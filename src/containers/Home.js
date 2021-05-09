//Import d'Axios pour pouvoir faire des requetes vers l'API après installation via terminal : yarn add axios
import axios from "axios";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import useState
import { useState, useEffect } from "react";

const Home = ({ url }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [priceSort, setPriceSort] = useState("price-asc");

  //Chargement des données de l'API via la fonction fetchData
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}offers/?sort=${priceSort}`);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      setPriceSort(priceSort);
    };
    fetchData();
  }, [url, priceSort]);

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
