import React from "react";
import "./Banner.scss";
import Rules from "./Rules/Rules";

function Banner() {
  return (
    <div className="banner-wrap">
      <div className="title">Can You Solve the Ouija Board?</div>
      <Rules />
    </div>
  );
}

export default Banner;
