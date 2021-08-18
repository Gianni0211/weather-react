import { useState } from "react";
import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import DataBoard from "./Components/DataBoard/DataBoard";
import LocationCurrentContext from "./store/LocationCurrentContext";

function App() {
  const [locationCurrentWeather, setLocationCurrentWeather] = useState({});

  return (
    <LocationCurrentContext.Provider
      value={[locationCurrentWeather, setLocationCurrentWeather]}
    >
      <div className="App">
        <div className="app-container">
          <MainCard />
          <DataBoard />
        </div>
      </div>
    </LocationCurrentContext.Provider>
  );
}

export default App;
