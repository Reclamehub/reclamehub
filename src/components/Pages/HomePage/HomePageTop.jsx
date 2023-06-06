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
    <Box className="home-top-btn-box" ><Button width="25%" className="home-top-btn" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Get Started</Button></Box>
    <Box className="home-top-img-box"><Image className="home-top-img"  src="imagegrp.png" /></Box>
</Flex>

    </Box>)
}