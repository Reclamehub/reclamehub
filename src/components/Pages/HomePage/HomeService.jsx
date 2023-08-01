import { Box, Text, Image, useColorModeValue, Heading, Button } from "@chakra-ui/react"
import "./HomeService.css"
import { useNavigate } from "react-router-dom"
import { Container, Row } from "react-bootstrap"

const serviceData = [
    {
        id: 1,
        simg: "gif1.gif",
        heading: `SOCIAL MEDIA `,
        headingTwo: ` MANAGEMENT`,
        desc: `Struggling with social media management? We're your solution, the top Digital Marketing Agency in Noida.`

    },
    {
        id: 2,
        simg: "gif6.gif",
        heading: `CONTENT  `,
        headingTwo: `WRITER`,
        desc: `We will help you build content that is SEO-friendly and could maximize your online presence.`

    },
    {
        id: 3,
        simg: "gif5.gif",
        heading: `ONLINE  REPUTATION `,
        headingTwo: `MANAGEMENT`,
        desc: `We will help you build content that is SEO-friendly and could maximize your online presence.`

    },
    {
        id: 4,
        simg: "gif3.gif",
        heading: `GRAPHIC  `,
        headingTwo: `DESIGNING`,
        desc: `Design Services Can Help. We Think That Excellent Design Extends Beyond Aesthetics. Our Graphic Design Services Can Help.`

    },
    {
        id: 5,
        simg: "gif22.gif",
        heading: `WEB DESIGN &`,
        headingTwo: `DEVELOPMENT`,
        desc: `
    
    Are you ready to boost your online presence with a beautiful and effective website? Contact the best digital marketing agency.`
    },
    {
        id: 6,
        simg: "gif8.gif",
        heading: `DIGITAL `,
        headingTwo: `ADVERTISEMENT`,
        desc: `We'll help you manage the ever-changing digital world and remain ahead of the competition with our data-driven strategies and industry experience.`
    },
    {
        id: 7,
        simg: "gif4.gif",
        heading: `VIDEO-AD `,
        headingTwo: `FILM`,
        desc: `Our video ad film services are meant to assist you in creating aesthetically attractive and interesting films.`
    },
    {
        id: 8,
        simg: "gif7.gif",
        heading: `EMAIL `,
        headingTwo: `MARKETING`,
        desc: `With our Email Marketing Services, you can turbocharge your marketing efforts.`
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
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/service');
    };
    // <div  style={{
    //     backgroundImage:`url(${Ellipse10})`,
    //     backgroundSize: '100% 100%',
    //     backgroundPosition: 'center',
    // }} >

    return (
        <Box p="2vw" paddingTop={"5%" } paddingBottom={"5%"} bg={useColorModeValue('#FF9450', 'black')} margin={"auto"}>
            <div className="heading_div">
            <heading className="page_heading" >services we provide</heading>
            </div>
            <div className="heading_descp_div">
            <text className="heading_description" style={{color: "#ffffff",textTransform:"capitalize"}}>all | designing | development  | digital marketing </text>
            </div>


            <Container className="hservice_cards_container">
                {serviceData.map((el) =>
                    <div className="hservice_card_div" key={el.id}  >
                        <img className="hservice_img" src={el.simg} />

                        <div style={{ marginBottom: "auto", fontFamily: "poppins" }}>
                           <heading className="hservice_cards_heading"> {el.heading} <br /> {el.headingTwo}</heading>
                            <p className="hservice_cards_text">{el.desc}</p>
                        </div>

                    </div>
)}
            </Container>
         <Box marginTop={"7%"}><Button onClick={handleClick} border="2px solid white" backgroundColor={"transparent"} fontWeight={"500"} _hover={{ bg: "#F47721", color: "white", border: "2px solid #F47721" }} borderRadius={"30px"} marginBottom={"15px"} >Explore More</Button></Box>
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