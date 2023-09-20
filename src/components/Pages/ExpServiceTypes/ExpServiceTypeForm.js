import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ExpServiceTypeForm.css';

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
            // Use SweetAlert2 for success
            Swal.fire({
              icon: 'success',
              title: 'SUCCESS!',
              text: 'Your message has been sent successfully!',
            }).then(() => {
              setFormData({
                fname: '',
                mobileNumber: '',
                email: '',
                message: '',
              });
            });
          },
          (error) => {
            console.log(error.text);
            // Use SweetAlert2 for error
            Swal.fire({
              icon: 'error',
              title: 'FAILED...',
              text: 'Something went wrong. Please try again later.',
            });
          }
        );
    }
  };

  return (
    <div className="exptypes_form_outercontainer">
      <div className='exp_types_form'>
        <div style={{ margin: "auto", color: "#000", fontFamily: "poppins", textTransform: "uppercase" }}>
          <h2>Let's Talk</h2>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
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
            </div>
            <div>{errors.fname && <p className="error">{errors.fname}</p>}</div>
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
              <label className="form_labels" htmlFor="fnameInput">
                Message
              </label>
            </div>
            <div>{errors.message && <p className="error">{errors.message}</p>}</div>
          </div>
          <div className="submit_btndiv">
            <button className="form_submit_btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
