import React from "react";
import "./Board.scss";
import NumberButton from "./NumberButton/NumberButton";

function Board(props) {
  return (
    <div className="board-wrap">
      <div className="board-head">Ouija Board</div>
      <div className="number-row">
        <NumberButton number={1} handleGuess={props.handleGuess} />
        <NumberButton number={2} handleGuess={props.handleGuess} />
        <NumberButton number={3} handleGuess={props.handleGuess} />
        <NumberButton number={4} handleGuess={props.handleGuess} />
      </div>
      <div className="number-row">
        <NumberButton number={5} handleGuess={props.handleGuess} />
        <NumberButton number={6} handleGuess={props.handleGuess} />
        <NumberButton number={7} handleGuess={props.handleGuess} />
        <NumberButton number={8} handleGuess={props.handleGuess} />
      </div>
      <div className="board-bottom">
        Guesses Remaining: {props.remainingAttempts}
      </div>
    </div>
  );
}

export default Board;
