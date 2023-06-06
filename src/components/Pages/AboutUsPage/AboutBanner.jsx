import { Box, Heading, Image ,Text} from "@chakra-ui/react"

export const AboutBanner=()=>{



    return(<Box alignItems={"center"} marginTop={"20px"} lineHeight={"5rem"}>
        <Box><Heading><span style={{color:"orangered"}}>A</span>BOU<span style={{color:"orangered"}}>T</span> US</Heading></Box>
        <Box><Text fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive, and lucrative</Text></Box>
        <Box display={"flex"} justifyContent={"center"}><Image maxWidth={"40vw"} src="abtgif.gif" alt="top-img" /></Box>

    </Box>)
}