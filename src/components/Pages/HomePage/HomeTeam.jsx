import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import {Container} from "react-bootstrap"
import "./HomeTeam.css"

const team = [{
    id: 1,
    teamimg: "wrupal.png"
},
{
    id: 2,
    teamimg: "wisha.png"
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



    return (<Box fontFamily={"poppins"}>
        <br />
        <br />
        <Box><Heading fontSize={{base:"6vw",sm:"3.5vw",md:"3.5vw",lg:"3.5vw",xl:"3.5vw"}}  >MEET OUR <span style={{color:"orangered"}}>TEAM</span></Heading></Box>
        <br />
        <Box w="75%" m="auto"><Text fontSize={{base:"4vw",sm:"3.5vw",md:"1.5vw",lg:"1.5vw",xl:"1.5vw"}} textTransform={"capitalize"}> Meet our warriors to use the force for goodmeet our DIGITAL WARRIORS, READY TO USE THE FORCE FOR GOOD </Text></Box>
        <br />

      
<Container>
<Box width={"85%"} height={"100%"}backgroundColor={"lightgrey"}display={"flex"} justifyContent={"space-evenly"} margin="2% 8% 5% 8%" boxShadow={"dark-lg"}>
<Box  ><Image height={"100%"}src="wrupal.png"  alt="img" fluid /></Box>
<Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box > <Image height={"100%"}src="wisha.png"  alt="img" fluid /></Box>
<Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box ><Image height={"100%"} src="wsonali.png"  alt="img" fluid /></Box>
</Box>

<Box width={"85%"}height={"100%"}display={"flex"} justifyContent={"space-around"} gap="5%" margin="2% 8% 5% 8%">
<Box boxShadow={"dark-lg"} ><Image height={"100%"}src="wpra.png"  alt="img" fluid /></Box>
<Box boxShadow={"dark-lg"}> <Image height={"100%"}src="wlaxmi.png"  alt="img" fluid /></Box>
<Box boxShadow={"dark-lg"}><Image height={"100%"}src="wvishnu.png"  alt="img" fluid /></Box>
</Box>

<Box width={"85%"} height={"100%"}backgroundColor={"lightgrey"} display={"flex"} justifyContent={"space-evenly"} gap="2%" margin="2% 8% 5% 8%" boxShadow={"dark-lg"}>
<Box ><Image height={"100%"} src="wshra.png"  alt="img" fluid /></Box>
<Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box > <Image height={"100%"} marginTop={"0px"} src="waish.png"  alt="img" fluid /></Box>
<Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box ><Image height={"100%"}src="wswati.png"  alt="img" fluid /></Box>
</Box>
</Container>

{/* 
        <Box className="team-img-container">{team.map((el) =><Box key={el.id}  className="team-img-box"  boxShadow='dark-lg' > <Image h="200px" w="85vw"   src={el.teamimg} className="team-img" alt="img" /></Box>
        )}</Box> */}


{/* 
            <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wrupal.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wisha.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wsonali.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wshra.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="waish.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wlaxmi.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wswati.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wpra.png" alt="img"/></Box>
            <Box w="18px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wvishnu.png"  w="100%" height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>  */}



    </Box>
    )
}