import "./AppButton.css";
import React from "react";

export const AppButton = ({ buttonText, buttonType = "button" }) => {
  return (
    <button type={buttonType}>
      {buttonText}
    </button>
  );
};
