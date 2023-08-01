import { useEffect } from "react"
import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { ContactUsAddress } from "./ContactUsAddress"
import { Connect } from "../../Connect/Connect"
import { ContactForm } from "../../ContactForm/ContactForm"

export const ContactUsPage = () => {
    // useEffect(() => {
    //     window.scrollTo({ behavior: "smooth", top:0})

    //   }, [])
    return (
        <section id="contact">
            <Box bg={useColorModeValue('white', "black")} >
                <div style={{ marginTop: '-4%' }}>
                    <ContactForm />
                </div>
                <ContactUsAddress />

            </Box>
        </section>
    )

}