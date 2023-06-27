import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutChoose=()=>{


    return (<Box className="vision-container">

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} ><Box><Heading as="h2" fontSize={{base:"12px",sm:"40px",md:"40px",lg:"40px",xl:"40px"}} > <span style={{fontSize:"80px",fontWeight:"800",color:"gray"}} >?</span> WHY CHOOSE <span style={{color:"orangered"}}>RECLAME HUB </span> <span></span></Heading> </Box> <Box h="80px"><Image h="100%" src="quesimg.png"  alt="reclame"/></Box></Box>
        <br />
        <Box><Text fontWeight={"500"} fontSize={{base:"10px",sm:"10px",md:"15px",lg:"20px",xl:"20px" }}> "WE ARE YOUNG ,WE ARE PASSIONATE AND WE ARE ENTHUSIASTIC TO TRANSFORM YOUR BRAND IN THIS DIGITAL WORLD."</Text></Box>
        <br />
        <Flex className="vision-flex-box" flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}} marginTop="4vh">
            <Box className="vision-text-heading-container" w={{base:"100%",sm:"100%",md:"60%",lg:"40%",xl:"40%"}} bgColor={"white"} color="black" boxShadow={"2xl"} paddingTop="10px" paddingBottom="10px">
                <Box className="vision-heading-container" >
                    <Heading color="orangered">LET'S TEAM UP !</Heading>
                    <br />
                    <Text w={{base:"90%",sm:"90%",md:"90%",lg:"90%",xl:"90%"}} textAlign={"center"} margin={"auto"} fontSize={{base:"12px",sm:"12px",md:"15px",lg:"20px",xl:"20px"}}>At Reclame Hub, we see the brand future and the potential that the digital medium has to offer. Together, we
can shape it to help you realize your business and brand building objectives. Till date, various brands have
rediscovered their digital identities with us and built a more robust connection with their target communities.</Text>
                    </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
            <Box  >
 
                <Image boxSize={{base:"250px",sm:"300px",md:"350px",lg:"400px",xl:"400px"}} src="abtgif2.gif" atl="vision-img" />
 
            </Box>
        </Flex>
        <br />
        {/* <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box> */}
    </Box>)
}