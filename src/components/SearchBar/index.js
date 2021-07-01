import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon="search" color="grey" />
      <input
        type="text"
        placeholder="recherche des articles"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
