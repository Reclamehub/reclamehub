import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"
import SingleSrvcListMobile from "./SingleSrvcListMobile"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ORM = () => {
    const settings = {
        dots: false,      
  infinite: true,    
  speed: 8000,         
  slidesToShow: 1,    
  slidesToScroll: 1,  
  autoplay: true,   
  autoplaySpeed: 9000 
      };
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Analysis of Your Internet Presence",
            text0: "We begin by doing a thorough assessment of your Internet presence. Our reputation management specialists will evaluate your brand's present reputation, identify possible threats, and analyze consumer opinion across several channels. This study is the basis for creating a successful reputation management approach."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "Online Review Management",
            text1: "Online reviews have a large impact on public opinion. We will regularly monitor and reply to online reviews and social media platforms. Our staff will design professional and personalized answers that demonstrate your dedication to customer satisfaction and address any customer complaints or difficulties"

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Content Creation and Optimisation",
            text2: "Creating and optimizing high-quality content is critical in building your online reputation. Our content production team will generate positive, engaging material that shows your brand's strengths, accomplishments, and distinct value proposition. We'll optimize this material for search engines so that good information about your company appears higher in search results."

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Crisis Management",
            text3: " In the case of a reputation crisis or unwanted press, our reputation management professionals will respond quickly and devise a strategy to limit the impact on your business. We'll manage crisis communications, try to resolve the problem, and offer advice on how to rebuild trust and restore your brand's image."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Engagement on Social Media",
            text4: "Social media platforms are important vehicles for brand marketing, but they also pose reputational hazards. We will continuously monitor social media conversations about your business, respond to any bad mentions or comments as soon as possible, and connect with your audience in a positive and real manner."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[2].title1} title2={BannerData[2].title2} descp={BannerData[2].descp} />
                <Box display={{ base: "none", sm: "none", md: "inline", lg: "inline", xl: "inline" }} fontFamily={"poppins"} margin={"auto"} >
                <SingleSrvcList
                    title0={SMMTableData[0].title0} heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
                    title1={SMMTableData[1].title1} heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
                    title2={SMMTableData[2].title2} heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
                    title3={SMMTableData[3].title3} heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
                    title4={SMMTableData[4].title4} heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
                />
                </Box>
                {/* ---------------- */}
                <Box  display={{ base: "inline", sm: "inline", md: "none", lg: "none", xl: "none" }} margin={"auto"} padding={"2px"}  >
<Container className='SSL_heading_div'>
    <p>here comes <span style={{ color: "#ff7721" }}>our services...</span></p>
    </Container>          
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
                        <text className="heading_description2">Your online reputation matters to us. We offer experienced, personalized, and proactive services to protect and boost your brand. Here's why you should choose us.</text>
                    </div>
                </Container>

                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Expertise</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">Our reputation management team has vast expertise in navigating the difficult terrain of online reputation management. We remain up to speed on the newest trends, methodologies, and platforms in order to implement the most successful strategy for your company.</text>
                    </div>
                </Container>
                <Container className="smm_heading3_container">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5%" }}>
                        <img src="arrow-vector.png" />
                        <heading className="smm_heading3"> Customized Strategies</heading>
                    </div>
                    <div className="smm_text3_div">
                        <text className="smm-text3">We recognize that each brand and individual is unique. Our reputation management services are customized to your individual goals and needs. We will collaborate closely with you to create a tailored approach that is consistent with your brand identity and objectives.</text>
                    </div>
                </Container>
               
                <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}