import React from 'react'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Container } from 'react-bootstrap';
import Card from "./Card"
import "./Choose.css"

const Choose = () => {
    const { colorMode } = useColorMode();
    return (
        <Container className='choose_container'>
            <div className="exp_heading_wrapper" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
                <div className='exp_heading_div'
                    style={{
                        color: colorMode === "light" ? '#000' : "#ffffff",
                    }}
                >
                    <heading>why choose us ?</heading>
                </div>
                <div className='exp_text_div'>
                    <text>Let us hear stories from our valuable clients</text>
                </div>
            </div>
            <div>
            </div>

<div className='choose_card_wrapper1'>
            <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",margin:"auto" }}>
                <div className='choose_img_div'>
                    <img style={{width:"75%",margin:"auto",}} src="google.png" alt="g-img" />
                </div>
                <div className='choose_card_div'>
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",margin:"auto"}}>
            <div className='choose_img_div'>
                    <img style={{width:"75%",margin:"auto"}} src="axis.png" alt="g-img" />
                </div>
                <div className='choose_card_div'>
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",margin:"auto"}}>
            <div className='choose_img_div'>
                    <img style={{width:"75%",margin:"auto"}} src="SI.png" alt="g-img" />
                </div>
                <div className='choose_card_div'>
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " />
                </div>
            </div>
            </div>
            
            <div className='choose_card_wrapper2'>
            <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",margin:""}}>
            <div className='choose_img_div'>
                    <img style={{width:"75%",margin:"auto"}} src="gp.png" alt="g-img" />
                </div>
                <div className='choose_card_div'>
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",margin:""}}>
            <div className='choose_img_div'>
                    <img style={{width:"75%",margin:"auto"}} src="fcbk.png" alt="g-img" />
                </div>
                <div className='choose_card_div'>
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " />
                </div>
            </div>
            </div>

        </Container>
    )
}

export default Choose