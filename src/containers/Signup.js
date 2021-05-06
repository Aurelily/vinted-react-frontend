import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Je passe mes datas à envoyer à l'API
    const data = {
      name: name,
      email: email,
      password: password,
    };
    //Je me connecte à l'API
    const response = await axios.post(
      "https://lily-vinted.herokuapp.com/user/signup",
      data
    );
    console.log(response);

    //Je gère l'erreur si le formulaire n'est pas valide
    if (response.status !== 200) {
      alert("Le formulaire n'a pu être envoyé");
    } else {
      //   Je crée le cookie avec le token attribué
      setUser(data.token);
    }
  };

  return (
    <div className="formsContainer">
      <div className="signUpContent">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            id="name"
            name="name"
            value={name}
            required
            onChange={(event) => {
              setName(event.target.value);
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
          <div className="checkboxNews">
            <input type="checkbox" id="newsletter" name="newsletter" />
            <span>S'inscrire à notre newsletter</span>
          </div>

          <button id="bt-signup">S'inscrire</button>
          <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
