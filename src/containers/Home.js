//Import d'Axios pour pouvoir faire des requetes vers l'API après installation via terminal : yarn add axios
import axios from "axios";
//import useState
import { useState, useEffect } from "react";
//import composants utilisés
import OfferCard from "../components/OfferCard";

const Home = ({
  url,
  priceSort,
  setPriceSort,
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Chargement des données de l'API via la fonction fetchData
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${url}offers/?priceMax=${priceMax}&priceMin=${priceMin}&sort=${priceSort}`
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
  ]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="hero">
        <img className="tear" src="/tear.svg" alt="" />
        <div className="home-hero-ready">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button className="btBlue">Commencer à vendre</button>
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
