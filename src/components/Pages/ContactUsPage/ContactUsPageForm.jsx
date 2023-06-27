import { CgProfile } from "react-icons/cg"
import {AiOutlinePhone} from "react-icons/ai"
import {MdAlternateEmail} from "react-icons/md"
import {FiMail} from "react-icons/fi"
import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Textarea, useColorModeValue } from "@chakra-ui/react"

import "./ContactUsPageForm.css"

export const ContactUsPageForm=()=>{




  return(<Box w="80%" m="auto"  p="10px" paddingTop={"50px"} pb={"20px"} bg={useColorModeValue('white', "black")} boxShadow={"xl"}>
  <Box><Heading color="#F47721">CONTACT US</Heading></Box>
  <br />
  <Box fontWeight={"500"}>We are available for a friendly chat to discuss your business needs, no obligation.</Box>
<br />
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
<Input type='tel' placeholder='Enter Email' backgroundColor={useColorModeValue("#f5f5f5", "#404040")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }} />
<InputRightElement pointerEvents='none'>
<MdAlternateEmail size="25px" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>



<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='number' placeholder='Enter Mobile Number' backgroundColor={useColorModeValue("#f5f5f5", "#404040")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }}/>
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
<Button backgroundColor={"#F47721"}>SEND MESSAGE</Button>
</form>
</Box>
</Box>)
}

