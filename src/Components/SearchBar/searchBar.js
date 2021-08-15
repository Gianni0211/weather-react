import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "./SearchButton/SearchButton";

const searchBar = (props) => {
  return (
    <form>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <input type="text" placeholder="Search fro places..." />
      <SearchButton />
    </form>
  );
};

export default searchBar;
