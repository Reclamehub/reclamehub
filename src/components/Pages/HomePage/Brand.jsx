import { Flex, Image, Text, Box, Center } from "@chakra-ui/react"
import "./Brand.css"
import { Container } from "react-bootstrap"
export const Brand = () => {



    return (
  
        <Box borderBottom="4px solid white" paddingBottom={"50px"} paddingTop={"10px"}>
        <Box className="main_box" border={"4px solid #FFD2B5"} borderBottomColor={""}   width={"80%"} margin={"auto"} p={"16px"}>
            <Flex display={"Flex"}justifyContent={"space-evenly" } alignItems={"center"}>
            <Box width={""} display={"Flex"} justifyContent={"center"} alignItems={"center"}><Image className="gif" src="brandgif.gif"  alt="gif"/></Box>
            <Box className="brandText_box" display={"Flex"} justifyContent={"Center"} fontSize={"4vw"} fontWeight={"800"} marginLeft={"20px"}  >
                <div className="brandText_div">
                <Text>LET'S</Text>
                <Text style={{ color:"#feac78"}}>HAVE A </Text>
                <Text style={{ color:"#feac78"}}>BRAND DATE</Text>
                <Text>? </Text>
                </div>
                <div className="img_div">
                <Image className="brand_img" src="image363.png"  alt="gif"/>
                </div>
            </Box>
          
            </Flex>
      </Box>
        </Box>

    )
}

      // <Container  className="main_container ">
        // <div style={{display:'flex',justifyContent:"space-around",alignItems:"center"}}>
        //     <div >
        //         <Image className="gif" src="brandgif.gif" alt="gif" />
        //     </div>
        //     <div style={{display:'flex',justifyContent:"right",alignItems:"center"}}>
        //         <div className="text_div" >
        //             <Text>LET'S</Text>
        //             <Text style={{ color: "#feac78" }}>HAVE A </Text>
        //             <Text style={{ color: "#feac78" }}>BRAND DATE</Text>
        //             <Text>? </Text>
        //         </div>
        //         <div>
        //             <img className="brand_img" src="image363.png" alt="gif" />
        //         </div>
        //     </div>

        // </div>
        // </Container>