import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"

import "./Help.css"

export const Help = () => {

    return (
        <Box paddingTop={"5%"} paddingBottom={"5%"} borderTop={"4px solid white"} borderBottom={"4px solid white"} bg={useColorModeValue('white', '#1f1f1f')} margin={"auto"}>
            <div className="heading_div">
                <heading className="page_heading">CLIENTS WE'VE HELPED GROW</heading>
            </div>
            <div className="help_descp_div" >
                <text className="heading_description"  >We had the honor of working with prestigious clients to improve their brands with appealing content to be the very best. Our joint efforts resulted in considerable growth and greater engagement for their web presence.</text>
            </div>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} margin={"auto"} marginTop={"3.5%"} w={{ base: "80%", sm: "70%", md: "60%", lg: "50%", xl: "45%" }}>
            <Image src="helpgif.gif" alt="help-img" style={{}} />
            </Box>

        </Box>
    )
}