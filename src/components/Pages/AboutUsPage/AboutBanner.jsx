import { Box, Heading, Image, Text } from "@chakra-ui/react"


import "./AboutBanner.css"

export const AboutBanner = () => {
    return (
        <Box alignItems={"center"} paddingTop={"20px"}>
            <div className="heading_div">
                <heading className="page_heading" >
                    <span style={{color:"#F47721"}}>about us</span>
                </heading>
            </div>

            <div className="mb-3">
                <text className="heading_description about_subheadings">reclame hub design your digital to look good & respond to work effectively.</text>
            </div>
            <Box display={"flex"} justifyContent={"center"}><Image maxWidth={{ base: "80vw", sm: "70vw", md: "60vw", lg: "40vw", xl: "40vw" }} src="abtgif.gif" alt="top-img" /></Box>

        </Box>
    )
}