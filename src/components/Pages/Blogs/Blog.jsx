import { Box, Button, Heading, Image, Text,useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import "./BlogCard.css"
import { Link } from "react-router-dom"
import BlogCards from "./BlogCards"
import CardData from "./BlogCardData"


export const Blog=()=>{


    return(
    <Box w="100%"  m="auto" fontFamily={"poppins"} bg={useColorModeValue('white', 'black')}>
        <div className="heading_div">
<heading className="page_heading"><span style={{color:"#f47721"}}>BLOG</span></heading>
</div>

            
 <Container className="blog-cards-container">
 {CardData.map((val) => (
<BlogCards 
imgsrc={val.imgsrc}title= {val.title} text={val.text}
/>
    
))}

</Container>


    </Box>

    )
}

// <Button className="Blog-btn" bg="pink"> <Link to={`/${el.id}`}>Read More </Link></Button>