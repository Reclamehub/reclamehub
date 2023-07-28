import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiMessageDetail } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { BsFillTelephoneFill } from "react-icons/bs"
import { Container } from "react-bootstrap"
export const ContactUsAddress = () => {


    return (
        <>
            <Container style={{ fontFamily: "poppins", marginTop: '50px', marginBottom: "50px" }}>
                <Box border={useColorModeValue('1px solid #F47721', "1px solid white")} display={"flex"} flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap", xl: "nowrap" }} m="auto" w={{ base: "90%", sm: "80%", md: "80%", lg: "60%", xl: "60%" }}>

                    {/* first flex box */}
                    <Box fontSize={{ base: "4vw", sm: "4vw", md: "2vw", lg: "1vw", xl: "1.2vw" }} w={{ base: "100%", sm: "80%", md: "50%", lg: "50%", xl: "50%" }} >
                        <div style={{ padding: "15px" }}>
                            <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                <BiMessageDetail style={{ marginTop: "2px" }} size="30px" color="#F47721" />
                                <text style={{ marginLeft: "2%", fontWeight: "bold" }}>WRITE TO US</text>
                            </div>
                            <div style={{ textAlign: "left", marginTop: "8px", marginLeft: "35px" }}>
                                <text style={{ fontWeight: "500", color: "#FF7721" }}><a href="mailto:">info@reclamehub.com </a></text>
                            </div>
                        </div>
                        <br />
                        {/* lower-flex-box */}
                        <Box borderTop={useColorModeValue('1px solid #F47721', "1px solid white")} p="0px" display={""} textAlign={"left"} gap={"10px"} >
                            <div style={{ padding: "15px" }}>
                                <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                                    <CiLocationOn style={{ marginTop: "-2px", }} size="35px" color="#F47721" />
                                    <text style={{ marginLeft: "2%", fontWeight: "bold" }}>OUR LOCATION</text>
                                </div>
                                <div style={{ marginLeft: "35px", textAlign: "left", marginTop: "8px", width: "" }}>
                                    <text>8th Floor Iconic Tower<br /> Sector 62 Noida 201301</text><br />
                                    <text><span style={{ color: '#F47721', fontWeight: "500" }}> Uttar Pradesh <br/>India</span></text>
                                </div>
                            </div>
                        </Box>
                    </Box>

                    {/* 3 flex-box */}
                    <Box borderLeft={useColorModeValue('1px solid #F47721', "1px solid white")} padding={"10px"} w={{ base: "100%", sm: "80%", md: "50%", lg: "50%", xl: "50%" }} borderTop={"1px solid #ff2277"}>

                        <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                            <BsFillTelephoneFill style={{ marginTop: "2px", }} size="25px" color="#F47721" />
                            <text style={{ marginLeft: "2%", fontWeight: "bold" }}>CALL US</text>
                        </div>
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "center", marginLeft: "30px", fontWeight: "500" }}>
                            <text><a href="tel:+9120190055">+91-9120190055</a></text>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }} >
                            <iframe style={{ width: "100%", height: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.086837820522!2d77.37147386508246!3d28.627159382419894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5574455d57b%3A0xf19bca2bae503f87!2siconic%20tower!5e0!3m2!1sen!2sin!4v1686111911875!5m2!1sen!2sin" allowfullscreen="" width={"90%"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Box>




                </Box>
            </Container>
        </>
    )
}