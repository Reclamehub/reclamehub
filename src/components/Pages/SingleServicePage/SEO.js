import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const SEO = () => {
    const SeoTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Brand Identity Design",
            text0: " A solid brand identity is essential for creating identification and a consistent visual presence. Our graphic designers will collaborate with you to create a brand identity that expresses your beliefs, connects with your target audience, and distinguishes you from the competition. From logo design to color schemes and typography, we'll develop a visually appealing brand identity that matches the personality of your company."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Website Design and Optimisation",
            text1: "For many potential clients, your website is their initial point of contact. Our graphic designers will build aesthetically appealing website designs that are also user-friendly, intuitive, and conversion-optimized. We'll make certain that your website reflects the aesthetics of your business and successfully delivers your message, while also emphasizing smooth navigation and responsive design"

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Social media graphics",
            text2: " Social media visuals that are engaging are vital for attracting attention in congested news feeds. Our graphic designers will produce eye-catching images that are consistent with your brand's identity and successfully express your message. We'll make sure your social media presence stands out and encourages interaction with your target audience, from social media posts to cover photos and profile photographs"

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Data visualization and infographics",
            text3: " Data-driven content is becoming increasingly popular in digital marketing. Our graphic designers are experts in creating attractive infographics and data visualizations that turn difficult information into visually appealing images. We'll work with you to display your data in a visually appealing way that attracts your audience and improves comprehension."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Adverts and Banners",
            text4: "Engaging adverts and banners are critical for increasing conversions and drawing new clients. Our graphic designers will produce visually attractive and convincing ad designs that are consistent with the identity of your company and catch the attention of your target audience. Whether it's display ads, social media ads, or banner ads, we'll make sure your commercials stand out and get results."

        },
    ]

    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[0].title1} title2={BannerData[0].title2} descp={BannerData[0].descp} />
                <SingleSrvcList
                    title0={SeoTableData[0].title0} heading0={SeoTableData[0].heading0} text0={SeoTableData[0].text0}
                    title1={SeoTableData[1].title1} heading1={SeoTableData[1].heading1} text1={SeoTableData[1].text1}
                    title2={SeoTableData[2].title2} heading2={SeoTableData[2].heading2} text2={SeoTableData[2].text2}
                    title3={SeoTableData[3].title3} heading3={SeoTableData[3].heading3} text3={SeoTableData[3].text3}
                    title4={SeoTableData[4].title4} heading4={SeoTableData[4].heading4} text4={SeoTableData[4].text4}
                />
            </Box>
        </>
    )
}