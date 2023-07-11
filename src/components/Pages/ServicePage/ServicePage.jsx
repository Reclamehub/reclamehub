import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react"
import { ServicePageBanner } from "./ServicePageBanner"
import { ServicePageLevel } from "./ServicePageLevel"
import { ServicePageTypes } from "./ServicePageTypes"
import { Link } from "react-router-dom"
import { ContactForm } from "../../ContactForm/ContactForm"

export const ServicePage=()=>{


    return (<Box bg={useColorModeValue('white', "black")}>
        
        <ServicePageBanner />
        <ServicePageLevel />
        <ServicePageTypes />
   <ContactForm/>
    <br />
    <Box bg={useColorModeValue('white', 'black')} alignItems={"center"} paddingTop={"50px"} paddingBottom={"50px"}  >
<Box><Heading>WHAT ARE YOU WAITING FOR?</Heading></Box>
<br />
<br />
<Box> <Link to="/contact"><Button  className="home-top-btn" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Get Started</Button></Link></Box>
    </Box>
    </Box>)
}