import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiMessageDetail } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { BsFillTelephoneFill } from "react-icons/bs"

export const ContactUsAddress = () => {


    return (<Box fontFamily={"poppins"} mt="20px">

        <Box border={useColorModeValue('1px solid #F47721', "1px solid white")} display={"flex"}  flexWrap={{base:"wrap",sm:"wrap",md:"nowrap",lg:"nowrap",xl:"nowrap"}} gap="10px" m="auto" w={{base:"90%",sm:"80%",md:"80%",lg:"60%",xl:"60%"}}>
            {/* first flex box */}
            <Box fontSize={{base:"4vw",sm:"4vw",md:"2vw",lg:"1vw",xl:"1.2vw"}} borderRight={useColorModeValue('1px solid #F47721', "1px solid white")} w={{base:"100%",sm:"80%",md:"50%",lg:"50%",xl:"50%"}} >
                <Box p="10px">
                    <Box display="flex"> <Box display={"flex"}  alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}>
                        <BiMessageDetail size="25px" color="#F47721" /></Box>
                        <Box><Text fontWeight={"550"}>WRITE TO US</Text></Box>
                        </Box>
                    <Box textAlign={"left"} marginLeft={"35px"}><Text color="#F47721">info@reclamehub.com</Text>
                    </Box>
                </Box>
                <br />
                <Box  borderTop={useColorModeValue('1px solid #F47721', "1px solid white")} p="7px" pt="10px" display={"flex"} textAlign={"left"}   gap={"10px"} >
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
            <Box paddingBottom={"10px"}  w={{base:"100%",sm:"80%",md:"50%",lg:"50%",xl:"50%"}}>
                <Box display={"flex"} p="10px" >
                    <Box display={"flex"} alignContent={"center"} flexDirection={"column"} justifyContent={"center"} marginRight={"10px"}><BsFillTelephoneFill size="20px" color="#F47721" /></Box>
                    <Box><Text fontSize={{base:"4vw",sm:"4vw",md:"2vw",lg:"1vw",xl:"1.2vw"}}  fontWeight={"550"}>Call Us</Text></Box>
                </Box>
                <Box  textAlign={"left"} paddingLeft={"10px"}><Text fontSize={{base:"4vw",sm:"4vw",md:"2vw",lg:"1vw",xl:"1.2vw"}} fontWeight={"550"}>+91-9120190055</Text></Box>
                <br />
            <Box  w={{base:"90%",sm:"80%",md:"80%",lg:"80%",xl:"100%"}}  display={"flex"} justifyContent={"center"} alignItems={"left"} flexDirection={"column"} marginTop={"20px"} m={{base:"auto",sm:"auto",md:"20px",lg:"left",xl:"left"}} mb="10px">
                <iframe style={{objectFit:"contain"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.086837820522!2d77.37147386508246!3d28.627159382419894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5574455d57b%3A0xf19bca2bae503f87!2siconic%20tower!5e0!3m2!1sen!2sin!4v1686111911875!5m2!1sen!2sin"  allowfullscreen="" width={"90%"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Box>
            
            </Box>
            
        </Box>
    </Box>)
}