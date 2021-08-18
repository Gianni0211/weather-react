import React from "react";
import "./MainCard.css";
import SearchBar from "./SearchBar/SearchBar";
import IconCard from "./IconCard/IconCard";

const mainCard = (props) => {
  return (
    <div className="main-card">
      <SearchBar />
      <IconCard />
    </div>
  );
};

export default mainCard;
