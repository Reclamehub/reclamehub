import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

import "./Footer.css"
import { Link } from "react-router-dom";
import { color } from "framer-motion";

export const Footer = () => {


    return (
    <Box fontFamily={"poppins"} bg={useColorModeValue('white', 'black')} className="foot-main-container" borderRadius={"20px"}>
        <Box padding="5px">
            <Flex justifyContent={"space-between"} flexWrap={"wrap"} >

                <Box m={{ base: "auto", sm: "auto", md: "1px", lg: "1px", xl: "1px" }} w={{ base: "95%", sm: "35%", md: "40%", lg: "30%", xl: "30%" }} textAlign={"left"}>

                    <Box> <Link to="/"><Image h={{ base: "50px", sm: "30px", md: "50px", lg: "50px", xl: "50px" }} src="navicon.png" bgColor={"white"} borderRadius={"60px"} border="1px solid black" color={"white"} alt="reclame-icon" /></Link></Box>

                    <Box mt={{ base: "5px", sm: "7px", md: "10px", lg: "10px", xl: "10px" }}><Text className="footer-desc" fontSize={{ base: "2.5vw", sm: "2.5vw", md: "1vw", lg: "1vw", xl: ".9vw" }}>
We Have A Young Team From Professional Backgrounds Who Are Waiting To Transform Your Brand With Their Infectious Passion For Storytelling In This Digital World. An Army Of Creative Thinkers In Noida Who Spend A Productive Amount Of Their Time On Digital Media To Explore And Grow Rapidly.</Text></Box>

                    <Box mt={{ base: "20px", sm: "20px", md: "10px", lg: "10px", xl: "10px" }} width={"90%"} >
                        <Flex justifyContent={"space-around"} alignItems={"center"}  >
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.facebook.com/reclamehubofficial/"><FaFacebookF className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.instagram.com/reclamehub/?hl=en"><FaInstagram className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href=""><FaYoutube className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://twitter.com/Reclamehubindia"><FaTwitter className="icon-media" /></a></Box>
                            <Box _hover={{ color: "#F47721" }}><a href="https://www.linkedin.com/company/reclame-hub/?originalSubdomain=in"><FaLinkedinIn className="icon-media" /></a></Box>
                        </Flex>
                    </Box>

                </Box>

                <Box>
                    <Heading className="footer-sub-heading" fontSize={{ base: "3vw", sm: "3vw", md: "1.5vw", lg: "1.5vw", xl: "1.5vw" }}>OUR SERVICE</Heading>

                    <Link className="footer_working_link" to="/graphic-designing"> <Text className="foot-sub-text" mt={{ base: "10px", sm: "10px", md: "10px", lg: "20px", xl: "25px" }}>GRAPHIC DESIGNING</Text></Link>
                    <Link className="footer_working_link" to="/social-media-management">  <Text className="foot-sub-text">SOCIAL MEDIA MANAGEMENT</Text></Link>
                    <Link className="footer_working_link" to="/web-design-development"><Text className="foot-sub-text">WEB DEVELOPMENT</Text></Link>
                    <Link className="footer_working_link" to="/email-marketing"><Text className="foot-sub-text">EMAIL MARKETING</Text></Link>
                </Box>

                <Box textAlign={"left"}>
                    <Heading className="footer-sub-heading" fontSize={{ base: "3vw", sm: "3vw", md: "1.5vw", lg: "1.5vw", xl: "1.5vw" }}>QUICK LINKS</Heading>

                    <Text className="foot-sub-text" _hover={{ color: "#F47721" }} mt={{ base: "5px", sm: "7px", md: "10px", lg: "20px", xl: "25px" }}><Link to="/blog"> BLOGS </Link></Text>
                    <Text className="foot-sub-text"> TERMS & CONDITION</Text>
                    <Text className="foot-sub-text">REFUND POLICY</Text>
                    <Text className="foot-sub-text">PRESS RELEASE</Text>
                </Box>

                <Box>
                    <Heading className="footer-sub-heading " style={{marginLeft:"0px"}} fontSize={{ base: "3vw", sm: "3vw", md: "1.5vw", lg: "1.5vw", xl: "1.5vw" }}>CONTACT US</Heading>

                 <Text className="foot-sub-text ph_link" mt={{ base: "5px", sm: "7px", md: "10px", lg: "20px", xl: "25px" }}> <a href="tel:9120190055">+91-9120190055</a></Text>
                    <Text className="foot-sub-text em_link"> <a href="mailto:">info@reclamehub.com </a></Text>
                  <Link className="footer_working_link" to="/address">  <Text className="foot-sub-text" >808, 8th Floor Iconic Tower</Text>
                    <Text className="foot-sub-text" >Sector 62, Noida, 201301</Text>
                    <Text className="foot-sub-text" >Uttar Pradesh, India</Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    </Box>)
}