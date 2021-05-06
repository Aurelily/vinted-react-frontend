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

//import de mes composants utilisés ici
import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

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
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
