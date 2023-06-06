import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import "./HomeTeam.css"

const team = [{
    id: 1,
    teamimg: "rupal.png"
},
{
    id: 2,
    teamimg: "isha.png"
},
{
    id: 3,
    teamimg: "sonali.png"
},
{
    id: 4,
    teamimg: "shravani.png"
},
{
    id: 5,
    teamimg: "aish.png",
},
{
    id: 6,
    teamimg: "laxmi.png"
},
{
    id: 7,
    teamimg: "swati.png"
},
{
    id: 8,
    teamimg: "pra.png",
},
{
    id: 9,
    teamimg: "vishnu.png"
}

]
export const HomeTeam = () => {



    return (<Box fontFamily={"poppins"}>
        <br />
        <br />
        <Box><Heading fontSize={"4vw"}>MEET OUR <span style={{color:"orangered"}}>TEAM</span></Heading></Box>
        <br />
        <Box w="40%" m="auto"><Text>Meet Our Warriors To Use The Force For GoodMeet Our Digital Warriors,Ready To Use The Force For Good </Text></Box>
        <br />
        <br />

        <Box className="team-img-comtainer">{team.map((el) =><Box key={el.id}  className="team-img-box"  boxShadow='dark-lg' > <Image w="100%" h="100%" src={el.teamimg} className="team-img" alt="img" /></Box>
        )}</Box>



        {/*    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="rupal.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="isha.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="sonali.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="shravani.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="aish.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="laxmi.png"  height={"100%"} alt="img"/></Box>
        </Flex>
    </Box>
    <br />
    <br />
    <Box w="82%" margin={"auto"} border="1px solid gray" boxShadow='2xl'>
        <Flex gap={"10px"}>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="swati.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image src="pra.png" alt="img"/></Box>
            <Box w="20px" borderRadius={"10px"} style={{boxShadow: "1px 1px 10px 1px #888888"}} boxShadow='2xl'  height="70vh" border="2px solid #888888"></Box>
            <Box style={{boxShadow: "1px 1px 10px 1px #888888"}}><Image  src="vishnu.png"  w="100%" height={"100%"} alt="img"/></Box>
        </Flex>
    </Box> */}



    </Box>
    )
}