import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"
import SMMTableData from "./SingleSrvcListData"

export const SMM=()=>{
   
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[0].title1}  title2={BannerData[0].title2} descp={BannerData[0].descp} />
   <SingleSrvcList 
    heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
    heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
    heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
    heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
    heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
   />
</Box>
   </>
) 
}