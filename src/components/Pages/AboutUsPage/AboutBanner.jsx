import { Box, Heading, Image, Text } from "@chakra-ui/react"


import "./AboutBanner.css"

export const AboutBanner = () => {
    return (
        <Box alignItems={"center"} paddingTop={"20px"} lineHeight={"5rem"}>
            <Box><Heading as="h1" className="about-heading" fontSize={{ base: "30px", sm: "30px", md: "30px", lg: "35px", xl: "45px" }}><span style={{ color: "#FF7721" }}>A</span>BOU<span style={{ color: "#FF7721" }}>T</span> US</Heading></Box>

            <Box><Text fontWeight={"550"} fontSize={{ base: "12px", sm: "15px", md: "20px", lg: "20px", xl: "20px" }} marginTop={"30px"} lineHeight={{ base: "1.5em", sm: "2em", md: "2em", lg: "1.5em", xl: "4em" }}>
                Our Expertise Is In Determining What Makes A Firm Unique, Attractive And Lucrative.</Text></Box>
            <Box display={"flex"} justifyContent={"center"}><Image maxWidth={{ base: "80vw", sm: "70vw", md: "60vw", lg: "40vw", xl: "40vw" }} src="abtgif.gif" alt="top-img" /></Box>

        </Box>
    )
}