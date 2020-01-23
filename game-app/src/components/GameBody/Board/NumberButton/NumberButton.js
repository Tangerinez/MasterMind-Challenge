import React from "react";
import "./NumberButton.scss";

function NumberButton(props) {
  return (
    <button
      className="number-button"
      value={props.number}
      onClick={props.handleGuess}
    >
      {props.number}
    </button>
  );
}

export default NumberButton;
