import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {CgProfile} from "react-icons/cg"
import {FaHandsHelping} from "react-icons/fa"
import {BiStar} from "react-icons/bi"
import {AiFillLock} from "react-icons/ai"
import { BsTelephoneFill} from "react-icons/bs"
export const MenuNav=()=>{
    
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [placement, setPlacement] = useState('left')
      
        return (
          <>

            <Button  onClick={onOpen}>
            <HamburgerIcon />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                    <Box display={"flex"} gap="3vw">
                        <Box><Image w="10vw"  src="navicon.png" /></Box>
                        <Box>
                            <Box ><Text fontSize={"4vw"} fontWeight={"bold"}>RECLAME HUB</Text></Box>
                            <Box><Text fontSize={"3vw"} fontWeight={"700"}>info@reclamehub.com</Text></Box>
                        </Box>
                    </Box>
                    
                    </DrawerHeader>
                <DrawerBody>
                  <Box display={"flex"}border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <FaHandsHelping size="4vw" color="orangered" /></Box>
                    <Box><Text >EXPLORE</Text></Box>
                  </Box>
                  


                  <Box display={"flex"}border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <CgProfile size="4vw" color="orangered" /></Box>
                    <Box><Text >ABOUT US</Text></Box>
                  </Box>

                  <Box display={"flex"}border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <BiStar size="4vw" color="orangered" /></Box>
                    <Box><Text >SERVICES</Text></Box>
                  </Box>

                  <Box display={"flex"}border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <AiFillLock size="4vw" color="orangered" /></Box>
                    <Box><Text >PORTFOLIO</Text></Box>
                  </Box>

                  <Box display={"flex"}border="1px solid black" gap="2vw" p="10px" fontWeight={"bold"} fontSize={"3.5vw"}>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} > <BsTelephoneFill size="4vw" color="orangered" /></Box>
                    <Box><Text >CONTACT US</Text></Box>
                  </Box>

                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }