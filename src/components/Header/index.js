import "./index.css";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="/logo-vinted.png" alt="Logo Vinted" />
      </Link>

      <input
        className="searchBar"
        type="text"
        placeholder="recherche des articles"
      />
      <div className="buttons">
        <div className="btsHeader">
          {userToken ? (
            <button onClick={() => setUser(null)}>Se déconnecter</button>
          ) : (
            <>
              <Link to="/signup">
                <div>S'inscrire</div>
              </Link>
              <Link to="/login">
                <div>Se connecter</div>
              </Link>
            </>
          )}
        </div>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
