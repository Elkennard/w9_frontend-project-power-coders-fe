import React, { useState } from "react";
import WellbeingForm from "../WellBeingForm/wellBeingForm";
import "./wellBeingButton.css";

function WellBeingButton() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(value) {
    setIsClicked(!value);
  }

  return (
    <>
      <button
        className="wellbeingButton"
        onClick={() => handleClick(isClicked)}
      >
        Wellbeing <br />
        Check-in?
      </button>
      {isClicked && (
        <WellbeingForm handleclick={handleClick} isclicked={isClicked} />
      )}
    </>
  );
}

export default WellBeingButton;
