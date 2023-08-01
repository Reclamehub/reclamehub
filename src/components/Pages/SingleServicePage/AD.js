import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const AD = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Custom App Development",
            text0: "We specialize in developing custom mobile applications that are tailored to your unique business requirements. Our skilled developers will collaborate with you closely to understand your goals, target audience, and desired features, ensuring that your app completely corresponds with your corporate identity."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "User–Centric Design",
            text1: "We think that great software begins with a smooth user experience and an intuitive UI. Our design team will work with you to produce an app that is not only visually beautiful but also offers a user-friendly experience. We ensure that your app stands out from the crowd by embracing the current design trends and best practices."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Mobile Strategy and Consulting",
            text2: "To launch a successful app, meticulous preparation, and a complete mobile strategy are required. From idea through deployment, our team of professionals will walk you through every step of the process. We will do full research on your company and target audience, assisting you in identifying the important features and functions that will maximize the effect of your app. "

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Integration and scalability",
            text3: "We understand the need of integrating new systems and software with current ones. Our developers have a wealth of expertise in connecting apps with a variety of platforms, including e-commerce platforms, CRM systems, and analytics tools. Furthermore, we create scalable solutions that can scale with your company, allowing for future expansion."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Quality Assurance and Testing",
            text4: "To achieve the highest quality standards, each app we produce is extensively tested by our dedicated quality assurance team. Before launch, we do extensive testing across numerous devices and platforms, finding and fixing any problems or difficulties. Our rigorous approach ensures a seamless and error-free user experience, increasing client happiness and app performance."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[10].title1} title2={BannerData[10].title2} descp={BannerData[10].descp} />
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
                        <img src="orm1.png" />
                    </div>
                    <div className="smm_img_div">
                        <img src="orm2.png" alt="orm2.png"/>
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

                <ContactForm />
                <Connect />
            </Box>
        </>
    )
}