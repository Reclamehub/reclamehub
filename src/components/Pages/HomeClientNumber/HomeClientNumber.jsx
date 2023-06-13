import { Box, Image, useColorModeValue } from "@chakra-ui/react"

export const HomeClientNumber=()=>{


    return(
    <Box bg={useColorModeValue('white', 'black')}>
    <Box display={useColorModeValue("inline","none")}  bg={useColorModeValue('white', 'black')}  w="100%" m="auto" color={useColorModeValue('white', 'white')} >
<Image w="80%" m="auto" src="globe2.png" />
    </Box>

    <Box display={useColorModeValue("none","inline")}  bg={useColorModeValue('black', 'black')}  w="100%" m="auto" color={useColorModeValue('black', 'black')} >
<Image w="80%" m="auto" src="globe.png" />
    </Box> 
    </Box>
    )
}