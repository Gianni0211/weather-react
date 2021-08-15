import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import DataBoard from "./Components/DataBoard/DataBoard";

function App() {
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
