import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
 import "./ServicePageBanner.css"

export const ServicePageBanner=()=>{

return (<Box  backgroundImage={"homtopbg.png"} textAlign={"left"}  p={{base:"5vw",sm:"5vw",md:"5vw",lg:"5vw",xl:"5vw"}}  display={"flex"} flexWrap={{base:"wrap",sm:"wrap",md:"nowrap",lg:"nowrap",xl:"nowrap"}} justifyContent={"space-around"}>
<Box  w={{base:"100%",sm:"86%",md:"66%",lg:"66%",xl:"66%"}}  >
<Box w={{base:"95%",sm:"95%",md:"85%",lg:"85%",xl:"85%"}}>
    <Heading  fontSize={{base:"7vw",sm:"7vw",md:"4vw",lg:"4vw",xl:"4vw"}}>WE  <span style={{color:"#F47721"}}>PRIORITIZE SERVICES</span></Heading></Box>
<Box><Heading fontSize={{base:"7vw",sm:"7vw",md:"4vw",lg:"4vw",xl:"4vw"}}> AND <span style={{color:"#F47721"}}>SATISFACTION</span></Heading></Box>
<br />
<br />
<Box mt={{base:"-20px",sm:"-20px",md:"1px",lg:"1px",xl:"1px"}}><Text w={{base:"90%",sm:"90%",md:"80%",lg:"80%",xl:"80%"}} fontWeight={"550"}  fontSize={{base:"3.5vw",sm:"4vw",md:"1.2vw",lg:"1.2vw",xl:"1.2vw"}}>AT RECLAME HUB, OUR DIGITAL MARKETING SERVICES CREATE A STRONG CUSTOMER BASE,
SETTING US APART IN THE COMPETITIVE MARKETPLACE. WE PRIORITIZE CLIENT'S NEEDS 
BASED ON THE SIGNIFICANCE OF DIGITAL MARKETING SERVICES FOR THEIR BUSINESSES THAT CREATE A 
CUSTOMER-CENTRIC CULTURE FOR THEIR ENDURING SUCCESS.</Text></Box>
<br />
<br />
<Box className="service-top-btn-box" mt={{base:"-20px",sm:"-20px",md:"1px",lg:"1px",xl:"1px"}}><Link to="/contact" className="service-btn-link" ><Button  className="service-top-btn" size={{base:"xs",sm:"sm", md:"sm", lg:"md", xl:"lg"}} fontSize={{base:"sm",sm:"sm", md:"sm", lg:"xl", xl:"xl"}} fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} backgroundColor={"transparent"} > Get Started</Button></Link></Box>
</Box>
<Box marginLeft={"-20px"} width={{base:"80%",sm:"80%",md:"40%",lg:"40%",xl:"40%"}} display={"flex"} flexDirection={"column-reverse"}>
    <Image src="servicegif.gif" alt="service" />
</Box>
</Box>)


}