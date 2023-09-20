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
        desc: `Are you languishing in managing your social media? No need to look further, here we are the best Digital marketing agency in Noida.`

    },
    {
        id: 2,
        simg: "gif6.gif",
        heading: `CONTENT  `,
        headingTwo: `WRITER`,
        desc: `Ready to take your initial step forward? Contact us today for amazing content development.`

    },
    {
        id: 3,
        simg: "gif5.gif",
        heading: `ONLINE  REPUTATION `,
        headingTwo: `MANAGEMENT`,
        desc: `Want to take control of your online presence, then join the best Digital marketing agency.`

    },
    {
        id: 4,
        simg: "gif3.gif",
        heading: `GRAPHIC  `,
        headingTwo: `DESIGNING`,
        desc: `If you want to redesign your website, start a new social media campaign, or improve your entire digital presence, our graphic design services can help.`

    },
    {
        id: 5,
        simg: "gif22.gif",
        heading: `WEB DESIGN &`,
        headingTwo: `DEVELOPMENT`,
        desc: `Are you ready to boost your online presence with a beautiful and effective website? `
    },
    {
        id: 6,
        simg: "gif8.gif",
        heading: `DIGITAL `,
        headingTwo: `ADVERTISEMENT`,
        desc: `Elevate Your Small Business With Reclame Hub, A leading Digital Marketing Agency Specializing In Tailored Strategies To improve Your Online Presence, Drive Traffic, And increase Conversions.`
    },
    {
        id: 7,
        simg: "gif4.gif",
        heading: `VIDEO-AD `,
        headingTwo: `FILM`,
        desc: `Our video ad film services are meant to assist you in creating aesthetically attractive and interesting films that will resonate with your audience. `
    },
    {
        id: 8,
        simg: "gif7.gif",
        heading: `EMAIL `,
        headingTwo: `MARKETING`,
        desc: `With our Email Marketing Services, you can turbocharge your marketing efforts! `
    },
    {
        id: 9,
        simg: "gif9.gif",
        heading: `CAMPAIGN `,
        headingTwo: `MARKETING`,
        desc: `We help businesses succeed in the digital age! We are here to boost your online presence .`
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
                <text className="heading_description" style={{ color: "#ffffff", textTransform: "capitalize" }}>all | designing | development  | digital marketing </text>
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
            <Box marginTop={"9%"}><Button onClick={handleClick} border="2px solid white" backgroundColor={"transparent"} fontWeight={"500"} _hover={{ bg: "#F47721", color: "white", border: "2px solid #F47721" }} borderRadius={"30px"} marginBottom={"15px"} >Explore More</Button></Box>
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