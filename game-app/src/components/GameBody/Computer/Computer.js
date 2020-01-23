import React from "react";
import "./Computer.scss";
import CurrentGuesses from "./CurrentGuesses/CurrentGuesses";

function Computer() {
  return (
    <div className="computer-wrap">
      <CurrentGuesses />
    </div>
  );
}

export default Computer;
