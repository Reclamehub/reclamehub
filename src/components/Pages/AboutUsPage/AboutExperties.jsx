import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutExperties=()=>{


return(<Box>
    <Box><Heading>OUR <span style={{color:"orangered"}}>EXPERTIES</span></Heading></Box>
    
    <br />
    <Box><Text fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive, and lucrative</Text></Box>
<Box>
    <Flex alignItems={"end"}>
        <Box>
        <Box><Image src="gif1.gif" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}> SOCIAL MEDIA MANAGMENT</Text></Box>
        </Box>
        <Box> 
        <Box><Image src="gif3.gif" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}>GRAPHIC DESIGNING</Text></Box>

        </Box>
        <Box>
        <Box border="1px solid red"><Image src="gif2.gif" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}> WEB DESIGN & DEVELOPMENT</Text></Box>
        </Box>
    </Flex>
</Box>
</Box>)

}