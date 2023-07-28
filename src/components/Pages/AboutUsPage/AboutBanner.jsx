import { Box, Heading, Image, Text } from "@chakra-ui/react"


import "./AboutBanner.css"

export const AboutBanner = () => {
    return (
        <Box alignItems={"center"} paddingTop={"20px"}>
            <div className="heading_div">
                <heading className="page_heading">
                <span style={{ color: "#FF7721" }}>A</span>BOU<span style={{ color: "#FF7721" }}>T</span> US
                </heading>
                </div>

            <div className="mb-3">
            <text className="heading_description">our expertise is in determining what makes a firm unique, attractive and lucrative.</text>
            </div>
            <Box display={"flex"} justifyContent={"center"}><Image maxWidth={{ base: "80vw", sm: "70vw", md: "60vw", lg: "40vw", xl: "40vw" }} src="abtgif.gif" alt="top-img" /></Box>

        </Box>
    )
}