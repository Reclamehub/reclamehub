import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutVision=()=>{


    return (<Box className="vision-container">
        <Flex className="vision-flex-box" justifyContent={"space-around"}>
            <Box className="vision-text-heading-container" w="40%" bgColor={"white"} color="black" boxShadow={"2xl"}>
                <Box className="vision-heading-container" p="5%">
                    <Heading as="h2" color="orangered">OUR VISION</Heading>
                    <br />
                    <Text  textAlign={"center"} margin={"auto"} fontWeight={"550"}><span style={{color:"#FF7721",fontWeight:"bold"}}>Our Vision </span> is to revolutionize the way brands connect with their audiences and drive sustainable growth in the digital age. We envision a future where businesses thrive by leveraging innovative marketing strategies that not only capture attention but also forge deep and meaningful connections with consumers.</Text>
                    </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
            <Box w="50%">
            
            {/* <Box color={"gray.400"}><Heading as="h2" size={"4xl"} fontSize={"8vw"} className="abt-light-content" >our vision</Heading> </Box> */}
            <Box className="vision-img-box"><Image className="vision-img" boxSize={"400px"} w="80%"  src="abtgif3.gif" atl="vision" /></Box>
               
                
            </Box>
        </Flex>
        
    </Box>)
}