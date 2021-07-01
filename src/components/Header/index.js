import "./index.css";
import { Link } from "react-router-dom";

import RangeSlider from "../RangeSlider";
import SwitchBar from "../SwitchBar";

import { useLocation } from "react-router-dom";

//import FontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";
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
  search,
  setSearch,
}) => {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="/logo-vinted.png" alt="Logo Vinted" />
      </Link>
      {location.pathname === "/" && (
        <div className="searchFilter">
          <SearchBar search={search} setSearch={setSearch} />

          <div className="filtersBar">
            <div className="switchBar">
              <span>Tri par prix :</span>
              <SwitchBar priceSort={priceSort} setPriceSort={setPriceSort} />
            </div>
            <div className="sliderBar">
              <span>Prix entre :</span>
              <RangeSlider
                priceMax={priceMax}
                setPriceMax={setPriceMax}
                priceMin={priceMin}
                setPriceMin={setPriceMin}
              />
            </div>
          </div>
        </div>
      )}

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

        <Link to="/publish">
          <div className="btBlue">Vends tes articles</div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
