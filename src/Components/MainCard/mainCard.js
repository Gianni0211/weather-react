import React from "react";
import "./MainCard.css";
import SearchBar from "./SearchBar/SearchBar";
import IconCard from "./IconCard/IconCard";
import CloudInfo from "./CloudInfo/CloudInfo";
import LocationCard from "./LocationCard/LocationCard";

const mainCard = (props) => {
  return (
    <div className="main-card">
      <SearchBar />
      <IconCard />
      <CloudInfo />
      <LocationCard />
    </div>
  );
};

export default mainCard;
