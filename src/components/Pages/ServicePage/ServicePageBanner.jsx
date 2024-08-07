import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./ServicePageBanner.css"

export const ServicePageBanner = () => {

    return (
    <Box backgroundImage={"homtopbg.png"} textAlign={"left"} p={{ base: "3.5vw", sm: "3.5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }} display={"flex"} flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap", xl: "nowrap" }} justifyContent={"space-around"}>
        <Box w={{ base: "100%", sm: "86%", md: "66%", lg: "66%", xl: "66%" }} marginLeft={"2%"} >
            <Box w={{ base: "95%", sm: "95%", md: "85%", lg: "85%", xl: "85%" }}>
                <Heading fontSize={{ base: "4vw", sm: "4vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}>WE  <span style={{ color: "#F47721" }}>PRIORITIZE SERVICES</span></Heading>
            </Box>
            <Box><Heading fontSize={{ base: "4vw", sm: "4vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}> AND <span style={{ color: "#F47721" }}>SATISFACTION</span></Heading></Box>
            <br />
            <Box mt={{ base: "-10px", sm: "-10px", md: "1px", lg: "1px", xl: "1px" }}>
            <Text w={{ base: "90%", sm: "90%", md: "80%", lg: "80%", xl: "80%" }} fontWeight={"550"} fontSize={{ base: "2.8vw", sm: "2.8vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} textTransform={"capitalize"}>
            At Reclame Hub, Our Digital Marketing Services Create a Strong Customer Base,
                Setting Us Apart in the Competitive Marketplace. We Prioritize Client’s Needs
                Based on the Significance of Digital Marketing Services for Their Businesses That Create A
                Customer-Centric Culture for Their Enduring Success.
                </Text>
            </Box>
          
        <div style={{marginTop:"4%"}} className="home_top_btn_div">
        <Link to ="/contact"><button className="connect_btn">get started</button></Link> 
         </div>
        </Box>
        <Box marginLeft={"-10px"} width={{ base: "80%", sm: "80%", md: "40%", lg: "40%", xl: "40%" }} display={"flex"} flexDirection={"column-reverse"}>
            <Image src="servicegif.gif" alt="service-img" />
        </Box>
    </Box>
    )


}