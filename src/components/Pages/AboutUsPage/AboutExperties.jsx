import { Box, Flex, Heading, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./AboutExperties.css"


export const AboutExperties=()=>{
    const { colorMode } = useColorMode();

return(
    <Container>
        <div className="heading_div">
       <heading className="page_heading" style={{color:"#ff7721"}}> our expertise</heading>
       </div>
       <div style={{marginBottom:"3%"}}>
       <text className="heading_description">Our expertise is in determining what makes a firm unique, attractive, and lucrative.</text>
       </div>
        <Container className="content_Outercontainer">
       <Row>
        <Col lg={4} md={9} sm={12} className="experties_col">
       <Box className="experties_card_div" bg={useColorModeValue('#fff','#1D1D1D')} >
        <Link to="/social-media-management">
        <div style={{padding:"10px"}} >
            <div >
                <img className="experties_img" src="gif1.gif" alt="experties-img1"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
            <div className="expertise_card_hdiv"
                  style={{
                    color: colorMode === "light" ? "#f47721" : "#f47721",
            }}>
                <heading className="experties_card_heading"> social media <br/> management</heading>
                </div>
                <div>
                <text className="experties_card_text" >Tired of feeling overwhelmed by the never-ending demands of social media? Let us take control and transform your social media presence.  </text>
            </div>
            </div>
        </div>
        </Link>
        </Box>
        </Col>
        <Col lg={4} md={9} sm={12} className="experties_col">
       
        <Box className="experties_card_div" bg={useColorModeValue('#fff','#1D1D1D')} >
        <Link to="/graphic-designing">
        <div style={{padding:"10px"}}>
            <div>
                <img  className="experties_img" src="gif3.gif" alt="experties-img2"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
            <div className="expertise_card_hdiv"
                                    style={{
                                        color: colorMode === "light" ? "#f47721" : "#f47721",
                                }}>
            
                <heading className="experties_card_heading">graphic<br/> designing</heading>
                </div>
                <div>
              <text className="experties_card_text" > Let us bring your vision to life and create stunning visuals that will captivate your audience and leave a lasting impression.</text>
              </div>
            </div>
            </div>
            </Link>
            </Box>
     
        </Col>
        <Col lg={4} md={9} sm={12} className="experties_col">
        <Box className="experties_card_div" bg={useColorModeValue('#fff','#1D1D1D')} >
        <Link to="/web-design-development">
        <div style={{padding:"10px"}} >
            <div>
                <img className="experties_img" src="abtgif11.gif" alt="experties-img3"/>
            </div>
            <div style={{maxWidth:"90%",margin:"auto"}}>
                <div className="expertise_card_hdiv"
                      style={{
                        color: colorMode === "light" ? "#f47721" : "#f47721",
                }}>
                <heading className="experties_card_heading">web design<br/>& development</heading>
                </div>
                <div>
                <text className="experties_card_text">Elevate your Brand to new heights with stunning websites that captivate your audience. Trust us to handle the technical aspects, so you can focus on growing your online presence. </text>
            </div>
            </div>
        </div>
        </Link>
            </Box>
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
//         <Box border="1px solid gray"  p=borde>
//         <Box display={"flex"} justifyContent={"center"}>
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}}  src="gif1.gif" alt="social media management" background={"#FFF4ED"} /></Box>
//             <Box> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"}> SOCIAL MEDIA MANAGeMENT</Text>
//             <Text style={{width:"10%"}} color="#FF7721" fontWeight={""}  margin={"auto"} width={"50%"} textTransform={"capitalize"} fontSize={"14px"}> Struggling with social media management? we're your solution, the top digital marketing agency in noida.</Text>
//             </Box>
//             <Box width={"50%"} textAlign={"center"}></Box>
//         </Box>
  
//         <Box border="1px solid gray" p=borde > 
//         <Box display={"flex"} justifyContent={"center"}>
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}} src="gif3.gif" alt="graphic designing" background={"#FFF4ED"}  />
//         </Box>
//             <Box> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"} >GRAPHIC DESIGNING</Text></Box>
//         </Box>

            
//         <Box border="1px solid gray" p=borde>
//         <Box display={"flex"} justifyContent={"center"} >
//             <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"350px",xl:"350px"}} src="gif2.gif" alt="web design and development" background={"#FFF4ED"}  /></Box>
//             <Box mt="5px"> <Text style={{width:"10%"}} color="#FF7721" fontWeight={"bold"} fontSize={"20px"} > WEB DESIGN & DEVELOPMENT</Text></Box>
//         </Box>
//     </Flex>
// </Box>
// </Box> 