import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon="search" color="grey" />
      <input type="text" placeholder="recherche des articles" />
    </div>
  );
};

export default SearchBar;
