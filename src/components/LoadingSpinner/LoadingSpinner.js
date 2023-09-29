import React from "react";
import { BeatLoader } from "react-spinners";
import "./LoadingSpinner.css"; // Import your CSS for styling the spinner

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
    <BeatLoader color="#f47721" />
    </div>
  );
}

export default LoadingSpinner;
