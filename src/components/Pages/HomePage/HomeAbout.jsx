import { Box, Text,Heading, useColorModeValue } from "@chakra-ui/react"

import "./HomeAbout.css"
export const HomeAbout=()=>{



    return (<Box bg={useColorModeValue('white', 'black')} className="home-about-container">
        <Box className="home-about-text" w={{base:"90%",sm:"70%",md:"75%",lg:"60%",xl:"62%"}} margin={"auto"} p="40px" >
        <Heading fontSize={"3.7vw"}>WHO  <span style={{color:"#F47721"}}>WE</span> ARE</Heading>
        <br />
    <Text  fontSize={{base:"2.4vw",sm:"1.4vw",md:"1.4vw",lg:"1.4vw",xl:"1.4vw"}}>We are a group of passionate experts committed to helping businesses thrive in this digital world. We specialize in building smart and inventive digital marketing solutions that produce results, drawing on a wealth of experience and knowledge. We believe in the power of cooperation and work together to develop complete and integrated campaigns.
From initial discussions to project handover and beyond, our skilled team is here to help you.</Text>
    </Box>
    <br />
    <Box className="up-shadow"></Box>
    <Box className="home-about-band"></Box>
    </Box>
    )
}