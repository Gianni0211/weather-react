import React, { useContext } from "react";
import "./CloudInfo.css";
import { iconUrl } from "../../../consts/url";
import { capitaliseString } from "../../../utils/logic";
import LocationCurrentContext from "../../../store/LocationCurrentContext";

const CloudInfo = (props) => {
  const [currentWeather, setCurrentWeather] = useContext(
    LocationCurrentContext
  );
  console.log(currentWeather);
  let cloudIcon = "03d";
  let cloudData = "";
  let rainIcon = "09d";
  let rainData = "Rain - 0%";

  if (Object.keys(currentWeather).length !== 0) {
    const currentTempData = currentWeather.list[0];

    cloudData = capitaliseString(currentTempData.weather[0].description);
    if (currentTempData.rain) {
      let percentage = (currentTempData.rain["3h"] * 100).toString() + "%";
      rainData = `Rain - ${percentage}`;
    }
  }
  return (
    <div className="cloud-info-container">
      <div className="info-container">
        <img
          className="data-icon"
          src={`${iconUrl}${cloudIcon}.png`}
          alt="clouds icon"
        />
        <p className="data">{cloudData}</p>
      </div>
      <div className="info-container">
        <img
          className="data-icon"
          src={`${iconUrl}${rainIcon}.png`}
          alt="rain icon"
        />
        <p className="data">{rainData}</p>
      </div>
    </div>
  );
};
export default CloudInfo;
