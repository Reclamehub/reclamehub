import { CgProfile } from "react-icons/cg"
import {AiOutlinePhone} from "react-icons/ai"
import {MdAlternateEmail} from "react-icons/md"
import {FiMail} from "react-icons/fi"
import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Textarea, useColorModeValue } from "@chakra-ui/react"

import "./ContactUsPageForm.css"

export const ContactUsPageForm=()=>{





    return(<Box w="80%" m="auto" p="10px" mb={"20px"} bg={useColorModeValue('white', "black")} boxShadow={"xl"}>
        <Box><Heading color="orangered">CONTACT US</Heading></Box>
        <br />
        <Box fontWeight={"500"}>We are available for a friendly chat to discuss your business needs,no obligation</Box>
<br />
<Box width={"55%"} margin={"auto"} >
    <form>
      <Box display={"flex"} gap={"10px"} padding={"10px"} marginBottom="20px"  >
   
   
   
    <Box  width={"50%"} lineHeight={"5px"} >
<InputGroup bg={"gray.600"}  mt="15px"  borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Name' _placeholder={{ opacity: 1, color: 'white' }} />
<InputRightElement pointerEvents='none'>
<CgProfile size="2vw" color='white' height={"100%" }  />
</InputRightElement>
</InputGroup>

<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Email' _placeholder={{ opacity: 1, color: 'white' }} />
<InputRightElement pointerEvents='none'>
<MdAlternateEmail size="2vw" color='white' height={"100%" }  />
</InputRightElement>
</InputGroup>



<InputGroup bg={"gray.600"} mt="15px" borderRadius={"10px"}>
<Input type='tel' placeholder='Enter Mobile Number' _placeholder={{ opacity: 1, color: 'white' }}/>
<InputRightElement pointerEvents='none'>
<AiOutlinePhone size="2vw" color='white' height={"100%" }  />
</InputRightElement>
</InputGroup>
</Box>
   
<Box  width={"50%"}  bg={"gray.600"} mt="15px" borderRadius={"5px"}>
     <Box display={"flex"} justifyContent={"space-between"} m="5px">
      <Box color={"white"}>Enter Your Message</Box>
      <Box> <FiMail color="white" size="1.5vw" /></Box> 
      </Box>
      <Textarea height={"80%"} ></Textarea>
    </Box>

  </Box>
<Button backgroundColor={"orangered"}>Send Message</Button>
    </form>
</Box>
    </Box>)
}

