import React, { useState } from 'react';
import swal from 'sweetalert';
import './ImgForm.css'; // Import the CSS file for styling

const ImgForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleImageClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Your form submission logic here
    setShowForm(false); // Hide the form after submission
  };

  const [userData, setUserData] = useState({
    fname: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fname: '',
    mobile: '',
    email: '',
    message: '',
  });

  const postUserData = (event) => {
    const { name, value, maxLength, minLength } = event.target;
    setUserData({ ...userData, [name]: value });

    if (value.length < minLength) {
      setErrors({ ...errors, [name]: `Minimum length is ${minLength} characters` });
    } else if (value.length > maxLength) {
      setErrors({ ...errors, [name]: `Exceeded limit of ${maxLength} characters` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'email' && value.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, mobile, email, message } = userData;

    if (fname && mobile && email && message) {
      // Your fetch logic here
      // ...

      setUserData({
        fname: '',
        mobile: '',
        email: '',
        message: '',
      });

      swal({
        title: 'Success!',
        text: "Data successfully stored, we'll get back to you soon!",
        icon: 'success',
        button: 'Okay!',
      });
    } else {
      swal({
        title: 'Oops!',
        text: 'Please fill out all the required information!',
        icon: 'error',
        button: 'Back!',
      });
    }
  };

  return (
    <div className="image-with-form-container">
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <div className="input_errorbox">
            <input
              type="text"
              name="fname"
              placeholder="Enter your name"
              required
              minLength={2}
              maxLength={50}
              value={userData.fname}
              onChange={postUserData}
            />
            {errors.fname && <div className="error_message">{errors.fname}</div>}
          </div>

          <div className="input_errorbox">
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              required
              minLength={10}
              maxLength={10}
              value={userData.mobile}
              onChange={postUserData}
            />
            {errors.mobile && <div className="error_message">{errors.mobile}</div>}
          </div>

          <div className="input_errorbox">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              maxLength={50}
              value={userData.email}
              onChange={postUserData}
            />
            {errors.email && <div className="error_message">{errors.email}</div>}
          </div>

          <div className="input_errorbox">
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              maxLength={200}
              value={userData.message}
              onChange={postUserData}
            />
            {errors.message && <div className="error_message">{errors.message}</div>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="image-container" onClick={handleImageClick}>
          <img
            src="startup.png"
            alt="Image"
            className="image"
          />
        </div>
      )}
    </div>
  );
};

export default ImgForm;
