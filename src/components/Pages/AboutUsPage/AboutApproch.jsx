import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"

import "./AboutVision.css"

export const AboutApproch=()=>{


    return (<Box className="vision-container">
        <Flex className="vision-flex-box" justifyContent={"space-between"}>
            
            <Box>
                <Image src="abtgif1.gif" atl="vision-img" />
            </Box>
            <Box className="vision-text-heading-container" w="30%" boxShadow={"2xl"}>
                <Box className="vision-heading-container">
                    <Heading color="orangered">OUR APPROCH</Heading>
                    <br />
                    <Text w="60%" textAlign={"center"} margin={"auto"}>WebWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</Text>
                    </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
        </Flex>
        <br />
        <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box>
    </Box>)
}