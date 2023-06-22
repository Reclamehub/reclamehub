import { Flex, Image, Text,Box } from "@chakra-ui/react"

export const Brand=()=>{



    return (
    <Box borderBottom="4px solid white" paddingBottom={"80px"} paddingTop={"80px"}>
    <Box border={"5px solid #FFD2B5"}   width={"80%"} margin={"auto"} p={"20px"}>
        <Flex justifyContent={"space-around" } alignItems={"center"}>        <Box><Image src="brandgif.gif"  alt="gif"/></Box>
        <Box fontSize={"4vw"} fontWeight={"600"}>
            <Text>LET'S</Text>
            <Text style={{ color:"#feac78"}}>HAVE A </Text>
            <Text style={{ color:"#feac78"}}>BRAND DATE</Text>
            <Text>? </Text>
        </Box>
        </Flex>

        {/* <Box><Image src="" alt="img" /></Box> */}
    </Box>
    </Box>
    )
}