import {Box,Text,Image, useColorModeValue, Heading, Button} from "@chakra-ui/react"

import "./HomeService.css"
import { Link } from "react-router-dom"
import { Container,Row } from "react-bootstrap"

const serviceData=[
    {
    id:1,
    simg:"gif1.gif",
    heading:`SOCIAL MEDIA `,
    headingTwo:` MANAGEMENT`,
    desc:`Struggling with social media management? We're your solution, the top Digital Marketing Agency in Noida.`

},
{
    id:2,
    simg:"gif6.gif",
    heading:`CONTENT  `,
    headingTwo:`WRITER`,
    desc:`We will help you build content that is SEO-friendly and could maximize your online presence.`

},
{
    id:3,
    simg:"gif4.gif",
    heading:`VIDEO-AD`,
    headingTwo:`FILM`,
    desc:`Our video ad film services are meant to assist you in creating aesthetically attractive and interesting films.`

},
{
    id:4,
    simg:"gif3.gif",
    heading:`GRAPHIC  `,
    headingTwo:`DESIGNING`,
    desc:`design services can help. We think that excellent design extends beyond aesthetics.Our graphic design services can help.`

},
{
    id:5,
    simg:"gif22.gif",
    heading:`WEB DESIGN &`,
    headingTwo:`DEVELOPMENT`,
    desc:`
    
    Are you ready to boost your online presence with a beautiful and effective website? Contact the best digital marketing agency.`
},
{
    id:6,
    simg:"gif8.gif",
    heading:`DIGITAL `,
    headingTwo:`ADVERTISEMENT`,
    desc:`We'll help you manage the ever-changing digital world and remain ahead of the competition with our data-driven strategies and industry experience.`
},

]

export const HomeService=()=>{


    return (
<Box p="2vw" paddingTop={{base:"20px",sm:"20px",md:"40px",lg:"60px",xl:"80px"}} bg={useColorModeValue('#FF9450', 'black')}>
<Heading fontSize={"3vw"} marginBottom={{base:"10px",sm:"30px",md:"30px",lg:"40px",xl:"50px"}}>SERVICES WE PROVIDE</Heading>
<Text color={"#FFFFFF"}>ALL | DESIGNING | DEVELOPMENT  | DIGITAL MARKETING  </Text>
<br />  
<Container  className="hservice_cards_container">
    {serviceData.map((el)=>
   
       
        <div className="hservice_card_div" key={el.id}  >
<img className="hservice_img" src={el.simg}/>
     <div style={{marginBottom:"auto",fontFamily:"poppins"}}>
<heading className="hservice_cards_heading"> {el.heading} <br/> {el.headingTwo}</heading>
<p className="hservice_cards_text">{el.desc}</p>
</div>

        </div>
       
  
        )}
    </Container>      

    <br />
    <Box><Link to="/service" ><Button border="2px solid white" backgroundColor={"transparent"} fontWeight={"500"} _hover={{bg:"#F47721",color:"white",border:"2px solid #F47721"}} borderRadius={"30px"} marginBottom={"15px"} marginTop={"10px"}>Explore More</Button></Link></Box>
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