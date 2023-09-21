import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ContactForm } from "../../ContactForm/ContactForm"
import { Connect } from "../../Connect/Connect"
import BannerData from "./SingleSrvcBannerData"
import SingleSrvcBanner from "../SingleServicePage/SingleSrvcBanner"
import SingleSrvcList from "./SingleSrvcList"

export const ContentWriter = () => {
    const SMMTableData = [
        {
            id: 0,
            title0: "Phase 1",
            heading0: "Content Plan and Planning",
            text0: "Good content starts with a good plan. Our skilled content production team will work with you to understand your brand, objectives, and target audience. We will perform extensive research and develop a comprehensive content plan that is in line with your goals and provides a consistent message across all platforms."


        },
        {
            id: 1,
            title1: "Phase 2",
            heading1: "SEO-Optimized Content",
            text1: "To increase the online exposure of your business, our content producers are well-versed in search engine optimization (SEO) tactics. We'll generate SEO-friendly content using relevant keywords and best practices to ensure your website ranks better in search engine results and gets organic visitors."

        },
        {
            id: 2,
            title2: "Phase 3",
            heading2: "Engaging Blog Posts and Articles",
            text2: "Blogs and articles are effective tools for demonstrating your knowledge and increasing traffic to your website. Our talented content creators will create well-researched, engaging blog entries and articles that will educate, entertain, and inspire your target audience. "

        },
        {
            id: 3,
            title3: "Phase 4",
            heading3: "Compelling website copy",
            text3: "Your website is frequently the first point of contact for potential clients. We'll write compelling website content that successfully explains your brand's unique value proposition, emphasizes your products or services, and entices visitors to take action. Our content writers will make certain that your website material is succinct, convincing, and suited to your target demographic."

        },
        {
            id: 4,
            title4: "Phase 5",
            heading4: "Social Media Content",
            text4: "Engaging and shareable content is essential for grabbing attention on social media sites. We'll produce fascinating social media posts, images, and videos that match the tone and values of your company. Our content creation team will make certain that your social media material generates engagement, raises brand recognition, and stimulates audience participation."

        },

    ];
    return (
        <>
            <Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
                <SingleSrvcBanner title1={BannerData[1].title1} title2={BannerData[1].title2} descp={BannerData[1].descp} />
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
                        <img src="cw1.png" alt="cw2.png" />
                    </div>
                    <div className="smm_img_div">
                        <img src="cw2.png" alt="cw2.png"/>
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
                        <text className="heading_description2">Don't allow the difficulties of developing great content to stifle your brand's growth. We here at Reclame HUB provide high content, Timeliness and creative delivery of content.<br /><br />
                            partner with us for professional content development services to maximize the potential of your brand and promote meaningful connections with your target audience.
                            Contact us now to see how we can assist you in creating amazing content that elevates your brand and produces results.

                        </text>
                    </div>
                </Container>

                {/* <Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Expertise and experience</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">Our team is made up of social media professionals that have considerable expertise managing social media accounts in a variety of sectors. We stay current on the newest trends and best practises to keep your brand ahead of the competition.</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Personalised Approach</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">We believe in taking a personalised approach to social media management. We'll take the time to understand your brand, goals, and target audience before developing a tailored plan to meet your needs</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Consistency and timeliness</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">When it comes to social media management, consistency is essential. We'll keep your social media profiles fresh and entertaining by posting new material on a regular basis. Our team will also reply quickly to comments and messages, ensuring a great customer experience.</text>
    </div>
</Container>
<Container className="smm_heading3_container">
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5%"}}>
    <img src="arrow-vector.png"/>
    <heading className="smm_heading3"> Creativity and innovation</heading>
    </div>
    <div className="smm_text3_div">
        <text className="smm-text3">Whether it be social media or website, we believe that to make it trending and eye catching tio viewers it should be something more than aesthetic and less than beyond imagination.</text>
    </div>
</Container> */}
               <ContactForm heading="Talk to Our Experts"/>
                <Connect />
            </Box>
        </>
    )
}

//  <Box paddingTop={"30px"}><Heading as="h1"> CONTENT <span style={{color:"#FF7721"}} >WRITER</span></Heading></Box>

// <Box w="80%" m="auto" marginTop="50px"><Text>
// High-quality content is the driving factor behind successful online companies in today's digital market. In addition to attracting and retaining your target audience, compelling and engaging content positions your brand as an industry authority.

// </Text>


// </Box>
// <br />
// <br />

// <Box textAlign={"left"} w="95%" m="auto"><Heading as="h2">HERE COMES <span style={{color:"#F47721"}}>OUR SERVICES......</span></Heading></Box>



// <Box w="100%" margin={"auto"} marginTop={"50px"} fontSize={"2vw"}  textAlign={"left"} marginLeft="-20px" fontWeight={"550"}>
//     <Flex  justifyContent={"space-evenly"}>
//         <Box marginLeft={"-30px"}><Text>Phase 1</Text></Box>
//         <Box><Text>Phase 2</Text></Box>
//         <Box><Text>Phase 3</Text></Box>
//         <Box><Text>Phase 4</Text></Box>
//         <Box><Text>Phase 5</Text></Box>
//     </Flex>
// </Box>
// <Box w="90%" mt="20px" m="auto" textAlign={"left"} >
//     <Flex justifyContent={"space-evenly"} gap="40px">
//         <Box>
//             <Box><Heading as="h3" color="#15E888" fontSize={"1.4vw"} marginTop={"50px"} marginBottom={"50px"} >Content Plan and Planning</Heading></Box>
//             <Box w="80%"><Text color="#FFB800"><ul><li>Good content starts with a good plan. Our skilled content production team will work with you to understand your brand, objectives, and target audience. We will perform extensive research and develop a comprehensive content plan that is in line with your goals and provides a consistent message across all platforms.</li></ul></Text></Box>
//         </Box>
//         <Box>
//         <Box><Heading as="h3" color="#15E888" fontSize={"1.4vw"} marginTop={"50px"} marginBottom={"50px"}>SEO-Optimized Content</Heading></Box>
//             <Box w="80%"><Text color="#FFB800"><ul><li>To increase the online exposure of your business, our content producers are well-versed in search engine optimization (SEO) tactics. We'll generate SEO-friendly content using relevant keywords and best practices to ensure your website ranks better in search engine results and gets organic visitors.</li></ul></Text></Box>
//         </Box>
//         <Box>
//         <Box><Heading as="h3" color="#15E888" fontSize={"1.4vw"} marginTop={"50px"} marginBottom={"50px"}>Engaging Blog Posts and Articles:</Heading></Box>
//             <Box w="80%"><Text color="#FFB800"><ul><li>Blogs and articles are effective tools for demonstrating your knowledge and increasing traffic to your website. Our talented content creators will create well-researched, engaging blog entries and articles that will educate, entertain, and inspire your target audience.</li></ul></Text></Box>
//         </Box>
//         <Box>
//         <Box><Heading as="h3" color="#15E888" fontSize={"1.4vw"} marginTop={"50px"} marginBottom={"65px"}>Compelling website copy</Heading></Box>
//             <Box w="80%"><Text color="#FFB800"><ul><li>Your website is frequently the first point of contact for potential clients. We'll write compelling website content that successfully explains your brand's unique value proposition, emphasizes your products or services, and entices visitors to take action. Our content writers will make certain that your website material is succinct, convincing, and suited to your target demographic.</li></ul></Text></Box>
//         </Box>
//         <Box>
//         <Box>
//             <Heading as="h3" color="#15E888" fontSize={"1.4vw"} marginTop={"50px"} marginBottom={"60px"}>Social Media Content</Heading></Box>
//             <Box w="80%"><Text color="#FFB800"><ul><li> Engaging and shareable content is essential for grabbing attention on social media sites. We'll produce fascinating social media posts, images, and videos that match the tone and values of your company. Our content creation team will make certain that your social media material generates engagement, raises brand recognition, and stimulates audience participation.</li></ul></Text></Box>
//         </Box>
//     </Flex>
// </Box>

// <Box w="80%" m="auto" marginTop={"80px"}>
// <Flex justifyContent={"space-around"}>
//     <Box w="40%" backgroundColor={"gray"} borderRadius={"20px"}><Image src="cw2.gif"  alt="content-writer" /></Box>
//     <Box w="40%" backgroundColor={"gray"} borderRadius={"20px"}><Image src="cw1.gif"  alt="content-writer" /></Box>
// </Flex>
// </Box>


// <Box marginTop={"80px"}>
// <Heading as="h2"><span style={{color:"gray",fontSize:"6vw",fontWeight:"800"}}>?</span> WHY SHOULD <span style={{color:"#F47721"}}>YOU GO WITH US </span> <span style={{color:"gray",fontSize:"6vw",fontWeight:"800"}}>?</span></Heading></Box>
// <Box alignItems={"center"}  display={"flex"}  marginTop={"-50px"}  flexDirection={"column"}><Image src="ques.gif" maxH={"200px"}  atl="social-media-managment" /></Box>
// <Box w="80%" m="auto" fontSize={"1.6vw"} fontWeight="550" >
// <Text>Don't allow the difficulties of developing great content to stifle your brand's growth. We here at Reclame HUB provide high content, Timeliness and creative delivery of content.
// </Text>
// </Box>
// <br />
// <Box w="75%" m="auto" fontSize={"1.4vw"} ><Text> partner with us for professional content development services to maximize the potential of your brand and promote meaningful connections with your target audience.
// Contact us now to see how we can assist you in creating amazing content that elevates your brand and produces results.
// </Text></Box>
// <Box marginTop={"50px"} border={useColorModeValue('1px solid white', "1px solid black")} ><ContactForm /></Box>
// <Box><Connect /></Box>