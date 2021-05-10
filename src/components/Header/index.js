import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slider from "../Slider";
import SwitchBar from "../SwitchBar";

//import FontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faSortUp, faSortDown);

const Header = ({
  userToken,
  setUser,
  priceSort,
  setPriceSort,
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
}) => {
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
        <div className="filtersBar">
          <div className="switchBar">
            <span>Tri par prix :</span>
            <SwitchBar priceSort={priceSort} setPriceSort={setPriceSort} />
          </div>
          <Slider
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
          />
        </div>
      </div>

      <div className="buttons">
        <div className="btsConnect">
          {userToken ? (
            <button className="btWhite" onClick={() => setUser(null)}>
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <div className="btWhite">S'inscrire</div>
              </Link>
              <Link to="/login">
                <div className="btWhite">Se connecter</div>
              </Link>
            </>
          )}
        </div>
        <button className="btBlue">Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
