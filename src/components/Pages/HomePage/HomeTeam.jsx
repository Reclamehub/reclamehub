import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
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
        <Box><Heading fontSize={"4vw"}>MEET OUR <span style={{color:"orangered"}}>TEAM</span></Heading></Box>
        <br />
        <Box w="40%" m="auto"><Text> MEET OUR WARRIORS TO USE THE FORCE FOR GOODMEET OUR DIGITAL WARRIORS, READY TO USE THE FORCE FOR GOOD </Text></Box>
        <br />
        <br />

<Box display={"flex"} justifyContent={"space-between"} margin="2% 8% 5% 8%" boxShadow={"dark-lg"}>
<Box  ><Image src="wrupal.png"  alt="img" fluid /></Box>
<Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box > <Image src="wisha.png"  alt="img" fluid /></Box>
<Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box ><Image src="wsonali.png"  alt="img" fluid /></Box>
</Box>

<Box display={"flex"} justifyContent={"space-between"} gap="5%" margin="2% 8% 5% 8%">
<Box boxShadow={"dark-lg"} ><Image src="wpra.png"  alt="img" fluid /></Box>
<Box boxShadow={"dark-lg"}> <Image src="wlaxmi.png"  alt="img" fluid /></Box>
<Box boxShadow={"dark-lg"}><Image src="wvishnu.png"  alt="img" fluid /></Box>
</Box>

<Box display={"flex"} justifyContent={"space-between"} gap="2%" margin="2% 8% 5% 8%" boxShadow={"dark-lg"}>
<Box ><Image src="wshra.png"  alt="img" fluid /></Box>
<Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box > <Image marginTop={"-22px"} src="waish.png"  alt="img" fluid /></Box>
<Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  maxH="74vh" border="2px solid #888888"></Box>
<Box ><Image src="wswati.png"  alt="img" fluid /></Box>
</Box>

{/* 
        <Box className="team-img-container">{team.map((el) =><Box key={el.id}  className="team-img-box"  boxShadow='dark-lg' > <Image h="200px" w="80vw"   src={el.teamimg} className="team-img" alt="img" /></Box>
        )}</Box> */}


{/* 
            <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wrupal.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wisha.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wsonali.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wshra.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="waish.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wlaxmi.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wswati.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="wpra.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="wvishnu.png"  w="100%" height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>  */}



    </Box>
    )
}