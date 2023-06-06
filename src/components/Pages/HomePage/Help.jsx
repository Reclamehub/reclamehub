import { Box, Heading, Image, Text } from "@chakra-ui/react"

import "./Help.css"

export const Help=()=>{



    return (<Box marginTop={"50px"}>
    <Heading className="help-heading" fontSize={"3.7vw"}>CLIENT <span style={{ color:"#F47721"}}>WE'VE HELPED </span>GROW</Heading>
        <br />
    <Text w="50%" m="auto" className="help-text" >We had the honor of working with prestigious clients to improve their digital marketing websites with appealing content. Our joint efforts resulted in considerable growth and greater engagement for their web presence.</Text>
    <br />
    <Box alignItems={"center"} margin={"auto"} w="45%"><Image src="helpgif.gif" alt="help-img" /></Box>
    <br />
    <br />
    </Box>)
}