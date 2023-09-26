import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import { Container } from "react-bootstrap"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const VAF = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Video Ad Production",
            text0: "Our creative team of video production specialists specializes in making fascinating video advertisements that create an impact. We'll walk you through the whole production process, from concept conception through scriptwriting, storyboarding, filming, and editing. We'll provide high-quality video commercials that successfully express your business message and generate conversions, whether it's a short promotional video, a social media ad, or a film for display advertising."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Brand Films and Storytelling",
            text1: "Brand films have the ability to elicit emotional responses and increase viewer engagement. We'll collaborate closely with you to understand your brand's values, stories, and goals. Using our narrative and visual aesthetics experience, we'll create brand videos that capture your audience, highlight your distinct brand identity, and leave a lasting impression."


        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Testimonial and Case Study films",
            text2: "Testimonials and case study films are effective social proof components that increase trust and credibility. Through video interviews and appealing images, we will record actual consumer experiences and success stories. Our staff will create testimonials and case study films to illustrate the advantages of your products or services."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Testimonial and Case Study films",
            text3: "Explainer and tutorial films are great tools for explaining complicated topics, highlighting product benefits, and educating your audience. Our video production team will work with you to develop informative and compelling explainer and tutorial films that explain your services clearly, solve frequent pain points, and lead viewers through the process. These films may be used to supplement the material on your website, shared on social media, or included in email marketing campaigns."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Coverage and Highlights of Industry Events",
            text4: "If you're organizing or attending industry events, recording the highlights on video is a terrific method to broaden your reach and engage a larger audience. Our videographers will capture the enthusiasm, significant moments, and insightful interviews during your events. We'll develop event coverage and highlight films that you can publish on your website, and social media channels, or utilize for post-event marketing."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[6].title1} title2={BannerData[6].title2} descp={BannerData[6].descp} />
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
                        <img src="orm1.png" alt="orm1.png"/>
                    </div>
                    </Box>
                    <Box bg={useColorModeValue('#fff', "#1D1D1D")} margin={"auto"} borderRadius={"25px"}>
                    <div className="smm_img_div">
                        <img src="orm2.png"alt="orm2.png" />
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
                        <text className="heading_description2">Our track record speaks for itself, but let's put it into terms that resonate with what you're looking for.</text>
                        <br />
                       </div>
                </Container>
{/* ................ */}
<Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Expertise and experience</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">Our creative team brings together years of hands-on experience in video production and digital marketing. We're not just specialists; we're industry experts who know how to make your brand shine.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3">Customization Tailored to You</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We don't believe in a one-size-fits-all approach. Our services are custom-tailored to meet your specific needs and vision, making each project a unique masterpiece that speaks to your target audience.</text>
                    </div>
                </Container>

                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}