import { Flex, Button, Image, Box, Text } from "@chakra-ui/react"

import "./HomePageTop.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const HomePageTop = () => {

	let wordArray = ["DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY"]

	const [currWord, setCurrWord] = useState(wordArray[0]);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current++;
				setCurrWord(wordArray[index.current]);
				if (index.current === wordArray.length - 1) {
					setIsActive(false);
				}
			}, 2000);
		}
		return () => clearInterval(interval);
	});


	return (
	<Box className="Home-top-container">
		<Box className="home-all-heading ">
			<Text className="home-heading-one heading_descp_div">Our Expertise Is In Determining What Makes A Firm Unique, Attractive, And Lucrative</Text>
			<Text className="home-heading-two">YOUR SEARCH FOR THE</Text>
			<Text className="home-heading-three" >{currWord}</Text>
			<Text className="home-heading-four"> IN <span style={{ color: "#F47721" }}  >INDIA</span> ENDS HERE....</Text>
		</Box>
		<Flex className="home-btn-img">
			{/* border="2px solid #F47721" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} */}
			<Box className="home-top-btn-box" ><Link to="/contact" className="contact-btn-link" ><Button w={{ base: "100px", sm: "150px", md: "180px", lg: "200px", xl: "200px" }} className="home-top-btn" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }} fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"580"} _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"} backgroundColor={"transparent"} p={{ base: "13px", sm: "14px", md: "25px", lg: "26px", xl: "26px" }} > Get Started</Button></Link></Box>
			<Box className="home-top-img-box"><Image className="home-top-img" src="imagegrp.png" /></Box>
		</Flex>

	</Box>
	)
}

