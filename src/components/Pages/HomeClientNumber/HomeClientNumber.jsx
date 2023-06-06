import { Box, Image, useColorModeValue } from "@chakra-ui/react"

export const HomeClientNumber=()=>{


    return(<Box  bg={useColorModeValue('black', 'black')} w="90%" m="auto" color={useColorModeValue('red', 'black')} >
<Image src="globe.png" />
    </Box>)
}