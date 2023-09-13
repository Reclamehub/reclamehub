import { Flex, Image, text, Box, Center, useColorModeValue } from "@chakra-ui/react"
import "./Brand.css"
import home_brand_bg from "../../../Bg_images/home_brand_bg.png"
import { Container } from "react-bootstrap"


export const Brand = () => {

    return (

        <Box borderBottom="4px solid white" paddingBottom={"3.5%"} paddingTop={"3.5%"}>
            <div className="brand_bg_div">
           <Box bg={useColorModeValue('#fff' ,'#')}>
                <main className="brand_content_div" >
                    <div className="gif_div">
                        <img className="brand_gif" src="brandgif.gif" alt="brand-gif" />
                    </div>
                    <div className="text_img_div">
                        <div className="brandtext_div">
                            <text>LET'S</text><br />
                            <text style={{ color: "#feac78" }}>HAVE A </text><br />
                            <text style={{ color: "#feac78" }}>BRAND DATE</text><br />
                            <text>? </text>
                        </div>
                        <div className="img_div">
                            <img className="brand_img" src="image363.png" alt="gif363" />
                        </div>
                    </div>
                </main>
                </Box>
            </div>
        </Box>

    )
}

{/* <Box className="main_box" border={"4px solid #FFD2B5"} borderBottomColor={""} width={"80%"} margin={"auto"} p={"16px"}>
                <Flex display={"Flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Box width={""} display={"Flex"} justifyContent={"center"} alignItems={"center"}><Image className="gif" src="brandgif.gif" alt="gif" /></Box>
                    <Box className="brandtext_box" display={"Flex"} justifyContent={"Center"} fontSize={"4vw"} fontWeight={"800"} marginLeft={"20px"}  >
                        <div className="brandtext_div">
                            <text>LET'S</text>
                            <text style={{ color: "#feac78" }}>HAVE A </text>
                            <text style={{ color: "#feac78" }}>BRAND DATE</text>
                            <text>? </text>
                        </div>
                        <div className="img_div">
                            <Image className="brand_img" src="image363.png" alt="gif" />
                        </div>
                    </Box>

                </Flex>
            </Box> */}