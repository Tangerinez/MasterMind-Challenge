import React from "react";
import "./Banner.scss";
import Rules from "./Rules/Rules";

function Banner(props) {
  return (
    <div className="banner-wrap">
      <div className="title">
        {props.username}, Can You Solve the Ouija Board?
      </div>
      <Rules />
    </div>
  );
}

export default Banner;
