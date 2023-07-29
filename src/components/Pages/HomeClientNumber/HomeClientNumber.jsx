import { Text, Box, Image, useColorModeValue } from "@chakra-ui/react"

import "./HomeClientNumber.css"

export const HomeClientNumber = () => {


    return (
        <Box bg={useColorModeValue('white', 'black')} paddingTop={"5%"} paddingBottom={"0"}>

            <Box w="80%" m="auto">
                <Box display={useColorModeValue("inline", "none")} bg={useColorModeValue('white', 'black')} w="100%" m="auto" color={useColorModeValue('white', 'white')} >
                    <Image w="80%" m="auto" src="globe2.png" />
                </Box>

                <Box display={useColorModeValue("none", "inline")} bg={useColorModeValue('black', 'black')} w="100%" m="auto" color={useColorModeValue('black', 'black')} >
                    <Image w="80%" m="auto" src="globe.png" />
                </Box>

                <Box display={"flex"} justifyContent={"space-between"}marginTop={"20px"}>
                    <Box>
                        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829">4 T+</Box>
                        <Box fontWeight={"600"} fontSize={"1.6vw"}>
                            <text>TOTAL HOURS</text><br/>
                            <text>SPEND</text>
                        </Box>
                    </Box>
                    <Box className="vl"></Box>
                    <Box>
                        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829" >$ 120 T+</Box>
                        <Box fontWeight={"600"} fontSize={"1.6vw"}>
                            <text>TOTAL NUMBER OF</text><br/>
                            <text>CLIENTS</text>
                        </Box>
                    </Box>

                    <Box className="vl"></Box>

                    <Box>
                        <Box fontSize={"4vw"} fontWeight={"bold"} color="#E6B829"> $ 120 T+</Box>
                        <Box fontWeight={"600"} fontSize={"1.6vw"}>
                            <text>TOTAL CUP OF</text><br/>
                            <text>TEA</text>
                        </Box>
                    </Box>
                </Box>
            </Box>
<div style={{marginTop:"5%"}}>
            <Box className="client-up-shadow"></Box>
            <Box className="home-client-band"></Box>
        </div>
        </Box>
    )
}