import React, { useState } from "react"
import swal from 'sweetalert';
import { CgProfile } from "react-icons/cg"
import { AiOutlinePhone } from "react-icons/ai"
import { MdAlternatemobile } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Textarea, background, useColorModeValue } from "@chakra-ui/react"

import "./ContactForm.css"
import { Container } from "react-bootstrap";

export const ContactForm = () => {
    const [userData, setUserData] = useState({
        fname: "",
        mobile: "",
        email: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };
    const submitData = async (event) => {
        event.preventDefault();
        const { fname, mobile, email, message, } = userData;

        if (fname && mobile && email && message) {
            const res =  fetch(
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
                    title: " Oops!",
                    text: " Please fill out all the required information!",
                    icon: "error",
                    button: "Back !",
                });
            }
        } else {
            swal({
                title: " Oops!",
                text: " Please fill out all the required information!",
                icon: "error",
                button: "Back !",
            });
        }
    };

    return (
    // <Box w="95%" m="auto" p="10px" paddingTop={"50px"} pb={"20px"} bg={useColorModeValue('white', "black")} boxShadow={"xl"}>
<Container fluid className="form_main_Container">
        <Box><Heading color="#F47721">TALK TO OUR EXPERTS</Heading></Box>
        <br />
        <Box fontWeight={"500"}>We are available for a friendly chat to discuss your business needs, no obligation.</Box>
        <br />
        <form method="POST" >
<wrapper className="inputfield_wrapper">
    <div>
            <div className="form_group">
            <input type="text" id="myInput"required className="input_fields"
                name="fname"
                value={userData.fname}
                onChange={postUserData}
                />
                <img style={{height:"20px",width:"20px",color:"black",marginLeft:"-30px",marginTop:'12px'}}src="User.png"/>
             <label for="myInput">Full Name</label>
        </div>
        <div className="form_group">
            <input className="input_fields" id="myInput" required name="mobile" type="number" value={userData.mobile}
                onChange={postUserData} />
                <img style={{height:"20px",width:"20px",color:"black",marginLeft:"-30px",marginTop:'12px'}}src="cil_phone.png"/>
                 <label for="myInput">Mobile No.</label>
                 
        </div>
        <div className="form_group">
            <input className="input_fields" id="myInput" required name="email" type="mail"  value={userData.email}
                onChange={postUserData} />
                <img style={{height:"20px",width:"20px",color:"black",marginLeft:"-30px",marginTop:'12px'}}src="arcticons_spike-email.png"/>
                 <label for="myInput">Email</label>
        </div>
        </div>
        <div>
        <div className="form_group">
            <textarea className="input_fields mssg_input" id="myInput" required name="message" type="message" value={userData.message}
                onChange={postUserData} />
                <img style={{height:"20px",width:"20px",color:"black",marginLeft:"-30px",marginTop:'12px'}}src="arcticons_huawei-email.png"/>
                 <label for="myInput">Message</label>
        </div>
        </div>
        </wrapper>
        <div className='submit_btndiv'>
              <button className="submit_btn" onClick={submitData} type="submit">SEND MESSAGE</button>
            </div>

</form>
</Container>
    )
}





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
