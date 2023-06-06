import { Box, Container, Flex, Image, Text,Button, useDisclosure,useColorModeValue,useColorMode, } from "@chakra-ui/react"
import "./Navbar.css"
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

export const Navbar=()=>{
  const { colorMode, toggleColorMode } = useColorMode();
    

    return(<div>
         <Container className="nav-container" maxW='100%'  bg={useColorModeValue('white', 'black')}>
<Flex className="nav-row">
    <Box className="nav-icon-box"> <Image bgColor={"white"} borderRadius={"60px"} border="1px solid black" color={"white"} className="nav-icon-img" src="navicon.png" /></Box>
    <Box className="nav-col-two-container">
        <Flex className="nav-col-two">
            <Box>
              </Box>
              <Box><Text>HOME</Text> </Box>
            <Box><Text><Link to="/about">ABOUT US</Link></Text> </Box>
            <Box><Text>SERVICES</Text></Box>
            <Box> <Text>PORTFOLIO</Text></Box>
            <Box> <Link to="/contact"><Text>Contact US</Text></Link></Box>
            
        </Flex>
    </Box>
    <Box className="color-mode-change"><DarkMode /></Box>
</Flex>
  </Container>
    </div>)
}