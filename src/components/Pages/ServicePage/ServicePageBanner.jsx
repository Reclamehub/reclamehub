import { Box, Button, Heading, Text } from "@chakra-ui/react"

export const ServicePageBanner=()=>{

return (<Box  backgroundImage={"homtopbg.png"} textAlign={"left"}  p="5vw" >

<Box w="60%"><Heading  fontSize={"4vw"}>WE  <span style={{color:"#fe611d"}}>PRIORITIZE SERVICES</span></Heading></Box>
<Box><Heading fontSize={"4vw"}> AND <span style={{color:"#fe611d"}}>SATISFACTION</span></Heading></Box>
<br />
<br />
<Box><Text w="40%">WE AT OUR RECLAME HUB UNDERSTAND THE VALUE OF HAVING A STRONG ONLINE PRESENCE AND EFFICIENTLY REACHING YOUR TARGET AUDIENCE</Text></Box>
<br />
<br />
<Button border="1px solid #fe611d" borderRadius={"20px"} w="10vw">Get Started</Button>

</Box>)


}