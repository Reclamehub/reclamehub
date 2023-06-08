import {Flex, Button,Image,Box,Text } from "@chakra-ui/react"

import "./HomePageTop.css"

export const HomePageTop=()=>{


    return(<Box className="Home-top-container">
        <Box className="home-all-heading">
        <Text className="home-heading-one">Our Expertise Is In Determining What Makes A Firm Unique,Attractive And Lucrative</Text>
        <Text className="home-heading-two">YOUR SEARCH FOR THE</Text>
        <Text className="home-heading-three" >DIGITAL MARKETING AGENCY</Text>
        <Text className="home-heading-four"> IN <span style={{color:"#F47721"}}  >INDIA</span> ENDS HERE....</Text>
        </Box>
<Flex className="home-btn-img">
{/* border="2px solid #F47721" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} */}
    <Box className="home-top-btn-box" ><Button  className="home-top-btn" size={{base:"xs",sm:"sm", md:"sm", lg:"md", xl:"lg"}} fontSize={{base:"sm",sm:"sm", md:"sm", lg:"xl", xl:"xl"}} fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"} >Get Started</Button></Box>
    <Box className="home-top-img-box"><Image className="home-top-img"  src="imagegrp.png" /></Box>
</Flex>

    </Box>)
}