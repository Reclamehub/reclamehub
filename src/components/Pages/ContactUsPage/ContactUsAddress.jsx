import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { BiMessageDetail } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { BsFillTelephoneFill } from "react-icons/bs"

export const ContactUsAddress = () => {


    return (<Box fontFamily={"poppins"}>

        <Box border="1px solid black" display={"flex"}  gap="10px" m="auto" w="60%">
            {/* first flex box */}
            <Box border="1px solid black" w="50%">
                <Box>
                    <Box display="flex"> <Box display={"flex"} alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}><BiMessageDetail size="20px" color="orangered" /></Box><Box><Text fontWeight={"550"}>WRITE TO US</Text></Box></Box>
                    <Box textAlign={"left"}><Text color="orangered">info@reclamehub.com</Text></Box>
                </Box>
                <br />
                <Box display={"flex"} textAlign={"left"} w="95%" justifyContent={"space-around"} gap={"20px"} >
                    <Box><CiLocationOn size="30px" color="orangered" /></Box>
                    <Box>
                        <Text>OUR LOCATION</Text>
                        <Text w="85%">8th Floor Iconic Tower sector 62 Noida 201301</Text>
                        <Text>Noida Uttar Pradesh</Text>
                        <Text>India 201307</Text>
                    </Box>
                    <Box width={"30%"} > <Image  src="mapgif.gif" alt="img" /></Box>
                </Box>

            </Box>

            {/* second flex box */}
            <Box >
                <Box display={"flex"}>
                    <Box display={"flex"} alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}><BsFillTelephoneFill size="20px" color="orangered" /></Box>
                    <Box><Text fontSize={"1vw"} fontWeight={"550"}>Call Us</Text></Box>
                </Box>
                <Box><Text fontSize={"1vw"} fontWeight={"550"}>+91-912019005</Text></Box>
            </Box>
        </Box>
    </Box>)
}