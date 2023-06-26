import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutProcess=()=>{


    return (  
<Box className="vision-container">
    <Flex className="vision-flex-box" justifyContent={"space-around"}>
        <Box className="vision-text-heading-container" w="40%" bgColor={"white"} color="black" boxShadow={"2xl"}>
            <Box className="vision-heading-container" p="5%">
                <Heading as="h2" color="orangered">OUR PROCESS</Heading>
                <br />
                <Box  textAlign={"left"} alignItems={"center"} display={"flex"} justifyContent={"center"} margin={"auto"} fontWeight={"550"} ml="20px">
<ul>


<li><Text>Initial Consultation</Text></li>
<li><Text>Strategy Development</Text></li>
<li><Text>Campaign Planning</Text></li>
<li><Text>Creative Development</Text></li>
<li><Text>Execution and Implementation</Text></li>
<li><Text>Continuous Improvement</Text></li>
    </ul>
</Box>
                </Box>
            {/* <Box className="vision-text-container"></Box> */}
        </Box>
        <Box w="50%">
        
        {/* <Box color={"gray.400"}><Heading as="h2" size={"4xl"} fontSize={"8vw"} className="abt-light-content" >our vision</Heading> </Box> */}
        <Box className="vision-img-box"><Image className="vision-img" boxSize={"400px"} w="80%"  src="abtgif2.gif" atl="process" /></Box>

        </Box>
    </Flex>
    
</Box>)
    
}




// abtgif2.gif