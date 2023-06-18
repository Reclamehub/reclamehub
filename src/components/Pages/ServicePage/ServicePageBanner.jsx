import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
 import "./ServicePageBanner.css"

export const ServicePageBanner=()=>{

return (<Box  backgroundImage={"homtopbg.png"} textAlign={"left"}  p="5vw" >

<Box w="65%"><Heading  fontSize={"4vw"}>WE  <span style={{color:"#F47721"}}>PRIORITIZE SERVICES</span></Heading></Box>
<Box><Heading fontSize={"4vw"}> AND <span style={{color:"#F47721"}}>SATISFACTION</span></Heading></Box>
<br />
<br />
<Box><Text w="40%">WE AT OUR RECLAME HUB UNDERSTAND THE VALUE OF HAVING A STRONG ONLINE PRESENCE AND EFFICIENTLY REACHING YOUR TARGET AUDIENCE</Text></Box>
<br />
<br />
<Box className="service-top-btn-box" ><Link to="/contact" className="service-btn-link" ><Button  className="service-top-btn" size={{base:"xs",sm:"sm", md:"sm", lg:"md", xl:"lg"}} fontSize={{base:"sm",sm:"sm", md:"sm", lg:"xl", xl:"xl"}} fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} backgroundColor={"transparent"} > Get Started</Button></Link></Box>

</Box>)


}