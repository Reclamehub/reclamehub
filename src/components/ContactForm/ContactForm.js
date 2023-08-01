import React, { useState } from "react"
import swal from 'sweetalert';
import { CgProfile } from "react-icons/cg"
import { AiOutlinePhone } from "react-icons/ai"
import { MdAlternatemobile } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import  {FaPhone} from "react-icons/fa"
import { Box,  useColorModeValue } from "@chakra-ui/react"
import "./ContactForm.css"
import { Container } from "react-bootstrap";



export const ContactForm = () => {
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
    const { name, value, maxLength,minLength } = event.target;
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
        button: "Okay!",
      });
    } else {
      swal({
        title: "Oops!",
        text: "Please fill out all the required information!",
        icon: "error",
        button: "Back!",
      });
    }
  };

  return (
    <Container fluid className="form_main_Container">
      <div className="heading_div">
        <heading className="page_heading" style={{color:"#F47721"}}>contact us</heading>
      </div>
    
      <div className="mb-5">
        <text className="heading_description">We're available for a friendly chat to discuss your business needs, no obligation.
        </text>
      </div>
      <form method="POST">
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

              <img
                style={{ height: "20px", width: "17px", marginLeft: "-30px", marginTop: "12px" }}
                src="person-icon2.png"
              />  
              <label className="labels" htmlFor="fnameInput">
                Full Name
              </label>
           </div>
           <div>
              {errors.fname && <div className="error_message">{errors.fname}</div>}
        </div>
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
           <img src={"ph-icon.png"} className="ph-icon" style={{ height: "20px", width: "20px", marginLeft: "-30px", marginTop: "12px", }}/>
             <label className="labels" htmlFor="mobileInput">
                Mobile No.
                </label>
         </div>
         <div>
             {errors.mobile && <div className="error_message">{errors.mobile}</div>}
            </div>
         </div>
              
         
       <div className="input_errorbox">
        <div className="form_group">
        <input
                className="input_fields"
                id=""
                required
                name="email"
                type="mail"
                value={userData.email}
                onChange={postUserData}
                maxLength={50} // Set your desired limit here
              />
              <img
                style={{ height: "20px", width: "20px", marginLeft: "-30px", marginTop: "12px" }}
                src="arcticons_spike-email1.png"
              />
              <label className="labels" htmlFor="emailInput">
                Email
              </label>
          </div>
          <div>
              {errors.email && <div className="error_message">{errors.email}</div>}
        </div>
       </div>
       </div> 
        {/* left-side-field-ends */}
        {/* right-side-field */}
       <div className="form_group" style={{marginBottom:"0px"}} >
              <textarea
                className="input_fields mssg_input"
                id="messageInput"
                required
                name="message"
                type="message"
                value={userData.message}
                onChange={postUserData}
                maxLength={200} // Set your desired limit here
              />
              <img
                style={{ height: "20px", width: "20px", marginLeft: "-30px", marginTop: "12px" }}
                src="arcticons_huawei-email1.png"
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





{/*
<Box width={{base:"95%",sm:"80%",md:"80%",lg:"55%",xl:"55%"}} margin={"auto"} >
<form>
<Box display={"flex"} flexWrap={{base:"wrap",sm:"wrap",md:"nowrap",lg:"nowrap",xl:"nowrap"}} gap={"10px"} padding={"10px"} marginBottom="20px"  >



<Box  width={{base:"100%",sm:"85%",md:"80%",lg:"50%",xl:"50%"}} lineHeight={"5px"} >
<InputGroup bg={"gray.600"}  mt="15px"  _hover={{cursor:""}} borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Name' backgroundColor={useColorModeValue("#f5f5f5", "#404040")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white"),fontSize:"16px" }}  />
<InputRightElement pointerEvents='none'>
<CgProfile className="icon-contact" size="25px"  color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>

<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='tel' placeholder='Enter mobile' backgroundColor={useColorModeValue("#f5f5f5", "#404040")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }} />
<InputRightElement pointerEvents='none'>
<MdAlternatemobile size="25px" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>



<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='number' placeholder='Mobile Number' backgroundColor={useColorModeValue("#f5f5f5", "#404040")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }}/>
<InputRightElement pointerEvents='none'>
<AiOutlinePhone size="25px" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>
</Box>



<Box  width={{base:"95%",sm:"80%",md:"80%",lg:"50%",xl:"50%"}}  bg={"gray.600"} mt="15px" borderRadius={"5px"} backgroundColor={useColorModeValue("#f5f5f5", "#404040")}>
<Box display={"flex"} justifyContent={"space-between"} m="5px" >
<Box color={useColorModeValue("black", "white")} >Enter Your Message</Box>
<Box backgroundColor={useColorModeValue("#f5f5f5", "#404040")}> 
<FiMail color={useColorModeValue("black", "white")} size="25px" /></Box> 
</Box>
<Textarea height={"80%"} backgroundColor={useColorModeValue("#f5f5f5", "#404040")}  ></Textarea>
</Box>

</Box>
<br />
<Button backgroundColor={"#F47721"}>SEND MESSAGE</Button>
</form> 
</Box>
*/

}
