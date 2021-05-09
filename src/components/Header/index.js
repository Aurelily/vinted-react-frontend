import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Slider from "../Slider";
import SwitchBar from "../SwitchBar";

//import FontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faSortUp, faSortDown);

const Header = ({ userToken, setUser, url }) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="/logo-vinted.png" alt="Logo Vinted" />
      </Link>
      <div className="searchFilter">
        <div className="searchBar">
          <FontAwesomeIcon icon="search" color="grey" />
          <input type="text" placeholder="recherche des articles" />
        </div>
        <div className="switchBar">
          <span>Tri par prix :</span>
          <SwitchBar url={url} />
        </div>
        {/* <Slider /> */}
      </div>

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
