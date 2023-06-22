import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import { AboutForm } from "../AboutUsPage/AboutForm"
import { Connect } from "../HomePage/Connect"



export const Orm=()=>{


    return(<Box bg={useColorModeValue('white', "black")} fontFamily={"poppins"}>
        <Box paddingTop={"30px"}><Heading as="h1"> SOCIAL MEDIA <span style={{color:"#FF7721"}} >MANAGMENT</span></Heading></Box>

<Box w="80%" m="auto" marginTop="50px"><Text>
Our Team Of Social Media Professionals Is Here To Relieve You Of The Load And Assist You In Harnessing The Power Of Social Media To Promote Your Business. We Provide A Complete Variety Of Services Encompassing All Elements Of Social Media Management.
In Today's Digital World, Social Media Is An Essential Component Of Every Effective Marketing Plan. Navigating The Ever-Changing Environment Of Social Networks, On The Other Hand, May Be Intimidating And Time-Consuming. This Is Where we Step In.
    </Text>
<Text>This Is Where We Will Assist You. </Text>

    </Box>
<br />
<br />

<Box textAlign={"left"} w="95%" m="auto"><Heading as="h2">HERE COMES <span style={{color:"#F47721"}}>OUR SERVICES......</span></Heading></Box>
    
    {/* phase */}

    <Box w="100%" fontWeight={"550"} margin={"auto"} marginTop={"50px"} fontSize={"2vw"}  textAlign={"left"} marginLeft="-20px">
        <Flex  justifyContent={"space-evenly"}>
            <Box marginLeft={"-30px"}><Text>Phase 1</Text></Box>
            <Box><Text>Phase 2</Text></Box>
            <Box><Text>Phase 3</Text></Box>
            <Box><Text>Phase 4</Text></Box>
            <Box><Text>Phase 5</Text></Box>
        </Flex>
    </Box>
    <Box w="90%" m="auto" textAlign={"left"} >
        <Flex justifyContent={"space-evenly"} gap="40px">
            <Box>
                <Box><Heading as="h3" color="#15E888" fontSize={"1.3vw"} marginTop={"50px"} marginBottom={"50px"} >Development of Social Media Strategies</Heading></Box>
                <Box w="80%"><Text color="#FFB800"><ul><li>We recognise that each business has distinct aims and target audiences. Our social media professionals will collaborate with you to create a customised social media plan that is suited to your individual needs. We'll investigate your industry, rivals, and target market to develop a strategy for success.</li></ul></Text></Box>
            </Box>
            <Box>
            <Box><Heading as="h3" color="#15E888" fontSize={"1.3vw"} marginTop={"50px"} marginBottom={"50px"}>Content Creation and Curation</Heading></Box>
                <Box w="80%"><Text color="#FFB800"><ul><li>The core of every effective social media strategy is compelling and relevant content. Our talented content developers will create engaging blogs, attractive pictures, and educational films that will appeal to your target audience. We will guarantee that the voice of your brand is consistent across all social media channels.</li></ul></Text></Box>
            </Box>
            <Box>
            <Box><Heading as="h3" color="#15E888" fontSize={"1.3vw"} marginTop={"50px"} marginBottom={"50px"}>Account Setup and Optimisation:</Heading></Box>
                <Box w="80%"><Text color="#FFB800"><ul><li>Creating social media accounts, especially if you're new to the site, may be intimidating. We'll handle the complete account setup procedure, including profile development, bio optimisation, and website linkage. We'll make sure your social media profiles look great and are optimised for maximum visibility.</li></ul></Text></Box>
            </Box>
            <Box>
            <Box><Heading as="h3" color="#15E888" fontSize={"1.3vw"} marginTop={"50px"} marginBottom={"50px"}>Community Engagement and Interaction</Heading></Box>
                <Box w="80%"><Text color="#FFB800"><ul><li>Creating a strong online community is critical for developing brand loyalty and consumer engagement. Our staff will monitor your social media sites regularly, reply to comments and messages, and communicate with your audience in a timely and professional manner. We'll assist you in making meaningful relationships and converting followers into devoted customers.</li></ul></Text></Box>
            </Box>
            <Box>
            <Box>
                <Heading as="h3" color="#15E888" fontSize={"1.3vw"} marginTop={"50px"} marginBottom={"50px"}>Tracking and analytics of performance</Heading></Box>
                <Box w="80%"><Text color="#FFB800"><ul><li> Understanding the impact of your social media activities is critical for fine-tuning your plan and maximising your ROI. We'll deliver frequent updates and insights into critical KPIs like reach, engagement, and conversions. The data will be analysed by our staff to find trends, opportunities, and areas for development.</li></ul></Text></Box>
            </Box>
        </Flex>
    </Box>
 
 <Box w="80%" m="auto" marginTop={"80px"}>
    <Flex justifyContent={"space-around"}>
        <Box w="40%" backgroundColor={"gray"} borderRadius={"20px"}><Image src="smm1.png"  alt="social-media-managment" /></Box>
        <Box w="40%" backgroundColor={"gray"} borderRadius={"20px"}><Image src="smm2.png"  alt="social-media-managment" /></Box>
    </Flex>
 </Box>

 {/* why should go with us */}
 <Box marginTop={"80px"}>
    <Heading as="h2"><span style={{color:"gray",fontSize:"6vw",fontWeight:"800"}}>?</span> WHY SHOULD <span style={{color:"#F47721"}}>YOU GO WITH US </span> <span style={{color:"gray",fontSize:"6vw",fontWeight:"800"}}>?</span></Heading></Box>
 <Box alignItems={"center"}  display={"flex"}  marginTop={"-50px"}  flexDirection={"column"}><Image src="ques.gif" maxH={"200px"}  atl="social-media-managment" /></Box>
 <Box w="80%" m="auto">
    <Text>We don’t provide the best but we provide the creative, innovative and engaging content which could flood your social media with likes comments and shares.</Text>
 </Box>
 
 {/* Expertise and experience */}
 <Box alignItems={"center"} textAlign={"center"} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}><Flex gap="10px" marginTop={"50px"}>
    <Box  fontWeight={"800"} display={"flex"}  flexDirection={"column"} alignItems={"center"} justifyContent={"center"}><AiOutlineArrowRight color="#15E888"  /></Box>
    <Box><Heading as="h3" fontSize={"2vw"} color="#F47721"> Expertise and experience</Heading></Box>
    </Flex>
    <br />
    <Box w="80%" m="auto"><Text>Our team is made up of social media professionals that have considerable expertise managing social media accounts in a variety of sectors. We stay current on the newest trends and best practises to keep your brand ahead of the competition.</Text></Box>
    
    </Box>
    {/* Personalised Approach */}
 
    <Box alignItems={"center"} textAlign={"center"} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}><Flex gap="10px" marginTop={"50px"}>
    <Box   display={"flex"}  flexDirection={"column"} alignItems={"center"} justifyContent={"center"}><AiOutlineArrowRight color="#15E888" /></Box>
    <Box><Heading as="h3" fontSize={"2vw"} color="#F47721"> Personalised Approach</Heading></Box>
    </Flex>
    <br />
    <Box w="80%" m="auto"><Text>We believe in taking a personalised approach to social media management. We'll take the time to understand your brand, goals, and target audience before developing a tailored plan to meet your needs.</Text></Box>
    
    </Box>

    {/* Consistency and timeliness */}
    
    <Box alignItems={"center"} textAlign={"center"} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}><Flex gap="10px" marginTop={"50px"}>
    <Box   display={"flex"}  flexDirection={"column"} alignItems={"center"} justifyContent={"center"}><AiOutlineArrowRight color="#15E888" /></Box>
    <Box><Heading as="h3" fontSize={"2vw"} color="#F47721"> Consistency and timeliness</Heading></Box>
    </Flex>
    <br />
    <Box w="80%" m="auto"><Text>When it comes to social media management, consistency is essential. We'll keep your social media profiles fresh and entertaining by posting new material on a regular basis. Our team will also reply quickly to comments and messages, ensuring a great customer experience.</Text></Box>
    
    </Box>
    {/* Creativity and innovation */}
    
    <Box alignItems={"center"} textAlign={"center"} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}><Flex gap="10px" marginTop={"50px"}>
    <Box   display={"flex"}  flexDirection={"column"} alignItems={"center"} justifyContent={"center"}><AiOutlineArrowRight color="#15E888" /></Box>
    <Box><Heading as="h3" fontSize={"2vw"} color="#F47721"> Creativity and innovation</Heading></Box>
    </Flex>
    <br />
    <Box w="80%" m="auto"><Text>Whether it be social media or website, we believe that to make it trending and eye catching tio viewers it should be something more than aesthetic and less than beyond imagination.</Text></Box>
    
    </Box>
    <Box marginTop={"50px"} border={useColorModeValue('1px solid white', "1px solid black")} ><AboutForm /></Box>
 <Box><Connect /></Box>
    </Box>) 
}