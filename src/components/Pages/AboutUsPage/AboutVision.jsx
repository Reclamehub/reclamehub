import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"
import {Container,Row,Col} from "react-bootstrap"
import "./AboutVision.css"

export const AboutVision=()=>{


    return (
<Container style={{margin:"auto"}}>
        <div className="aboutChoose_headingImg_div"> 
        <heading className="aboutchoose_heading"><span style={{fontSize:"80px",fontWeight:"800",color:"gray"}} >?</span> WHY CHOOSE <span style={{color:"orangered"}}>RECLAME HUB </span> <span></span></heading>
        <img style={{height:"80px"}} src="quesimg.png"  alt="reclame"/>
       </div>
 <text className="aboutchoose_subheading">WE ARE YOUNG ,WE ARE PASSIONATE AND WE ARE ENTHUSIASTIC TO TRANSFORM YOUR BRAND IN THIS DIGITAL WORLD.

</text>
        <Container className="ChooseContent_container">
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} className="aboutvision_col">
                <div className="vision_cardHeading_div">
{/* <heading className="chooseBox_heading">let's team up !</heading><br/> */}
<text ><span style={{color:"#FF7721",fontWeight:"bold"}}>Our Vision </span> is to revolutionize the way brands connect with their audiences and drive sustainable growth in the digital age. We envision a future where businesses thrive by leveraging innovative marketing strategies that not only capture attention but also forge deep and meaningful connections with consumers.
 </text>
     </div>
        </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="aboutvision_col">
                <div style={{height:"100%",width:"100%"}} >
               <img style={{height:"100%",width:"100%"}} src="abtgif3.gif"/>
                </div>
                </Col>
            </Row>
         </Container>
         </Container>
    )
}

{/* <Box className="vision-container">
<Box display={"flex"} className="vision-flex-box"  flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}} alignItems={"center"}>
    <Box className="vision-text-heading-container" w={{base:"100%",sm:"100%",md:"60%",lg:"40%",xl:"40%"}} bgColor={"white"}  color="black" boxShadow={"2xl"}>
        <Box className="vision-heading-container" p="5%">
            <Heading as="h2" color="#FF7721">OUR VISION</Heading>
            <br />
            <Text  textAlign={"center"} margin={"auto"} fontWeight={"550"} fontSize={{base:"12px",sm:"12px",md:"15px",lg:"20px",xl:"20px"}}><span style={{color:"#FF7721",fontWeight:"bold"}}>Our Vision </span> is to revolutionize the way brands connect with their audiences and drive sustainable growth in the digital age. We envision a future where businesses thrive by leveraging innovative marketing strategies that not only capture attention but also forge deep and meaningful connections with consumers.</Text>
            </Box>
      
    </Box>
    <Box w={{base:"100%",sm:"100%",md:"50%",lg:"50%",xl:"50%"}} >
    
    
    <Box className="vision-img-box"><Image className="vision-img" boxSize={{base:"200px",sm:"300px",md:"350px",lg:"400px",xl:"400px"}} w="80%"  src="abtgif3.gif" atl="vision" /></Box>
       
        
    </Box>
</Box>

</Box> */}