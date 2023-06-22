import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import "./HomeClients.css"

const clients = [{
    id: 1,
    teamimg: "c1.png"
},
{
    id: 2,
    teamimg: "c2.png"
},
{
    id: 3,
    teamimg: "c3.png"
},
{
    id: 4,
    teamimg: "c4.png"
},
{
    id: 5,
    teamimg: "c5.png",
},
{
    id: 6,
    teamimg: "c6.png"
},
{
    id: 7,
    teamimg: "c7.png"
},
{
    id: 8,
    teamimg: "c8.png",
},
{
    id: 9,
    teamimg: "c9.png"
},
{
    id: 10,
    teamimg: "c10.png",
},
{
    id: 11,
    teamimg: "c11.png"
},
{
    id: 12,
    teamimg: "c12.png"
},
{
    id: 13,
    teamimg: "c13.png",
},
{
    id: 14,
    teamimg: "c14.png"
},
{
    id: 15,
    teamimg: "c15.png"
},{
    id: 16,
    teamimg: "c16.png"
}


]



export const HomeClients=()=>{



    return (<Box bg={useColorModeValue('white', '#1f1f1f')} paddingTop={{base:"1px",sm:"20px",md:"40px",lg:"50px",xl:"50px"}} paddingBottom={{base:"1px",sm:"20px",md:"40px",lg:"50px",xl:"50px"}} fontFamily={"poppins"} >

        <Box  ><Heading fontSize={{base:"6vw",sm:"5vw",md:"4vw",lg:"4vw",xl:"4vw"}} paddingTop={"50px"} fontFamily={"poppins"}>SOME OF OUR <span>CLIENTS</span></Heading></Box>
      
        <Box w={{base:"90%",sm:"80%",md:"75%",lg:"70%",xl:"70%"}} m="auto" paddingTop={"20px"} paddingBottom={"50px"}><Text fontSize={{base:"1.8vw",sm:"1.4vw",md:"1.4vw",lg:"1.4vw",xl:"1.4vw"}} fontFamily={"poppins"}>Helping These  and Many Other  Incredible Clients Reach For The Stars Is What Pulls Us Out Of Bed  </Text>
        <Text fontSize={{base:"1.8vw",sm:"1.4vw",md:"1.4vw",lg:"1.4vw",xl:"1.4vw"}}>Every Morning.</Text>
        </Box>

<Box backgroundColor={"#FF9450"}>
        <Box className="clients-img-container" >{clients.map((el) =><Box key={el.id}  className="clients-img-box"  boxShadow='lg' > <Image w="75%" m="auto" h="95%" src={el.teamimg} className="clients-img" alt="img" /></Box>
        )}</Box>
</Box>
    </Box>)
}