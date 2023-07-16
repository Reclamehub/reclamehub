import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react"

import "./HomeAbout.css"
export const HomeAbout = () => {

    return (
        <Box bg={useColorModeValue('white', 'black')} className="home-about-container">
            <Box className="home-about-text" w={{ base: "90%", sm: "70%", md: "58%", lg: "58%", xl: "57%" }} margin={"auto"} p="10px" >
                <Heading fontSize={"3.5vw"}>WHO  <span style={{ color: "#F47721" }}>WE</span> ARE</Heading>
                <br />
                <Text fontSize={{ base: "2.4vw", sm: "1.2vw", md: "1.2vw", lg: "1.2vw", xl: "1.3vw" }}>
                    We are a group of passionate experts committed to helping businesses thrive in this digital world. We specialize in building smart and inventive digital marketing solutions that produce results, drawing on a wealth of experience and knowledge. We believe in the power of cooperation and work together to develop complete and integrated campaigns.
                    From initial discussions to project handover and beyond, our skilled team is here to help you.
                </Text>
            </Box>
            <br />
            <Box className="up-shadow"></Box>
            <Box className="home-about-band" backgroundColor={useColorModeValue("white", "#1d1d1d")}></Box>
        </Box>
    )
}