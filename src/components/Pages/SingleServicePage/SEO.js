import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
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
            heading0: "In-depth SEO Research",
            text0: "Our evaluation starts with your website’s current SEO status! Our phenomenal team of experts is dedicated to conducting in-depth SEO research and audit. Factors such as website structure, content quality, keywords, and backlink profiles help us identify key areas of improvement and optimization."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Strategies ",
            text1: "Next, based on the SEO research and audit we start making strategies. We identify the highly impactful keywords for your business and make SEO strategies that will optimise your website laser focus on both on-page and off-page. This astonishing strategy guarantees that your website will skyrocket to the very top of search engine results pages (SERPs) for all the perfect search queries!"

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "On-page Optimization",
            text2: " Now, Get ready to take your website to the next level with vibrant on-page optimisation! We vigilantly optimise meta tags, headers, and content of your website in accordance with SEO strategies. We are determined to make your website the most valuable, incredible resource in your entire industry."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Content & Link Creation",
            text3: "In this stage, we focus on development of high-quality content and establishing relevant links. In the SEO world, Content not only attracts users but also satisfies search engine strategies boosting website authority and credibility. Get ready for search engines to take notice of your website!"

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Optimal Performance Optimization",
            text4: "This is the best stage ever! Where we make everything more amazing.  We ecstatically monitor the performance of your website using mind-bogglingly advanced analytics tools. We adapt ever-evolving search engine algorithms and industry trends to ensure your website's SEO strategy is nothing short of effective and fiercely competitive!"

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
                 {/* .............................................................................................................. */}
                 <Container className="smm_img_container">
                    <div className="smm_img_div">
                        <img src="seo2.png" alt="seo2.png"/>
                    </div>
                    <div className="smm_img_div">
                        <img src="seo1.png"alt="seo1.png" />
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
                        <text className="heading_description2">If you're looking for an SEO partner you can count on, you've come to the right place. At Reclame Hub, we've built our reputation on getting real results for our clients. So, why should you choose us? Here are two straightforward reasons.
                            <br />
                           </text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Unbeatable Dependability</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">In the confusing world of online marketing, you can trust Reclame Hub to guide you. Our experienced SEO team knows what works because we've successfully done it before. We are a reliable choice in a field that can be unpredictable.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3">Tailor made strategy</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3"> One size doesn't fit all in the world of SEO, and we get that. Our team is not just a bunch of SEO aficionados; they're strategy architects who craft a plan as unique as your business. Your specific goals and target audience are the backbone of our customized, laser-focused SEO strategies.</text>
                    </div>
                </Container>
               
                <ContactForm heading="Talk to Our Experts" />
                <Connect />
            </Box>
        </>
    )
}