import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"

import "./Help.css"

export const Help=()=>{



    return (<Box paddingTop={"50px"} paddingBottom={"50px"} borderTop={"4px solid white"} borderBottom={"4px solid white"}  bg={useColorModeValue('white', '#1f1f1f')}>
    <Heading as="h2" className="help-heading" fontSize={{base:"6vw",sm:"3.7vw",md:"3.7vw",lg:"3.7vw",xl:"3.7vw"}}>CLIENT <span style={{ color:"#F47721"}}>WE'VE HELPED </span>GROW</Heading>
        <br />
    <Text w={{base:"90%",sm:"80%",md:"80%",lg:"50%",xl:"50%"}} m="auto" className="help-text" >We had the honor of working with prestigious clients to improve their digital marketing websites with appealing content. Our joint efforts resulted in considerable growth and greater engagement for their web presence.</Text>
    <br />
    <Box alignItems={"center"} margin={"auto"} w={{base:"80%",sm:"70%",md:"60%",lg:"50%",xl:"45%"}}><Image src="helpgif.gif" alt="help-img" /></Box>
    <br />
    <br />
    </Box>)
}