import "./App.css";
//Import d'Axios pour pouvoir faire des requetes vers l'API après installation via terminal : yarn add axios
import axios from "axios";
//Après avoir installé le package via le Terminal : yarn add react-router-dom, je l'importe ici
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import du hook useEffect pour précharger les données de l'API et useState
import { useState, useEffect } from "react";

//Import de mes containers (pages)
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Chargement des données de l'API via la fonction fetchData, une seule fois au chargement du site.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
