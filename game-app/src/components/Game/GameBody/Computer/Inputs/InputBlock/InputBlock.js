import React from "react";
import "./InputBlock.scss";

function InputBlock(props) {
  return (
    <div className="input-block">
      {props.inputNumber}. {props.computerInput}
    </div>
  );
}

export default InputBlock;
