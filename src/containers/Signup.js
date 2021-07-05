import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ url, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // //Je passe mes datas à envoyer à l'API
      // const data = {
      //   username: username,
      //   email: email,
      //   password: password,
      // };

      //formData
      const formData = new FormData();
      //ajout des paires clé/valeurs (idem postman)
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar);

      //Je me connecte à l'API
      const response = await axios.post(`${url}user/signup`, formData);
      console.log(response);
      //Je crée le cookie avec le token attribué
      setUser(response.data.token, response.data._id);

      //Je gère l'erreur si la création du token n'a pas fonctionné
      if (response.data.token) {
        setUser(response.data.token, response.data._id);
        history.push("/");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
      //Le catch gère le captage de error.response.status et met à jour ma variable errorMessage pour un affichage sur la page.
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email possède déjà un compte");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
    }
  };

  return (
    <div className="formsContainer">
      <div className="signUpContent">
        <h1>S'inscrire</h1>
        <div className="error">{errorMessage}</div>
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            id="name"
            name="name"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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
          <span style={{ color: "#09b1ba", marginTop: "20px" }}>
            Choisissez votre avatar (optionnel) :
          </span>
          <input
            type="file"
            id="file"
            name="avatar"
            placeholder="Votre avatar"
            onChange={(event) => setAvatar(event.target.files[0])}
          />

          <div className="checkboxNews">
            <div className="checkboxAndLabel">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <span>S'inscrire à notre newsletter</span>
            </div>

            <div className="infosAccept">
              <p>
                En m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
          </div>
          <button id="bt-signup" className="btBlue">
            S'inscrire
          </button>
          <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
