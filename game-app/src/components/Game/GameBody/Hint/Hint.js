import React from "react";
import "./Hint.scss";

function Hint(props) {
  return (
    <div className="hint-btn" onClick={props.handleHint}>
      Hints Left: {props.hints}
    </div>
  );
}

export default Hint;
