import React from "react";
import "./CurrentGuesses.scss";
import GuessBlock from "./GuessBlock/GuessBlock";
import { guesses } from "../../../../constants";

function CurrentGuesses() {
  return (
    <div className="current-guesses-wrap">
      <div className="current-guesses">Current Guesses</div>
      <div className="guess-grid-container">
        {guesses.map((guess, i) => (
          <GuessBlock guess={guess.guess} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CurrentGuesses;
