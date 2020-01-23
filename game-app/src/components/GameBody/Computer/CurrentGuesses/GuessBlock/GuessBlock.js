import React from "react";
import "./GuessBlock.scss";

function GuessBlock(props) {
  return <div className="guess-block">{props.guess}</div>;
}

export default GuessBlock;
