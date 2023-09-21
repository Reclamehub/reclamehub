import { Box, Button, Heading, Text, border, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import ScrollToTopButton from "../../ScrollToTop/ScrollToTOpButton"
import "./Connect.css"


export const Connect = () => {
    const history = useNavigate()
    return (
        <>
        <Box bg={useColorModeValue('white', '#1f1f1f')} alignItems={"center"} paddingTop={"6%"} paddingBottom={"6%"} borderTop={"4px solid white"}>
            <div className="heading_div" style={{width:"100%", }}>
                <heading className="page_heading" fontSize={"3.5vw"} style={{textTransform:"capitalize"}}> What are you waiting for ?</heading>
                
        </div>
        <div style={{marginTop:"3.5%"}}>
         <button className="connect_btn" onClick={()=>{history("/contact")}} >get started</button>
         </div>
 </Box>
        </>
    )
}