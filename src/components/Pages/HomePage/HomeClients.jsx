import { Box, Heading, Image, Text } from "@chakra-ui/react"
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



    return (<Box paddingTop={"50px"} fontFamily={"poppins"} >

        <Box><Heading fontSize={"4vw"} paddingTop={"50px"} fontFamily={"poppins"}>SOME OF OUR <span>CLIENTS</span></Heading></Box>
      
        <Box w="70%" m="auto" paddingTop={"20px"} paddingBottom={"50px"}><Text fontSize={"1.4vw"} fontFamily={"poppins"}>Helping These  and Many Other  Incredible Clients Reach For The Stars Is What Pulls Us Out Of Bed  </Text>
        <Text fontSize={"1.4vw"}>Every Morning.</Text>
        </Box>


        <Box className="clients-img-container" backgroundColor={"#FF9450"}>{clients.map((el) =><Box key={el.id}  className="clients-img-box"  boxShadow='lg' > <Image w="80%" m="auto" h="80%" src={el.teamimg} className="clients-img" alt="img" /></Box>
        )}</Box>

    </Box>)
}