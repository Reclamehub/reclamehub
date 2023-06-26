import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutChoose=()=>{


    return (<Box className="vision-container">

        <Box><Heading as="h2"> <span style={{fontSize:"5vw",fontWeight:"800",color:"gray"}} >?</span> WHY CHOOSE <span style={{color:"orangered"}}>RECLAMEHUB </span></Heading></Box>
        <br />
        <Box><Text fontWeight={"500"}> "WE ARE YOUNG ,WE ARE PASSIONATE AND WE ARE ENTHUSIASTIC TO TRANSFORM YOUR BRAND IN THIS DIGITAL WORLD."</Text></Box>
        <br />
        <Flex className="vision-flex-box" justifyContent={"space-around"} marginTop="4vh">
            <Box className="vision-text-heading-container" w="40%" bgColor={"white"} color="black" boxShadow={"2xl"} paddingTop="10px" paddingBottom="10px">
                <Box className="vision-heading-container">
                    <Heading color="orangered">LET'S TEAM UP !</Heading>
                    <br />
                    <Text w="60%" textAlign={"center"} margin={"auto"}>At Reclame Hub, we see the brand future and the potential that the digital medium has to offer. Together, we
can shape it to help you realize your business and brand building objectives. Till date, various brands have
rediscovered their digital identities with us and built a more robust connection with their target communities.</Text>
                    </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
            <Box  >
 
                <Image src="abtgif2.gif" atl="vision-img" />
 
            </Box>
        </Flex>
        <br />
        {/* <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box> */}
    </Box>)
}