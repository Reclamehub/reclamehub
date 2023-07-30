import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {Container} from "react-bootstrap"
import {AiOutlineArrowRight} from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const SMM=()=>{
    const SMMTableData = [
        {
            id: 0,
            title0:"Phase 1",
            heading0: "Development of Social Media Strategie",
            text0: "We recognise that each business has distinct aims and target audiences. Our social media professionals will collaborate with you to create a customised social media plan that is suited to your individual needs. We'll investigate your industry, rivals, and target market to develop a strategy for success."
            
    
        },
        {
            id: 1,
            title1:"Phase 2",
            heading1: "Content Creation and Curation",
            text1: "The core of every effective social media strategy is compelling and relevant content. Our talented content developers will create engaging blogs, attractive pictures, and educational films that will appeal to your target audience. We will guarantee that the voice of your brand is consistent across all social media channels."
    
        },
        {
            id: 2,
            title2:"Phase 3",
            heading2: "Account Setup and Optimisation:",
            text2: "Creating social media accounts, especially if you're new to the site, may be intimidating. We'll handle the complete account setup procedure, including profile development, bio optimisation, and website linkage. We'll make sure your social media profiles look great and are optimised for maximum visibility."
    
        },
        {
            id: 3,
            title3:"Phase 4",
            heading3: "Community Engagement and Interaction",
            text3: "Creating a strong online community is critical for developing brand loyalty and consumer engagement. Our staff will monitor your social media sites regularly, reply to comments and messages, and communicate with your audience in a timely and professional manner. We'll assist you in making meaningful relationships and converting followers into devoted customers."
    
        },
        {
            id: 4,
            title4:"Phase 5",
            heading4: "Tracking and analytics of performance",
            text4: " Understanding the impact of your social media activities is critical for fine-tuning your plan and maximising your ROI. We'll deliver frequent updates and insights into critical KPIs like reach, engagement, and conversions. The data will be analysed by our staff to find trends, opportunities, and areas for development."
    
        },
    
    ];
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[0].title1}  title2={BannerData[0].title2} descp={BannerData[0].descp}/>
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
    <img src="smm1.png"  />
</div>
<div className="smm_img_div">
    <img src="smm2.png"  />
</div>
</Container>

<Container style={{marginTop:"3.5%"}}>
    <div className="smm-heading_div">
        <img className="Qmark_img" src="Qmark.png" alt="Qmark"/>
 <heading className="page_heading">why should <span style={{color:"#ff7722"}}>you go with us</span></heading>
    <img className="Qmark_img" src="Qmark.png" alt="Qmark"/>
    </div>

</Container>
</Box>
   </>
) 
}