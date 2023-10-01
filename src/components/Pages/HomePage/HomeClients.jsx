import { Box, Heading, Button, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
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
}, {
    id: 16,
    teamimg: "c16.png"
}
]



export const HomeClients = () => {



    return (
        <>
            <Box paddingTop={"5%"} paddingBottom={"0%"}>
                <Box display={{ base: "none", sm: "none", md: "inline", lg: "inline", xl: "inline" }} bg={useColorModeValue('white', '#1f1f1f')} fontFamily={"poppins"} margin={"auto"} >

                    <div className="heading_div">
                        <heading className="page_heading">SOME OF OUR CLIENTS</heading>
                    </div>
                    <div className="heading_descp_div">
                        <text className="heading_description ">Helping these and many other incredible clients reach for the stars is what pulls us out of bed every morning.</text>
                    </div>

                    <Box backgroundColor={"#FF9450"} paddingBottom={"3%"}>
                        <Box className="clients-img-container" >
                            {clients.map((el) =>
                                <Box key={el.id} className="clients-img-box" boxShadow='lg' >
                                    <Image w="100%" m="auto" h="100%" src={el.teamimg} className="clients-img" alt="clients-img" />
                                </Box>
                            )}
                        </Box>
                       
                        <Box className="expMore_btn_div mt-0" ><Link to ="/service">< button style={{outline:"1px solid #000"}} className="expMore_btn client_exp_btn">Explore More</button></Link></Box>
                       
                    </Box>


                </Box>
            </Box>
        </>

    )
}

