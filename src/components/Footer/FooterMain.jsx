import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Footer } from "./Footer"

import "./FooterMain.css"

export const FooterMain = () => {



    return (
        <Box padding={{ base: "5px", sm: "5px", md: "40px", lg: "40px", xl: "40px" }} bgGradient={useColorModeValue("linear-gradient(white, #FF7721)", "linear-gradient(black, #2f2719)")}>
            <Box w={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }} m="auto" borderRadius={"20px"}><Footer /></Box>
        </Box>
    )
}