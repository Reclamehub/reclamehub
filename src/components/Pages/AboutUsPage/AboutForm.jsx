import { CgProfile } from "react-icons/cg"
import {AiOutlinePhone} from "react-icons/ai"
import {MdAlternateEmail} from "react-icons/md"
import {FiMail} from "react-icons/fi"
import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Textarea, useColorModeValue } from "@chakra-ui/react"

import "./AboutForm.css"

export const AboutForm=()=>{





    return(<Box w="80%" m="auto"  p="10px" paddingTop={"50px"} mb={"20px"} bg={useColorModeValue('white', "black")} boxShadow={"xl"}>
        <Box><Heading color="#F47721">TALK TO OUR EXPERTS</Heading></Box>
        <br />
        <Box fontWeight={"500"}>We are available for a friendly chat to discuss your business needs, no obligation.</Box>
<br />
<Box width={"55%"} margin={"auto"} >
    <form>
      <Box display={"flex"} gap={"10px"} padding={"10px"} marginBottom="20px"  >
   
   
   
    <Box  width={"50%"} lineHeight={"5px"} >
<InputGroup bg={"gray.600"}  mt="15px"  borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Name' backgroundColor={useColorModeValue("#f5f5f5", "gray")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }} />
<InputRightElement pointerEvents='none'>
<CgProfile size="2vw" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>

<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Email' backgroundColor={useColorModeValue("#f5f5f5", "gray")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }} />
<InputRightElement pointerEvents='none'>
<MdAlternateEmail size="2vw" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>



<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='number' placeholder='Enter Mobile Number' backgroundColor={useColorModeValue("#f5f5f5", "gray")}   _placeholder={{ opacity:useColorModeValue("1","1"), color: useColorModeValue("black","white") }}/>
<InputRightElement pointerEvents='none'>
<AiOutlinePhone size="2vw" color={useColorModeValue("black", "white")} height={"100%" }  />
</InputRightElement>
</InputGroup>
</Box>
   
<Box  width={"50%"}  bg={"gray.600"} mt="15px" borderRadius={"5px"} backgroundColor={useColorModeValue("#f5f5f5", "gray")}>
     <Box display={"flex"} justifyContent={"space-between"} m="5px" >
      <Box color={useColorModeValue("black", "white")} >Enter Your Message</Box>
      <Box backgroundColor={useColorModeValue("#f5f5f5", "gray")}> <FiMail color={useColorModeValue("black", "white")} size="1.5vw" /></Box> 
      </Box>
      <Textarea height={"80%"} backgroundColor={useColorModeValue("#f5f5f5", "gray")}  ></Textarea>
    </Box>

  </Box>
<Button backgroundColor={"#F47721"} fontWeight={"550"}>SEND MESSAGE</Button>
    </form>
</Box>
    </Box>)
}

