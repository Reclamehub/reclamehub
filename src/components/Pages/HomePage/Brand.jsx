import { Flex, Image, Text,Box } from "@chakra-ui/react"

export const Brand=()=>{



    return (<Box border={"5px solid #F47721"} width={"80%"} margin={"auto"} p={"20px"}>
        <Flex justifyContent={"space-around" } alignItems={"center"}>        <Box><Image src="brandgif.gif"  alt="gif"/></Box>
        <Box fontSize={"4vw"} fontWeight={"600"}>
            <Text>LET'S</Text>
            <Text style={{ color:"#F47721"}}>HAVE A </Text>
            <Text style={{ color:"#F47721"}}>BRAND DATE</Text>
            <Text>? </Text>
        </Box>
        </Flex>

        {/* <Box><Image src="" alt="img" /></Box> */}
    </Box>)
}