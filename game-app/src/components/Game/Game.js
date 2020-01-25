import React from "react";
import Banner from "./Banner/Banner";
import GameBody from "./GameBody/GameBody";

function Game(props) {
  return (
    <div className="game-container">
      <Banner username={props.username} />
      <GameBody />
    </div>
  );
}

export default Game;
