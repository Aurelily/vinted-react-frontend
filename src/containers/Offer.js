//import du hook useParams pour récupérer des paramètres passés dans les URLs
//import useHistory pour passer les infos d'une offre de la page offer à la page payment
import { useParams, useHistory } from "react-router-dom";

//import useHistory pour passer les infos d'une offre de la page offer à la page payment

//import useState
import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

//For animated loading
import Loader from "react-loader-spinner";

const Offer = ({ url }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  //Récupérer l'id du paramètre passé dans l'URL  offer/:id
  const { id } = useParams();

  //On fait une deuxième requète de sureté de mise à jour des infos avec l'id récupérée pour n'avoir que les infos de l'offre cliquée
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}offer/${id}`);
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, url]);

  return isLoading ? (
    <div className="container-loading">
      <p>Chargement...</p>
      <Loader
        className="home-loader"
        type="Puff"
        color="#09b1ba"
        height={80}
        width={80}
      />
    </div>
  ) : (
    <div className="container">
      <div className="offer-container">
        <div className="col1-picture">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="col2-infos">
          <div className="infos-content">
            <div className="infos-top">
              <div className="product-price">{`${data.product_price} €`}</div>
              <div className="product-details">
                {data.product_details.map((elem, index) => {
                  return (
                    <div key={index} className="detail-line">
                      <span style={{ color: "#999999" }}>
                        {Object.keys(elem)}
                      </span>
                      <span>{Object.values(elem)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="infos-bottom">
              <div>
                <p style={{ fontWeight: "bold" }}>{data.product_name}</p>
                <p style={{ color: "#999999" }}>{data.product_description}</p>
              </div>

              <div className="infos-owner">
                <img
                  className="avatar"
                  src={data.owner.account.avatarPath}
                  alt=""
                />
                <span>{data.owner.account.username}</span>
              </div>
              <button
                className="btBlue"
                onClick={() => {
                  history.push(
                    `/payment/${data.product_name}/${data.product_price}/${data._id}`,
                    {
                      title: data.product_name,
                      amount: data.product_price,
                      id: data._id,
                    }
                  );
                }}
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
