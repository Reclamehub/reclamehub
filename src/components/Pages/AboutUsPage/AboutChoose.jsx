// import { Box, Flex, Heading, Text,Image } from "@chakra-ui/react"
import {Container,Row,Col} from "react-bootstrap"
import "./AboutChoose.css"

export const AboutChoose=()=>{
 
    return (
    <Container style={{margin:"auto"}}>
        <div className="aboutChoose_headingImg_div"> 
        <heading className="page_heading"><span style={{fontSize:"80px",fontWeight:"800",color:"gray"}} >?</span> WHY CHOOSE <span style={{color:"orangered"}}>RECLAME HUB </span> <span></span></heading>
        <img style={{height:"80px"}} src="quesimg.png"  alt="reclame"/>
       </div>
       <div className="heading_descp_div" >
 <text className="heading_description choose_title">we are young, we are passionate and we are enthusiastic to transform your brand in this digital world.</text>
</div>
        <Container className="ChooseContent_container">
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} className="aboutChoose_col">
                <div className="choose_boxHeading_div">
<heading className="chooseBox_heading">let's team up !</heading><br/>
<text className="choose_boxText">At Reclame Hub, we see the brand future and the potential that the digital medium has to offer. Together, we can shape it to help you realize your business and brand building objectives.<br/><br/>
<span>Till date, various brands have rediscovered their digital identities with us and built a more robust connection with their target communities.</span> 

</text>
     </div>
        </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="aboutChoose_col">
                <div style={{height:"100%",width:"100%"}} >
               <img style={{height:"90%",width:"100%"}} src="abtgif2.gif"/>
                </div>
                </Col>
            </Row>
         </Container>
         </Container>
    )
}
//     <Box className="vision-container">

//         <Box display={"flex"} alignItems={"center"} justifyContent={"center"}  >
//             <Box><Heading as="h2" fontSize={{base:"4vw",sm:"4vw",md:"4vw",lg:"3vw",xl:"3vw"}} > <span style={{fontSize:"80px",fontWeight:"800",color:"gray"}} >?</span> WHY CHOOSE <span style={{color:"orangered"}}>RECLAME HUB </span> <span></span></Heading> </Box> <Box h="80px"><Image h="100%" src="quesimg.png"  alt="reclame"/></Box></Box>
//         <br />
//         <Box><Text fontWeight={"500"} fontSize={{base:"10px",sm:"10px",md:"15px",lg:"20px",xl:"20px" }}> "WE ARE YOUNG ,WE ARE PASSIONATE AND WE ARE ENTHUSIASTIC TO TRANSFORM YOUR BRAND IN THIS DIGITAL WORLD."</Text></Box>
//         <br />
//         <Flex className="vision-flex-box" flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}} marginTop="0vh">
//             <Box className="vision-text-heading-container" w={{base:"100%",sm:"100%",md:"60%",lg:"40%",xl:"40%"}} bgColor={"white"} color="black" boxShadow={"2xl"} paddingTop="10px" paddingBottom="10px">
//                 <Box className="vision-heading-container" >
//                     <Heading color="orangered">LET'S TEAM UP !</Heading>
//                     <br />
//                     <Text w={{base:"90%",sm:"75%",md:"75%",lg:"75%",xl:"75%"}} textAlign={"center"} margin={"auto"} fontSize={{base:"12px",sm:"12px",md:"15px",lg:"20px",xl:"20px"}}>At Reclame Hub, we see the brand future and the potential that the digital medium has to offer. Together, we
// can shape it to help you realize your business and brand building objectives. Till date, various brands have
// rediscovered their digital identities with us and built a more robust connection with their target communities.</Text>
//                     </Box>
//                 {/* <Box className="vision-text-container"></Box> */}
//             </Box>
 
//             <Box  >
//                 <Image  src="abtgif2.gif" atl="vision-img" />
 
//             </Box>
//         </Flex>
//         <br />
//         {/* <Box color={"gray.400"}><Text fontSize={"8vw"} fontWeight={"1000"} textAlign={"left"}>About <span style={{fontSize:"3vw"}}>us</span></Text> </Box> */}
//     </Box>)
// }