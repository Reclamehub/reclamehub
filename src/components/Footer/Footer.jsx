import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

import "./Footer.css"
import { Link } from "react-router-dom";

export const Footer = () => {


    return (<Box fontFamily={"poppins"} bg={useColorModeValue('white', 'black')} className="foot-main-container" borderRadius={"20px"}>
        <Box padding="5px">
            <Flex justifyContent={"space-between"} flexWrap={"wrap"} >
              
                <Box  m={{base:"auto",sm:"auto",md:"1px",lg:"1px",xl:"1px"}} w={{base:"95%",sm:"35%",md:"40%",lg:"30%",xl:"30%"}} textAlign={"left"}>
                    
                    <Box><Image h={{base:"50px",sm:"30px",md:"50px",lg:"50px",xl:"50px"}} src="navicon.png" bgColor={"white"} borderRadius={"60px"} border="1px solid black" color={"white"} alt="reclame-icon" /></Box>
                    
                    <Box  mt={{base:"5px",sm:"7px",md:"10px",lg:"10px",xl:"10px"}}><Text className="footer-desc" fontSize={{base:"3vw",sm:"2vw",md:"1vw",lg:"1vw",xl:"1vw"}}>“We have a young team from professional backgrounds who are waiting to transform your brand with their infectious passion for storytelling in this digital world. An army of creative thinkers in Noida, who spend a productive amount of their time on digital to explore & grow rapidly.”</Text></Box>
                    
                    <Box  mt={{base:"20px",sm:"20px",md:"10px",lg:"10px",xl:"10px"}}>
                        <Flex  justifyContent={"space-around"} >
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.facebook.com/reclamehubofficial/"><FaFacebookF className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.instagram.com/reclamehub/?hl=en"><FaInstagram className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href=""><FaYoutube className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://twitter.com/Reclamehubindia"><FaTwitter className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.linkedin.com/company/reclame-hub/?originalSubdomain=in"><FaLinkedinIn className="icon-media" /></a></Box>
                        </Flex>
                        </Box>

                </Box>

                <Box>
                    <Heading className="footer-sub-heading" fontSize={{base:"3vw",sm:"3vw",md:"1.5vw",lg:"1.5vw",xl:"1.5vw"}}>OUR SERVICE</Heading>
                    
                    <Text className="foot-sub-text" mt={{base:"10px",sm:"10px",md:"10px",lg:"20px",xl:"25px"}}>GRAPHIC DESINING</Text>
                    <Text className="foot-sub-text">SOCIAL MEDIA MANAGEMENT</Text>
                    <Text className="foot-sub-text">WEB DEVELOPMENT</Text>
                    <Text className="foot-sub-text">EMAIL MARKETING</Text>
                </Box>

                <Box>
                    <Heading className="footer-sub-heading" fontSize={{base:"3vw",sm:"3vw",md:"1.5vw",lg:"1.5vw",xl:"1.5vw"}}>QUICK LINKS</Heading>
                    
                    <Text className="foot-sub-text" _hover={{ color: "#F47721" }} mt={{base:"5px",sm:"7px",md:"10px",lg:"20px",xl:"25px"}}><Link to="/blog"> BLOGS </Link></Text>
                    <Text className="foot-sub-text"> TERMS & CONDITION</Text>
                    <Text className="foot-sub-text">REFUND POLICY</Text>
                    <Text className="foot-sub-text">PRESS RELEASE</Text>
                </Box>
                
                <Box>
                    <Heading className="footer-sub-heading" fontSize={{base:"3vw",sm:"3vw",md:"1.5vw",lg:"1.5vw",xl:"1.5vw"}}>CONTACT US</Heading>
                

                    <Text className="foot-sub-text" mt={{base:"5px",sm:"7px",md:"10px",lg:"20px",xl:"25px"}}> <a href="tel:9120190055">+91-9120190055</a></Text>
                    <Text className="foot-sub-text"> <a href="mailto:">info@reclamehub.com </a></Text>
                    <Text className="foot-sub-text" >808, 8th Floor Iconic Tower</Text>
                    <Text className="foot-sub-text" >Sector 62, Noida, 201301</Text>
                    <Text className="foot-sub-text" >Uttar Pradesh, India</Text>
                </Box>
            </Flex>
        </Box>
    </Box>)
}