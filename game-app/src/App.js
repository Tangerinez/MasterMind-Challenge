import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import GameBody from "./components/GameBody/GameBody";

function App() {
  return (
    <div className="App">
      <Banner />
      <GameBody />
    </div>
  );
}

export default App;
