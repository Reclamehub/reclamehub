import React from "react";

const FormComponent = ({ onSubmit }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const inputValue = event.target.elements.inputField.value; // Get the form input value
      onSubmit(inputValue);
    };
  
    return (
      <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputField"
          placeholder="Your input here"
          style={{ marginRight: "10px" }} // Add some spacing
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
  export default FormComponent