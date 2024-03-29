import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { HomeService } from "./HomeService";
import { HomePageTop } from "./HomePageTop";
import { HomeClientNumber } from "../HomeClientNumber/HomeClientNumber";
import { HomeAbout } from "./HomeAbout";
import { Help } from "./Help";
import { Brand } from "./Brand";
import { HomeClients } from "./HomeClients";
import { HomeTeam } from "./HomeTeam";
import { Connect } from "../../Connect/Connect";
import { ClientSlider } from "./ClientSlider";

export const HomePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();


    return (<Box bg={useColorModeValue('white', 'black')}>

        <HomePageTop />
        <HomeAbout />
        <HomeClientNumber />
        <HomeService />
        <Help />
        <Brand />
        <HomeClients />
        <ClientSlider />
        <Connect />
    </Box>)
}