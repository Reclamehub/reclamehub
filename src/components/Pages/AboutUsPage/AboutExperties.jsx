import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutExperties=()=>{


return(<Box>
    <Box><Heading>OUR <span style={{color:"#FF7721"}}>EXPERTIES</span></Heading></Box>
    
    <br />
    <Box><Text fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive and lucrative.</Text></Box>
<br />
<Box>
    <Flex justifyContent={"space-around"}>
        <Box border="1px solid gray" p="10px" m="10px" borderRadius={"10px"}>
        <Box><Image boxSize={"300px"} src="gif1.gif" alt="social media managment"  /></Box>
            <Box> <Text color="#FF7721" fontWeight={"bold"}> SOCIAL MEDIA MANAGMENT</Text></Box>
        </Box>
        <Box border="1px solid gray" p="10px" m="10px" borderRadius={"10px"}> 
        <Box><Image boxSize={"300px"} src="gif3.gif" alt="graphic designing" /></Box>
            <Box> <Text color="#FF7721" fontWeight={"bold"}>GRAPHIC DESIGNING</Text></Box>

        </Box>
        <Box border="1px solid gray" p="10px" m="10px" borderRadius={"10px"}>
        <Box ><Image boxSize={"300px"} src="gif2.gif" alt="web design and development" /></Box>
            <Box> <Text color="#FF7721" fontWeight={"bold"}> WEB DESIGN & DEVELOPMENT</Text></Box>
        </Box>
    </Flex>
</Box>
</Box>)

}