import { Box, Heading, useColorModeValue } from "@chakra-ui/react"

export const SocialMediaManagmentPage=()=>{



    return(<Box bg={useColorModeValue('white', "black")}>
        <Heading as="h1"> SOCIAL MEDIA <span style={{color:"#FF7721"}} >MANAGMENT</span></Heading>
    </Box>)
}