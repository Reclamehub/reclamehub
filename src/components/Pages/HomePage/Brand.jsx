import { Flex, Image, Text, Box } from "@chakra-ui/react"
import "./Brand.css"
import { Container } from "react-bootstrap"
export const Brand = () => {



    return (
        <Container  className="main_container ">
        <div style={{display:'flex',justifyContent:"space-around",alignItems:"center"}}>
            <div >
                <Image className="gif" src="brandgif.gif" alt="gif" />
            </div>
            <div style={{display:'flex',justifyContent:"right",alignItems:"center"}}>
                <div className="text_div" >
                    <Text>LET'S</Text>
                    <Text style={{ color: "#feac78" }}>HAVE A </Text>
                    <Text style={{ color: "#feac78" }}>BRAND DATE</Text>
                    <Text>? </Text>
                </div>
                <div>
                    <img className="brand_img" src="image363.png" alt="gif" />
                </div>
            </div>

        </div>
        </Container>
        // <Box borderBottom="4px solid white" paddingBottom={"50px"} paddingTop={"50px"}>
        // <Box border={"5px solid #FFD2B5"}   width={"80%"} margin={"auto"} p={"20px"}>
        //     <Flex justifyContent={"space-around" } alignItems={"center"}>
        //     <Box width={""} display={"Flex"} justifyContent={"center"} alignItems={"center"}><Image src="brandgif.gif"  alt="gif"/></Box>
        //     <Box fontSize={"4vw"} fontWeight={"800"} width={""} marginLeft={"20px"} className="brandText_box" >
        //         <div className="brandText_div">
        //         <Text>LET'S</Text>
        //         <Text style={{ color:"#feac78"}}>HAVE A </Text>
        //         <Text style={{ color:"#feac78"}}>BRAND DATE</Text>
        //         <Text>? </Text>
        //         </div>
        //         <div>
        //         <Image className="brand_img" src="image363.png"  alt="gif"/>
        //         </div>
        //     </Box>
        //     {/* <Box className="img_box"></Box> */}
        //     </Flex>

        //     {/* <Box><Image src="" alt="img" /></Box> */}
        // </Box>
        // </Box>

    )
}