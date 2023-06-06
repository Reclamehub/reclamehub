import { Box, Text,Heading } from "@chakra-ui/react"

import "./HomeAbout.css"
export const HomeAbout=()=>{



    return (<Box>
        <Box className="home-about-text" w="62%" margin={"auto"} p="40px">
        <Heading fontSize={"3.7vw"}>WHO  <span style={{color:"#F47721"}}>WE</span> ARE</Heading>
        <br />
    <Text fontSize={"1.4vw"}>We are a group of passionate experts committed to helping businesses thrive in this digital world. We specialize in building smart and inventive digital marketing solutions that produce results, drawing on a wealth of experience and knowledge. We believe in the power of cooperation and work together to develop complete and integrated campaigns.
From initial discussions to project handover and beyond, our skilled team is here to help you.</Text>
    </Box>
    </Box>
    )
}