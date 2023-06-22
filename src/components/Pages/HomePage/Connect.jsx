import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Connect=()=>{


    
    return(<Box bg={useColorModeValue('white', '#1f1f1f')} alignItems={"center"} paddingTop={"50px"} paddingBottom={"50px"}  borderTop={"4px solid white"}>
<Box><Heading>WHAT ARE YOU WAITING FOR?</Heading></Box>
<br />
<br />
<Box> <Link to="/contact"><Button  className="home-top-btn" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Get Started</Button></Link></Box>
    </Box>)
}