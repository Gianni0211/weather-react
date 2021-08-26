import React, { useContext } from "react";
import { iconUrl } from "../../../consts/url";
import "./IconCard.css";
import LocationCurrentContext from "../../../store/LocationCurrentContext";

const IconCard = (props) => {
  const [currentWeather, setCurrentWeather] = useContext(
    LocationCurrentContext
  );
  const convertDay = (int) => {
    switch (int) {
      case 1:
        return "Monday";

      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Fryday";
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";
      default:
        return "";
    }
  };
  const formatTime = (time) => {
    time = time.split(":");
    time.pop();
    return time.join(":");
  };
  let iconSrc = "";
  let temp = "";
  let tempSymbol = "°F";
  let day = "";
  let time = "";

  if (Object.keys(currentWeather).length !== 0) {
    const currentTempData = currentWeather.list[0];
    let icon = currentTempData.weather[0].icon;

    temp = currentTempData.main.temp;
    let date = new Date(currentTempData.dt_txt);
    day = convertDay(date.getDay());
    time = currentTempData.dt_txt.split(" ")[1];

    time = formatTime(time);

    iconSrc = `${iconUrl}${icon}@4x.png`;
  }

  return (
    <div className="container">
      <img className="icon" src={iconSrc} alt="current weather icon" />
      <div className="text-container">
        <div className="temp-container">
          <span className="temp">{temp}</span>
          <span className="temp-symbol">{tempSymbol}</span>
        </div>
        <div className="day-container">
          <span className="day">{day},</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};
export default IconCard;
