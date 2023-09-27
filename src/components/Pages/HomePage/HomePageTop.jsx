import { Flex, Button, Image, Box, Text, useColorModeValue } from "@chakra-ui/react"
import "./HomePageTop.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const HomePageTop = () => {

	let wordArray = ["DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY", "WEB DESIGN & DEVELOPMENT", "SOCIAL MEDIA MANAGEMENT ", "GRAPHIC DESIGNING AGENCY", "DIGITAL MARKETING AGENCY"]

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
		<Box className="Home-top-container"   bg={useColorModeValue('', '')} >
			<Container>
			<Box className="home-all-heading ">
				<Text className="home-heading-one">Our Expertise Is In Determining What Makes A Firm Unique, Attractive, And Lucrative</Text>
				<Text className="home-heading-two">YOUR SEARCH FOR THE</Text>
				<Text className="home-heading-three" >{currWord}</Text>
				<Text className="home-heading-four"> IN <span style={{ color: "#F47721" }}  >INDIA</span> ENDS HERE....</Text>
			</Box>
			<Flex className="home-btn-img">
			<div style={{marginTop:"3.5%"}} className="home_top_btn_div">
          <Link to ="/contact"><button className="connect_btn">get started</button></Link> 
         </div>
				<Box className="home-top-img-box"><Image className="home-top-img" src="imagegrp.png" alt="home-top-img" /></Box>
			</Flex>

		</Container>
		</Box>
	)
}

