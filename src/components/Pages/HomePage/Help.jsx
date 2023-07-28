import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"

import "./Help.css"

export const Help = () => {

    return (
        <Box paddingTop={"50px"} paddingBottom={"50px"} borderTop={"4px solid white"} borderBottom={"4px solid white"} bg={useColorModeValue('white', '#1f1f1f')}>
           <div className="heading_div">
            <heading className="page_heading">CLIENT <span style={{ color: "#F47721" }}>WE'VE HELPED </span>GROW</heading>
            </div>
            <div className="help_descp_div">
            <text  className="heading_description" >we had the honor of working with prestigious clients to improve their digital marketing websites with appealing content. Our joint efforts resulted in considerable growth and greater engagement for their web presence.</text>
            </div>
            <Box alignItems={"center"} margin={"auto"} w={{ base: "80%", sm: "70%", md: "60%", lg: "50%", xl: "45%" }}><Image src="helpgif.gif" alt="help-img" /></Box>
       
        </Box>
    )
}