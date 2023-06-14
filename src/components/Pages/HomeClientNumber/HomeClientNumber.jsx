import {Text, Box, Image, useColorModeValue } from "@chakra-ui/react"

import "./HomeClientNumber.css"

export const HomeClientNumber=()=>{


    return(
    <Box bg={useColorModeValue('white', 'black')} paddingTop={"20px"} paddingBottom={"50px"}>

<Box w="80%" m="auto">
    <Box display={useColorModeValue("inline","none")}  bg={useColorModeValue('white', 'black')}  w="100%" m="auto" color={useColorModeValue('white', 'white')} >
<Image w="80%" m="auto" src="globe2.png" />
    </Box>

    <Box display={useColorModeValue("none","inline")}  bg={useColorModeValue('black', 'black')}  w="100%" m="auto" color={useColorModeValue('black', 'black')} >
<Image w="80%" m="auto" src="globe.png" />
    </Box>

<Box display={"flex"} justifyContent={"space-between"}>
    <Box>
        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829">4 T+</Box>
        <Box fontWeight={"650"} fontSize={"1.8vw"}>
            <Text>TOTAL HOURS</Text>
            <Text>SPEND</Text>
        </Box>
    </Box>
    <Box className="vl"></Box>
    <Box>
        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829" >200+</Box>
        <Box fontWeight={"650"} fontSize={"1.8vw"}>
            <Text>TOTAL NUMBER OF</Text>
            <Text>CLIENTS</Text>
        </Box>
    </Box>

    <Box className="vl"></Box>

    <Box>
        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829">50K+</Box>
        <Box fontWeight={"650"} fontSize={"1.8vw"}>
            <Text>TOTAL CUP OF</Text>
            <Text>TEA</Text>
        </Box>
    </Box>
</Box>
    </Box> 
    </Box>
    )
}