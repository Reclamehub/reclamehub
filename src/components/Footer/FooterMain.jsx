import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Footer } from "./Footer"

import "./FooterMain.css"

export const FooterMain=()=>{



    return (<Box  p="40px" bgGradient={useColorModeValue("linear-gradient(white, #FF7721)","linear-gradient(black, #2f2719)")}>
        <Box  w="85%" m="auto" borderRadius={"20px"}><Footer /></Box>
    </Box>)
}