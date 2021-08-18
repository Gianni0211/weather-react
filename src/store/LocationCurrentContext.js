import React from "react";
const LocationCurrentContext = React.createContext({
  locationCurrentWeather: {},
  setLocationCurrent: () => {},
});

export default LocationCurrentContext;
