import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { ContactUsAddress } from "./ContactUsAddress"
import { Connect } from "../HomePage/Connect"
import { ContactForm } from "../../ContactForm/ContactForm"

export const ContactUsPage=()=>{

return(
<Box bg={useColorModeValue('white', "black")}>
    <div style={{marginTop:'-2%'}}>
<ContactForm/>
    </div>
<ContactUsAddress />
{/* <Connect /> */}
</Box>)

}