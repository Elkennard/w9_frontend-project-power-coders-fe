import React from "react";
import "./brandLogo.css";

function BrandLogo() {
  return (
    <div className="title">
      <h1 className="h1title">Wellbeing Toolkit</h1>
      <img
        className="brandImage"
        src={require("./brandLogo.png")}
        alt="School of Code logo"
      />
    </div>
  );
}

export default BrandLogo;
