import React, { useState } from "react";
import {
  Box,
  useColorModeValue,
  useColorMode,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import swal from "sweetalert";
import "./ContactForm.css";
import { Container } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {BiMessage} from "react-icons/bi"

export const ContactForm = (props) => {
  const { colorMode } = useColorMode();

  const [userData, setUserData] = useState({
    fname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value, maxLength, minLength } = event.target;
    setUserData({ ...userData, [name]: value });

    if (value.length < minLength) {
      setErrors({ ...errors, [name]: `Minimum length is ${minLength} characters` });
    } else if (value.length > maxLength) {
      setErrors({ ...errors, [name]: `Exceeded limit of ${maxLength} characters` });
    } else {
      setErrors({ ...errors, [name]: "" });
    }

    if (name === "email" && value.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: "Invalid email address" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, mobile, email, message } = userData;

    if (fname && mobile && email && message) {
      // Your fetch logic here
      const res = fetch(
        "https://reclamehub-6c70d-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            mobile,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          fname: "",
          mobile: "",
          email: "",
          message: "",
        });
        swal({
          title: "Success!",
          text: "Data successfully stored, we'll get back to you soon!",
          icon: "success",
          button: "Okay !",
        });
      } else {
        swal({
          title: "Oops!",
          text: "Please fill out all the required information!",
          icon: "error",
          button: "Back !",
        });
      }
    } else {
      swal({
        title: "Oops!",
        text: "Please fill out all the required information!",
        icon: "error",
        button: "Back !",
      });
    }
  };

  return (
    <Container fluid className="form_main_Container">
      <div className="heading_div">
        <heading className="page_heading" style={{ color: "#F47721" }}>
          {props.heading}
        </heading>
      </div>

      <div className="mb-5">
        <text className="heading_description">
          We're available for a friendly chat to discuss your business needs, no obligation.
        </text>
      </div>
      <form method="POST" className="contactus_form">
        <wrapper className="inputfield_wrapper">
          {/* left-side-fields */}
          <div>
            <div className="input_errorbox">
              <div className="form_group">
                <input
                  type="text"
                  id="fnameInput"
                  required
                  className="input_fields"
                  name="fname"
                  value={userData.fname}
                  onChange={postUserData}
                  maxLength={25} // Set your desired limit here
                />
                <Icon
                  as={CgProfile}
                  style={{
                    height: "25px",
                    width: "18px",
                    marginLeft: "-30px",
                    marginTop: "12px",
                  }}
                  color={colorMode === "light" ? "black" : "white"}
                />
                <label className="labels" htmlFor="fnameInput">
                  Full Name
                </label>
              </div>
              <div>{errors.fname && <div className="error_message">{errors.fname}</div>}</div>
            </div>

            <div className="input_errorbox">
              <div className="form_group">
                <input
                  className="input_fields"
                  id="mobileInput"
                  required
                  name="mobile"
                  type="number"
                  value={userData.mobile}
                  onChange={postUserData}
                  maxLength={10}
                  minLength={10} // Set your desired limit here
                />
                <Icon
                  as={AiOutlinePhone}
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "-30px",
                    marginTop: "12px",
                  }}
                  color={colorMode === "light" ? "black" : "white"}
                />
                <label className="labels" htmlFor="mobileInput">
                  Mobile No.
                </label>
              </div>
              <div>{errors.mobile && <div className="error_message">{errors.mobile}</div>}</div>
            </div>

            <div className="input_errorbox">
              <div className="form_group">
                <input
                  className="input_fields"
                  id="emailInput"
                  required
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={postUserData}
                  maxLength={50} // Set your desired limit here
                />
                <Icon
                  as={FiMail}
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "-30px",
                    marginTop: "12px",
                  }}
                  color={colorMode === "light" ? "black" : "white"}
                />
                <label className="labels" htmlFor="emailInput">
                  Email
                </label>
              </div>
              <div>{errors.email && <div className="error_message">{errors.email}</div>}</div>
            </div>
          </div>
          {/* left-side-field-ends */}
          {/* right-side-field */}
          <div className="form_group" style={{ marginBottom: "0px" }}>
            <textarea
              className="input_fields mssg_input"
              id="messageInput"
              required
              name="message"
              value={userData.message}
              onChange={postUserData}
              maxLength={200} // Set your desired limit here
            />
            <Icon
              as={BiMessage}
              style={{
                height: "20px",
                width: "20px",
                marginLeft: "-30px",
                marginTop: "12px",
              }}
              color={colorMode === "light" ? "black" : "white"}
            />
            <label className="labels" htmlFor="messageInput">
              Message
            </label>
            {errors.message && <div className="error_message">{errors.message}</div>}
          </div>
        </wrapper>
        {/*  */}
        <div className="submit_btndiv">
          <button className="submit_btn" onClick={submitData} type="submit">
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
};
