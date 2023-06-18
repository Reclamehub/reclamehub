import { Box, Heading, Image ,Text} from "@chakra-ui/react"


import "./AboutBanner.css"

export const AboutBanner=()=>{



    return(<Box alignItems={"center"} paddingTop={"20px"} lineHeight={"5rem"}>
        <Box><Heading as="h1" className="about-heading" ><span style={{color:"orangered"}}>A</span>BOU<span style={{color:"orangered"}}>T</span> US</Heading></Box>

        <Box><Text fontWeight={"550"} fontSize={{base:"10px",sm:"20px",md:"20px",lg:"30px",xl:"25px"}} marginTop={"30px"} lineHeight={{base:"1.5em",sm:"2em",md:"2em",lg:"1.5em",xl:"4em"}}>Our expertise is in determining what makes a firm unique, attractive and lucrative.</Text></Box>
        <Box display={"flex"} justifyContent={"center"}><Image maxWidth={"40vw"} src="abtgif.gif" alt="top-img" /></Box>

    </Box>)
}