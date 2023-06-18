import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutProcess=()=>{


    return (  
<Box className="vision-container">
    <Flex className="vision-flex-box" justifyContent={"space-around"}>
        <Box className="vision-text-heading-container" w="40%" boxShadow={"2xl"}>
            <Box className="vision-heading-container" p="5%">
                <Heading as="h2" color="orangered">OUR PROCESS</Heading>
                <br />
                <Text  textAlign={"center"} margin={"auto"} fontWeight={"550"}>

<Text>Initial Consultation</Text>
<Text>Strategy Development</Text>
<Text>Campaign Planning</Text>
<Text>Creative Development</Text>
<Text>Execution and Implementation</Text>
<Text>Continuous Improvement
    </Text>
</Text>
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