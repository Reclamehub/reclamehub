import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Container } from "react-bootstrap"
import "./HomeTeam.css"

const team = [{
    id: 1,
    teamimg: "wrupal.png"
},
{
    id: 2,
    teamimg: "laxmi.png"
},
{
    id: 3,
    teamimg: "wsonali.png"
},
{
    id: 4,
    teamimg: "wshra.png"
},
{
    id: 5,
    teamimg: "waish.png",
},
{
    id: 6,
    teamimg: "wlaxmi.png"
},
{
    id: 7,
    teamimg: "wswati.png"
},
{
    id: 8,
    teamimg: "wpra.png",
},
{
    id: 9,
    teamimg: "wvishnu.png"
}

]
export const HomeTeam = () => {



    return (
    <Box fontFamily={"poppins"} paddingTop={"5%"} paddingBottom={'5%'}>
       <div className="heading_div">
            <heading className="page_heading">MEET OUR <span style={{ color: "orangered" }}>TEAM</span></heading>
        </div>
     <div className="heading_descp_div">
        <text className="heading_description" > Meet our warriors to use the force for goodmeet our digital warriors, ready to use the force for good. </text>
        </div>
<Container className="gallery_container1">
<div className="t_img_div">
<img src="trupal.png" alt="wrupal-img" />
{/* <div style={{height:"20vh",width:"100px",backgroundColor:"black",margin:"auto"}}></div> */}
   </div>
   <div className="t_img_div">
<img src="tisha.png" alt="isha-img" />
   </div>
   <div className="t_img_div">
<img src="tsonali.png" alt="wsonali-img" />
   </div>
</Container>
<Container className="gallery_container2">
   <div className="t_img_div">
<img className="gallery_img" src="tlaxmi.png" alt="laxmi-img" />
   </div>
   <div className="t_img_div">
<img src="taishwarya.png" alt="wshra-img" />
   </div>
   <div className="t_img_div">
<img src="tvishnu.png" alt="wvishnu-img" />
   </div>
</Container>
<Container className="gallery_container3">
<div className="t_img_div">
<img src="tshrvni.png" alt="shrvni-img" />
   </div>
   <div className="t_img_div">
<img src="tswati.png" alt="swati-img" />
   </div>
   <div className="t_img_div">
<img src="tpradh.png" alt="tpradh-img" />
   </div>
</Container>

       
        </Box>
        )
        }

    //     <Container>
    //     <Box width={"85%"} height={"100%"} backgroundColor={"lightgrey"} display={"flex"} justifyContent={"space-evenly"} margin="2% 8% 5% 8%" boxShadow={"dark-lg"} p="10px">
    //         <Box  ><Image height={"100%"} src="wrupal.png" alt="img" fluid /></Box>
    //         <Box w="18px" borderRadius={"10px"} style={{ boxShadow: "1px 1px 10px 1px #888888" }} boxShadow='2xl' maxH="74vh" border="2px solid #888888"></Box>
    //         <Box > <Image height={"100%"} src="wisha.png" alt="img" fluid /></Box>
    //         <Box w="18px" borderRadius={"10px"} style={{ boxShadow: "1px 1px 10px 1px #888888" }} boxShadow='2xl' maxH="74vh" border="2px solid #888888"></Box>
    //         <Box ><Image height={"100%"} src="wsonali.png" alt="img" fluid /></Box>
    //     </Box>

    //     <Box width={"85%"} height={"100%"} display={"flex"} justifyContent={"space-around"} gap="5%" margin="2% 8% 5% 8%">
    //         <Box boxShadow={"dark-lg"} ><Image height={"100%"} src="wpra.png" alt="img" fluid /></Box>
    //         <Box boxShadow={"dark-lg"}> <Image height={"100%"} src="wlaxmi.png" alt="img" fluid /></Box>
    //         <Box boxShadow={"dark-lg"}><Image height={"100%"} src="wvishnu.png" alt="img" fluid /></Box>
    //     </Box>
        
    //     <Box width={"85%"} height={"100%"} backgroundColor={"lightgrey"} display={"flex"} justifyContent={"space-evenly"} margin="2% 8% 5% 8%" boxShadow={"dark-lg"} p="10px">
    //         <Box  ><Image height={"100%"}src="wshra.png" alt="img" fluid /></Box>
    //         <Box w="18px" borderRadius={"10px"} style={{ boxShadow: "1px 1px 10px 1px #888888" }} boxShadow='2xl' maxH="74vh" border="2px solid #888888"></Box>
    //         <Box > <Image height={"100%"} src="waish.png" alt="img" fluid /></Box>
    //         <Box w="18px" borderRadius={"10px"} style={{ boxShadow: "1px 1px 10px 1px #888888" }} boxShadow='2xl' maxH="74vh" border="2px solid #888888"></Box>
    //         <Box ><Image height={"100%"} src="wswati.png" alt="img" fluid /></Box>
    //     </Box>
 
    // </Container>
