import "./App.css";
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
import Footer from "./components/Footer";

//variable URL
// const url = "http://localhost:3001/";
// const url = "https://lily-vinted.herokuapp.com/";
const url = "https://vinted-express-git-main-aurelily.vercel.app/";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  const [priceSort, setPriceSort] = useState("price-desc");
  const [priceMax, setPriceMax] = useState(500);
  const [priceMin, setPriceMin] = useState(0);
  const [search, setSearch] = useState("");

  const setUser = (token, id) => {
    if (token) {
      //on crée le cookie avec le token du user
      Cookies.set("userToken", token, { expires: 10 });
      setUserToken(token);
      Cookies.set("userId", id, { expires: 10 });
      setUserId(id);
    } else {
      //on supprime le cookie du user en cours pour se déconnecter
      Cookies.remove("userToken");
      setUserToken(null);
      Cookies.remove("userId");
      setUserId(null);
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
        search={search}
        setSearch={setSearch}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offer url={url} />
        </Route>
        <Route path="/signup">
          <Signup url={url} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login
            url={url}
            setUser={setUser}
            userId={userId}
            setUserId={setUserId}
          />
        </Route>
        <Route path="/publish">
          <Publish url={url} userToken={userToken} />
        </Route>
        <Route path="/payment">
          <Payment url={url} userToken={userToken} userId={userId} />
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
            search={search}
            setSearch={setSearch}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
