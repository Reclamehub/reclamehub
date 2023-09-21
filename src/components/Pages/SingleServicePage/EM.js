import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const EM = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Campaign Plan and Planning",
            text0: "A well-defined plan is the foundation of any effective email marketing campaign. Our professional team will collaborate with you to fully comprehend your business objectives, target audience, and marketing objectives. We will create a plan based on this information."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Email Design and Content",
            text1: "We recognize the significance of developing aesthetically appealing and intriguing emails that capture attention and encourage interaction. Our design team will create eye-catching email templates that suit your brand's identity and will optimize them for different devices and email clients. We'll also create convincing and personalized email content that speaks to your target audience, highlights your services, and motivates them to take the necessary action."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "List Creation and Management",
            text2: "Creating and managing a high-quality email list is critical to the success of your email marketing efforts. We'll assist you in implementing efficient ways for naturally growing your subscriber bases, such as lead generation approaches, website sign-up forms, and optimized landing pages. We will also help you manage your email list by adopting the correct segmentation and keeping it up to date."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Automated Email Campaigns",
            text3: "Using automated email campaigns, you may save time and increase efficiency. We'll configure triggered emails in response to certain user behaviors, such as welcome emails, abandoned cart reminders, or personalized suggestions. Our team will assist you in leveraging marketing automation systems to send targeted and timely communications, nurture prospects, and drive conversions while creating a smooth and personalized customer experience."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Tracking and analytics of performance",
            text4: "Understanding the effect of your email campaigns is critical for constant optimization. To assess the efficacy of your email marketing initiatives, we will track important performance data such as open rates, click-through rates, conversion rates, and revenue earned. Our comprehensive analytics reports will give useful insights into subscriber behavior, campaign performance, and areas for development."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[7].title1} title2={BannerData[7].title2} descp={BannerData[7].descp} />
                <SingleSrvcList
                    title0={SMMTableData[0].title0} heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
                    title1={SMMTableData[1].title1} heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
                    title2={SMMTableData[2].title2} heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
                    title3={SMMTableData[3].title3} heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
                    title4={SMMTableData[4].title4} heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
                />
                {/* .............................................................................................................. */}
                <Container className="smm_img_container">
                    <div className="smm_img_div">
                        <img src="orm1.png" alt="orm1.png"/>
                    </div>
                    <div className="smm_img_div">
                        <img src="orm2.png"alt="orm2.png" />
                    </div>
                </Container>
                {/* why-should-you-content */}
                <Container className="smm_heading2_container">
                    <div className="smm-heading_div">
                        <img className="Qmark_img" src="Qmark.png" alt="Qmark" />
                        <heading className="page_heading">why should <span style={{ color: "#ff7722" }}>you go with us</span></heading>
                        <img className="Qmark_img" src="Qmark.png" alt="Qmark" />
                    </div>
                    <div className="heading_descp_div smm_heading2_descp">
                        <text className="heading_description2">All you need is high-quality video production so here we are with the top-notch quality and quantity. No need to worry we provide the best output ever, which takes less time and export best quality
                            <br />
                            <br />
                            Make captivating video content a part of your digital marketing plan. You can produce aesthetically gorgeous, emotionally resonant, and highly engaging videos that captivate your audience's attention and deliver real outcomes with our experienced video ad and film services.
                        </text>
                    </div>
                </Container>


                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}