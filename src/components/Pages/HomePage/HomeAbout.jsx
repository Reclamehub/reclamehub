import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react"
import home_about_bg from "../../../Bg_images/home_about_bg.png"
import about_bg from "../../../Bg_images/about_bg.png"
import "./HomeAbout.css"
export const HomeAbout = () => {

    return (
        <Box bg={useColorModeValue('white', 'black')} margin={"auto"} className="home-about-container">
            <div className="home-about-content-div">
            <img src="homeabtgif.gif"/>
            </div>
        </Box>
    )
}
{/* <br />
<Box className="up-shadow"></Box>
<Box className="home-about-band" backgroundColor={useColorModeValue("white", "#1d1d1d")}></Box> */}