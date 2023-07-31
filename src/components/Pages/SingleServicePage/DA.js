import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import { Container } from "react-bootstrap"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const DA=()=>{
    const SMMTableData = [
        {
            id: 0,
            title0:"Phase 1",
            heading0: "Campaign Plan & Planning",
            text0: "We recognize that a sound plan is the foundation of every successful digital advertising campaign. Our digital advertising professionals will collaborate with you to fully comprehend your company's objectives, target audience, and unique value offer. We'll create a complete campaign plan based on this data."
            
    
        },
        {
            id: 1,
            title1:"Phase 2",
            heading1: "Ad Creation and Design",
            text1: "Capturing the attention of your target audience requires compelling and aesthetically attractive commercials. Our creative team will create eye-catching and engaging ad creatives that are consistent with the identity and messaging of your company. We'll build advertising that stands out and generate clicks and conversions, from intriguing ad content to visually arresting visuals and videos."
    
        },
        {
            id: 2,
            title2:"Phase 3",
            heading2: "Targeted Audience Segmentation",
            text2: "A successful digital advertising strategy relies on reaching the proper audience. We'll use extensive audience segmentation techniques to find and target certain demographics, interests, and behaviors that match the goals of your campaign. We will maximize the efficacy of your campaign and save wasted ad spend by delivering your advertising to the most appropriate target groups."
    
        },
        {
            id: 3,
            title3:"Phase 4",
            heading3: "Campaign Optimization and Monitoring",
            text3: "Constant monitoring and optimization are required to guarantee that your digital advertising campaigns provide the greatest results possible. Our staff will actively monitor the performance of your campaigns, analyze data, and make real-time data-driven modifications. To maximize click-through rates, conversions, and return on ad spend (ROAS), we'll optimize targeting, ad placements, ad language, and bidding methods."
    
        },
        {
            id: 4,
            title4:"Phase 5",
            heading4: "Tracking and reporting on performance",
            text4: "Transparent and comprehensive reporting is critical for assessing the effectiveness of your digital advertising initiatives. We'll send out frequent performance reports outlining important data like impressions, clicks, conversions, and cost per acquisition (CPA). Our extensive reports will assist you in understanding campaign performance, identifying areas for improvement, and making educated campaign decisions in the future."
    
        },
    
    ];
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[5].title1}  title2={BannerData[5].title2} descp={BannerData[5].descp} />
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
    <text className="heading_description2">We are experts at digital advertising and have a customized approach to your audience all the data is been what measured and then we look into it. We as a digital marketing agency try to boost the effectiveness of your digital marketing operations. With our expert digital advertising services, you can efficiently reach your target audience, attract quality visitors to your website, and create measurable business outcomes. </text>
</div>
</Container>

<ContactForm/>
<Connect/>
</Box>
   </>
) 
}