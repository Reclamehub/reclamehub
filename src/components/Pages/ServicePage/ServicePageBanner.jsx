import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
 import "./ServicePageBanner.css"

export const ServicePageBanner=()=>{

return (<Box  backgroundImage={"homtopbg.png"} textAlign={"left"}  p="5vw"  display={"flex"} justifyContent={"space-around"}>
<Box w="66%"  >
<Box w="85%"><Heading  fontSize={"4vw"}>WE  <span style={{color:"#F47721"}}>PRIORITIZE SERVICES</span></Heading></Box>
<Box><Heading fontSize={"4vw"}> AND <span style={{color:"#F47721"}}>SATISFACTION</span></Heading></Box>
<br />
<br />
<Box><Text w="80%" fontWeight={"550"}>AT RECLAME HUB, OUR DIGITAL MARKETING SERVICES CREATE A STRONG CUSTOMER BASE,
SETTING US APART IN THE COMPETITIVE MARKETPLACE.WE PRIORITIZE CLIENTS' NEEDS 
BASED ON THE SIGNIFICANCE OF DIGITAL MARKETING SERVICES FOR THEIR BUSINESSES THAT CREATE A 
CUSTOMER-CENTRIC CULTURE FOR THEIR ENDURING SUCCESS.</Text></Box>
<br />
<br />
<Box className="service-top-btn-box" ><Link to="/contact" className="service-btn-link" ><Button  className="service-top-btn" size={{base:"xs",sm:"sm", md:"sm", lg:"md", xl:"lg"}} fontSize={{base:"sm",sm:"sm", md:"sm", lg:"xl", xl:"xl"}} fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} backgroundColor={"transparent"} > Get Started</Button></Link></Box>
</Box>
<Box marginLeft={"-20px"} width={"40%"} display={"flex"} flexDirection={"column-reverse"}>
    <Image src="servicegif.gif" alt="service" />
</Box>
</Box>)


}