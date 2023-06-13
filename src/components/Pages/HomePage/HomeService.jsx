import {Box,Text,Image, useColorModeValue, Heading, Button} from "@chakra-ui/react"

import "./HomeService.css"
import { Link } from "react-router-dom"

const serviceData=[
    {
    id:1,
    simg:"gif1.gif",
    heading:`SOCIAL MEDIA `,
    headingTwo:` MANAGEMENT`,
    desc:`Struggling with social media management? We're your solution, the top Digital Marketing agency in Noida.`

},
{
    id:2,
    simg:"gif6.gif",
    heading:`CONTENT  `,
    headingTwo:`WRITER`,
    desc:`We will help you build content that is SEO-friendly and could maximize your online presence.`

},
{
    id:4,
    simg:"gif3.gif",
    heading:`GRAPHIC  `,
    headingTwo:`DESIGNING`,
    desc:`our graphic design services can help. We think that excellent design extends beyond aesthetics.`

},
{
    id:5,
    simg:"gif2.gif",
    heading:`WEB DESIGN &`,
    headingTwo:`DEVELOPMENT`,
    desc:`Are you ready to boost your online presence with a beautiful and effective website? Contact the best digital marketing agency.`
},
{
    id:6,
    simg:"gif8.gif",
    heading:`DIGITAL `,
    headingTwo:`ADVERTISEMENT`,
    desc:`We'll help you manage the ever-changing digital world and remain ahead of the competition with our data-driven strategies and industry experience.`
},
{
    id:3,
    simg:"gif4.gif",
    heading:`VIDEO-AD`,
    headingTwo:`FILM`,
    desc:`Our video ad film services are meant to assist you in creating aesthetically attractive and interesting films.`

}
]

export const HomeService=()=>{


    return (<Box p="2vw" paddingTop={"80px"} bg={useColorModeValue('#FF9450', 'black')}>
        
        <Heading fontSize={"3vw"}>SERVICES WE PROVIDE</Heading>

<br />        
        <Box  className="home-service-container" bg={useColorModeValue('#FF9450', 'black')} >



{serviceData.map((el)=><Box key={el.id}  boxShadow='2xl'  >

<Box className="home-service-box" >
            <Box className="home-service-img-box" ><Image maxHeight={"12rem"}  src={el.simg}/></Box>
            
            <Box w={"55%"} className="home-service-heading-box"><Text fontSize={"1.8vw"} fontWeight={"600"} >{el.heading}</Text></Box>
            <Box w={"55%"} className="home-service-heading-box"><Text fontSize={"1.8vw"} fontWeight={"600"} >{el.headingTwo}</Text></Box>            
            <Box w="95%" className="home-service-text-box"><Text fontSize={"1.2vw"}> {el.desc}</Text></Box>
        
        </Box>

</Box>)}



    </Box>
    <br />
    <Box><Link to="/service" ><Button border="2px solid white" backgroundColor={"transparent"} fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Explore More</Button></Link></Box>
    </Box>)

}