import React from "react";
import "./InputBlock.scss";

function InputBlock(props) {
  return (
    <div className="input-block">
      {props.guessNumber}. {props.input}
    </div>
  );
}

export default InputBlock;
