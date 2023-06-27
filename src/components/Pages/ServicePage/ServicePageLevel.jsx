import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {BiWalletAlt,BiAddToQueue} from "react-icons/bi"
import {MdOutlineHighQuality} from "react-icons/md"
import {AiOutlineDash } from "react-icons/ai"
export const ServicePageLevel=()=>{

    return(<Box textAlign={"left"} marginLeft={"5%"} marginBottom={"80px"} marginTop={"50px"}>
<Box m="1vw" mb="2vw"><Heading fontSize={"3.5vw"}>LET'S <span style={{color:"#fe611d"}}>LEVEL UP</span></Heading></Box>
<Box m="1vw"><Heading fontSize={"3.5vw"}><span style={{color:"#fe611d"}}>YOUR BUSINESS</span> WITH US</Heading></Box>
<br />
<Box  w="60%">
<Flex justifyContent={"space-around"} alignItems={"center"}>
{/* AiOutlineDash */}
<Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8","#121212")} padding={"10px"}><BiWalletAlt size="2vw" color="#e6b829" /></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px" textAlign={"center"}>Creativity</Text></Box>
</Box>
<Box display={useColorModeValue('inline', "none")}><Image  src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image  src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8","#121212")} padding={"10px"}><MdOutlineHighQuality size="2vw" color="#e6b829"/></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px" textAlign={"center"}>Quality over Quantity</Text></Box>
</Box>
<Box display={useColorModeValue('inline', "none")}><Image  src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image  src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8","#121212")} padding={"10px"}><BiAddToQueue size="2vw" color="#e6b829"/></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px" w="80%" textAlign={"center"}>Available in 5 City</Text></Box>
    
</Box>
<Box display={useColorModeValue('inline', "none")}><Image  src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image  src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"}  >
    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8","#121212")} padding={"10px"} ><BiWalletAlt size="2vw" color="#e6b829"/></Box>
    <Box textAlign={"center"}><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px">Increased Productivity</Text></Box>
</Box>

</Flex>
</Box>
    </Box>)
}