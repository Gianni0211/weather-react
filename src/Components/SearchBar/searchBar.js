import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchButton from "./SearchButton/SearchButton";

const searchBar = (props) => {
  return (
    <form className="search-bar">
      <span className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <input
        className="search-input"
        type="text"
        placeholder="Search fro places..."
      />
      <SearchButton />
    </form>
  );
};

export default searchBar;
