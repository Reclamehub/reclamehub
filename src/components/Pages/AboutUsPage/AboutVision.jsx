import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutVision=()=>{


    return (<Box className="vision-container">
        <Flex className="vision-flex-box" justifyContent={"space-between"}>
            <Box className="vision-text-heading-container" w="40%" boxShadow={"2xl"}>
                <Box className="vision-heading-container">
                    <Heading color="orangered">OUR VISION</Heading>
                    <br />
                    <Text w="80%" textAlign={"center"} margin={"auto"}>Our vision is to revolutionize the way brands connect with their audiences and drive sustainable growth in the digital age. We envision a future where businesses thrive by leveraging innovative marketing strategies that not only capture attention but also forge deep and meaningful connections with consumers.</Text>
                    </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
            <Box>
                <Image src="abtgif3.gif" atl="vision-img" />
            </Box>
        </Flex>
        <br />
        <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box>
    </Box>)
}