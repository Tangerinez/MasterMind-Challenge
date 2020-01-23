import React from "react";
import "./CurrentGuesses.scss";
import GuessBlock from "./GuessBlock/GuessBlock";

function CurrentGuesses() {
  return (
    <div className="current-guesses-wrap">
      <div className="current-guesses">Current Guesses</div>
      <div className="guess-row">
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
      </div>
      <div className="guess-row">
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
        <GuessBlock />
      </div>
    </div>
  );
}

export default CurrentGuesses;
