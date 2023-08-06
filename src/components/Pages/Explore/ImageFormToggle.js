// ImageFormToggle.js
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ImageComponent from "./ImageComponent";
import "./ImageFormToggle.css"; // Import the CSS file with the flip animation styles

const ImageFormToggle = () => {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State to hold the form input value

  const handleImageClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (value) => {
    setShowForm(false);
    setInputValue(value);
  };

  return (
    <div className="flip-container">
      <div
        className={`flip-content front-content ${showForm ? "hide" : ""}`}
        onClick={handleImageClick}
      >
        <ImageComponent />
      </div>
      <div className={`flip-content back-content ${showForm ? "show" : ""}`}>
        <FormComponent onSubmit={handleFormSubmit} />
        {inputValue && <p>Last submitted value: {inputValue}</p>}
      </div>
    </div>
  );
};

export default ImageFormToggle;
