import { Box, useColorModeValue } from "@chakra-ui/react"
import { AboutBanner } from "./AboutBanner"
import { AboutVision } from "./AboutVision"
import { AboutProcess } from "./AboutProcess"
import { AboutApproch } from "./AboutApproch"
import { AboutExperties } from "./AboutExperties"
import { AboutChoose } from "./AboutChoose"
import { AboutForm } from "./AboutForm"
import { AboutFeatured } from "./AboutFeatured"
import FeaturedSlider from "./FeaturedSlider"
import { AboutCoreValue } from "./AboutCoreValue"
import { Connect } from "../HomePage/Connect"
import { ContactForm } from "../../ContactForm/ContactForm"

export const AboutUs=()=>{

    return(<Box fontFamily={"poppins"} bg={useColorModeValue('white', 'black')}>
        <AboutBanner />
        <AboutVision />
        <AboutApproch />
        <AboutProcess />
        <br />
        <AboutExperties />
        <AboutChoose />
        <AboutFeatured />
        <FeaturedSlider />
        <AboutCoreValue />
       <ContactForm/>
    
        <Connect />
    </Box>)
}