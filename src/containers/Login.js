import { Link } from "react-router-dom";
import { useState } from "react";
//UseHistory permet de retourner un tableau où je vais mettre la redirection vers la page d'arrivée une fois connectée
import { useHistory } from "react-router-dom";

import axios from "axios";

const Login = ({ url, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //Je passe mes datas à envoyer à l'API
      const data = {
        email: email,
        password: password,
      };
      //Je me connecte à l'API
      const response = await axios.post(`${url}user/login`, data);
      console.log(response);
      //   Je crée le cookie avec le token attribué
      setUser(response.data.token);

      //Je gère l'erreur si la création du token n'a pas fonctionné
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="formsContainer">
      <div className="loginContent">
        <h1>Se connecter</h1>
        <div className="error">{errorMessage}</div>
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
          <div className="linksConnect">
            <button id="bt-login" className="btBlue">
              Se connecter
            </button>
            <Link to="/signup">Tu n'as pas de compte ? Inscris-toi !</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
