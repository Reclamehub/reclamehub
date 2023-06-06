import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { Box, FormLabel, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";

const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
// const setDarkMode=()=>{
// document.querySelector("body").setAttribute("data-theme","dark");    
// localStorage.setItem("selectedTheme","dark")
// }

// const setLightMode=()=>{
//     document.querySelector("body").setAttribute("data-theme","light")
//     localStorage.setItem("selectedTheme","light")
// }

// const selectedTheme=localStorage.getItem("selectedTheme")

// if(selectedTheme==="dark"){
//     setDarkMode()
// }

// const toggleTheme=(e)=>{
//     if(e.target.checked){
//         setDarkMode()
//     }  
//     else {
//         setLightMode()
        
//     } 
// }

return (
        <Box  className='dark_mode' >
            <Input
            
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleColorMode}
            />
            <FormLabel  className='dark_mode_label'  bg={useColorModeValue('white', 'black')} htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </FormLabel>
        </Box>
    );
};

export default DarkMode;
