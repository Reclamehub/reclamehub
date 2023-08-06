import React from "react";
const ImageComponent = ({ onClick }) => {
    return (
      <div>
      <img
        src="startup.png" // Replace this with the URL of your image
        alt="Your Image"
        onClick={onClick}
        style={{ cursor: "pointer", maxWidth: "300px" }} // Add some styling for the image
      />
      </div>
    );
  };
  export default ImageComponent