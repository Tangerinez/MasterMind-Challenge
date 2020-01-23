import React from "react";
import "./Computer.scss";
import CurrentGuesses from "./CurrentGuesses/CurrentGuesses";
import Inputs from "./Inputs/Inputs";

function Computer() {
  return (
    <div className="computer-wrap">
      <CurrentGuesses />
      <Inputs />
    </div>
  );
}

export default Computer;
