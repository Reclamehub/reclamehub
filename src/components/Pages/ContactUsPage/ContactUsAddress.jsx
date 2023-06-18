import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiMessageDetail } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { BsFillTelephoneFill } from "react-icons/bs"

export const ContactUsAddress = () => {


    return (<Box fontFamily={"poppins"}>

        <Box border={useColorModeValue('1px solid black', "1px solid #F47721")} display={"flex"}  gap="10px" m="auto" w="60%">
            {/* first flex box */}
            <Box borderRight={useColorModeValue('1px solid black', "1px solid #F47721")} w="50%" >
                <Box p="10px">
                    <Box display="flex"> <Box display={"flex"} alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}><BiMessageDetail size="20px" color="#F47721" /></Box><Box><Text fontWeight={"550"}>WRITE TO US</Text></Box></Box>
                    <Box textAlign={"left"}><Text color="#F47721">info@reclamehub.com</Text></Box>
                </Box>
                <br />
                <Box borderTop={useColorModeValue('1px solid black', "1px solid #F47721")} p="10px" display={"flex"} textAlign={"left"} justifyContent={"space-around"} gap={"20px"} >
                    <Box><CiLocationOn size="30px" color="#F47721" /></Box>
                    <Box >
                        <Text>OUR LOCATION</Text>
                        <Text w="85%">808, 8th Floor Iconic Tower sector 62 Noida </Text>
                        <Text> Uttar Pradesh</Text>
                        <Text>India, 201301</Text>
                    </Box>
                    <Box width={"30%"} > <Image  src="mapgif.gif" alt="img" /></Box>
                </Box>

            </Box>

            {/* second flex box */}
            <Box  >
                <Box display={"flex"} p="10px" >
                    <Box display={"flex"} alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}><BsFillTelephoneFill size="20px" color="#F47721" /></Box>
                    <Box><Text fontSize={"1vw"} fontWeight={"550"}>Call Us</Text></Box>
                </Box>
                <Box  textAlign={"left"}><Text fontSize={"1vw"} fontWeight={"550"}>+91-9120190055</Text></Box>
                <br />
            <Box  mb="5px" display={"flex"} justifyContent={"center"} marginTop={"20px"}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.086837820522!2d77.37147386508246!3d28.627159382419894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5574455d57b%3A0xf19bca2bae503f87!2siconic%20tower!5e0!3m2!1sen!2sin!4v1686111911875!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Box>
            
            </Box>
        </Box>
    </Box>)
}