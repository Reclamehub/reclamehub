import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import {Container,Row,Col} from "react-bootstrap"
import "./AboutExperties.css"
export const AboutExperties=()=>{


return(
    <Container>
        <div className="heading_div">
       <heading className="page_heading"> 
    <span className="heading_span">O</span>u< span className="heading_span">
    r</span> <span className="heading_span">E</span>x<span className="heading_span">p</span>e<span className="heading_span">r</span>t<span className="heading_span">i</span>e<span className="heading_span">s</span></heading>
       </div>
       <div style={{marginBottom:"3%"}}>
       <text className="heading_description">Our expertise is in determining what makes a firm unique, attractive and lucrative.</text>
       </div>
        <Container className="content_Outercontainer">
       <Row>
        <Col lg={4} md={9} sm={12} className="experties_col">
        <div className="experties_card_div">
            <div >
                <img className="experties_img" src="gif1.gif"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
                <heading className="experties_card_heading"> social media <br/> managment</heading><br/><br/>
                <text className="experties_card_text" >Struggling with social media management? We're your solution, the top Digital Marketing agency in Noida.
               
                </text>
            </div>
        </div>
        </Col>
        <Col lg={4} md={9} sm={12} className="experties_col">
        <div className="experties_card_div">
            <div>
                <img  className="experties_img" src="gif3.gif"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
                <heading className="experties_card_heading">graphic<br/> designing</heading><br/><br/>
                <text className="experties_card_text" >our graphic design services can help. We think that excellent design extends beyond aesthetics.</text>
            </div>
        </div>
        </Col>
        <Col lg={4} md={9} sm={12} className="experties_col">
        <div className="experties_card_div">
            <div>
                <img className="experties_img" src="gif2.gif"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
                <heading className="experties_card_heading">web design<br/>& development</heading><br/><br/>
                <text className="experties_card_text">Are you ready to boost your online presence with a beautiful and effective website? Contact the best digital marketing agency
             
                </text>
            </div>
        </div>
        </Col>
       </Row>
       </Container>
    </Container>
)
}


//  <Box>
//     <Box><Heading>OUR <span style={{color:"#FF7721"}}>EXPERTIES</span></Heading></Box>
    
//     <br />
//     <Box><Text style={{width:"10%"}} fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive and lucrative.</Text></Box>
// <br />
// <Box>
//     <Flex  w="85%" m="auto" flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}}>
//         <Box border="1px solid gray"  p="15px" m="10px" borderRadius={"10px"}>
//         <Box display={"flex"} justifyContent={"center"}>
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}}  src="gif1.gif" alt="social media managment" background={"#FFF4ED"} /></Box>
//             <Box> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"}> SOCIAL MEDIA MANAGMENT</Text>
//             <Text style={{width:"10%"}} color="#FF7721" fontWeight={""}  margin={"auto"} width={"50%"} textTransform={"capitalize"} fontSize={"14px"}> Struggling with social media management? we're your solution, the top digital marketing agency in noida.</Text>
//             </Box>
//             <Box width={"50%"} textAlign={"center"}></Box>
//         </Box>
  
//         <Box border="1px solid gray" p="15px" m="10px" borderRadius={"10px"} > 
//         <Box display={"flex"} justifyContent={"center"}>
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}} src="gif3.gif" alt="graphic designing" background={"#FFF4ED"}  />
//         </Box>
//             <Box> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"} >GRAPHIC DESIGNING</Text></Box>
//         </Box>

            
//         <Box border="1px solid gray" p="15px" m="10px" borderRadius={"10px"}>
//         <Box display={"flex"} justifyContent={"center"} >
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}} src="gif2.gif" alt="web design and development" background={"#FFF4ED"}  /></Box>
//             <Box mt="5px"> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"} > WEB DESIGN & DEVELOPMENT</Text></Box>
//         </Box>
//     </Flex>
// </Box>
// </Box> 