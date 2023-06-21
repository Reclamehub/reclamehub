import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { ContactUsPageForm } from "./ContactUsPageForm"
import { ContactUsAddress } from "./ContactUsAddress"
import { Connect } from "../HomePage/Connect"

export const ContactUsPage=()=>{

return(<Box bg={useColorModeValue('white', "black")}>
<ContactUsPageForm />
<ContactUsAddress />
{/* <Connect /> */}
</Box>)

}