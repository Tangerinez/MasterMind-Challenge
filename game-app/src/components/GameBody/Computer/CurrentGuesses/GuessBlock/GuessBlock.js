import React from "react";
import "./GuessBlock.scss";

function GuessBlock(props) {
  return <button className="guess-block">{props.guess}</button>;
}

export default GuessBlock;
