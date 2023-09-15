import React, { useState,useEffect } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import ReactCardFlip from 'react-card-flip';
import './ImgForm.css';

function FormComponent({ onFormSubmit }) {
  const form = useRef();
  const [formData, setFormData] = useState({
    fname: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname) {
      newErrors.fname = 'Name is required';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);

      emailjs
        .sendForm(
          "service_wx18els",
          "template_m03q7s3",
          form.current,
          "sOEaQnJnVavIafK5A"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");

            setFormData({
              fname: '',
              mobileNumber: '',
              email: '',
              message: '',
            });
          },

          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    }
  };

  return (
    <wrapper className="form_outer_container">
      <div className='form_heading1_div'>
        <heading>WELCOME !</heading>
      </div>
      <div className='form_heading2_div'>
        <heading>Reclame hub <br /> <span style={{ color: "#ff7722" }}>digital marketing agency</span></heading>
      </div>
      <div className="form-container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", margin: "auto", textAlign: "center", width: "100%" }}>
          <p style={{ textTransform: "uppercase", fontSize: "16px" }}>talk to our experts</p>
          <p style={{ fontSize: "12px" }}>We are available for a friendly chat to discuss your business needs, no obligation.</p>
        </div>
        <form ref={form} onSubmit={handleSubmit} className='form'>
          <div className="field_errorbox">
            <div className="field_group">
              <input
                id=""
                required
                type="text"
                name="fname"
                className="form_fields"
                value={formData.fname}
                onChange={handleChange}
                />
                <label className="form_labels" htmlFor="fnameInput">
                Name
              </label>
              <img
                style={{ height: '20px', width: '17px', order:"2", marginLeft:"-37px" }}
                src="inputicon1.png"
                alt=""
              />
            </div>
            <div>{errors.name && <p className="error">{errors.name}</p>}</div>
          </div>

          <div className="field_errorbox">
            <div className="field_group">
              <input
                required
                type="text"
                name="mobileNumber"
                className="form_fields"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <img src={"inputicon2.png"} className="ph-icon"
                style={{ height: "20px", width: "20px", marginLeft: "-37px",  }}
              />
              <label className="form_labels" htmlFor="fnameInput">
                Mobile Number
              </label>
            </div>
            <div>
              {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>
          </div>

          <div className="field_errorbox">
            <div className="field_group ">
              <input
                required
                type="email"
                name="email"
                className="form_fields"
                value={formData.email}
                onChange={handleChange}
              />
              <img
                style={{ height: "20px", width: "20px", marginLeft: "-38px",  }}
                src="inputicon3.png"
              />
              <label className="form_labels" htmlFor="fnameInput">
                Email
              </label>
            </div>
            <div>{errors.email && <p className="error">{errors.email}</p>}</div>
          </div>

          <div className="field_errorbox">
            <div className="field_group mss_field">
              <textarea
              required
                name="message"
                className="form_fields mssg_field"
                value={formData.message}
                onChange={handleChange}
              />
              <img
                style={{ height: "20px", width: "20px", marginLeft: "-38px", color: "#fff" }}
                src="inputicon4.png"
              />
              <label className="form_labels" htmlFor="fnameInput">
                Message
              </label>
            </div>
            <div>{errors.message && <p className="error">{errors.message}</p>}</div>
          </div>
          <div className="submit_btndiv">
            <button className="form_submit_btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </wrapper>
  );
}

function ImageWithForm() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFormSubmit = (formData) => {
    // Handle form submission here
    console.log('Form Data:', formData);
    setIsFlipped(false); // Flip back to the image after form submission
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    // Use setTimeout to automatically flip the card after 2 seconds
    const flipTimer = setTimeout(() => {
      setIsFlipped(true);
    }, 2000);

    return () => {
      // Clear the timer when the component unmounts
      clearTimeout(flipTimer);
    };
  }, []);
  return (
    <div className="image-with-form">
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="image-front" key="front" onClick={handleImageClick}>
        {/* Your image element goes here */}
        <img src="startup.png" alt="Your Image" />
      </div>
      <div className="image-back" key="back">
        <FormComponent onFormSubmit={handleFormSubmit} />
      </div>
    </ReactCardFlip>
  </div>
  );
}

export default ImageWithForm;
