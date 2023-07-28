import { Box, Button, Heading, Text, border, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./Connect.css"


export const Connect = () => {
    const history = useNavigate()
    return (
        <Box bg={useColorModeValue('white', '#1f1f1f')} alignItems={"center"} paddingTop={"70px"} paddingBottom={"45px"} borderTop={"4px solid white"}>
            <div className="heading_div">
                <heading className="page_heading" fontSize={"3.5vw"}> WHAT ARE YOU WAITING FOR?</heading>
                
        </div>
         <button className="connect_btn" onClick={()=>{history("/contact")}} >get started</button>
           
        </Box>
    )
}