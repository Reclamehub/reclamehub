import { Box, Button, Heading, Text } from "@chakra-ui/react"

export const Connect=()=>{

    return(<Box alignItems={"center"} marginTop={"50px"}>
<Box><Heading>What are you waiting for ?</Heading></Box>
<br />
<br />
<Box><Button w="12%" className="home-top-btn" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Get Started</Button></Box>
    </Box>)
}