import React from "react";
import "./Computer.scss";
import CurrentGuesses from "./CurrentGuesses/CurrentGuesses";
import Inputs from "./Inputs/Inputs";

function Computer(props) {
  return (
    <div className="computer-wrap">
      <CurrentGuesses userGuesses={props.userGuesses} />
      <Inputs
        computerInput={props.computerInput}
        inputNumber={props.inputNumber}
      />
    </div>
  );
}

export default Computer;
