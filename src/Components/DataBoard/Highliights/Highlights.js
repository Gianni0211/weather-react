import React, { useContext } from "react";
import LocationCurrentContext from "../../../store/LocationCurrentContext";
import { createHighlightsData } from "../../../utils/logic";

import "./Highlights.css";

const Highlights = (props) => {
  const [currentWeather, setCurrentWeather] = useContext(
    LocationCurrentContext
  );
  let higlights = createHighlightsData(currentWeather);

  return (
    <div className="highlights-container">
      <h3>Today's Highlights</h3>
      <div className="cards-container"></div>
    </div>
  );
};
export default Highlights;
