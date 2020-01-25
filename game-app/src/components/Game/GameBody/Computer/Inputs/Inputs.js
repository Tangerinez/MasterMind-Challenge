import React from "react";
import "./Inputs.scss";
import InputBlock from "./InputBlock/InputBlock";
import { inputs } from "../../../../../constants";

function Inputs() {
  return (
    <div className="inputs-wrap">
      <div className="inputs-title">Current Input</div>
      <div className="inputs-block">
        {inputs.map((input, i) => (
          <InputBlock
            guessNumber={input.guessNumber}
            input={input.input}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Inputs;
