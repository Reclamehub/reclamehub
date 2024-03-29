import { Box, Container, Flex, Image, Text, Button, useDisclosure, useColorModeValue, useColorMode, } from "@chakra-ui/react"
import "./Navbar.css"
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { MenuNav } from "./Menu";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();


  return (<div>
    <Container className="nav-container" maxW='100%' bg={useColorModeValue('white', 'black')}>
      <Flex className="nav-row">
        <Box className="nav-icon-box"><Link to="/"> <Image bgColor={""} borderRadius={"0px"} border="0px solid black" color={"white"} className="nav-icon-img" src="navicon22.png" /></Link></Box>
        <Box className="nav-col-two-container">
          <Flex className="nav-col-two">
            <Box>
            </Box>
            <Box><Text _hover={{ color: "#F47721" }}><Link to="/explore">EXPLORE </Link></Text> </Box>
            <Box><Text _hover={{ color: "#F47721" }}><Link to="/about">ABOUT US</Link></Text> </Box>
            <Box><Link to="/service"><Text _hover={{ color: "#F47721" }}>SERVICES</Text></Link></Box>
            <Box><Link to="/"><Text _hover={{ color: "#F47721" }}>PORTFOLIO</Text></Link></Box>
            <Box> <Link to="/contact"><Text _hover={{ color: "#F47721" }}>CONTACT US</Text></Link></Box>

          </Flex>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box className="color-mode-change"><DarkMode /></Box>
        <Box className="nav-menu-mob"><MenuNav /></Box>
        </Box>
      </Flex>
    </Container>
  </div>)
}