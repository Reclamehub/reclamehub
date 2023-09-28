import { Box, Text, Image, useColorModeValue,useColorMode, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import "./HomeService.css"

const serviceData = [
    {
        id: 1,
        simg: "srvcgif1.gif",
        heading: `SOCIAL MEDIA `,
        headingTwo: ` MANAGEMENT`,
        desc: `Tired of feeling overwhelmed by the never-ending demands of social media? Let us take control and transform your social media presence.  `

    },
    {
        id: 2,
        simg: "srvcgif2.gif",
        heading: `CONTENT  `,
        headingTwo: `MARKETING`,
        desc: `Ready to take your initial step forward? Contact us today for amazing content development. We will help you build content that is SEO-friendly and could maximize your online presence. `

    },
    {
        id: 3,
        simg: "gif5.gif",
        heading: `ONLINE  REPUTATION `,
        headingTwo: `MANAGEMENT`,
        desc: `Want to be the talk of the online world? Come on board with our Digital Marketing Agency. We're experts in making sure people see the best version of your business. Trust us, your customers will be singing your praises in no time. `

    },
    {
        id: 4,
        simg: "gif3.gif",
        heading: `GRAPHIC  `,
        headingTwo: `DESIGNING`,
        desc: `Let us bring your vision to life and create stunning visuals that will captivate your audience and leave a lasting impression.`

    },
    {
        id: 5,
        simg: "gif22.gif",
        heading: `WEB DESIGN &`,
        headingTwo: `DEVELOPMENT`,
        desc: `Elevate your Brand to new heights with stunning websites that captivate your audience. Trust us to handle the technical aspects, so you can focus on growing your online presence.`

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
        desc: `Start using our services today and witness the transformation in your marketing strategy! With email marketing, we provide the key to reclaiming engagement, nurturing prospects, and skyrocketing conversions. `
    },
    {
        id: 9,
        simg: "gif9.gif",
        heading: `CAMPAIGN `,
        headingTwo: `MARKETING`,
        desc: `We help businesses succeed in the digital age! We are here to boost your online presence and produce remarkable outcomes with our cutting-edge methods and unique solutions.`
    },

]

export const HomeService = () => {
    const { colorMode } = useColorMode();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/service');
    };

    return (
        <Box p="2vw" paddingTop={"5%"} paddingBottom={"5%"} bg={useColorModeValue('#ff9450', 'black')} margin={"auto"}>
            <div className="heading_div">
                <heading className="page_heading" >services we provide</heading>
            </div>
            <div className="heading_descp_div srvc_heading_descp">
                <text className="heading_description " style={{ color: "#ffffff", textTransform: "capitalize", }}> Your Aim, Our Assistance. The services provided are as follows:</text>
            </div>

   {/* <Box className="hservice_cards_container" bg={useColorModeValue('#ffffff','#1D1D1D')}>   </Box> */}
            <Container className="hservice_cards_container">
                {serviceData.map((el) =>(
          <Link to="/service">
                    <div className="hservice_card_div"
                    style={{
                        backgroundColor: colorMode === "light" ? '#ff9450' : "#1D1D1D",
                    }}
                     key={el.id} >
                        <div className="hservice_img">
                        <img  style={{maxHeight:"100%"}}src={el.simg} />
                        </div>
                      <div className="srvc_card_text_wrapper" style={{ fontFamily: "poppins" }}>
                            <heading className="hservice_cards_heading"> {el.heading} <br /> {el.headingTwo}</heading>
                            <p className="hservice_cards_text">{el.desc}</p>
                        </div>
                        </div>
                    </Link>
                ))}
             
            </Container>
            <Box className="expMore_btn_div">< button onClick={handleClick} className="expMore_btn">Explore More</button></Box>
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