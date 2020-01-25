import React from "react";
import "./Inputs.scss";
import InputBlock from "./InputBlock/InputBlock";

function Inputs(props) {
  console.log(props.computerInput);
  return (
    <div className="inputs-wrap">
      <div className="inputs-title">Current Input</div>
      <div className="inputs-block">
        {props.computerInput.map((computerInput, i) => (
          <InputBlock
            computerInput={computerInput}
            inputNumber={i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Inputs;
