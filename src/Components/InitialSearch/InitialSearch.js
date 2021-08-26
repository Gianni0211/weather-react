import React from "react";
import SearchBar from "../MainCard/SearchBar/SearchBar";
import "./InitialSearch.css";

const InitialSearch = () => {
  return (
    <div className="initial-search-container">
      <div className="search-container-wrapper">
        <h3 className="search-title">Search for weather conditions</h3>
        <SearchBar />
      </div>
    </div>
  );
};
export default InitialSearch;
