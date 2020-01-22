import React from "react";
import "./GameBody.scss";
import Board from "../Board/Board";

function GameBody() {
  return (
    <div className="gameBody-wrap">
      <Board />
      <Board />
    </div>
  );
}

export default GameBody;
