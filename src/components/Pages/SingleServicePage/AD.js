import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const AD=()=>{
   
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[10].title1}  title2={BannerData[10].title2} descp={BannerData[10].descp} />
   <SingleSrvcList/>
</Box>
   </>
) 
}