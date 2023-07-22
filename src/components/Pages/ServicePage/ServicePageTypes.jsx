import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import "./ServicePageTypes.css"

export const ServicePageTypes = () => {



    return (
        <>
        <section id="service">
            {/* left-side-content */}
            <Container fluid>
                <Row style={{marginTop:"20px"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>social media management</h2>
                                <p className="Scard_para">Are you looking to increase brand awareness, generate leads, or establish thought leadership in your industry?<br />
                                    Look no further than Reclame Hub, our Social media management services in Noida, India Elevate your Brand’s Online Presence, to connect you with your target audience and strong online presence.
                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s1.gif" />
                            </div>
                        </div>
</Box>
                    </Col>
                </Row>
        
                <Row style={{marginTop:"3%"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>content marketing</h2>
                                <p className="Scard_para">Discover the best B2B Content Marketing Agency Services in India with Reclame Hub. From blog posts and whitepapers to social media 
                                content and email marketing campaigns, we have the expertise and resources to deliver results that exceed your expectations.

                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s2.gif" />
                            </div>
                        </div>
</Box>
                    </Col>
                </Row>
        
                <Row style={{marginTop:"3%"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>online reputation management</h2>
                                <p className="Scard_para">Our Reliable Marketing services in Noida, India, specializes in delivering effective marketing solutions tailored to your specific needs. Our team looks into the necessity of having a strong online presence to successfully manage brand reputation.
                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s3.gif" />
                            </div>
                        </div>
</Box>
                    </Col>
                </Row>
            </Container>

            {/* right-side-content */}
            <Container fluid style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end",marginTop:"2%" }}>
                <Row className="row justify-content-end" >
                    <Col lg={8} >
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                        <div className="Rservice_content_div">
                            <div className="Rservice_img_div">
                                <img className="Rservice_img"src="s4.gif" />
                            </div>
                            <div className="Rservice_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>graphic designing</h2>
                                <p className="Scard_para">Expert Graphic Designing Company in Noida | Creative Design Services | Reclame Hub
                                </p>
                            </div>
                        </div>
                        </Box>
                    </Col>

                    <Col lg={8} style={{marginTop:"3%"}}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                        <div className="Rservice_content_div">
                            <div className="Rservice_img_div">
                                <img className="Rservice_img"src="s5.gif" />
                            </div>
                            <div className="Rservice_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>WEB DESIGN & DEVELOPMENT</h2>
                                <p className="Scard_para">Professional Website Development Services | Reclame Hub Leading Website Development Company offering custom ecommerce solutions. 
                                Expertise in Magento, WordPress Website Development in India. Upgrade your business today.
                                </p>
                            </div>
                        </div>
                        </Box>
                    </Col>
                </Row>
            </Container>
            {/* left-side-content */}
            <Container fluid style={{marginTop:"2%"}}>
                <Row >
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>digital advertisement </h2>
                                <p className="Scard_para"> Elevate your small business with Reclame Hub, a premier digital marketing agency specializing in tailored strategies to enhance your online presence, 
                                drive traffic, and boost conversions.
                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s6.gif" />
                            </div>
                        </div>
                        </Box>

                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{marginTop:"3%"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>video - ad film</h2>
                                <p className="Scard_para">At Reclame Hub, we enhance your virtual world with the power of captivating video content. Our skilled team will create high-quality video-ad films 
                                that effectively communicate your brand message, engage your target audience, and leave a lasting impact.
                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s7.gif" />
                            </div>

                        </div>
                        </Box>
                    </Col>
                </Row >
            </Container>
            <Container fluid>
                <Row style={{marginTop:"3%"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>email marketing</h2>
                                <p className="Scard_para"> As experts in email marketing, we know that effective communication is key. With our tailored strategies and services, we help build strong connections with your audience. Our team will craft personalized email 
                                campaigns that deliver the right message to people at the right time.
                                </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s8.gif" />
                            </div>
                        </div>
                        </Box>
                    </Col>
                </Row>
            </Container>
            {/* right-side-content */}
              <Container fluid style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end",marginTop:"2%" }}>
                <Row className="row justify-content-end">
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                        <div className="Rservice_content_div">
                            <div className="Rservice_img_div">
                                <img className="Rservice_img"src="s99.gif" />
                            </div>
                            <div className="Rservice_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>seo development</h2>
                                <p className="Scard_para">In today’s landscape enhancing online visibility is of utmost importance. Reclame Hub offers top-level SEO services to your website to rank higher. We provide the best possible solutions to build your
                                 online presence and drive more traffic to your website.

                                </p>
                            </div>
                        </div>
                        </Box>
                    </Col >

                    <Col lg={8} style={{marginTop:"3%"}}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                        <div className="Rservice_content_div">
                            <div className="Rservice_img_div">
                                <img className="Rservice_img"src="gif6.gif" />
                            </div>
                            <div className="Rservice_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>campaign marketing</h2>
                                <p className="Scard_para">We work closely with our expertly crafted campaigns to develop tailored strategies that align with your business goals, from identifying your target audience and creating engaging content to driving measurable results.

                                </p>
                            </div>
                        </div>
                        </Box>
                    </Col>
                </Row>
            </Container>
            {/* left-side */}
            <Container fluid>
                <Row style={{marginTop:"3%"}}>
                    <Col lg={8}>
                    <Box   fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                        <div className="service_content_div">
                            <div className="service_heading_div">
                                <h2 style={{ textTransform: "uppercase", fontWeight: "700",fontSize:"2vw",marginBottom:"1.5rem" }}>APP DESIGN & DEVELOPMENT</h2>
                                <p className="Scard_para"> Reclame Hub specializes in app design and development, crafting intuitive and visually appealing applications that deliver outstanding user experiences. 
                                we'll bring your ideas to life, ensuring seamless functionality and a polished interface.
                           </p>
                            </div>
                            <div className="service_img_div">
                                <img className="service_img" src="s11.gif" />
                            </div>
                        </div>
</Box>
                    </Col>
                </Row>
                </Container>

                </section>

                </>
    )
}

            {/* <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"3%"} w="60%">
                        <Box><Heading as="h2" fontSize={"2.5vw"}>CONTENT MARKETING</Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            Discover The Best B2B Content Marketing Agency Services In India With Reclame Hub. From Blog Posts And Whitepapers To Social Media Content And Email Marketing Campaigns, We Have The Expertise And Resources To Deliver Results That Exceed Your Expectations.

                        </Text></Box>
                        <br />

                        <Box><Link to="/content-writing" >
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button></Link></Box>
                    </Box>
                    <Box w={{ base: "30%", sm: "27%", md: "27%", lg: "25%", xl: "25%" }} mr="-50px" mt={{ base: "20px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"}
                        borderRadius={"full"} paddingTop={"20px"} h={{ base: "90px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }}>
                        <Image w="90%" src="gif6.gif" objectFit={"contain"} alt="gif" /> </Box>
                </Flex>

            </Box>

           
            <br />
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"3%"} w="60%"  >
                        <Box><Heading as="h2" fontSize={"2.5vw"}>ONLINE REPUTATION MANAGMENT</Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            Our Reliable Marketing Services In Noida, India, Specializes In Delivering Effective Marketing Solutions Tailored To Your Specific Needs. Our Team Looks Into The Necessity Of Having A Strong Online Presence To Successfully Manage Brand Reputation.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>
                    <Box w={{ base: "30%", sm: "27%", md: "27%", lg: "22%", xl: "22%" }} h={{ base: "90px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} mt={{ base: "20px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"}>
                        <Image w="110%" src="gif5.gif" objectFit={"contain"} alt="gif" /> </Box>
                </Flex>
            </Box>



          


            <br />
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} display={"flex"} marginLeft={"auto"} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                <Flex gap="10%" >
                    <Box w={{ base: "80%", sm: "27%", md: "27%", lg: "25%", xl: "25%" }} h={{ base: "90px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }}
                        mt={{ base: "20px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop={"25px"}>

                        <Image w="90%" src="gif3.gif" objectFit={"contain"} alt="graphic-design" /> </Box>


                    <Box textAlign={"center"} paddingLeft={"10%"} w={{ base: "80%", sm: "60%", md: "60%", lg: "60%", xl: "60%" }}  >
                        <Box><Heading fontSize={"2.5vw"}>GRAPHIC DESIGNING </Heading></Box>
                        <br />
                        <Box  ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>

                            Expert Graphic Designing Company In Noida |
                            <br />
                            Creative Design Services | Reclame Hub
                            <br />
                            Know More

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>

                </Flex>
            </Box>
            
            <br />
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} display={"flex"} marginLeft={"auto"} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                <Flex gap="10%" >
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "23%", xl: "23%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }}
                        backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"}><Image w="90%" src="gif2.gif" objectFit={"contain"} alt="gif" /> </Box>


                    <Box textAlign={"center"} paddingLeft={"5%"} w={{ base: "70%", sm: "60%", md: "60%", lg: "60%", xl: "60%" }}  >
                        <Box><Heading fontSize={"2.5vw"}>WEB DESIGN AND DEVELOPMENT </Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            Professional Website Development Services |
                            <br />
                            Reclame Hub Leading Website Development Company Offering Custom Ecommerce Solutions. Expertise In Magento, WordPress Website Development In India. Upgrade Your Business Today.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>

                </Flex>
            </Box>
            <br />
           

            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading as="h2" fontSize={"2.5vw"}> DIGITAL ADVERTISEMENT </Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            Elevate Your Small Business With Reclame Hub, A Premier Digital Marketing Agency Specializing In Tailored Strategies To Enhance Your Online Presence, Drive Traffic, And Boost Conversions.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>
                    <Box mt={{ base: "10px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "23%", xl: "23%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop={"20px"}><Image w="90%" src="gif8.gif" objectFit={"contain"} alt="gif" /> </Box>
                </Flex>
            </Box>

            <br />
           

            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading as="h2" fontSize={"2.5vw"}>VIDEO - AD FILM</Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            At Reclame Hub, We Enhance Your Virtual World With The Power Of Captivating Video Content. Our Skilled Team Will Create High-Quality Video-Ad Films That Effectively Communicate Your Brand Message, Engage Your Target Audience, And Leave A Lasting Impact.


                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "23%", xl: "23%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop={"20px"}><Image w="90%" src="gif4.gif" objectFit={"contain"} alt="gif" /> </Box>
                </Flex>
            </Box>

            <br />
          
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading as="h2" fontSize={"2.5vw"}>EMAIL MARKETING</Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            As Experts In Email Marketing, We Know That Effective Communication Is Key. With Our Tailored Strategies And Services, We Help Build Strong Connections With Your Audience. Our Team Will Craft Personalized Email Campaigns That Deliver The Right Message To People At The Right Time.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "23%", xl: "23%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop={"20px"}><Image w="90%" src="gif11.gif" objectFit={"contain"} alt="gif" /> </Box>
                </Flex>
            </Box>

          
            <br />
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} display={"flex"} marginLeft={"auto"} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                <Flex gap="10%" >
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "25%", xl: "25%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop="50px" paddingBottom={"30px"}><Image w="100%" src="gif10.gif" objectFit={"contain"} alt="gif" /> </Box>


                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading fontSize={"2.5vw"}> SEO DEVELOPMENT </Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            In today’s landscape enhancing online visibility is of utmost importance. Reclame Hub offers top-level SEO services to your website to rank higher. We provide the best possible solutions to build your online presence and drive more traffic to your website.
                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>

                </Flex>
            </Box>
            <br />
            
            <br />
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} display={"flex"} marginLeft={"auto"} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"10rem 1px 1px 10rem"}>
                <Flex gap="10%" >
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "25%", xl: "25%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop="30px"><Image w="90%" src="gif11.gif" objectFit={"contain"} alt="gif" /> </Box>


                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading fontSize={"2.5vw"}>CAMPAIGN MARKETING </Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>
                            We work closely with our expertly crafted campaigns to develop tailored strategies that align with your business goals, from identifying your target audience and creating engaging content to driving measurable results.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>

                </Flex>
            </Box>
            <br />
           
            <Box w={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "80%" }} p="2vw" fontFamily={"poppins"} boxShadow={"xl"} bg={useColorModeValue('white', '#3D3A3A')} borderRadius={"1px 10rem 10rem 1px"}>
                <Flex gap="10%" >
                    <Box textAlign={"center"} paddingLeft={"10%"} w="60%"  >
                        <Box><Heading as="h2" fontSize={"2.5vw"}>APP DESIGN & DEVELOPMENT</Heading></Box>
                        <br />
                        <Box ><Text fontSize={{ base: "2vw", sm: "2vw", md: "1.2vw", lg: "1.2vw", xl: "1.2vw" }}>

                            Reclame Hub Specializes In App Design And Development, Crafting Intuitive And Visually Appealing Applications That Deliver Outstanding User Experiences. We'll Bring Your Ideas To Life, Ensuring Seamless Functionality And A Polished Interface.

                        </Text></Box>
                        <br />
                        <Box>
                            <Button border="2px solid #fe611d" size={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
                                fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "xl", xl: "xl" }} fontWeight={"500"}
                                _hover={{ bg: "#F47721", color: "white" }} borderRadius={"30px"}
                                backgroundColor={"transparent"} >Know More</Button>
                        </Box>
                    </Box>
                    <Box mt={{ base: "18px", sm: "sm", md: "sm", lg: "md", xl: "lg" }} w={{ base: "40%", sm: "27%", md: "27%", lg: "25%", xl: "25%" }} h={{ base: "110px", sm: "50px", md: "auto", lg: "auto", xl: "auto" }} backgroundColor={"#fe611d"} display={"flex"} justifyContent={"center"} borderRadius={"full"} paddingTop={"20px"}><Image w="90%" src="gif4.gif" objectFit={"contain"} alt="app-developemnt" /> </Box>
                </Flex>
            </Box>
            <br />
            <br />
            <Box textAlign={"center"} fontSize={"5vw"} fontWeight={"800"} color="#333333"><Text>start your project</Text></Box>

            <Box borderTop="1px solid white" height={"2px"} marginTop={"50px"} marginBottom={"50px"}></Box> */}

