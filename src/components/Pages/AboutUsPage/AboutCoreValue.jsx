import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutCoreValue=()=>{

    return (<Box fontFamily={"poppins"}>
        <Heading as="h1"> OUR <span style={{color:"#F47721"}}>CORE</span> VALUES</Heading>
       <Text fontWeight={"550"} mt="20px" mb="20px" fontSize={"1.5vw"}>"WE'RE YOUNG, WE'RE PASSIONATE AND WE'RE ENTHUSIAST TO TRANSFORM YOUR BRAND IN THIS DIGITAL WORLD."</Text>
        <Flex justifyContent={"space-around"} color="white">
            <Box  w="40%">
                <Box backgroundColor="#F47721" borderRadius={"20px"}><Image src="coreimg.gif" alt="core-value-reclame" /></Box>
            </Box>
            <Box backgroundColor="#F47721" w="50%" borderRadius={"20px"} padding="50px 50px 50px 50px" fontWeight={"550"} fontSize={"1.6vw"} lineHeight={"2.5em"}>
                <Box><Text>Innovation</Text></Box>
                
                <Flex justifyContent={"space-between"} gap="10px">
                
                <Box lineHeight={"2.5em"} textAlign={"left"}>
                <Box><Text>Integrity</Text></Box>
                <Box><Text>Flexibilty</Text></Box>
                <Box><Text>Fun</Text></Box>
                <Box><Text>Client-Centricity</Text></Box>
                </Box>
                
                <Box ><Image boxSize={"200px"} src="thumb.gif" alt="like" /></Box>
                
                <Box lineHeight={"2.5em"} textAlign={"left"} >
                <Box><Text>Excellence</Text></Box>
                <Box><Text>Passsion</Text></Box>
                <Box><Text>Collaboration</Text></Box>
                <Box><Text>Result-Drive</Text></Box>
                </Box>
                
                </Flex>
                <Box><Text>Continuous Learning </Text></Box>
            </Box>
        </Flex>
    </Box>)
}