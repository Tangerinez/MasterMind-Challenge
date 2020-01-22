import React from "react";
import "./GameBody.scss";
import Board from "../Board/Board";
import Computer from "../Computer/Computer";

function GameBody() {
  return (
    <div className="gameBody-wrap">
      <Board />
      <Computer />
    </div>
  );
}

export default GameBody;
