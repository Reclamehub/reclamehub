import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import {BiWalletAlt,BiAddToQueue} from "react-icons/bi"
import {MdOutlineHighQuality} from "react-icons/md"
import {AiOutlineDash } from "react-icons/ai"
export const ServicePageLevel=()=>{

    return(<Box textAlign={"left"} marginLeft={"5%"} marginBottom={"80px"} marginTop={"50px"}>
<Box m="1vw"><Heading>LET'S <span style={{color:"#fe611d"}}>LEVEL UP</span></Heading></Box>
<Box m="1vw"><Heading><span style={{color:"#fe611d"}}>YOUR BUSINESS</span> WITH US</Heading></Box>
<br />
<Flex justifyContent={"space-around"} alignItems={"center"}>
{/* AiOutlineDash */}
<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
    <Box borderRadius={"full"} backgroundColor={"gray.500"} padding={"10px"}><BiWalletAlt size="2vw" color="#e6b829" /></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px">Creativity</Text></Box>
</Box>
<Box><Image src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
    <Box borderRadius={"full"} backgroundColor={"gray.500"} padding={"10px"}><MdOutlineHighQuality size="2vw" color="#e6b829"/></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px">Quality over Quantity</Text></Box>
</Box>
<Box><Image src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
    <Box borderRadius={"full"} backgroundColor={"gray.500"} padding={"10px"}><BiAddToQueue size="2vw" color="#e6b829"/></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px">Available in 3 City</Text></Box>
</Box>
<Box><Image src="vector.png" alt="vector" /></Box>
<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
    <Box borderRadius={"full"} backgroundColor={"gray.500"} padding={"10px"}><BiWalletAlt size="2vw" color="#e6b829"/></Box>
    <Box><Text fontSize={"1.2vw"} fontWeight={"550"} m="5px">Increased Productivity</Text></Box>
</Box>

</Flex>
    </Box>)
}