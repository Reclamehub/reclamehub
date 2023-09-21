import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const WDD = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Custom Web design",
            text0: "We recognize that your brand is distinctive, and we believe that your website should reflect that. Our site design professionals will collaborate with you to understand your brand's identity, target audience, and business goals. Using this knowledge, we'll construct a bespoke web design that captures the soul of your business and engages your visitors. To provide a memorable user experience, we will prioritize intuitive navigation, visually attractive layouts, and captivating images."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Responsive Web Development",
            text1: "In today's mobile-first world, having a responsive website is no longer an option—it's a need. Our web development team will make certain that your website is optimized for seamless reading and interaction across a wide range of devices, including PCs, smartphones, and tablets. We will give an ideal user experience and decrease bounce rates by implementing responsive design concepts."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Integration of a Content Management System",
            text2: "Managing and updating your website efficiently is critical for being relevant in today's fast-paced digital market. We'll include an easy-to-use content management system (CMS) in your website, allowing you to effortlessly change and publish material without any technical knowledge. Our staff will assist you in picking the best CMS for your needs and will give complete training to guarantee you can fully utilize its capabilities."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Search Engine Optimization (SEO)",
            text3: "A aesthetically appealing website is only useful if your target audience can find it. Our web design and development services include search engine optimization approaches to increase the visibility of your website in search engine results. We'll optimize your website's aspects to increase organic traffic, from keywords to meta tags and URL structure."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Conversion Rate Optimisation (CRO)",
            text4: "The ultimate objective of your digital marketing operations is to drive conversions. Our approach to web design and development is centred on conversion rate optimization. To maximize your website's conversion potential, we'll analyze user behavior, apply A/B testing, and fine-tune various aspects such as calls-to-action and landing page designs. We'll help you achieve greater conversion rates and a higher return on investment by constantly improving the performance of your website."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[4].title1} title2={BannerData[4].title2} descp={BannerData[4].descp} />
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
                        <text className="heading_description2">Digital Marketing and Web Development knowledge: Our staff combines the best of both worlds, with knowledge in digital marketing techniques and web development skills. We understand the complexities of designing websites that are both visually attractive and optimized for digital marketing success.</text>
                    </div>
                </Container>

                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" alt="arrow-vectorpng" />
                        <heading className="smm_heading3">Customized Solutions for Your Brand</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We believe in personalization. Our web design and development services are customized to your unique brand objectives, target audience, and industry standards. We'll design a website that complements your brand identity and digital marketing goals.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" alt="arrow-vectorpng"/>
                        <heading className="smm_heading3"> Cutting-Edge Technology and Trends</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We keep up with the newest web design and development trends to ensure that your website has the most innovative features and functionality. We'll use cutting-edge technology to make your website stand out from the crowd, from responsive design to interactive aspects.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" alt="arrow-vectorpng"/>
                        <heading className="smm_heading3"> Timely Delivery and Support</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We respect your time and work hard to complete your website within the agreed-upon dates. Our staff is committed to providing continuous support and maintenance to guarantee that your website is safe, up to current, and performing at its best.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" alt="arrow-vectorpng" />
                        <heading className="smm_heading3"> Timely Delivery</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3"> We understand the significance of fulfilling deadlines in digital marketing efforts. Our staff is dedicated to producing high-quality designs on time, helping you to stay on track with your project.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" alt="arrow-vectorpng" />
                        <heading className="smm_heading3"> NOTED</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">A website that is aesthetically beautiful, user-friendly, and optimized is critical to the success of any digital marketing campaign. You can build a strong online presence, engage your target audience, and reach your conversion goals with our expert web design and development services.</text>
                    </div>
                </Container>
                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}