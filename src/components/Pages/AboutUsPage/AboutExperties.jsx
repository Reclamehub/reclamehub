import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutExperties=()=>{


return(<Box>
    <Box><Heading>OUR <span style={{color:"#FF7721"}}>EXPERTIES</span></Heading></Box>
    
    <br />
    <Box><Text fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive and lucrative.</Text></Box>
<br />
<Box>
    <Flex  w="90%" m="auto" flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row"}} justifyContent={{base:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}}>
        <Box border="1px solid gray"  p="10px" m="10px" borderRadius={"10px"}>
        <Box display={"flex"} justifyContent={"center"}>
            <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"400px",xl:"400px"}}  src="gif1.gif" alt="social media managment"  /></Box>
            <Box> <Text color="#FF7721" fontWeight={"bold"} fontSize={"20px"}> SOCIAL MEDIA MANAGMENT</Text></Box>
        </Box>
  
        <Box border="1px solid gray" p="10px" m="10px" borderRadius={"10px"} > 
        <Box display={"flex"} justifyContent={"center"}>
            <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"400px",xl:"400px"}} src="gif3.gif" alt="graphic designing" /></Box>
            <Box> <Text color="#FF7721" fontWeight={"bold"} fontSize={"20px"} >GRAPHIC DESIGNING</Text></Box>

        </Box>
        <Box border="1px solid gray" p="10px" m="10px" borderRadius={"10px"}>
        <Box display={"flex"} justifyContent={"center"} >
            <Image boxSize={{base:"200px",sm:"200px",md:"240px",lg:"400px",xl:"400px"}} src="gif2.gif" alt="web design and development" /></Box>
            <Box mt="5px"> <Text color="#FF7721" fontWeight={"bold"} fontSize={"20px"} > WEB DESIGN & DEVELOPMENT</Text></Box>
        </Box>
    </Flex>
</Box>
</Box>)

}