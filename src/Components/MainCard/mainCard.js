import React from "react";
import "./MainCard.css";
import SearchBar from "../SearchBar/SearchBar";

const mainCard = (props) => {
  return (
    <div className="main-card">
      <SearchBar />
    </div>
  );
};

export default mainCard;
