import { useState } from "react";
import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import DataBoard from "./Components/DataBoard/DataBoard";

function App() {
  const [location, setLocation] = useState({});
  const value = { location, setLocation };

  return (
    <div className="App">
      <div className="app-container">
        <MainCard />
        <DataBoard />
      </div>
    </div>
  );
}

export default App;
