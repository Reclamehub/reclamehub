import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const CM = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Campaign Plan and Planning",
            text0: "A sound campaign plan is a foundation for success. We'll work with you to understand your company's goals, target audience, and competitive landscape. Based on this data, we'll create a customized campaign plan that corresponds with your objectives, utilizes the most successful channels, and integrates creative aspects that resonate with your target demographic. Our staff will make certain to provide such information."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Channel Selection & Optimization",
            text1: "We recognize that each campaign needs a distinct mix of digital channels in order to properly reach your target demographic. We'll discover the best platforms for your campaign, whether it's social media, search engine marketing, display advertising, email marketing, or a combination of channels. Our specialists will optimize your campaigns on each channel to maximize exposure, engagement, and conversions."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Captivating and convincing creatives",
            text2: "These are essential for attracting your audience's attention and driving campaign success. Our creative team will create aesthetically attractive and captivating assets that are consistent with your brand's identity and campaign goals. We'll make sure that your creative components, from eye-catching ad graphics to engaging ad language, are meant to engage with your target demographic and motivate action."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Audience Segmentation",
            text3: "Reaching the correct audience is critical for advertising success. We will assist you in identifying and segmenting your target audience based on demographics, interests, behavior, and other pertinent variables. Our team will build personalized messages and experiences for distinct target groups, ensuring that your campaign resonates with each group and generates the highest level of interaction"

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Data-Driven Insights and Real-Time Adjustments",
            text4: "The digital world's always changing, so we never set it and forget it. We constantly monitor crucial KPIs like click-through rates and social shares. Real-time adjustments are our game; if something's off, we tweak it, and if it's spot on, we amplify. No second-guessing, just results."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[9].title1} title2={BannerData[9].title2} descp={BannerData[9].descp} />
                <SingleSrvcList
                    title0={SMMTableData[0].title0} heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
                    title1={SMMTableData[1].title1} heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
                    title2={SMMTableData[2].title2} heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
                    title3={SMMTableData[3].title3} heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
                    title4={SMMTableData[4].title4} heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
                />
                {/* .............................................................................................................. */}
               <Container className="smm_img_container">
                <Box bg={useColorModeValue('#fff', "#1D1D1D")} margin={"auto"} borderRadius={"25px"}>
                    <div className="smm_img_div">
                        <img src="orm1.png" alt="orm2.png"/>
                    </div>
                    </Box>
                    <Box bg={useColorModeValue('#fff', "#1D1D1D")} margin={"auto"} borderRadius={"25px"}>
                    <div className="smm_img_div">
                        <img src="orm2.png" alt="orm2.png"/>
                    </div>
                    </Box>
                </Container>
                {/* why-should-you-content */}
                <Container className="smm_heading2_container">
                    <div className="smm-heading_div">
                        <img className="Qmark_img" src="Qmark.png" alt="Qmark" />
                        <heading className="page_heading">why should <span style={{ color: "#ff7722" }}>you go with us</span></heading>
                        <img className="Qmark_img" src="Qmark.png" alt="Qmark" />
                    </div>
                    <div className="heading_descp_div smm_heading2_descp">
                        <text className="heading_description2">Our team isn't just a one-trick pony; we're experts in both digital marketing and campaign execution. We customize every strategy to fit your brand like a glove, focusing on tangible outcomes that matter to you. We're always up-to-date on the latest industry tricks, and we keep things transparent, so you're never left in the dark.
                          <br />
                         </text>
                    </div>
                </Container>
{/* ------------------------------------- */}
<Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Campaign Marketing Expertise</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">Our team consists of expert campaign marketers that specialize in developing and executing effective campaigns across a wide range of sectors. We stay current on the newest trends, strategies, and technology to keep your campaigns on the cutting edge of innovation.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3">Customized Approach</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3"> We recognize that each business is unique. Our campaign marketing services are customized to your individual goals, target audience, and industry standards. We'll create personalized tactics and creative concepts that complement your brand identity and campaign goals.</text>
                    </div>
                </Container>
                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}