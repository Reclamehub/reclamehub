import { Box, Text, Image, useColorModeValue,useColorMode, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import "./HomeService.css"

const serviceData = [
    {
        id: 1,
        simg: "gif1.gif",
        heading: `SOCIAL MEDIA `,
        headingTwo: ` MANAGEMENT`,
        desc: `Tired of feeling overwhelmed by the never-ending demands of social media? Let us take control and transform your social media presence.  `

    },
    {
        id: 2,
        simg: "gif6.gif",
        heading: `CONTENT  `,
        headingTwo: `WRITER`,
        desc: `Ready to take your initial step forward? Contact us today for amazing content development. We will help you build content that is SEO-friendly and could maximize your online presence. `

    },
    {
        id: 3,
        simg: "gif5.gif",
        heading: `ONLINE  REPUTATION `,
        headingTwo: `MANAGEMENT`,
        desc: `Want to take control of your online presence, then join the best Digital marketing agency.  `

    },
    {
        id: 4,
        simg: "gif3.gif",
        heading: `GRAPHIC  `,
        headingTwo: `DESIGNING`,
        desc: `Whether you're looking to give your website a fresh new look, launch an impactful social media campaign, or enhance your overall digital footprint, our graphic design services can help.`

    },
    {
        id: 5,
        simg: "gif22.gif",
        heading: `WEB DESIGN &`,
        headingTwo: `DEVELOPMENT`,
        desc: `Elevate your Brand to new heights with stunning website that captivate your audience. `

    },
    {
        id: 6,
        simg: "gif8.gif",
        heading: `DIGITAL `,
        headingTwo: `ADVERTISEMENT`,
        desc: `We are Designed with one goal in mind - to skyrocket your online visibility, drive targeted visitors to your website, and deliver remarkable results.`    },
    {
        id: 7,
        simg: "gif4.gif",
        heading: `VIDEO-AD `,
        headingTwo: `FILM`,
        desc: `We transform your vision into a reality with our expertise in creating eye-catching video ad films,  storytelling, creative production, and digital marketing.  `
    },
    {
        id: 8,
        simg: "gif7.gif",
        heading: `EMAIL `,
        headingTwo: `MARKETING`,
        desc: `Start using our services today and witness the transformation in your marketing strategy! With email marketing.`
    },
    {
        id: 9,
        simg: "gif9.gif",
        heading: `CAMPAIGN `,
        headingTwo: `MARKETING`,
        desc: `We help businesses succeed in the digital age! We are here to boost your online presence.`
    },

]

export const HomeService = () => {
    const { colorMode } = useColorMode();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/service');
    };

    return (
        <Box p="2vw" paddingTop={"5%"} paddingBottom={"5%"} bg={useColorModeValue('#FF9450', 'black')} margin={"auto"}>
            <div className="heading_div">
                <heading className="page_heading" >services we provide</heading>
            </div>
            <div className="heading_descp_div">
                <text className="heading_description" style={{ color: "#ffffff", textTransform: "capitalize" }}> Your Aim, Our Assistance. The services provided are as follows</text>
            </div>

   {/* <Box className="hservice_cards_container" bg={useColorModeValue('#ffffff','#1D1D1D')}>   </Box> */}
            <Container className="hservice_cards_container">
                {serviceData.map((el) =>(
          <Link to="/service">
                    <div className="hservice_card_div"
                    style={{
                        backgroundColor: colorMode === "light" ? '#FF9450' : "#1D1D1D",
                    }}
                     key={el.id}  >
                        <img className="hservice_img" src={el.simg} />
                      <div style={{ marginBottom: "auto", fontFamily: "poppins" }}>
                            <heading className="hservice_cards_heading"> {el.heading} <br /> {el.headingTwo}</heading>
                            <p className="hservice_cards_text">{el.desc}</p>
                        </div>
                        </div>
                    </Link>
                ))}
             
            </Container>
            <Box marginTop={"11%"}><Button onClick={handleClick} border="2px solid white" backgroundColor={"transparent"} fontWeight={"500"} _hover={{ bg: "#F47721", color: "white", border: "2px solid #F47721" }} borderRadius={"30px"} marginBottom={"15px"} >Explore More</Button></Box>
        </Box>

    )
}

{/* <Box  className="home-service-container" bg={useColorModeValue('#FF9450', 'black')} >

{serviceData.map((el)=><Box key={el.id}  boxShadow='2xl'  >

<Box className="home-service-content_box" >
    <Box className="home-service-img-box" >
    <Image fluid  height={"220px"} marginBottom={"5px"} objectFit={"cover"} src={el.simg}/>
    </Box>            

    <Box w="90%">
    <h3 className="card_heading">{el.heading} <br/>{el.headingTwo}</h3>
    </Box>
    <Box className="home-service-text-box"> <text style={{color:"#FFFFFF"}} > {el.desc}</text></Box>
       
</Box>

</Box>
)}

    </Box> */}