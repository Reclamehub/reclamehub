import { Box, useColorModeValue } from "@chakra-ui/react"
import { ServicePageBanner } from "./ServicePageBanner"
import { ServicePageLevel } from "./ServicePageLevel"
import { ServicePageTypes } from "./ServicePageTypes"
import { ContactUsPageForm } from "../ContactUsPage/ContactUsPageForm"
import { Connect } from "../HomePage/Connect"

export const ServicePage=()=>{


    return (<Box bg={useColorModeValue('white', "black")}>
        
        <ServicePageBanner />
        <ServicePageLevel />
        <ServicePageTypes />
    <ContactUsPageForm />
    <Connect />
    </Box>)
}