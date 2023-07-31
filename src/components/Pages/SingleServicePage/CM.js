import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Container } from "react-bootstrap"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const CM=()=>{
    const SMMTableData = [
        {
            id: 0,
            title0:"Phase 1",
            heading0: "Campaign Plan and Planning",
            text0: "A sound campaign plan is a foundation for success. We'll work with you to understand your company's goals, target audience, and competitive landscape. Based on this data, we'll create a customized campaign plan that corresponds with your objectives, utilizes the most successful channels, and integrates creative aspects that resonate with your target demographic. Our staff will make certain to provide such information."
            
    
        },
        {
            id: 1,
            title1:"Phase 2",
            heading1: "Channel Selection & Optimization",
            text1: "We recognize that each campaign needs a distinct mix of digital channels in order to properly reach your target demographic. We'll discover the best platforms for your campaign, whether it's social media, search engine marketing, display advertising, email marketing, or a combination of channels. Our specialists will optimize your campaigns on each channel to maximize exposure, engagement, and conversions."
    
        },
        {
            id: 2,
            title2:"Phase 3",
            heading2: "Captivating and convincing creatives",
            text2: "These are essential for attracting your audience's attention and driving campaign success. Our creative team will create aesthetically attractive and captivating assets that are consistent with your brand's identity and campaign goals. We'll make sure that your creative components, from eye-catching ad graphics to engaging ad language, are meant to engage with your target demographic and motivate action."
    
        },
        {
            id: 3,
            title3:"Phase 4",
            heading3: "Audience Segmentation",
            text3: "Reaching the correct audience is critical for advertising success. We will assist you in identifying and segmenting your target audience based on demographics, interests, behavior, and other pertinent variables. Our team will build personalized messages and experiences for distinct target groups, ensuring that your campaign resonates with each group and generates the highest level of interaction"
    
        },
        {
            id: 4,
            title4:"Phase 5",
            heading4: "",
            text4: "We believe in the potential of data-driven decision-making and continuous optimization. We will closely monitor the performance of your campaign, measure critical indicators, and do in-depth analysis throughout. These insights will be used by our specialists to create data-driven optimizations, changing targeting, message, and creative aspects to optimize campaign performance and maximize your ROI."
    
        },
    
    ];
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[9].title1}  title2={BannerData[9].title2} descp={BannerData[9].descp} />
   <SingleSrvcList 
    title0={SMMTableData[0].title0} heading0={SMMTableData[0].heading0} text0={SMMTableData[0].text0}
    title1={SMMTableData[1].title1}  heading1={SMMTableData[1].heading1} text1={SMMTableData[1].text1}
    title2={SMMTableData[2].title2} heading2={SMMTableData[2].heading2} text2={SMMTableData[2].text2}
    title3={SMMTableData[3].title3}  heading3={SMMTableData[3].heading3} text3={SMMTableData[3].text3}
    title4={SMMTableData[4].title4}  heading4={SMMTableData[4].heading4} text4={SMMTableData[4].text4}
   />
   {/* .............................................................................................................. */}
<Container className="smm_img_container">
<div className="smm_img_div">
    <img src="orm1.png"  />
</div>
<div className="smm_img_div">
    <img src="orm2.png"  />
</div>
</Container>
{/* why-should-you-content */}
<Container className="smm_heading2_container">
    <div className="smm-heading_div">
        <img className="Qmark_img" src="Qmark.png" alt="Qmark"/>
 <heading className="page_heading">why should <span style={{color:"#ff7722"}}>you go with us</span></heading>
    <img className="Qmark_img" src="Qmark.png" alt="Qmark"/>
    </div>
    <div className="heading_descp_div smm_heading2_descp">
    <text className="heading_description2">DAll you need is high-quality video production so here we are with the top-notch quality and quantity. No need to worry we provide the best output ever, which takes less time and export best quality
    <br/>
    <br/>
    Make captivating video content a part of your digital marketing plan. You can produce aesthetically gorgeous, emotionally resonant, and highly engaging videos that captivate your audience's attention and deliver real outcomes with our experienced video ad and film services. 
    </text>
</div>
</Container>

<ContactForm/>
<Connect/>
</Box>
   </>
) 
}