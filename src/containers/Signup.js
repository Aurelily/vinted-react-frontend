import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      username: username,
      email: email,
      password: password,
    };
    console.log(data);

    const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", data);

    console.log(response);
   
  };


  return (
    <div className="formsContainer">
      <div className="signUpContent">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            id="username"
            name="username"
            value={username}
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
