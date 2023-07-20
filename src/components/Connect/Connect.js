import { Box, Button, Heading, Text, border, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./Connect.css"


export const Connect = () => {
    const history = useNavigate()
    return (
        <Box bg={useColorModeValue('white', '#1f1f1f')} alignItems={"center"} paddingTop={"70px"} paddingBottom={"45px"} borderTop={"4px solid white"}>
            <Box><Heading fontSize={"3.5vw"}> WHAT ARE YOU WAITING FOR?</Heading></Box>
            <br />
            <br />
            
                <Button className="connect_btn" onClick={()=>{history("/contact")}} >get started</Button>
           
        </Box>
    )
}