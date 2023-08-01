import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react"
import home_about_bg from "../../../Bg_images/home_about_bg.png"
import about_bg from "../../../Bg_images/about_bg.png"
import "./HomeAbout.css"
export const HomeAbout = () => {

    return (
        <Box bg={useColorModeValue('white', 'black')} className="home-about-container">
            <Box
                style={{
                    backgroundImage: `url(${about_bg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    padding: "5%"
                }} >
                <Box className="Aboutbg_box"
                    style={{
                        backgroundImage: `url(${home_about_bg})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat"
                    }} >
                    <div className="home-about-content-div" >
                        <div className="heading_div">
                            <heading className="page_heading" style={{ color: "black" }} >WHO <span style={{ color: "#F47721" }}>WE</span> ARE </heading>
                        </div>
                        <div className="heading_descp_div" >
                            <text className="heading_description" style={{ lineHeight: "normal", color: "black" }}>
                                we are a group of passionate experts committed to helping businesses thrive in this digital world. we specialize in building smart and inventive digital marketing solutions that produce results, drawing on a wealth of experience and knowledge. we believe in the power of cooperation and work together to develop complete and integrated campaigns.
                                from initial discussions to project handover and beyond, our skilled team is here to help you.
                            </text>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}
{/* <br />
<Box className="up-shadow"></Box>
<Box className="home-about-band" backgroundColor={useColorModeValue("white", "#1d1d1d")}></Box> */}