import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { BiWalletAlt, BiAddToQueue } from "react-icons/bi"
import { MdOutlineHighQuality } from "react-icons/md"
import { AiOutlineDash } from "react-icons/ai"
import {Container,Row,Col} from "react-bootstrap"
export const ServicePageLevel = () => {

    return (
        <>
    <Box textAlign={"left"} marginLeft={"5%"} marginBottom={"80px"} marginTop={"50px"}>
        <Box m="1vw" mb="2vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}>LET'S <span style={{ color: "#fe611d" }}>LEVEL UP</span></Heading></Box>
        <Box m="1vw"><Heading fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3.5vw", xl: "3.5vw" }}><span style={{ color: "#fe611d" }}>YOUR BUSINESS</span> <span>WITH US</span></Heading></Box>
        <br />
        </Box>

        <Container>
            <Row>
                <Col xlg={8} lg={8} md={12} sm={11} xs={11}>

<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto"}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} width={"5vw"} height={"5vw"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
<BiWalletAlt color="#e6b829" style={{width:"4vw",height:"4vw"}}/>
</Box>
<div style={{fontSize:"1.2vw",textTransform:"capitalize",fontWeight:"500"}}>
<p>creativity</p>  
</div>
</div>
<div style={{marginTop:"-30px"}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto"}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} width={"5vw"} height={"5vw"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
<BiWalletAlt color="#e6b829" style={{width:"4vw",height:"4vw",}}/>
</Box>
<div style={{fontSize:"1.2vw",textTransform:"capitalize",fontWeight:"500"}}>
<p>quantity over<br/>quality</p>  
</div>
</div>
<div style={{marginTop:"-30px"}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto"}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} width={"5vw"} height={"5vw"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
<BiWalletAlt color="#e6b829" style={{width:"4vw",height:"4vw"}}/>
</Box>
<div style={{fontSize:"1.2vw",textTransform:"capitalize",fontWeight:"500"}}>
<p>available in <br/>7 city</p>  
</div>
</div>
<div style={{marginTop:"-30px",}}>
<Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
<Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"auto"}}>
<Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} width={"5vw"} height={"5vw"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
<BiWalletAlt color="#e6b829" style={{width:"4vw",height:"4vw"}}/>
</Box>
<div style={{fontSize:"1.2vw",textTransform:"capitalize",fontWeight:"500"}}>
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
            <Flex justifyContent={"space-around"} alignItems={"center"}>
              

                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}  alignItems={"center"} mt={{ base: "10px", sm: "1px", md: "1px", lg: "1px", xl: "1px" }}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")}
                        padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }} >
                    <BiWalletAlt color="#e6b829" size={"4vw"} /></Box>
                    <Box><Text fontSize={{ base: "2vw", sm: "2vw", md: "2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} mt="0px" textAlign={"center"}>Creativity</Text></Box>
                </Box>

                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>


                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"} mt={{ base: "10px", sm: "1px", md: "1px", lg: "1px", xl: "1px" }}>
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><MdOutlineHighQuality size={"4vw"} color="#e6b829" /></Box>
                    <Box><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} m="0px" textAlign={"center"}>Quality over Quantity</Text></Box>
                </Box>
                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>



                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"}  >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiAddToQueue color="#e6b829" size={"4vw"} /></Box>
                    <Box textAlign={"center"}><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} m="0px"  textAlign={"center"}>Available in 7 City</Text></Box>

                </Box>

                <Box display={useColorModeValue('inline', "none")}><Image src="vectorb.png" alt="vector" /></Box>
                <Box display={useColorModeValue('none', "inline")}><Image src="vector.png" alt="vector" /></Box>


                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} >
                    <Box borderRadius={"full"} backgroundColor={useColorModeValue("#fef1e8", "#121212")} padding={"10px"} fontSize={{ base: "5vw", sm: "5vw", md: "3.5vw", lg: "3vw", xl: "3vw" }}><BiWalletAlt color="#e6b829" size={"4vw"}/></Box>
                    <Box textAlign={"center"}><Text width="100%" fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }} fontWeight={"500"} mt="0px">Increased Productivity</Text></Box>
                </Box>

            </Flex>
        </Box> */}
  
    