import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

import {FaFacebookF,FaYoutube,FaTwitter,FaLinkedinIn,FaInstagram} from "react-icons/fa"

import "./Footer.css"

export const Footer=()=>{


    return(<Box fontFamily={"poppins"} bg={useColorModeValue('white', 'black')} className="foot-main-container" >
        <Box padding="20px">
            <Flex justifyContent={"space-between"  }>
                <Box w="30%" textAlign={"left"}>
                    <Box><Image h={"50px"} src="navicon.png" bgColor={"white"} borderRadius={"60px"} border="1px solid black" color={"white"}  alt="reclame-icon" /></Box>
                    <br />
                    <Box><Text className="footer-desc">“We have a young team from professional backgrounds who are waiting to transform your brand with their infectious passion for storytelling in this digital world.An army of creative thinkers in Noida, who spend a productive amount of their time on digital to explore & grow rapidly.”</Text></Box>
                    <br />
                    <Box>
                        <Flex gap="20px" >
                        <Box ><FaFacebookF color="orangered" size="2vw" /></Box>
                        <Box><FaInstagram color="orangered" size="2vw"/></Box>
                        <Box><FaYoutube color="orangered" size="2vw" /></Box>
                        <Box><FaTwitter color="orangered" size="2vw" /></Box>
                        <Box><FaLinkedinIn color="orangered" size="2vw" /></Box>
                        
                        </Flex></Box>
                </Box>
                <Box>
                    <Heading className="footer-sub-heading" fontSize={"1.5vw"}>OUR SERVICE</Heading>
                    <br />
                    <Text className="foot-sub-text">GRAPHIC DESINING</Text>
                    <Text className="foot-sub-text">SOCIAL MEDIA MANAGEMENT</Text>
                    <Text className="foot-sub-text">WEB DEVELOPMENT</Text>
                    <Text className="foot-sub-text">EMAILER MARKETING</Text>
                </Box>
                <Box>
                <Heading className="footer-sub-heading" fontSize={"1.5vw"}>QUICK LINKS</Heading>
                <br />
                    <Text className="foot-sub-text">BLOGS</Text>
                    <Text className="foot-sub-text"> TERMS & CONDITION</Text>
                    <Text className="foot-sub-text">REFUND POLICY</Text>
                    <Text className="foot-sub-text">PRESS RELEASE</Text>
                </Box>
                <Box>
                <Heading className="footer-sub-heading" fontSize={"1.5vw"}>CONTACT US</Heading>
                    <br />
                    <Text className="foot-sub-text">+91-912019005</Text>
                    <Text className="foot-sub-text">info@reclamehub.com</Text>
                    <Text className="foot-sub-text">8th Floor Iconic Tower</Text>
                    <Text className="foot-sub-text">Sector 62 Noida 201301</Text>

                </Box>
            </Flex>
        </Box>
    </Box>)
}