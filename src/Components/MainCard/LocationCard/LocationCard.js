import React, { useContext } from "react";
import "./LocationCard.css";
import LocationCurrentContext from "../../../store/LocationCurrentContext";

const LocationCard = (props) => {
  const [currentWeather, setCurrentWeather] = useContext(
    LocationCurrentContext
  );
  let location = "";
  if (Object.keys(currentWeather).length !== 0) {
    const city = currentWeather.city;
    location = `${city.name}, ${city.country}`;
  }
  return (
    <div className="location-card-container">
      <p className="location">{location}</p>
    </div>
  );
};

export default LocationCard;
