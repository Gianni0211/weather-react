import React from "react";
import "./MainCard.css";
import SearchBar from "./SearchBar/SearchBar";
import IconCard from "./IconCard/IconCard";
import CloudInfo from "./CloudInfo/CloudInfo";

const mainCard = (props) => {
  return (
    <div className="main-card">
      <SearchBar />
      <IconCard />
      <CloudInfo />
    </div>
  );
};

export default mainCard;
