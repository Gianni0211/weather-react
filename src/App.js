import { useState } from "react";
import "./App.css";
import MainData from "./Components/MainData/MainData";
import InitialSearch from "./Components/InitialSearch/InitialSearch";
import LocationCurrentContext from "./store/LocationCurrentContext";

function App() {
  const [locationCurrentWeather, setLocationCurrentWeather] = useState({});
  let isWeather =
    Object.keys(locationCurrentWeather).length !== 0 ? true : false;
  return (
    <LocationCurrentContext.Provider
      value={[locationCurrentWeather, setLocationCurrentWeather]}
    >
      <div className="App">{isWeather ? <MainData /> : <InitialSearch />}</div>
    </LocationCurrentContext.Provider>
  );
}

export default App;
