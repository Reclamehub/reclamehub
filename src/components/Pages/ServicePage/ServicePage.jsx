import { Box, Button, Heading, useColorModeValue } from "@chakra-ui/react"
import { ServicePageBanner } from "./ServicePageBanner"
import { ServicePageLevel } from "./ServicePageLevel"
import { ServicePageTypes } from "./ServicePageTypes"
import { Link } from "react-router-dom"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect";

export const ServicePage = () => {


    return (
        <Box bg={useColorModeValue('white', "black")}>
            <section id="service">
                <ServicePageBanner />
                <ServicePageLevel />
                <ServicePageTypes />
                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </section>
            <br />


        </Box>
    )
}