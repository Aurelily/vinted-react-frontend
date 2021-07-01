//Import d'Axios pour pouvoir faire des requetes vers l'API après installation via terminal : yarn add axios
import axios from "axios";
//import useState
import { useState, useEffect } from "react";
//import composants utilisés
import OfferCard from "../components/OfferCard";

//For animated loading
import Loader from "react-loader-spinner";

import { Link } from "react-router-dom";

const Home = ({
  url,
  priceSort,
  setPriceSort,
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
  search,
  setSearch,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Chargement des données de l'API via la fonction fetchData
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${url}offers/?priceMax=${priceMax}&priceMin=${priceMin}&sort=${priceSort}&title=${search}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      setPriceSort(priceSort);
      setPriceMax(priceMax);
      setPriceMin(priceMin);
    };
    fetchData();
  }, [
    url,
    priceSort,
    setPriceSort,
    priceMax,
    priceMin,
    setPriceMax,
    setPriceMin,
    search,
  ]);

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
      <div className="hero">
        <img className="tear" src="/tear.svg" alt="" />
        <div className="home-hero-ready">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <Link to="/publish">
            <div className="btBlue home-hero-ready-bt">Commencer à vendre</div>
          </Link>
        </div>
      </div>
      <div className="content">
        {data.offers.map((offer, index) => {
          console.log(data.offers);
          return <OfferCard key={index} offer={offer} />;
        })}
      </div>
    </div>
  );
};

export default Home;
