import React from "react";
import "./Board.scss";
import NumberButton from "./NumberButton/NumberButton";

function Board() {
  return (
    <div className="board-wrap">
      <div className="board-head">Ouija Board</div>
      <div className="number-row">
        <NumberButton number={1} />
        <NumberButton number={2} />
        <NumberButton number={3} />
        <NumberButton number={4} />
      </div>
      <div className="number-row">
        <NumberButton number={5} />
        <NumberButton number={6} />
        <NumberButton number={7} />
        <NumberButton number={8} />
      </div>
      <div className="board-bottom">Guesses Remaining: 10</div>
    </div>
  );
}

export default Board;
