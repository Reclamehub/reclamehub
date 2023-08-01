import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutCoreValue = () => {

    return (
        <Box fontFamily={"poppins"}>
            <div className="heading_div">
                <heading className="page_heading"> OUR <span style={{ color: "#F47721" }}>CORE</span> VALUES</heading>
            </div>
            <div className="heading_descp_div">
                <text className="heading_description">we're young, we're passionate and we're enthusiastic to transform your brand in this digital world.</text>
            </div>

            <Flex color="white" m="auto" flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
                justifyContent={{ base: "center", sm: "center", md: "space-around", lg: "space-around", xl: "space-around" }} w={{ base: "80%", sm: "80%", md: "90%", lg: "80%", xl: "80%" }} >

                <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "40%", xl: "40%" }} p="10px"  >
                    <Box>
                        <Box backgroundColor="#F47721" m="auto" p="10px" borderRadius={"20px"} >
                            <Image boxSize={{ base: "200px", sm: "200px", md: "250px", lg: "400px", xl: "400px" }} src="coreimg.gif" alt="core-value-reclame" />
                        </Box>
                    </Box>
                </Box>

                <Box backgroundColor="#F47721" w={{ base: "100%", sm: "80%", md: "65%", lg: "55%", xl: "55%" }} m="auto" borderRadius={"20px"}
                    padding={{ base: "10px 10px 10px 10px", sm: "10px 10px 10px 10px", md: "10px 10px 10px 10px", lg: "50px 50px 50px 50px", xl: "50px 50px 50px 50px" }}
                    fontWeight={"550"} fontSize={{ base: "10px", sm: "10px", md: "12px", lg: "16px", xl: "16px" }} lineHeight={"2.5em"}
                    marginTop={{ base: "10px", sm: "00px", md: "80px", lg: "100px", xl: "120px" }}>


                    <Box><Text>Innovation</Text></Box>
                    <Flex justifyContent={"space-between"} gap="10px">
                        <Box lineHeight={"2.5em"} textAlign={"left"}>
                            <Box><Text>Integrity</Text></Box>
                            <Box><Text>Flexibilty</Text></Box>
                            <Box><Text>Fun</Text></Box>
                            <Box><Text>Client-Centricity</Text></Box>
                        </Box>

                        <Box ><Image boxSize={{ base: "100px", sm: "100px", md: "200px", lg: "200px", xl: "200px" }} src="thumb.gif" alt="like" /></Box>

                        <Box lineHeight={"2.5em"} textAlign={"left"} >
                            <Box><Text>Excellence</Text></Box>
                            <Box><Text>Passsion</Text></Box>
                            <Box><Text>Collaboration</Text></Box>
                            <Box><Text>Result-Drive</Text></Box>
                        </Box>

                    </Flex>
                    <Box mt={{ base: "-1px", sm: "-1px", md: "-25px", lg: "-1px", xl: "-1px" }}><Text>Continuous Learning </Text></Box>
                </Box>
            </Flex>
        </Box>)
}





