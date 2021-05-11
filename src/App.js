import "./App.css";
//Import de useState pour gérer le userToken/setUserToken
import { useState } from "react";

//Après avoir installé le package via le Terminal : yarn add react-router-dom, je l'importe ici
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Après avoir installé le package via le Terminal : yarn add js-cookie, je l'importe ici
import Cookies from "js-cookie";

//Import de mes containers (pages)
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

//import de mes composants utilisés ici
import Header from "./components/Header";

//variable URL
// const url = "http://localhost:3001/";
const url = "https://lily-vinted.herokuapp.com/";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [priceSort, setPriceSort] = useState("price-desc");
  const [priceMax, setPriceMax] = useState(200);
  const [priceMin, setPriceMin] = useState(0);

  const setUser = (token) => {
    if (token) {
      //on crée le cookie avec le token du user
      Cookies.set("userToken", token, { expires: 10 });
      setUserToken(token);
    } else {
      //on supprime le cookie du user en cours pour se déconnecter
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        url={url}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer url={url} />
        </Route>
        <Route path="/signup">
          <Signup url={url} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login url={url} setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish url={url} userToken={userToken} />
        </Route>
        <Route path="/payment">
          <Payment url={url} userToken={userToken} />
        </Route>
        <Route path="/">
          <Home
            url={url}
            priceSort={priceSort}
            setPriceSort={setPriceSort}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
