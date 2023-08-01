import { Box, Button, Heading, Image, Text,useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import "./Blog.css"
import { Link } from "react-router-dom"


export const Blog=()=>{


    return(
    <Box w="100%"  m="auto" fontFamily={"poppins"} bg={useColorModeValue('white', 'black')}>
        <div className="heading_div">
<heading className="page_heading"><span style={{color:"#ff7722"}}>B</span>l<span style={{color:"#ff7722"}}>o</span>g</heading>
</div>

            
 <Container className="blog-container">
<Box className="blog-box"  boxShadow='xl'  rounded='md' >
    <Image className="blog-img" src="blogimg1.png" alt="blog-img" />
    <Heading>15 Effective Digital Marketing Strategies for Small Businesses</Heading>
    <br />
    <Text> Discover 15 powerful digital marketing strategies tailored for small businesses. Boost your online presence and drive growth effectively. Start now!</Text>
   <Box><Button className="Blog-btn" > <Link to="/effective-digital-marketing-startegies-for-small-businesses">Read More </Link></Button></Box> 
</Box>
</Container>


    </Box>

    )
}

// <Button className="Blog-btn" bg="pink"> <Link to={`/${el.id}`}>Read More </Link></Button>