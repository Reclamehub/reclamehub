import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"

import "./AboutApproch.css"

export const AboutApproch = () => {


    return (<Box className="approch-container">
        <Flex className="approch-flex-box" justifyContent={"space-around"}>

            <Box className="approch-img-box" w="50%">
                <Image boxSize={"400px"} src="abtgif1.gif" atl="approch" />
            </Box>
            <Box className="approch-text-heading-container" bgColor={"white"} color="black" boxShadow={"2xl"} w="40%">
                <Box className="approch-heading-container" p="5%">
                    <Heading as="h2" color="#FF7721">OUR APPROCH</Heading>
                    <br />
                    <Text  textAlign={"center"} margin={"auto"} fontWeight={"550"}><span style={{color:"#FF7721",fontWeight:"bold"}}>Reclame Hub</span> we have developed a unique approach that combines strategic thinking, data-driven insights, and creative excellence to deliver impactful marketing solutions. Our approach is tailored to each client's specific needs and objectives, ensuring a customized strategy that maximizes results. Here's an overview of our approach.</Text>
                </Box>
                {/* <Box className="vision-text-container"></Box> */}
            </Box>
        </Flex>

        {/* <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box> */}
    </Box>)
}