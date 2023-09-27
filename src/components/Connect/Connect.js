import { Box, Button, Heading, Text, border, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import ScrollToTopButton from "../../ScrollToTop/ScrollToTOpButton"
import { Link } from "react-router-dom"
import "./Connect.css"


export const Connect = () => {

    return (
        <>
        <Box bg={useColorModeValue('white', '#1f1f1f')} alignItems={"center"} paddingTop={"6%"} paddingBottom={"6%"} borderTop={"4px solid white"}>
            <div className="heading_div" style={{width:"100%", }}>
                <heading className="page_heading" fontSize={"3.5vw"} style={{textTransform:"capitalize"}}> What are you waiting for ?</heading>
                
        </div>
        <div style={{marginTop:"3.5%"}} className="home_top_btn_div">
          <Link to ="/contact"><button className="connect_btn">get started</button></Link> 
         </div>
 </Box>
        </>
    )
}