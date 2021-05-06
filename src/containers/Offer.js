//import du hook useParams pour récupérer des paramètres passés dans les URLs
import { useParams } from "react-router-dom";

//import useState
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Récupérer l'id du paramètre passé dans l'URL  offer/:id
  const { id } = useParams();

  //On fait une deuxième requète de sureté de mise à jour des infos avec l'id récupérée pour n'avoir que les infos de l'offre cliquée
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="offer-container">
        <div className="col1-picture">
          <img src={data.product_pictures[0].secure_url} alt="" />
        </div>
        <div className="col2-infos">
          <div className="infos-content">
            <div className="infos-top">
              <div className="product-price">{`${data.product_price} €`}</div>
              <div className="product-details">
                {data.product_details.map((elem, index) => {
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
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
              <div className="infos-owner">
                <img
                  className="avatar"
                  src={data.owner.account.avatar.secure_url}
                  alt=""
                />
                <span>{data.owner.account.username}</span>
              </div>
              <button>Acheter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
