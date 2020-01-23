import React from "react";
import "./Rules.scss";
import { rules } from "../../../constants";

function Rules() {
  return (
    <div className="rules-wrap">
      <div className="rules">Rules</div>
      <ol className="rule-list">
        {rules.map((rule, i) => (
          <li key={i}>{rule.rule}</li>
        ))}
      </ol>
    </div>
  );
}

export default Rules;
