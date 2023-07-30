import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiWalletAlt, BiAddToQueue } from "react-icons/bi"
import { MdOutlineHighQuality } from "react-icons/md"
import {Container,Row,Col} from "react-bootstrap"
import "./ServiceLevel.css"
export const ServicePageLevel = () => {

    return (
        <>
    <Box textAlign={"left"} marginLeft={"5%"} marginBottom={"5%"} marginTop={"45px"}>
        <Box m="1vw" mb="2vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}>LET'S <span style={{ color: "#fe611d" }}>LEVEL UP</span></Heading></Box>
        <Box m="1vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}><span style={{ color: "#fe611d" }}>YOUR BUSINESS</span> <span>WITH US</span></Heading></Box>
        <br />
        </Box>

        <Container className="srv_level_container">
            <Row style={{width:"100%"}}> 
 <Col xlg={9} lg={9} md={12} sm={12} xs={12}>

<div className="srv_level_content_div">

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto",}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")}className="sl_icon_box">
<BiWalletAlt className="sl_icons"/>
</Box>
<div className="srv_img_text">
<p>creativity</p>  
</div>
</div>
<div style={{marginTop:"-35px",}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto",}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} className="sl_icon_box" >
<Image src="Group.png"className="sl_icons" alt="sl-icon"/>
</Box>
<div className="srv_img_text">
<p>quantity over<br/>quality</p>  
</div>
</div>
<div style={{marginTop:"-35px",}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto",}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} className="sl_icon_box">
<BiAddToQueue className="sl_icons"/>
</Box>
<div className="srv_img_text">
<p>available in<br/>7 city</p>  
</div>
</div>
<div style={{marginTop:"-35px",}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto",}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} className="sl_icon_box" >
<MdOutlineHighQuality className="sl_icons"/>
</Box>
<div className="srv_img_text">
<p>increased productivity</p>  
</div>
</div>

</div>
                </Col>
                </Row>

        </Container>
        </>
    )
}








{/* <Box w={{ base: "90%", sm: "87%", md: "90%", lg: "57%", xl: "57%" }}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}  alignItems={"center"} mt={{ base: "10px", sm: "1px", md: "1px", lg: "1px", xl: "1px" }}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")}
                        padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }} >
                    <BiWalletAlt color="#e6b829" size={"2.5vw"} /></Box>
                    <Box><Text fontSize={{ base: "2vw", sm: "2vw", md: "2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} mt="0px" textAlign={"center"}>Creativity</Text></Box>
                </Box>

                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>


                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={{ base: "10px", sm: "1px", md: "1px", lg: "1px", xl: "1px" }}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><MdOutlineHighQuality size={"2.5vw"} color="#e6b829" /></Box>
                    <Box><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} m="0px" textAlign={"center"}>Quality over Quantity</Text></Box>
                </Box>
                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>



                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}  >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiAddToQueue color="#e6b829" size={"2.5vw"} /></Box>
                    <Box textAlign={"center"}><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} m="0px"  textAlign={"center"}>Available in 7 City</Text></Box>

                </Box>

                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>


                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiWalletAlt color="#e6b829" size={"2.5vw"}/></Box>
                    <Box textAlign={"center"}><Text width="100%" fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} mt="0px">Increased Productivity</Text></Box>
                </Box>

            </Flex>
        </Box> */}
  
    