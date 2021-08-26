import React from "react";
import "./MainData.css";
import MainCard from "../MainCard/MainCard";
import DataBoard from "../DataBoard/DataBoard";

const MainData = (props) => {
  return (
    <div className="main-container">
      <div className="main-data-container">
        <MainCard />
        <DataBoard />
      </div>
    </div>
  );
};
export default MainData;
