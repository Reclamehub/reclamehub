import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Connect=()=>{

    return(<Box alignItems={"center"} marginTop={"50px"} marginBottom={"50px"}>
<Box><Heading>WHAT ARE YOU WAITING FOR ?</Heading></Box>
<br />
<br />
<Box> <Link to="/contact"><Button  className="home-top-btn" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Get Started</Button></Link></Box>
    </Box>)
}