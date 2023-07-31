import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {Container} from "react-bootstrap"
import {AiOutlineArrowRight} from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const GD=()=>{
    const SMMTableData = [
        {
            id: 0,
            title0:"Phase 1",
            heading0: "Brand Identity Design",
            text0: " A solid brand identity is essential for creating identification and a consistent visual presence. Our graphic designers will collaborate with you to create a brand identity that expresses your beliefs, connects with your target audience, and distinguishes you from the competition. From logo design to color schemes and typography, we'll develop a visually appealing brand identity that matches the personality of your company."
            
    
        },
        {
            id: 1,
            title1:"Phase 2",
            heading1: "Website Design and Optimisation",
            text1: "For many potential clients, your website is their initial point of contact. Our graphic designers will build aesthetically appealing website designs that are also user-friendly, intuitive, and conversion-optimized. We'll make certain that your website reflects the aesthetics of your business and successfully delivers your message, while also emphasizing smooth navigation and responsive design"
    
        },
        {
            id: 2,
            title2:"Phase 3",
            heading2: "Social media graphics",
            text2: " Social media visuals that are engaging are vital for attracting attention in congested news feeds. Our graphic designers will produce eye-catching images that are consistent with your brand's identity and successfully express your message. We'll make sure your social media presence stands out and encourages interaction with your target audience, from social media posts to cover photos and profile photographs"
    
        },
        {
            id: 3,
            title3:"Phase 4",
            heading3: "Data visualization and infographics",
            text3: " Data-driven content is becoming increasingly popular in digital marketing. Our graphic designers are experts in creating attractive infographics and data visualizations that turn difficult information into visually appealing images. We'll work with you to display your data in a visually appealing way that attracts your audience and improves comprehension."
    
        },
        {
            id: 4,
            title4:"Phase 5",
            heading4: "Adverts and Banners",
            text4: "Engaging adverts and banners are critical for increasing conversions and drawing new clients. Our graphic designers will produce visually attractive and convincing ad designs that are consistent with the identity of your company and catch the attention of your target audience. Whether it's display ads, social media ads, or banner ads, we'll make sure your commercials stand out and get results."
    
        },
    
    ];
    return(
        <>
    <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
   <SingleSrvcBanner title1={BannerData[3].title1}  title2={BannerData[3].title2} descp={BannerData[3].descp} />
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
    <text className="heading_description2">Use aesthetically appealing visuals to boost the effectiveness of your digital marketing activities. You can improve your brand, engage your target audience, and create meaningful conversions with our expert graphic design services.</text>
</div>
</Container>

<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3">Design Expertise</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">Our graphic designers are highly experienced individuals who are knowledgeable about both graphic design and digital marketing. We understand the special requirements of producing graphics for digital marketing campaigns, and we make sure that our designs are not only visually appealing but also optimized for maximum effect.</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Customization</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">We believe in adapting our graphic designs to your exact requirements. Our designers will work with you closely to understand your brand, target audience, and campaign objectives, ensuring that our designs are consistent with your brand identity and successfully deliver your message</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Attention to Detail</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3"> We have a great eye for detail and are devoted to creating high-quality designs. To guarantee that your visuals are aesthetically attractive and polished, our graphic designers pay close attention to every detail, from color palettes and font to layout and composition.</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Timely Delivery</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3"> We understand the significance of fulfilling deadlines in digital marketing efforts. Our staff is dedicated to producing high-quality designs on time, helping you to stay on track with your project.</text>
    </div>
</Container>
<ContactForm/>
<Connect/>
</Box>
   </>
) 
}