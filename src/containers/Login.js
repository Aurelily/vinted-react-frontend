import { Link } from "react-router-dom";
import { useState } from "react";
//UseHistory permet de retourner un tableau où je vais mettre la redirection vers la page d'arrivée une fois connectée
import { useHistory } from "react-router-dom";

import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Je passe mes datas à envoyer à l'API
    const data = {
      email: email,
      password: password,
    };
    //Je me connecte à l'API
    const response = await axios.post(
      "https://lily-vinted.herokuapp.com/user/login",
      data
    );
    console.log(response);
    //   Je crée le cookie avec le token attribué
    setUser(response.data.token);

    //Je gère l'erreur si le formulaire n'est pas valide
    if (response.status !== 200) {
      alert("Unauthorized");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="formsContainer">
      <div className="loginContent">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            name="password"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button id="bt-login">Se connecter</button>
          <Link to="/signup">Tu n'as pas de compte ? Inscris-toi !</Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
