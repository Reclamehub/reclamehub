import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiWalletAlt, BiAddToQueue } from "react-icons/bi"
import { MdOutlineHighQuality } from "react-icons/md"
import { AiOutlineDash } from "react-icons/ai"
export const ServicePageLevel = () => {

    return (<Box textAlign={"left"} marginLeft={"5%"} marginBottom={"80px"} marginTop={"50px"}>
        <Box m="1vw" mb="2vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}>LET'S <span style={{ color: "#fe611d" }}>LEVEL UP</span></Heading></Box>
        <Box m="1vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}><span style={{ color: "#fe611d" }}>YOUR BUSINESS</span> WITH US</Heading></Box>
        <br />
        <Box w={{ base: "100%", sm: "80%", md: "60%", lg: "60%", xl: "60%" }}>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                {/* AiOutlineDash */}
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={{base:"-15px",sm:"1px",md:"1px",lg:"1px",xl:"1px"}}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")}
                        padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }} ><BiWalletAlt color="#e6b829" /></Box>
                    <Box><Text fontSize={{ base: "2.5vw", sm: "2.5vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"550"} m="5px" textAlign={"center"}>Creativity</Text></Box>
                </Box>


                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
                
                
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={{base:"10px",sm:"1px",md:"1px",lg:"1px",xl:"1px"}}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><MdOutlineHighQuality color="#e6b829" /></Box>
                    <Box><Text fontSize={{ base: "2.5vw", sm: "2.5vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"550"} m="5px" textAlign={"center"}>Quality over Quantity</Text></Box>
                </Box>
                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
                
                
                
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiAddToQueue  color="#e6b829" /></Box>
                    <Box><Text fontSize={{ base: "2.5vw", sm: "2.5vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"550"} m="5px" w="80%" textAlign={"center"}>Available in 5 City</Text></Box>

                </Box>
                
                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
                
                
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}  >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiWalletAlt  color="#e6b829" /></Box>
                    <Box textAlign={"center"}><Text fontSize={{ base: "2.5vw", sm: "2.5vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"550"} m="5px">Increased Productivity</Text></Box>
                </Box>

            </Flex>
        </Box>
    </Box>)
}