import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"
import SingleSrvcListMobile from "./SingleSrvcListMobile"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const SMM = () => {
    const settings = {
        dots: true,         // Show navigation dots
  infinite: true,     // Enable infinite scrolling
  speed: 2000,         // Transition speed in milliseconds
  slidesToShow: 1,    // Number of slides to show at a time
  slidesToScroll: 1,  // Number of slides to scroll at a time
  autoplay: true,     // Enable auto-sliding
  autoplaySpeed: 5000 
      };
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Development of Social Media Strategie",
            text0: "We recognise that each business has distinct aims and target audiences. Our social media professionals will collaborate with you to create a customised social media plan that is suited to your individual needs. We'll investigate your industry, rivals, and target market to develop a strategy for success."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Content Creation and Curation",
            text1: "The core of every effective social media strategy is compelling and relevant content. Our talented content developers will create engaging blogs, attractive pictures, and educational films that will appeal to your target audience. We will guarantee that the voice of your brand is consistent across all social media channels."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Account Setup and Optimisation",
            text2: "Creating social media accounts, especially if you're new to the site, may be intimidating. We'll handle the complete account setup procedure, including profile development, bio optimisation, and website linkage. We'll make sure your social media profiles look great and are optimised for maximum visibility."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Community Engagement and Interaction",
            text3: "Creating a strong online community is critical for developing brand loyalty and consumer engagement. Our staff will monitor your social media sites regularly, reply to comments and messages, and communicate with your audience in a timely and professional manner. We'll assist you in making meaningful relationships and converting followers into devoted customers."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Tracking and analytics of performance",
            text4: " Understanding the impact of your social media activities is critical for fine-tuning your plan and maximising your ROI. We'll deliver frequent updates and insights into critical KPIs like reach, engagement, and conversions. The data will be analysed by our staff to find trends, opportunities, and areas for development."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[0].title1} title2={BannerData[0].title2} descp={BannerData[0].descp} />
                <Box display={{ base: "none", sm: "none", md: "inline", lg: "inline", xl: "inline" }} fontFamily={"poppins"} margin={"auto"} >
                <SingleSrvcList
                    title0={SMMTableData[0].title0} heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
                    title1={SMMTableData[1].title1} heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
                    title2={SMMTableData[2].title2} heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
                    title3={SMMTableData[3].title3} heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
                    title4={SMMTableData[4].title4} heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
                />
                </Box>
                <Box display={{ base: "inline", sm: "inline", md: "none", lg: "none", xl: "none" }} margin={"auto"} >
             
      <Slider {...settings}>
       <div>
          <SingleSrvcListMobile
            title={SMMTableData[0].title0}
            heading={SMMTableData[0].heading0}
            text={SMMTableData[0].text0}
         />
        </div>
        <div>
          <SingleSrvcListMobile
            title={SMMTableData[1].title1}
            heading={SMMTableData[1].heading1}
            text={SMMTableData[1].text1}
            // Add other props for Slide 2
          />
        </div>
        <div>
          <SingleSrvcListMobile
            title={SMMTableData[2].title2}
            heading={SMMTableData[2].heading2}
            text={SMMTableData[2].text2}
         />
        </div>
        <div>
          <SingleSrvcListMobile
            title={SMMTableData[3].title3}
            heading={SMMTableData[3].heading3}
            text={SMMTableData[3].text3}
         />
        </div>
        <div>
          <SingleSrvcListMobile
            title={SMMTableData[4].title4}
            heading={SMMTableData[4].heading4}
            text={SMMTableData[4].text4}
         />
        </div>
        </Slider>
                </Box>
                {/* .............................................................................................................. */}
                <Container className="smm_img_container">
                <Box bg={useColorModeValue('#fff', "#1D1D1D")} margin={"auto"} borderRadius={"25px"}>
                    <div className="smm_img_div">
                        <img src="smm1.png" alt="smm1.png"/>
                    </div>
                </Box>
                <Box bg={useColorModeValue('#fff', "#1D1D1D")} margin={"auto"} borderRadius={"25px"}>
                    <div className="smm_img_div">
                        <img src="smm2.png"alt="smm2.png" />
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
                        <text className="heading_description2">We don’t provide the best but we provide the creative, innovative and engaging content which could flood your social media with likes comments and shares.</text>
                    </div>
                </Container>

                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Expertise and experience</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">Our team is made up of social media professionals that have considerable expertise managing social media accounts in a variety of sectors. We stay current on the newest trends and best practises to keep your brand ahead of the competition.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Personalised Approach</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We believe in taking a personalised approach to social media management. We'll take the time to understand your brand, goals, and target audience before developing a tailored plan to meet your needs</text>
                    </div>
                </Container>
               
                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}